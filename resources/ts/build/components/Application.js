"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const Component_1 = require("./Component");
class Application extends Component_1.Component {
    constructor() {
        super();
        /**
         * The application's name.
         *
         * @protected
         */
        this.name = 'VGDB';
        /**
         * The application's base URL.
         *
         * @protected
         */
        this.baseUrl = '/';
        // super.component_name = "Application";
        // super.component_name = this.component_name;
        // super.init(this.component_name);
        // super("Application");
        // this.component_name = "";
        //
        //this.name = "Application";
    }
    /**
     * Configure the component.
     *
     * @param configs
     * @returns {{}|*}
     */
    setConfigs(configs) {
        // Looping through to ensure only valid properties are processed
        for (const config in configs) {
            // console.log(`${config}: ${configs[config]}`);
            if (config === 'baseUrl') {
                this.setBaseUrl(configs[config]);
            }
        }
    }
    setBaseUrl(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
    init() {
        console.log('The application has been initialized.');
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map