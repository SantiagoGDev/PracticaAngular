import { Injectable } from '@angular/core';
import { DATA_DOWNLOADS } from '../shared/_constants/download.constant';
import { Download } from '../shared/_models/download.model';


@Injectable()
export class DownloadsService {

    constructor (){}

    private downloads:Download [] = DATA_DOWNLOADS;

    getDownloads(){
        return this.downloads;
    }
}
