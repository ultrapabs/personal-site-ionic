import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from '@agm/core/services/google-maps-types';
import { Platform } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-hlct-fkt',
  templateUrl: './hlct-fkt.page.html',
  styleUrls: ['./hlct-fkt.page.scss'],
})
export class HlctFktPage implements OnInit {

  pageTitle: string = 'High Line Canal FKT Attempt';
  isMobile: boolean;
  startLat: number = 39.65054956297369;
  startLng: number = -104.9079025390625;
  startZoom: number = 9;

  originalFktPointList: LatLngLiteral[];
  originalFktColor: string = '#FF0000';
  originalFktWeight: number = 6;
  showOriginalFkt: boolean;

  detourFktPointList: LatLngLiteral[];
  detourFktColor: string = '#0000FF';
  detourFktWeight: number = 2;
  showDetourFkt: boolean;

  detourOnePointList: LatLngLiteral[];
  detourTwoPointList: LatLngLiteral[];
  detourThreePointList: LatLngLiteral[];
  detourColor: string = '#0000FF';
  detourWeight: number = 5;
  showDetour: boolean;

  aidMarkerList: any[];
  showMarkers: boolean;

  constructor(
    private platform: Platform,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.isMobile = this.platform.is('mobile');
    this.originalFktPointList = [];
    this.detourFktPointList = [];
    this.detourOnePointList = [];
    this.detourTwoPointList = [];
    this.detourThreePointList = [];
    this.aidMarkerList = [];
    this.showOriginalFkt = true;
    this.showDetourFkt = true;
    this.showDetour = true;
    this.showMarkers = true;
    this.loadPaths();
    this.loadAidMarkers();
  }

  loadPaths() {
    this.loadOriginalFkt();
    this.loadDetourFkt();
    this.loadDetour();
  }

  loadOriginalFkt() {
    this.apiService.getJsonData('hlct_fkt').subscribe(
      (response) => {
        this.originalFktPointList = response['pointList'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadDetourFkt() {
    this.apiService.getJsonData('hlct_with_detour').subscribe(
      (response) => {
        this.detourFktPointList = response['pointList'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadDetour() {
    this.apiService.getJsonData('detour_only').subscribe(
      (response) => {
        this.detourOnePointList = response['pointListOne'];
        this.detourTwoPointList = response['pointListTwo'];
        this.detourThreePointList = response['pointListThree'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadAidMarkers() {
    this.apiService.getJsonData('aid_station').subscribe(
      (response) => {
        this.aidMarkerList = response['stations'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  toggleOriginalFkt() {
    this.showOriginalFkt = !this.showOriginalFkt;
  }

  toggleDetourFkt() {
    this.showDetourFkt = !this.showDetourFkt;
  }

  toggleDetour() {
    this.showDetour = !this.showDetour;
  }

  toggleMarkers() {
    this.showMarkers = !this.showMarkers;
  }
}

interface AidStation {
  lat: number;
  lng: number;
  title: string;
  label: string; // single character, displayed on marker
  zIndex: number;
  mile: number;
  toNext: number;
  desc: string;
  googleMapLink: string;
}
