const calculator = {
  namespaced: true,
  state: {
    salesTax: 0,
    people: [],
    menu: []
  },
  getters: {
    getSalesTax (state) {
      return state.salesTax
    },
    getPeople (state) {
      return state.people
    },
    getMenu (state) {
      return state.menu
    }
  },
  mutations: {
    setSalesTax (state, salesTax) {
      state.salesTax = parseFloat(salesTax || 0)
    },
    addPerson (state, payload) {
      state.people.push(payload.person)
    },
    addItemToPerson (state, payload) {
      payload.person.menu.push(payload.item)
    },
    addItemToMenu (state, payload) {
      state.menu.push(payload.item)
    },
    deleteItemFromMenu (state, payload) {
      state.menu.forEach((obj, i) => {
        if (obj === payload.item) {
          state.menu.splice(i, 1)
        }
      })
    },
    addPeopleToItem (state, addingItem) {
      state.menu.forEach(item => {
        if (item === addingItem) {
          item.people = addingItem.people
        }
      })
    },
    deletePersonFromPeople (state, payload) {
      state.people.forEach((obj, i) => {
        if (obj === payload.person) {
          state.people.splice(i, 1)
        }
      })

      // Delete person in Menu.people's array
      // WARNNING: It might make the app slow
      state.menu.forEach(obj => {
        obj.people.forEach((name, i) => {
          if (name === payload.person.name) {
            obj.people.splice(i, 1)
          }
        })
      })
    },
    clearPeople (state) {
      state.people = []

      // Delete people in Menu.people's array
      // WARNNING: It might make the app slow
      state.menu.forEach(obj => {
        obj.people = []
      })
    },
    clearMenu (state) {
      state.menu = []
    },
    refreshAll (state) {
      /*
       *  Refresh everything
       */
      state.people = []
      state.menu = []
      state.salesTax = 0
    }
  }
}

export default calculator