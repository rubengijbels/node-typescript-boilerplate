

import { Smell } from "enums";
import Transportation from "./Classes/transportation";


export interface IHuman
{
	heightInCm?: number,
	firstName: string,
	lastName: string,
	smell: Smell,
	transportationMethods: Array<Transportation>
}

