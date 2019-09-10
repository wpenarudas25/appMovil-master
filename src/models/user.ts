
export interface User {
    person: Person
    type: types.USER,
    
}

export interface Medic{
	person: Person,
	type: types.MEDIC
}

interface Person{
	name: string,
    lastName: string,
    email: string,
    password: string,
    _id? : string,
}

enum types{
	USER = "usuario",
	MEDIC = "medico",
	ADMIN = "admin"
}

