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
type PerformanceType = {
    playID: string;
    audience: number;
    play: Play;
    amount: number;
    volumeCredits: number;
};

type StatementData = {
    customer: string;
    totalAmount: number;
    totalVolumeCredits: number;
    performances: PerformanceType[];
};

export type {
    Invoice,
    Plays,
    Play,
    Performace,
    PerformanceType,
    StatementData,
};
