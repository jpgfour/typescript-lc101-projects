export class Astronaut implements Payload {
    // properties and methods
    massKg: number;
    name: string;

    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }
 }



 import { Payload } from './Payload';