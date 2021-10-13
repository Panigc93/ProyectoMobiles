import { Mobile } from "./Repaso2.1";

let nokia3210 = new Mobile()
        nokia3210.name = "Nokia3210"
        nokia3210.model = "modelo1"
        nokia3210.trademark = "nokia"
        nokia3210.sdSize = 250
        nokia3210.color = "blue"
        nokia3210.is5G = false
        nokia3210.cameraNumber = 2
        nokia3210.price = 200

let iphone3G = new Mobile()
        iphone3G.name = "Iphone3G"
        iphone3G.model = "modelo2"
        iphone3G.trademark = "apple"
        iphone3G.sdSize = 512
        iphone3G.color = "black"
        iphone3G.is5G = true
        iphone3G.cameraNumber = 4
        iphone3G.price = 500

let Samsung = new Mobile()
        Samsung.name = "Samsung GALAXY 10"
        Samsung.model = "modelo3"
        Samsung.trademark = "samsung"
        Samsung.sdSize = 250
        Samsung.color = "red"
        Samsung.is5G = false
        Samsung.cameraNumber = 3
        Samsung.price = 320


nokia3210.is5G= true
nokia3210.cameraNumber =4
console.log(nokia3210,iphone3G,Samsung)