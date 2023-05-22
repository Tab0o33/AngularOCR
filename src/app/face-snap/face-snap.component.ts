import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-face-snap',
    templateUrl: './face-snap.component.html',
    styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

    @Input() faceSnap!: FaceSnap;

    userSnapped!: boolean;
    buttonText!: string;

    constructor(private faceSnapsService: FaceSnapsService,
        private router: Router) { }

    ngOnInit() {
        this.userSnapped = false;
        this.buttonText = 'Oh Snap!';
    }

    onSnap() {
        if (this.userSnapped) {
            this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
            this.buttonText = 'Oh Snap!';
        }
        else {
            this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
            this.buttonText = 'Oops, unSnap!';
        }
        this.userSnapped = !this.userSnapped;
    }

    onViewFaceSnap() {
        this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    }

}
