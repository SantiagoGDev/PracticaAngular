import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feature, FeaturesService } from '../../services/features.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  feature:Feature;


  constructor( private _featuresService:FeaturesService,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.feature = this._featuresService.getFeature(params['id']);
    })
  }



}
