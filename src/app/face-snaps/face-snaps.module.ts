import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FaceSnapsRoutingModule } from './face-snaps-routing.module';

import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';

@NgModule({
    declarations: [
        FaceSnapComponent,
        NewFaceSnapComponent,
        SingleFaceSnapComponent,
        FaceSnapListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FaceSnapsRoutingModule
    ],
    exports: [
        FaceSnapComponent,
        NewFaceSnapComponent,
        SingleFaceSnapComponent,
        FaceSnapListComponent
    ]
})
export class FaceSnapsModule { }
