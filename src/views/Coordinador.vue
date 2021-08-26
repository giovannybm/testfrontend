<template>
  <section>
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between content-center">
       
        <h1 v-if="tabs==1" class="text-4xl font-bold py-4 capitalize">tabla de ganadores</h1>
        <h1 v-if="tabs==2" class="text-4xl font-bold py-4 capitalize">Total medallas</h1>
        <div class="pt-4">
          <i class="fas fa-table p-4" @click="showTable" :class="tabs==1? 'text-indigo-500' : ''"></i>
          <i class="fas fa-info p-4" @click="showCard" :class="tabs==2? 'text-indigo-500' : ''"></i>
        </div>
      </div>
      <div ref="tab2" :class="tabs==1? 'hidden' : 'visible'" >
        <div class="flex md:flex-row flex-col">
          
        <div class="w-full  md:w-1/3 m-8 p-4 border border-indigo-600 shadow rounded">
          <h1 class="text-2xl">oro</h1>
          {{ gold }}
        </div>
              <div class="w-full md:w-1/3 m-8 p-4 border border-indigo-600 shadow rounded">
          <h1 class="text-2xl">Plata</h1>
          {{ silver }}
        </div>
             <div class="w-full md:w-1/3 m-8 p-4 border border-indigo-600 shadow rounded">
          <h1 class="text-2xl">Bronce</h1>
          {{ bronze }}
        </div>
        </div>
      </div>
      <div ref="tab1" :class="tabs==2? 'hidden' : 'visible'" >
        <table class="border-collapse w-full">
          <thead>
            <tr>
              <th
                class="
                  p-3
                  font-bold
                  uppercase
                  bg-gray-200
                  text-gray-600
                  border border-gray-300
                  hidden
                  lg:table-cell
                "
              >
                Atleta
              </th>
              <th
                class="
                  p-3
                  font-bold
                  uppercase
                  bg-gray-200
                  text-gray-600
                  border border-gray-300
                  hidden
                  lg:table-cell
                "
              >
                Edad
              </th>
              <th
                class="
                  p-3
                  font-bold
                  uppercase
                  bg-gray-200
                  text-gray-600
                  border border-gray-300
                  hidden
                  lg:table-cell
                "
              >
                País
              </th>
              <th
                class="
                  p-3
                  font-bold
                  uppercase
                  bg-gray-200
                  text-gray-600
                  border border-gray-300
                  hidden
                  lg:table-cell
                "
              >
                Año
              </th>
              <th
                class="
                  p-3
                  font-bold
                  uppercase
                  bg-gray-200
                  text-gray-600
                  border border-gray-300
                  hidden
                  lg:table-cell
                "
              >
                Fecha
              </th>
              <th
                class="
                  p-3
                  font-bold
                  uppercase
                  bg-gray-200
                  text-gray-600
                  border border-gray-300
                  hidden
                  lg:table-cell
                "
              >
                Deporte
              </th>
              <th
                class="
                  p-3
                  font-bold
                  uppercase
                  bg-gray-200
                  text-gray-600
                  border border-gray-300
                  hidden
                  lg:table-cell
                "
              >
                Oro
              </th>
              <th
                class="
                  p-3
                  font-bold
                  uppercase
                  bg-gray-200
                  text-gray-600
                  border border-gray-300
                  hidden
                  lg:table-cell
                "
              >
                Plata
              </th>
              <th
                class="
                  p-3
                  font-bold
                  uppercase
                  bg-gray-200
                  text-gray-600
                  border border-gray-300
                  hidden
                  lg:table-cell
                "
              >
                Bronce
              </th>
              <th
                class="
                  p-3
                  font-bold
                  uppercase
                  bg-gray-200
                  text-gray-600
                  border border-gray-300
                  hidden
                  lg:table-cell
                "
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="
                bg-white
                lg:hover:bg-gray-100
                flex
                lg:table-row
                flex-row
                lg:flex-row
                flex-wrap
                lg:flex-no-wrap
                mb-10
                lg:mb-0
              "
              v-for="(item, index) in filtered"
              :key="index"
            >
              <td
                class="
                  w-full
                  lg:w-auto
                  p-3
                  text-gray-800 text-center
                  border border-b
                  block
                  lg:table-cell
                  relative
                  lg:static
                "
              >
                {{ item.athlete }}
              </td>
              <td
                class="
                  w-full
                  lg:w-auto
                  p-3
                  text-gray-800 text-center
                  border border-b
                  text-center
                  block
                  lg:table-cell
                  relative
                  lg:static
                "
              >
                {{ item.age }}
              </td>
              <td
                class="
                  w-full
                  lg:w-auto
                  p-3
                  text-gray-800 text-center
                  border border-b
                  text-center
                  block
                  lg:table-cell
                  relative
                  lg:static
                "
              >
                {{ item.country }}
              </td>
              <td
                class="
                  w-full
                  lg:w-auto
                  p-3
                  text-gray-800 text-center
                  border border-b
                  text-center
                  block
                  lg:table-cell
                  relative
                  lg:static
                "
              >
                {{ item.year }}
              </td>
              <td
                class="
                  w-full
                  lg:w-auto
                  p-3
                  text-gray-800 text-center
                  border border-b
                  text-center
                  block
                  lg:table-cell
                  relative
                  lg:static
                "
              >
                {{ item.date }}
              </td>
              <td
                class="
                  w-full
                  lg:w-auto
                  p-3
                  text-gray-800 text-center
                  border border-b
                  text-center
                  block
                  lg:table-cell
                  relative
                  lg:static
                "
              >
                {{ item.sport }}
              </td>
              <td
                class="
                  w-full
                  lg:w-auto
                  p-3
                  text-gray-800 text-center
                  border border-b
                  text-center
                  block
                  lg:table-cell
                  relative
                  lg:static
                "
              >
                {{ item.gold }}
              </td>
              <td
                class="
                  w-full
                  lg:w-auto
                  p-3
                  text-gray-800 text-center
                  border border-b
                  text-center
                  block
                  lg:table-cell
                  relative
                  lg:static
                "
              >
                {{ item.silver }}
              </td>
              <td
                class="
                  w-full
                  lg:w-auto
                  p-3
                  text-gray-800 text-center
                  border border-b
                  text-center
                  block
                  lg:table-cell
                  relative
                  lg:static
                "
              >
                {{ item.bronze }}
              </td>
              <td
                class="
                  w-full
                  lg:w-auto
                  p-3
                  text-gray-800 text-center
                  border border-b
                  text-center
                  block
                  lg:table-cell
                  relative
                  lg:static
                "
              >
                {{ item.total }}
              </td>
            </tr>
          </tbody>
        </table>
              <div class="flex justify-between text-indigo-500">
        <button @click="previusPage">
          <i class="fas fa-chevron-left p-2"></i>
        </button>
        <button @click="nextPage">
          <i class="fas fa-chevron-right p-2"></i>
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
      tabs:1,
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
        return  this.olympicWinners.reduce((sum, value) => ( sum + value.gold ), 0);
      } else {
        return null;
      }
      
    },
    silver() {
      if (this.olympicWinners.length > 1) {
        return  this.olympicWinners.reduce((sum, value) => ( sum + value.silver ), 0);
      } else {
        return null;
      }
      },
     bronze() {
      if (this.olympicWinners.length > 1) {
        return  this.olympicWinners.reduce((sum, value) => ( sum + value.bronze ), 0);
      } else {
        return null;
      }
      }
  },
  methods: {
    nextPage() {
      this.start += this.pageSize;
    },
    previusPage() {
      this.start -= this.pageSize;
    },
    showTable(){

      this.tabs =1
    },
    showCard(){
      this.tabs=2
    }
  },
};
</script>

<style>
</style>