import { Invoice } from "../model/Invoice";

export const invoiceData: Invoice = {
    id: "001",
    company: {
        ruc: "1784967554001",
        name: "Clear Minds Consultores",
        address: {
            city: "Quito",
            principalStreet: "Juan Pablo Sanz",
            secondaryStreet: "Iñaquito",
            code: "N-57",
        },
    },
    customer: {
        id: "1726850884",
        name: "Jordan",
        surname: "Chango",
        address: {
            city: "Quito",
            principalStreet: "Simon Bolivar",
            secondaryStreet: "Alsimb rasjk",
            code: "N-1000",
        },
    },
    items: [
        {
            id: 100,
            product: {
                id: "500",
                name: "Papas Rufles",
                price: 0.50,
                description: "Las papas mas sabrosonas",
                category: {
                    id: 4554,
                    name: "sdNACKS"
                },
            },
            quantity: 23,
        },
        {
            id: 101,
            product: {
                id: "550",
                name: "Doritos",
                price: 0.50,
                description: "De queso",
                category: {
                    id: 78,
                    name: "sdNACKS"
                },
            },
            quantity: 50,
        },
        {
            id: 102,
            product: {
                id: "580",
                name: "Kchitos",
                price: 0.30,
                description: "Para Kchudos",
                category: {
                    id: 512,
                    name: "sdNACKS"
                },
            },
            quantity: 100,
        },
    ],
}