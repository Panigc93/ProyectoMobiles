import { Mobile } from "./Repaso2.1"

export class MobileLibrary{

        private name : string;
        private location :  string;
        private  mobiles : Mobile[];
        private totalPrice : number;

                constructor(name,location,array) {

                        this.name = name;
                        this.location = location;
                        this.mobiles = array ;
                        this.totalPrice =0;
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

        totalPriceCalculation()
        {
                let precioTotal = this.getPrice()
                for (let i=0; i<this.mobiles.length; i++){
                        console.log(`entra en el bucle ${i}`)
                        console.log(this.mobiles[i].getPrice())
                        precioTotal += ((this.mobiles[i].getPrice()))
                }
        
                return precioTotal
        }
}