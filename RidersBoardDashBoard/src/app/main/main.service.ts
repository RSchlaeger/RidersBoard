import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DashBoardItem } from '../models/dashbaordItem.model';
import { GridsterItem } from 'angular-gridster2';
import layout from '../ressources/dashboard-layout.json';
import { Card } from '../models/card.model';
import { CardType } from '../enums/card-type';


@Injectable()
export class MainService {

    private dashBoardItems: DashBoardItem[] = [];

    private cards: Card[] = [
        { header: "header", content: "firstContent", type: CardType.Clock },
    ];

    constructor(private data: DataService) {
        this.dashBoardItems = this.getBackendData();
    }

    private getBackendData(): DashBoardItem[] {

        var result: DashBoardItem[];
        this.data.GetLayoutFromBackend().subscribe(res => {
            result = <DashBoardItem[]>res;
        });
        return result;
    }

    public getLayout(): GridsterItem[] {

        var tmp: GridsterItem[] = [];
        if (this.dashBoardItems === null) {
            tmp = layout["grid-layout"];
        }
        else {
            this.dashBoardItems.forEach(element => {
                tmp.push(element.layout);
            });
        }
        return tmp;
    }

    public getCardData(): Card[] {
        var tmpCard: Card;
        if (this.dashBoardItems.length !== 0) {
            this.dashBoardItems.forEach(item => {
                tmpCard.header = item.title;
                tmpCard.type = <CardType>item.type;
            });
        }
        return null;
    }
}
