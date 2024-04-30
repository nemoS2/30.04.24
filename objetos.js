class Calebe {
    constructor (site) {
        this.site = site;   //variável de interface
    }

    exibirSite () {
        window.open(this.site); 
    }
}

var novoCalebe = new Calebe ("https://www.sanrio.com.br/");
novoCalebe.exibirSite();
