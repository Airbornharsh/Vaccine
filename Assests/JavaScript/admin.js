class VaccineChart {
    constructor() {
        this.template = document.querySelector("#useable");
        this.tableBody = document.getElementById("tableBody");
        this.tabulation();
    }

    tabulation() {
        let keylength = localStorage.length;
        for (let i = 0; i < keylength; i++) {
            let key = localStorage.key(i);
            let copiedTemplate = this.template.cloneNode(true);
            copiedTemplate.querySelector(".name").textContent = JSON.parse(window.localStorage.getItem(key)).name;
            copiedTemplate.querySelector(".email").textContent = JSON.parse(window.localStorage.getItem(key)).email;
            copiedTemplate.querySelector(".age").textContent = JSON.parse(window.localStorage.getItem(key)).age;
            copiedTemplate.querySelector(".phone").textContent = JSON.parse(window.localStorage.getItem(key)).phone;
            copiedTemplate.querySelector(".adhaar").textContent = JSON.parse(window.localStorage.getItem(key)).adhaar;
            copiedTemplate.querySelector(".address").textContent = JSON.parse(window.localStorage.getItem(key)).address;
            copiedTemplate.querySelector(".date").textContent = JSON.parse(window.localStorage.getItem(key)).date;
            this.tableBody.append(copiedTemplate);
        }
    }
}

class App {
    static init() {
        new VaccineChart();
    }
}

App.init();