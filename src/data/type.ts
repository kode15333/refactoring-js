type Title = "hamlet" | "as-like" | "othello";

type Performace = {
    playID: string;
    audience: number;
};

type Play = {
    name: string;
    type: string;
};

type Plays = {
    [index: string]: Play;
};

type Invoice = {
    customer: string;
    performances: Performace[];
};

export type { Invoice, Plays, Play, Performace };
