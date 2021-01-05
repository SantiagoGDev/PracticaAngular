import { Injectable } from '@angular/core';
import { DATA_FEATURES } from '../shared/_constants/features.constant';
import { Feature } from '../shared/_models/feature.model';
@Injectable()
export class FeaturesService{
 
    constructor(){}
    private features:Feature[] = DATA_FEATURES;

    getFeatures(){
        return this.features;
    }
    getFeature(index){
        return this.features[index];
    }
}

