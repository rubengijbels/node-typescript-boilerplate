import { TransportationType } from "../enums";
import { efkesWachtenHe } from "../utils";


export default class Transportation
{
	//private stuff
	private type: TransportationType = null
	private speed: number = null
	private geluid: string = null
	private clearInterval: NodeJS.Timer = null

	// public getter (speciale syntax)
	public get transportationType()
	{
		return this.type
	}

	// Constructor
	// 5 is default value en betekent dus dat speed optional parameter is, typescript weet dat speed number is doordat ge er 5 aan toekent
	// geluid is optional parameter door "?"
	public constructor(type: TransportationType, speed = 5, geluid?: string)
	{
		this.type = type
		this.speed = speed

		if(geluid === undefined)
			this.geluid = "mmmmm"
		else
			this.geluid = geluid

	}

	// Public methods

	public start = () =>
	{
		const interval = 10000 / this.speed
		console.log("*******************    startinggg **************************")
		this.clearInterval = setInterval(this.step, interval)
	}

	private step = () =>
	{
		let transportSound: string = null

		switch(this.type)
		{
			case TransportationType.Bike:
				transportSound = "trtrtrtrrtrrrr"
				break
			case TransportationType.Car:
				transportSound = "vroem vroem vroem"
				break
			case TransportationType.Feet:
				transportSound = "stap stap stap"
				break
			case TransportationType.Motorcycle:
				transportSound = "brom brom brom brom"
				break
			case TransportationType.Train:
				transportSound = "Tsjoek tsjoeke tsjoeke"
				break
		}

		// hier toon ik nieuwe string waar ge variabelen kunt insteken
		console.log(`Moving with ${TransportationType[this.transportationType]} : ${transportSound}`)
		console.log(`in the background we hear: ${this.geluid}`)
	}

	public stop = async () =>
	{
		console.log("*****************************    I start breaking ***************************")

		// hier toon ik de awesome await functie!
		// de code hierachter stopt met uitvoeren tot de promise die waitSomeTime-function returnt, resolved.

		const promiseReturn: string = await efkesWachtenHe(this.speed * 20)

		clearInterval(this.clearInterval)
		console.log("******************************   Stopped. met msg v promise: " + promiseReturn + "*********************")
	}



}