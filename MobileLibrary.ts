import { Mobile } from "./Repaso2.1"

export class MobileLibrary{

        private name : string;
        private location :  string;
        private  mobiles : Mobile[];
        private totalPrice : number;
        private precioSuma : number;

                constructor(name,location,array) {

                        this.name = name;
                        this.location = location;
                        this.mobiles = array ;
                        this.totalPrice =0;
                        this.precioSuma = this.totalPriceCalculation()
                }
        
        //Metodos

        getName()
        {
                return this.name
        }
        getLocation()
        {
                return this.location
        }
        getMobiles()
        {
                return this.mobiles
        }
        getPrice()
        {
                return this.totalPrice
        }

        setName(nuevoName:string)
        {
                this.name = nuevoName
        }
        setLocation(nuevoLocation:string)
        {
                this.location = nuevoLocation
        }
        setNMobiles(nuevoMobiles : Mobile[])
        {
                this.mobiles = nuevoMobiles
        }
        setPrice(nuevoPrice : number)
        {
                this.totalPrice = nuevoPrice
        }

        private totalPriceCalculation()
        {
                let precioTotal = this.getPrice()
                for (let i=0; i<this.mobiles.length; i++){
                        console.log(`entra en el bucle ${i}`)
                        console.log(this.mobiles[i].getPrice())
                        precioTotal += ((this.mobiles[i].getPrice()))
                }
        
                return precioTotal
        }
        printLibrary()
        {       console.log ("This is all my mobiles\n")

                for(let i=0; i<this.mobiles.length;i++){
                        console.log ("the characteristics of the mobile "+ this.mobiles[i].getName() + " are:\n"
                         + "Name: " + this.mobiles[i].getName() + "\nModel: " + this.mobiles[i].getModel() + 
                         "\nTrademark: " + this.mobiles[i].getMark() + "\nSD Size: " + this.mobiles[i].getSD() + "\nColor: " 
                         + this.mobiles[i].getColor() + "\nIs 5G?: " + this.mobiles[i].get5G() + "\nNumber of Cameras: " + this.mobiles[i].getCamera() + "\n")
                } 
                console.log ("\nPrice overall: " + this.precioSuma)
        }
}