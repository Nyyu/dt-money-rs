// Filtering interface data
export type DatabaseSimplified = Omit<DatabaseItems, "id" | "date">
export type DatabaseSimplifiedv2 = Pick<
    DatabaseItems,
    "name" | "price" | "type" | "category"
>

export interface DatabaseItems {
    id: number | string
    name: string
    price: number
    type: "income" | "outcome" | "deposit" | "withdraw"
    category: string
    date: Date
}

export const db: DatabaseItems[] = [
    {
        id: 1,
        name: "Drawing comission",
        price: 230,
        type: "outcome",
        category: "art",
        date: new Date("10/08/2021"),
    },
    {
        id: 2,
        name: "Tablet bought",
        price: 530,
        type: "outcome",
        category: "hardware",
        date: new Date("10/02/2022"),
    },
    {
        id: 3,
        name: "Drawing sold",
        price: 340,
        type: "income",
        category: "art",
        date: new Date("10/05/2022"),
    },
]
