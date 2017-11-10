

import { Smell } from "enums";
import Transportation from "./classes/transportation";


export interface IHuman
{
	heightInCm?: number,
	firstName: string,
	lastName: string,
	smell: Smell,
	transportationMethods: Array<Transportation>
}

