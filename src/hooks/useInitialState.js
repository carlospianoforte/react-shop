import {useState} from 'react';

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,//mantiene el estado
            cart: [...state.cart, payload]//a lo que tiene cart agregarle el producto nuevo payload
        })
    };
    return{
        state,//manda el estado
        addToCart//manda la nueva funcion que agrego los valores
    }
}

export default useInitialState;