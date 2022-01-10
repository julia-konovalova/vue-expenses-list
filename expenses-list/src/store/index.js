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
                    for (let i = 1; i < 101; i++) {
                        items.push({
                            date: "13.05.2020",
                            category: "Education",
                            value: i,
                        })
                    }
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