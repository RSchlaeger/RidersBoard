import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { TimeService } from './timer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        CardComponent,

    ],
    providers: [
        TimeService,
    ],
    exports: [
        CardComponent,

    ]
})
export class CardModule { }
