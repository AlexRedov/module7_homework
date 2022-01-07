class ElectricalDevices {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
      }
    getPower(){
        console.log('Мощность прибора '+this.name+' равна '+this.power+' Вт')
    }
    on(){
        console.log(`Включен ${this.name}`);
        this.isPlugged = true
    }
    off(){
        console.log(`Выключен ${this.name}`);
        this.isPlugged = false
    }
       
}
class ComputerEngineering extends ElectricalDevices{
    constructor(screen, name, power){
    super(name, power);
    this.screen = screen;
    }
  getScreen(){
        console.log('Диагональ экрана компьютера '+this.screen+ ' дюймов')
    }
}
class Lamp extends ElectricalDevices{
    constructor(lightColor, name, power){
    super(name, power);
    this.lightColor = lightColor;
    }
  lowBrightness(){
        console.log('Уменьшаем яркость лампы '+this.name)
      }
}
const notebook = new ElectricalDevices('Notebook', 100);
const pc = new ComputerEngineering(24, 'Personal computer', 1000);
const ledLamp = new Lamp('multicolored','Led lamp', 10);
const incandescentLamp = new Lamp('yellow','Incandescent lamp', 100);
notebook.on();
pc.on();
ledLamp.off();
incandescentLamp.on();
pc.getPower();
incandescentLamp.getPower();
ledLamp.getPower();
ledLamp.lowBrightness();
incandescentLamp.lowBrightness();
pc.getScreen();