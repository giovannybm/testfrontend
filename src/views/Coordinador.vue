<template>
  <section>
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between content-center">
        <h1 v-if="tabs == 1" class="text-4xl font-bold py-4 capitalize">
          tabla de ganadores
        </h1>
        <h1 v-if="tabs == 2" class="text-4xl font-bold py-4 capitalize">
          Total medallas
        </h1>
        <div class="pt-4">
          <i
            class="fas fa-table p-4"
            @click="showTable"
            :class="tabs == 1 ? 'text-indigo-500' : ''"
          ></i>
          <i
            class="fas fa-info p-4"
            @click="showCard"
            :class="tabs == 2 ? 'text-indigo-500' : ''"
          ></i>
        </div>
      </div>
      <div ref="tab2" :class="tabs == 1 ? 'hidden' : 'visible'">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class=" p-4 bg-white shadow-xl rounded-md">
            <h1 class="text-3xl">oro</h1>
            {{ gold }}
          </div>
          <div class="p-4 bg-white shadow-xl rounded-md">
            <h1 class="text-2xl">Plata</h1>
            {{ silver }}
          </div>
          <div class="p-4 bg-white shadow-xl rounded-md">
            <h1 class="text-2xl">Bronce</h1>
            {{ bronze }}
          </div>
        </div>
      </div>
      <div ref="tab1" :class="tabs == 2 ? 'hidden' : 'visible'">
        <table class="border-collapse w-full">
          <thead>
            <tr>
              <th class=" table_header">
                Atleta
              </th>
              <th
                class="table_header            
                "
              >
                Edad
              </th>
              <th
                class="
                 table_header
                "
              >
                País
              </th>
              <th
                class="
                  table_header
                "
              >
                Año
              </th>
              <th
                class="
                  table_header
                "
              >
                Fecha
              </th>
              <th
                class="
                 table_header
                "
              >
                Deporte
              </th>
              <th
                class="
                 table_header
                "
              >
                Oro
              </th>
              <th
                class="
                 table_header
                "
              >
                Plata
              </th>
              <th
                class="
                 table_header
                "
              >
                Bronce
              </th>
              <th
                class="
                 table_header
                "
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="
                table_row
              "
              v-for="(item, index) in filtered"
              :key="index"
            >
              <td
                class="
             table_cell
                "
              >
                {{ item.athlete }}
              </td>
              <td
                class="
                table_cell
                text-center
                "
              >
                {{ item.age }}
              </td>
              <td
                class="
                table_cell
                "
              >
                {{ item.country }}
              </td>
              <td
                class="
                table_cell
                text-center
                "
              >
                {{ item.year }}
              </td>
              <td
                class="
                table_cell
                text-center
                "
              >
                {{ item.date }}
              </td>
              <td
                class="
                table_cell
                "
              >
                {{ item.sport }}
              </td>
              <td
                class="
                table_cell
                text-center
                "
              >
                {{ item.gold }}
              </td>
              <td
                class="
                table_cell
                text-center
                "
              >
                {{ item.silver }}
              </td>
              <td
                class="
                table_cell
                text-center
                "
              >
                {{ item.bronze }}
              </td>
              <td
                class="
                table_cell
                text-center                
                "
              >
                {{ item.total }}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between  bg-gray-100 my-4 rounded-lg">
          <button @click="previusPage" class="p-2">
            <i class="fas fa-chevron-left text-blue-theme-1 fa-lg "></i>
          </button>
          <button @click="nextPage" class="p-2">
            <i class="fas fa-chevron-right text-blue-theme-1 fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Coordinador",
  data() {
    return {
      start: 0,
      pageSize: 20,
      tabs: 1,
    };
  },
  mounted() {
    this.$store.dispatch("getOlympicWinners");
  },
  computed: {
    olympicWinners() {
      return this.$store.state.olympicWinners;
    },
    end() {
      return this.start + this.pageSize;
    },
    filtered() {
      if (this.olympicWinners.length > 1) {
        return this.olympicWinners.slice(this.start, this.end);
      } else {
        return null;
      }
    },

    gold() {
      if (this.olympicWinners.length > 1) {
        return this.olympicWinners.reduce((sum, value) => sum + value.gold, 0);
      } else {
        return null;
      }
    },
    silver() {
      if (this.olympicWinners.length > 1) {
        return this.olympicWinners.reduce(
          (sum, value) => sum + value.silver,
          0
        );
      } else {
        return null;
      }
    },
    bronze() {
      if (this.olympicWinners.length > 1) {
        return this.olympicWinners.reduce(
          (sum, value) => sum + value.bronze,
          0
        );
      } else {
        return null;
      }
    },
  },
  methods: {
    nextPage() {
      this.start += this.pageSize;
    },
    previusPage() {
      if (this.start > 0) {
        this.start -= this.pageSize;
      }
    },
    showTable() {
      this.tabs = 1;
    },
    showCard() {
      this.tabs = 2;
    },
  },
};
</script>

<style lang="postcss">
.table_header {
  @apply border-b-2 border-gray-300 py-4 text-xs font-semibold;
}
.table_cell {
  @apply px-2 py-4 border-b border-gray-200 text-sm;
}
.table_row {
  @apply lg:hover:bg-gray-100;
}
</style>
