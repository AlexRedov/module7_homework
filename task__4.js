//Реализовать следующее консольное приложение подобно примеру, 
//который разбирался в видео. Реализуйте его на прототипах.
//Определить иерархию электроприборов. Включить некоторые в розетку. 
//Посчитать потребляемую мощность. 
//Таких приборов должно быть, как минимум, два (например, настольная лампа и
//компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

//План:
//Определить родительскую функцию с методами, которые включают/выключают прибор 
//из розетки;
//Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
//У каждого из приборов должны быть собственные свойства и, желательно, 
//методы, отличные от родительских методов;
//Создать экземпляры каждого прибора;
//Вывести в консоль и посмотреть результаты работы, гордиться собой :)

//Общие требования:
//Имена функций, свойств и методов должны быть информативными
//Соблюдать best practices:
//использование camelCase нотации для переменных и методов, 
//PascalCase для названия функций-конструкторов и классов;
//информативные имена (а не a, b);
//четкая связь между классом и его экземплярами (класс описывает множество, 
//а экземпляр конкретную реализацию);
//использование синтаксиса es6 (кроме функции-конструкторов) и т.д.

function ElectricalDevices(name){
    this.voltage = 220,
    this.type = 'electrical',
    this.name = name
  }
    
  ElectricalDevices.prototype.getPower = function(amperage){
      console.log('Мощность прибора '+this.name+' равна '+amperage*this.voltage)
  }
  
  ElectricalDevices.prototype.on = function(){
      console.log(`Включен ${this.name}`)
  }
  
  ElectricalDevices.prototype.off = function(){
      console.log(`Выключен ${this.name}`)
  }
    
  function ComputerEngineering(name, screen){
    this.name = name,
    this.screen = screen
  }
  
  ComputerEngineering.prototype = new ElectricalDevices();
  
  ComputerEngineering.getScreen = function(){
    console.log('Диагональ экрана компьютера '+this.screen)
  }
  
  function Lamp(name, lightColor){
    this.name = name,
    this.lightColor = lightColor
  }
  
  Lamp.prototype = new ElectricalDevices();
  
  Lamp.prototype.lowBrightness = function(){
    console.log('Уменьшаем яркость лампы '+this.name)
  } 
  
  const notebook = new ElectricalDevices('Notebook');
  const pc = new ComputerEngineering('Personal computer', 17);
  const ledLamp = new Lamp('Led lamp', 'multicolored');
  const incandescentLamp = new Lamp('Incandescent lamp', 'yellow');
  
  notebook.on();
  pc.on();
  ledLamp.off();
  incandescentLamp.on();
  pc.getPower(4);
  incandescentLamp.getPower(1);
  ledLamp.getPower(0.1);
  ledLamp.lowBrightness();
  incandescentLamp.lowBrightness();
  notebook.getScreen();
  pc.getScreen();//??????