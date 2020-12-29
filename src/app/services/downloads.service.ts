import { Injectable } from '@angular/core';

@Injectable()
export class DownloadsService {
    constructor (){}
    private downloads:Download[] =[ 
        {
            img : 'assets/images/logo-chrome.svg',
            browser: 'Add to Chrome',
            vesrion: 'Minimum version 62'
        },        
        {
            img : 'assets/images/logo-firefox.svg',
            browser: 'Add to Firefox',
            vesrion: 'Minimum version 55'
        },
        {
            img : 'assets/images/logo-opera.svg',
            browser: 'Add to Opera',
            vesrion: 'Minimum version 46'
        }
    ]
    getDownloads(){
        return this.downloads;
    }
}
export interface Download {
    img: string,
    browser:string,
    vesrion:string
}