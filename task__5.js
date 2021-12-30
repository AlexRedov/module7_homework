class ElectricalDevices {
    constructor(name, power){
        this.name = name,
        this.power = power,
        this.isPlugged = false,
      }
    getPower() {
        console.log('Мощность прибора '+this.name+' равна '+this.power+' Вт')
    }
    
    on() {
        console.log(`Включен ${this.name}`),
        this.isPlugged = true
    }
    
    off() {
        console.log(`Выключен ${this.name}`)
        this.isPlugged = false
    }
      
    getScreen(){
        console.log('Диагональ экрана компьютера '+this.screen+ ' дюймов')
    }

    lowBrightness(){
        console.log('Уменьшаем яркость лампы '+this.name)
      }

}
class ComputerEngineering extends ElectricalDevices{
    constructor(name, screen, power){
    this.name = name,
    this.screen = screen,
    this.power = power
    }
}
class Lamp extends ElectricalDevices{
    constructor(name, lightColor, power){
    this.name = name,
    this.lightColor = lightColor,
    this.power = power,
    }
}
const notebook = new ElectricalDevices('Notebook', 24, 100);
const pc = new ComputerEngineering('Personal computer', 17, 1000);
const ledLamp = new Lamp('Led lamp', 'multicolored',10);
const incandescentLamp = new Lamp('Incandescent lamp', 'yellow', 100);
      
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
      