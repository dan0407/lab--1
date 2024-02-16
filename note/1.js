const anumeros = [1987, 2001, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 3010];
const { validate } = require('@herbsjs/suma');
const value = '2001';
const validations = { type: Date };
const result = validate(value, validations);
console.log(result);
// escogi este paquete ya que me parecio facinante todas las funciones que tiene en este caso utilice la funcion de validacion de datos en un array.
