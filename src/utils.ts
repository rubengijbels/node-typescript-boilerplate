import { setTimeout } from "timers";



// Hier toon ik Promises
// Een function toegekent aan variabele waitsometime met returnType Promise<string>
// 1 daarvan als parameter aan de Promise
// 1 daarvan als callback-parameter aan de setTimeout
export const efkesWachtenHe = (milliseconds: number) : Promise<string> =>
	new Promise((resolve) =>
	{
		setTimeout(()=>
		{
			resolve("gewacht")
		}, milliseconds)
	})


// het bovenste was geschreven met arrow functions, dit is hetzelfde als

function niksdoenIsLeuk(milliseconds: number) : Promise<string>
{
	const promiseToReturn: Promise<string> = new Promise(function(resolve)
	{
		setTimeout(function()
		{
			resolve("niks doen is leuk")
		}, milliseconds)
	})

	return promiseToReturn
}
