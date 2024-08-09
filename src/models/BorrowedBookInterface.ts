export interface BorrowedBook {
    id: number; // também gerado automaticamente, pegar o mesmo id do avaliable book
    nameUser: string;
    loanDate: string;
    returnDate: string;
    title: string;
    auth: string;
    yearPublication: number;
    gender: string;
}
