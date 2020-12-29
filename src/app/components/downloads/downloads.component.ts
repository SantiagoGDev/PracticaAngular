import { Component, OnInit } from '@angular/core';
import { Download, DownloadsService } from '../../services/downloads.service';


@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {
  downloads:Download [] = [];
  constructor(private _downloadsService:DownloadsService) {

  }

  ngOnInit(): void {
    this.downloads = this._downloadsService.getDownloads();
  }

}
