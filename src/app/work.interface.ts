export interface Work {
    id: number;
    lpz_id: number;
    cat_id: number;
    sum: number;
    invoice: string;
    description: string;
}

export interface Lpz {
    id: number;
    name: string;
}

export interface Cat {
    id: number;
    name: string;
}