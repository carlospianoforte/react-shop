import {useState} from 'react';

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const IdExist = (id) => {
        const idExist = state.cart.some((item) => item.id === id) ;//revisa que el id exista

        if (idExist) {//si existe ejecuta la funcion y suma + al id
            return IdExist(id+1);
        }else{
            return id;// si no existe retorna el id
        }
      
    };

    const addToCart = (payload) => {
        const newId = IdExist(payload.id) 
        const payloaNewId = {
            ...payload,
            id: newId,
        };

        setState({
            ...state,//mantiene el estado
            cart: [...state.cart, payloaNewId]//a lo que tiene cart agregarle el producto nuevo payload
        })
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id)//deja solo los diferentes al id buscado
        })
    };
    return{
        state,//manda el estado
        addToCart,//manda la nueva funcion que agrego los valores
        removeFromCart//manda el nuevo arreglo con los valores sin el filtrado
    }
}

export default useInitialState;