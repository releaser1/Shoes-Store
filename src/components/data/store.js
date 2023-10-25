import {createStore} from 'vuex'


const productData = [
    {
        name: 'Adiddas', 
        id: 1, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 123, 
        image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        productSelect: 0,
        code: 12356,
        weight: 125,
        class: 'premium',
        availability: 80,
    },
    {
        name: 'Jordans', 
        id: 2, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 223,
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
        productSelect: 0,
        code: 12226,
        weight: 464,
        class: 'premium',
        availability: 120,
    },
    {
        name: 'Puma', 
        id: 3, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 243,
        image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
        productSelect: 0,
        code: 34356,
        weight: 765,
        class: 'economy',
        availability: 7,

    },
    {
        name: 'Nike', 
        id: 4, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 272,
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1898&q=80',
        productSelect: 0,
        code: 52111,
        weight: 985,
        class: 'economy',
        availability: 9,

    },
    {
        name: 'Reebook', 
        id: 5, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 289,
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
        productSelect: 0,
        code: 21356,
        weight: 905,
        class: 'economy',
        availability: 87,

    },
    {
        name: 'Walknow', 
        id: 6, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 222,
        image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
        productSelect: 0,
        code: 12354,
        weight: 655,
        class: 'premium',
        availability: 70,

    },
    {
        name: 'Geox', 
        id: 7, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 56,
        image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        productSelect: 0,
        code: 16666,
        weight: 199,
        class: 'premium',
        availability: 44,

    },
    {
        name: 'Fila', 
        id: 8, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 98,
        image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        productSelect: 0,
        code: 76812,
        weight: 543,
        class: 'economy',
        availability: 43,

    },
    {
        name: 'Snickers', 
        id: 9, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 156,
        image: 'https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        productSelect: 0,
        code: 56723,
        weight: 768,
        class: 'premium',
        availability: 18,

    },
    {
        name: 'Shakers', 
        id: 10, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 321,
        image: 'https://images.unsplash.com/photo-1612892158094-a4e23361afad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        productSelect: 0,
        code: 43876,
        weight: 999,
        class: 'premium',
        availability: 15,

    },
    {
        name: 'Snipes', 
        id: 11, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 567,
        image: 'https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80',
        productSelect: 0,
        code: 16832,
        weight: 454,
        class: 'premium',
        availability: 23,

    },
    {
        name: 'WallRun',
        id: 12, 
        description: 'lorem1 akdjalsjhsnadk ksjdfnasnd jasbdf  dsajksnadfkjd', 
        price: 767,
        image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
        productSelect: 0,
        code: 76432,
        weight: 973,
        class: 'premium',
        availability: 240,

    },
];

const store = createStore({
    state() {
        return {
            count: false,
            item: productData,
            online: false,
            offline: false,
            purchasedItems: [],
            userEmail: 'johndoe2002@yahoo.com',
            userPassword: 'johndoe',
            contactSend: [],
            selectedGender: '',
        }
    },
    mutations: {
        increment(state) {
            state.count ++
        },
        userIsOnline(state){
            state.online = true;
        },
        userIsOfline(state){
            state.offline = true;
            state.online = false;
        },
        updateContactSend(state, data) {
            state.contactSend.push(data);
        },
    },
    getters: {
        selectedProductsCount: (state) => {
          return state.item.filter((item) => item.productSelect > 0).length
        },
    },

})

export default store;
