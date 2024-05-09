
export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                user: action.payload,
            };
        case 'logout':
            return {
                isAuth: false,
            };
        case 'pedido':
            return {
                pedido:action.payload,
            };
        default:
            return state;
    }

}