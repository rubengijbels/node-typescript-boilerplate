
// Hopelijk is dees ni te off putting
// puntkommas zijn optional in javascript

// De imports = modules van andere files die ik zelf geschreven heb en in deze module nodig heb
// is gelijk module.exports en require() blabla

import { IHuman } from "./interfaces"
import { Smell, TransportationType } from "./enums"
import Transportation from "./classes/transportation"
import { efkesWachtenHe } from "./utils"


// Ik maak een constante variabele van het type IHuman
// de properties hiervan kunnen wijzigen, de variabele zelf kan niet hertoegekend worden

const leendert: IHuman = {
	firstName: "Leendert",
	lastName: "De Cae",
	heightInCm: 150,
	smell: Smell.Kaka,
	transportationMethods: []
}

// zoals ge hier kunt zien:

leendert.transportationMethods.push(new Transportation(TransportationType.Car, 50, "heihei ik ben leendert"))
leendert.transportationMethods.push(new Transportation(TransportationType.Feet, 15))

// Ik zoek uw auto tussen al uw transportationMethods
const leendertsAuto: Transportation = leendert.transportationMethods.find(tm => tm.transportationType === TransportationType.Car)

// bovenstaande regel gebruikt een arrow function voor de find parameter en die is hetzelfde als:

const ookLeendertsAuto: Transportation = leendert.transportationMethods.find(function(tm)
{
	return tm.transportationType === TransportationType.Car

	// hierboven is kortere versie van:
/* 	if(tm.transportationType === TransportationType.Car)
		return true
	else
		return false */
})

// het bovenstaande is ook hetzelfde als dit: (als ge da beter verstaat)

let steedsLeenderstAuto: Transportation = null
for(let i = 0; i < leendert.transportationMethods.length; i++)
{
	const transport: Transportation = leendert.transportationMethods[i]
	if(transport.transportationType === TransportationType.Car)
		steedsLeenderstAuto = transport
}


// define program

const execution = async () =>
{
	// het feit dat deze functie aan de variabelen kan die hierboven zijn gedeclareerd heet closures
	// dat is een van de sterkste JavaScript features
	// ik kan de execution variabele eenders waar passen en hij gaat deze variabelen allemaal blijven kennen

	console.log("********************")

	await efkesWachtenHe(1000)

	console.log("readyyy???")

	await efkesWachtenHe(1000)

	console.log(`Hallo ik ben ${leendert.firstName} en ik riek naar ${leendert.smell}`)

	await efkesWachtenHe(2000)

	console.log(`Nu ga ik rijden met mijn auto`)

	await efkesWachtenHe(1000)

	leendertsAuto.start()

	await efkesWachtenHe(3000)

	await ookLeendertsAuto.stop()

	console.log("Tadaaaa, Ruben is de beste!")

}

// execute program

execution()