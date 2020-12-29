import { Component, OnInit } from '@angular/core';
import { Feature, FeaturesService } from '../../services/features.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features:Feature[] = [];
  currentFeature:number = 0;
  getFeature:Feature;

  constructor(private _featuresSerivice:FeaturesService, private router:Router) {
    console.log('Constructor iniciado');
  }

  ngOnInit(): void {
    this.features = this._featuresSerivice.getFeatures();
    this.getFeature = this.features[this.currentFeature];
  }

  showFeature(){
    this.router.navigate(['/feature',this.currentFeature]);
  }

  tabFeature(index:number){
    this.currentFeature  = index;
    this.getFeature = this.features[this.currentFeature];
  }

}
