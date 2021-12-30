// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

const obj = {
    str:'new'
  }
  stroka = 'str1'
  function proverka(stroka, obj){
    for (let key in obj) {
  
      if (obj.hasOwnProperty(key)) {
  
          if (stroka === key) {
            console.log(true)
          } else console.log(false)
      }   
  }
  }
  proverka(stroka, obj);
  