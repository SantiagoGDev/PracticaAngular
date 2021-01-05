import { Component, OnInit } from '@angular/core';
import { DownloadsService } from 'src/app/services/downloads.service';
import { Download } from '../../_models/download.model';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }


  downloads:Download [] = [];
  constructor(private _downloadsService:DownloadsService) {

  }

  ngOnInit(): void {
    this.downloads = this._downloadsService.getDownloads();
  }

  

}
