import { Mobile } from "./Repaso2.1";
import { MobileLibrary } from './MobileLibrary';

let nokia3210 = new Mobile()

        nokia3210.setName("nokia3210")
        nokia3210.setModel("modelo1")
        nokia3210.setMark("nokia")
        nokia3210.setSD(250)
        nokia3210.setColor("blue")
        nokia3210.set5G(false)
        nokia3210.setCamera(2)
        nokia3210.setPrice(200)

let iphone3G = new Mobile()

        iphone3G.setName("iphone3G")
        iphone3G.setModel("modelo2")
        iphone3G.setMark("apple")
        iphone3G.setSD(512)
        iphone3G.setColor("black")
        iphone3G.set5G(true)
        iphone3G.setCamera(4)
        iphone3G.setPrice(500)

let samsung = new Mobile()

        samsung.setName("Samsung Galaxy 10")
        samsung.setModel("modelo3")
        samsung.setMark("samsung")
        samsung.setSD(250)
        samsung.setColor("red")
        samsung.set5G(false)
        samsung.setCamera(3)
        samsung.setPrice(320)

let alcatel = new Mobile()

        alcatel.setName("Alcatel 20")
        alcatel.setModel("modelo4")
        alcatel.setMark("alcatel")
        alcatel.setSD(512)
        alcatel.setColor("black")
        alcatel.set5G(false)
        alcatel.setCamera(2)
        alcatel.setPrice(150)


let todos = [nokia3210, iphone3G, samsung, alcatel]

let libreria = new MobileLibrary("tienda","Madrid",todos)

console.log(libreria.getLocation())
console.log(libreria.getMobiles())
console.log(libreria.getName())
console.log(libreria.totalPriceCalculation())
// let moviles = libreria.getMobiles()

// console.log(moviles[0].getPrice())


