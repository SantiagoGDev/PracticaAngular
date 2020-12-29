import { Injectable } from '@angular/core';
@Injectable()
export class FeaturesService{
 
    constructor(){}
    private features:Feature[] = [
        {
            tab: 'Simple Bookmarking',    
            img: 'assets/images/illustration-features-tab-1.svg',
            title: 'Bookmark in one click',
            text: `Organize your bookmarks however you l
            gives you complete control over how you manage your favourite sites.`
        },
        {
            tab: 'Speedy Searching', 
            img: 'assets/images/illustration-features-tab-2.svg',
            title: 'Intelligent search',
            text: ` Our powerful search feature will help you find saved sites in no time at all. 
            No need to trawl through all of your bookmarks.`
        },
        {
            tab: 'Easy Sharing', 
            img: 'assets/images/illustration-features-tab-3.svg',
            title: 'Share your bookmarks',
            text: `Easily share your bookmarks and collections with others. Create a shareable 
            link that you can send at the click of a button.`
        },
    ]

    getFeatures(){
        return this.features;
    }
    getFeature(index){
        return this.features[index];
    }
}

export interface Feature {
    tab:string,
    img:string,
    title:string,
    text:string 
}