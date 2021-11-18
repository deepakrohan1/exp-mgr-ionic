export class Category {
    id: number;
    category: string;
    categoryDesc: string;
    amount: number;
    expenses: string[];

    constructor(category: string, categoryDesc: string, amount: number) {
        this.category = category;
        this.categoryDesc = categoryDesc;
        this.amount = amount;
    }
}
