
export const loginUser = (userLogin) => {
    if (userLogin.username === 'vendedor' && userLogin.password === '12345') {
        return {
          username: 'vendedor',
          rol: 'vendedor',
          token: 'token_generado_aleatoriamente',
          respuesta:true
        };
      }
      if (userLogin.username === 'cobrador' && userLogin.password === '12345') {
        return {
            username: 'cobrador',
          rol: 'caja',
          token: 'token_generado_aleatoriamente',
          respuesta:true

        };
      }
      if (userLogin.username === 'admin' && userLogin.password === '12345') {
        return {
            username: 'admin',
          rol: 'administrador',
          token: 'token_generado_aleatoriamente',
          respuesta:true
        };
      }
      return false;
}