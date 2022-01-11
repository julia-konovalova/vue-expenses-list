import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // State это инициализация данных, с которыми будем работать
    state: {
        paymentsList: [],
        categoryList: []
    },
    // Обновление данных в state происходит через мутацию данных, для сохранения реактивности данных
    // Мутации синхронны, не реактивны
    mutations: {
        // state обязательный аргумент метода мутации, т.к. передает текущее состояние хранилища state
        setPaymentsListData(state, payload) {
            state.paymentsList = payload

        },
        addDataToPaymentsList(state, data) {
            state.paymentsList.push(data)
        },
        setPaymentsCategoryList(state, payload) {
            state.categoryList = payload
        }
    },
    // Получение данных и их обработка. Actions асинхронны
    actions: {
        // Передаем коммит - вызов мутации, путем деструктуризации контекста вызова стора
        fetchData({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = []
                    // let currentPageData = []
                    // let currentPage = 'page' + page
                    // const dataObject = {
                    //     "page1": [
                    //         { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                    //         { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                    //         { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
                    //     ],
                    //     "page2": [
                    //         { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                    //         { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
                    //         { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
                    //     ],
                    //     "page3": [
                    //         { "id": 7, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                    //         { "id": 8, "date": "24.03.2020", "category": "Education", "value": 1500 },
                    //         { "id": 9, "date": "25.03.2020", "category": "Food", "value": 200 }
                    //     ],
                    // }
                    // for (let prop in dataObject) {
                    //     if (currentPage == prop) {
                    //         currentPageData = dataObject[prop]

                    //     }
                    // }
                    for (let i = 1; i < 101; i++) {
                        items.push({ "id": i, "date": "25.03.2020", "category": "Food", "value": i })
                    }
                    // items.push(currentPageData)
                    resolve(items)
                }, 1000)
            }).then(res => {
                // dispatch('fetchCategory')
                commit('setPaymentsListData', res)
            })
        },
        fetchCategory({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = ['Sport', 'Food', 'Education', 'Health']

                    resolve(items)
                }, 1000)
            }).then(res => commit('setPaymentsCategoryList', res))
        },
    },
    // Получение данных из хранилища store vuex, работает также как computed. 
    // поэтому всегда должен что-то возвращать в return
    getters: {
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
        },
        getPaymentsList: state => state.paymentsList,
        getCategoryList: state => state.categoryList
    }
})