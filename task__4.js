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

function ElectricalDevices(name, power){
    this.power = power,
    this.type = 'electrical',
    this.name = name,
    this.isPlugged = false
  }
    
  ElectricalDevices.prototype.getPower = function(){
      console.log('Мощность прибора '+this.name+' равна '+this.power+' Вт');
  }
  
  ElectricalDevices.prototype.on = function(){
      console.log(`Включено ${this.name}`);
      this.isPlugged = true
  }
  
  ElectricalDevices.prototype.off = function(){
      console.log(`Отключено ${this.name}`);
      this.isPlugged = false
  }
    
  function ComputerEngineering(name, screen, power){
    this.name = name;
    this.screen = screen;
    this.power = power;
  }
  
  ComputerEngineering.prototype = new ElectricalDevices();
  
  ElectricalDevices.prototype.getScreen = function(){
    console.log('Диагональ экрана компьютера '+this.screen+ ' дюймов')
  }
  
  function Lamp(name, lightColor, power){
    this.name = name;
    this.lightColor = lightColor;
    this.power = power;
    this.getLight = function(){
      console.log(this.lightColor)
    }
  }
  
  Lamp.prototype = new ElectricalDevices();
  
  ElectricalDevices.prototype.lowBrightness = function(){
    console.log('Уменьшаем яркость лампы '+this.name+' цвета '+this.lightColor)
  }

  const notebook = new ComputerEngineering('Notebook',24,100);
  const pc = new ComputerEngineering('Personal computer', 17, 1000);
  const ledLamp = new Lamp('Led lamp', 'multicolored', 10);
  const incandescentLamp = new Lamp('Incandescent lamp', 'yellow', 100);

  incandescentLamp.getLight();
  ledLamp.getLight();
  notebook.on();
  pc.on();
  ledLamp.off();
  incandescentLamp.on();
  pc.getPower();
  incandescentLamp.getPower();
  ledLamp.getPower();
  ledLamp.lowBrightness();
  incandescentLamp.lowBrightness();
  notebook.getScreen();
  pc.getScreen();