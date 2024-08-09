export interface BorrowedBook {
    id: number; // também gerado automaticamente, pegar o mesmo id dos avaliable book
    nameUser: string;
    loanDate: string;
    returnDate: string;
    title: string;
    auth: string;
    yearPublication: number;
    gender: string;
}
