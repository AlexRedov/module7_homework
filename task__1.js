//Написать, функцию, которая принимает в качестве аргумента объект и 
//выводит в консоль все ключи и значения только собственных свойств.
//Данная функция не должна возвращать значение.

const objProto = {
    proto:'main'
  }
  const obj = Object.create(objProto);
  obj.str = 'Строка';
  obj.num = 123;
  function func(obj){
    for (let key in obj) {
  
      if (obj.hasOwnProperty(key)) {
  
          console.log(key); 
      }   
  }
  }
  func(obj);