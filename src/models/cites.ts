
export interface Cite {
    date: string,
    type : string,
    medic :{
    	name:string,
    	_id: string
    },
    pacient : {
    	name:string,
    	_id: string
    },
    _id? : string,
    check : boolean
}