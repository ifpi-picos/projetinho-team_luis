import { LoanInterface } from "./LoanHistoricInterface";

export interface Book {
    id: number; //unico e gerado automaticamente
    title: string;
    auth: string;
    yearPublication: number;
    gender: string;
    borrowed: boolean;
}
