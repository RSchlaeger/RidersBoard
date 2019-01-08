import { CardType } from '../enums/card-type';

export class Card {
    number?: number;
    header: string;
    content?: any;
    type?: CardType;
}