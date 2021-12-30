class ElectricalDevices {
constructor(name){
    this.voltage = 220,
    this.type = 'electrical',
    this.name = name
  }
getPower(amperage){
    console.log('Мощность прибора '+this.name+' равна '+amperage*this.voltage)
}

on(){
    console.log(`Включен ${this.name}`)
}

off(){
    console.log(`Выключен ${this.name}`)
}
}
class ComputerEngineering extends ElectricalDevices{
    constructor(name, screen){
    this.name = name,
    this.screen = screen
  }
getScreen(){
    console.log('Диагональ экрана компьютера '+this.screen)
  }
}

class Lamp extends ElectricalDevices{
      constructor(name, lightColor){
    this.name = name,
    this.lightColor = lightColor
  }
 lowBrightness(){
    console.log('Уменьшаем яркость лампы '+this.name)
  }
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
pc.getScreen();    
  
  