export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    //methods follow

    sumMass( items: Payload[] ): number {
        let sum = 0;
        for (let i = 0; i < items.length; i++){
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg(): number {
        let total = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return total;
    }

    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    }

    addCargo(cargo: Cargo) {
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        else
        {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut){
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        else
        {
            return false;
        } 
    }
 }



 import { Payload } from './Payload';
 import { Astronaut } from './Astronaut';
 import { Cargo } from './Cargo';