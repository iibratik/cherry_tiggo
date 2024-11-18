// src/store/index.js
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            TopProducts: [
                {
                    id: 1,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 2,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 3,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 4,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 5,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 6,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 7,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 8,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
            ]
        };
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getTopProducts(state) {
            return state.TopProducts
        }
    },
});

export default store;