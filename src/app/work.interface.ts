export interface Work {
    id: number;
    lpz_id: number;
    cat_id: number;
    summ: number;
    invoice: string;
    description: string;
    created_at: string;
}

export interface Lpz {
    id: number;
    name: string;
}

export interface Cat {
    id: number;
    name: string;
}