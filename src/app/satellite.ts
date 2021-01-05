export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }

    shouldShowWarning(): boolean {
        if (this.type.toLowerCase() === "space debris") {
            return true;
        }
        return false;
    }

    count(category: string): number {
        let counter: number = 0;
        if (category.toLowerCase() === this.type.toLowerCase()){
          counter += 1;
        } return counter;
    }
}

