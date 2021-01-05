import { Component, OnInit } from '@angular/core';
import { Feature } from '../../_models/feature.model';
import { FeaturesService } from '../../../services/features.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  feature:Feature;


  constructor( private _featuresService:FeaturesService,private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.feature = this._featuresService.getFeature(params['id']);
    })
  }

}
