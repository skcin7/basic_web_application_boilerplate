class LocationComponent {
    readonly component_name: string = "Location";

    constructor() {
        //
        //this.name = "Location";
    }

    get componentName(): string {
        return this.component_name;
    }

    init(): this {
        return this;
    }
}
