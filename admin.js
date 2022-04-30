class VaccineChart {
    constructor() {
        this.tabulation();
    }

    tabulation() {
        let keylength = localStorage.length;
        for (let i = 0; i < keylength; i++) {
            let key = localStorage.key(i);
        }
    }
}

class App {
    static init() {
        new VaccineChart();
    }
}

App.init();