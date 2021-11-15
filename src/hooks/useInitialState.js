import {useState} from 'react';

const initialState = {
    cart: [],
    orderIsOpen: false,
    menuIsOpen: false,
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const IdExist = (id) => {
        const idExist = state.cart.some((item) => item.id === id) ;//revisa que el id exista

        if (idExist) {//si existe ejecuta la funcion y suma + el id sobre la funcion revisando el valor nuevo en la funcion
            return IdExist(id+1);
        }else{
            return id;// si no existe retorna el id
        }
      
    };

/*     const addToCart = (payload) => {
        const newId = IdExist(payload.id) 
        const payloaNewId = {
            ...payload,
            id: newId,
        };

        setState({
            ...state,//mantiene el estado
            cart: [...state.cart, payloaNewId]//a lo que tiene cart agregarle el producto nuevo payload
        })
    }; */

    const addToCart = (payload) => {
        setState({
            ...state,//mantiene el estado
            cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload]
        })
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)//deja solo los diferentes al id buscado
        })
    };

    const toggleOrders = () => {
        setState({
            ...state,
            orderIsOpen: !state.orderIsOpen
        })
    };

    const toggleMenu = () => {
        setState({
            ...state,
            menuIsOpen: !state.menuIsOpen
        })
    };

    return{
        state,//manda el estado
        addToCart,//manda la nueva funcion que agrego los valores
        removeFromCart,//manda el nuevo arreglo con los valores sin el filtrado
        toggleOrders,
        toggleMenu,

    }
}

export default useInitialState;