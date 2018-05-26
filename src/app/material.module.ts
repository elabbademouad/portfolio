import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule
} from '@angular/material';
@NgModule({
    imports:[
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule
        
    ],
    exports:[
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule
    ]
}
)
export class Material{};