type Producer = {
    name: string;
    cost: number;
    production: number;
};

type Doc = {
    name: string;
    producers: Producer[];
    demand: number;
    price: number;
};

export type { Producer, Doc };
