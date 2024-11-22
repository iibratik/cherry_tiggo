// src/store/index.js
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            topProducts: [
                {
                    id: 1,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    imgDesc: 'Latter image',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 2,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    imgDesc: 'Latter image',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 3,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    imgDesc: 'Latter image',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 4,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    imgDesc: 'Latter image',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 5,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    imgDesc: 'Latter image',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 6,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    imgDesc: 'Latter image',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 7,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    imgDesc: 'Latter image',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },
                {
                    id: 8,
                    name: 'Latte',
                    picture: 'https://i.pinimg.com/originals/81/9a/cc/819accc6ae855fdea58b4759c72e0c3b.jpg',
                    size: '200 ml',
                    imgDesc: 'Latter image',
                    price: '5',
                    description: ` A latte typically contains one or two shots of espresso, several ounces of steamed milk, and a thin layer of foam.`
                },

            ],
            allProducts: [
                {
                    id: 1,
                    name: 'Brownie',
                    picture: 'https://img.freepik.com/free-photo/sugar-sprinkle-chocolate-waffle-board-blue-background_114579-39710.jpg',
                    imgDesc: 'Brownie image',
                    price: '7',
                    raiting: 5,
                    description: `This moist and delicious gluten-friendly cake is made with fresh strawberries mixed into the icing.
                    Some say it's great for birthdays, anniversaries, weddings, and other special occasions
                    This moist cake is made without artificial colors, flavors, or mixes and is full of strawberry flavor.
                    It's topped with strawberry cream cheese frosting and fresh strawberries`
                },
                {
                    id: 2,
                    name: 'Brownie',
                    picture: 'https://img.freepik.com/free-photo/sugar-sprinkle-chocolate-waffle-board-blue-background_114579-39710.jpg',
                    imgDesc: 'Brownie image',
                    price: '7',
                    raiting: 4,
                    description: ''
                },
                {
                    id: 3,
                    name: 'Brownie',
                    picture: 'https://img.freepik.com/free-photo/sugar-sprinkle-chocolate-waffle-board-blue-background_114579-39710.jpg',
                    imgDesc: 'Brownie image',
                    price: '7',
                    raiting: 4,
                    description: ''
                },
                {
                    id: 4,
                    name: 'Brownie',
                    picture: 'https://img.freepik.com/free-photo/sugar-sprinkle-chocolate-waffle-board-blue-background_114579-39710.jpg',
                    imgDesc: 'Brownie image',
                    price: '7',
                    raiting: 4,
                    description: ''
                },
                {
                    id: 5,
                    name: 'Brownie',
                    picture: 'https://img.freepik.com/free-photo/sugar-sprinkle-chocolate-waffle-board-blue-background_114579-39710.jpg',
                    imgDesc: 'Brownie image',
                    price: '7',
                    raiting: 4,
                    description: ''
                },
                {
                    id: 6,
                    name: 'Brownie',
                    picture: 'https://img.freepik.com/free-photo/sugar-sprinkle-chocolate-waffle-board-blue-background_114579-39710.jpg',
                    imgDesc: 'Brownie image',
                    price: '7',
                    raiting: 4,
                    description: ''
                },
            ],
            orderDetails: {
                region: '',
                date: new Date(),
                totalPrice: 0
            },
            cart: [
            ],
            regions: [
                { id: 0, name: 'Uzbekistan', vat: 15, discount: 3, cost: 1.00 },
                { id: 1, name: 'Kazakhstan', vat: 20, discount: 5, cost: 5.00 },
                { id: 2, name: 'Georgia', vat: 12, discount: 7, cost: 7.00 },
                { id: 3, name: 'Ukraina', vat: 8, discount: 10, cost: 10.00 },
                { id: 4, name: 'China', vat: 18, discount: 15, cost: 50.00 },
            ]
        };
    },
    mutations: {
        addToCart(state, product) {
            const existingProduct = state.cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1; // Увеличиваем количество, если товар уже есть
            } else {
                state.cart.push({ ...product, quantity: 1 }); // Добавляем новый товар
            }
        },
        removeFromCart(state, productId) {
            const existingProduct = state.cart.find(item => item.id === productId);
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1; // Уменьшаем количество
                } else {
                    state.cart = state.cart.filter(item => item.id !== productId); // Удаляем товар из корзины
                }
            }
        },
        addQuantity(state, { productId }) {
            const product = state.cart.find(item => item.id === productId);
            if (product && product.quantity > 0) {
                product.quantity++
            } else if (product && product.quantity === 0) {
                state.cart = state.cart.filter(item => item.id !== productId);
            }
        },
        minusQuantity(state, { productId }) {
            const product = state.cart.find(item => item.id === productId);
            if (product && product.quantity > 0) {
                product.quantity--
            } else if (product && product.quantity === 0) {
                state.cart = state.cart.filter(item => item.id !== productId);
            }
        },
    },
    actions: {
        addOrUpdateCart({ commit, state }, product) {
            // Проверяем, есть ли продукт в корзине
            const cartItem = state.cart.find(item => item.id === product.id);
            if (cartItem) {
                // Если товар есть, обновляем его количество
                commit('addQuantity', { productId: product.id });
            } else {
                // Если товара нет, добавляем в корзину
                commit('addToCart', product);
            }
        },
        minusorDeleteCart({ commit, state }, product) {
            const cartItem = state.cart.find(item => item.id === product.id);

            if (cartItem) { // Проверяем, существует ли товар в корзине
                if (cartItem.quantity > 0) {
                    commit('minusQuantity', { productId: product.id });
                }
                // Проверяем количество товара и наличие id
                if (cartItem.quantity === 0 && cartItem.id) {
                    commit('removeFromCart', cartItem.id);
                }
            }
        }

    },
    getters: {
        getCartProducts(state) {
            return state.cart
        },
        getTopProducts(state) {
            return state.topProducts
        },
        getRegions(state) {
            return state.regions
        },
        getAllProducts(state) {
            return state.allProducts
        }
    },
});

export default store;