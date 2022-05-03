type ProducerType = {
    name: string;
    cost: number;
    production: number;
};

type Doc = {
    name: string;
    producers: ProducerType[];
    demand: number;
    price: number;
};

export type { ProducerType, Doc };
