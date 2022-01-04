const inquirer = require("inquirer");
const Busquedas = require("./busquedas");
const {leerInput, inquirerMenu, pausa} = require("./helpers/inquirer")
const  main = async ()=>{    
    const busqueda = new Busquedas();
    let opt;
        
    do {
        opt = await inquirerMenu();
        switch(opt){
            case 1 :
                const lugar = await leerInput('Ciudad: ')
                await busqueda.ciudad(lugar)
                // mostrar mensaje
    
                //buscar los lugares
    
                //selecctionar el lugar 
    
                //clima 
    
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad: ');
                console.log('Lat: ');
                console.log('Lon: ');
                console.log('Temperatura: ');
                console.log('Temperatura min: ');
                console.log('Temperatura max: ');
                
            break;
        }
        if(opt !== 0 ) await pausa();
    } while (opt != 0);
}
main();