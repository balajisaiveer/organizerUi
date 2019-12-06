import { NgModule } from "@angular/core";
import { OrgheaderComponent } from './components/orgheader/orgheader.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations:[
        OrgheaderComponent
    ],
    imports:[
        BrowserModule,MatToolbarModule,MatButtonModule
    ],
    exports:[
        OrgheaderComponent
    ],
    providers:[],

})
export class OrgModule{}
