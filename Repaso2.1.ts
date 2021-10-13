export class Mobile{

        private name : string;
        private model : string;
        private trademark : string;
        private sdSize : number;
        private color : string;
        private is5G : boolean;
        private cameraNumber : number;
        private price : number;

                constructor(){
                        this.name;
                        this.model;
                        this.trademark;
                        this.sdSize;
                        this.color;
                        this.is5G;
                        this.cameraNumber;
                        this.price;
                }
        
        //Metodos
        
        public getName():string
        {
                return this.name
        }
        public getModel():string
        {
                return this.model
        }
        public getMark():string
        {
                return this.trademark
        }
        public getSD():number
        {
                return this.sdSize
        }
        public getColor():string
        {
                return this.color
        }
        public get5G():boolean
        {
                return this.is5G
        }
        public getCamera():number
        {
                return this.cameraNumber
        }
        public getPrice():number
        {
                return this.price
        }

        public setName(nuevoName:string)
        {
                 this.name = nuevoName
        }
        public setModel(nuevoModelo:string)
        {
                 this.model = nuevoModelo
        }
        public setMark(nuevoMark:string)
        {
                 this.trademark =nuevoMark
        }
        public setSD(nuevoSD:number)
        {
                 this.sdSize = nuevoSD
        }
        public setColor(nuevoColor:string)
        {
                 this.color = nuevoColor
        }
        public set5G(nuevo5G:boolean)
        {
                 this.is5G = nuevo5G
        }
        public setCamera(nuevoCamera:number)
        {
                 this.cameraNumber = nuevoCamera
        }
        public setPrice(nuevoPrice :number)
        {
                 this.price = nuevoPrice
        }

        public imprimir()
        {       
              return "The characteristics of the mobile " + this.getName() + " are: " + "Name: " + this.getName() + " Model: " + this.getModel()+
              " Trademark: " + this.getMark() + " SD Size (GB): " + this.getSD() + " Color: " + this.getColor() + " Is 5G?: " + this.get5G() + 
              " Number of Cameras: " + this.getCamera() 
        }
        
}