import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { IInfo } from '../info.model';
import { MyInfoService } from '../my-info.service';
import * as moment from 'moment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  mapMarker: any;
  building: any;
  mobile: any;
  email: any;
  birthday: any;
  badge: any;
  home: any;
  about: string = 'About';
  myInfo: IInfo={};
  myAge:any
  constructor(public _myInfoService: MyInfoService) {

  }

  ngOnInit(): void {
    this.mapMarker = awesom.faMapMarker;
    this.building = awesom.faCity;
    this.email = awesom.faMailBulk;
    this.mobile = awesom.faMobile;
    this.birthday = awesom.faBirthdayCake;
    this.badge = awesom.faGraduationCap;
    this.home = awesom.faLaptopHouse;

    this._myInfoService.getInfo().subscribe((data) => {
      this.myInfo = data;
      this.myInfo.birthday=((moment(this.myInfo.birthday, 'DD-MM-YYYY')).format('YYYY-MM-DD'));
      this.myAge = moment().diff(this.myInfo.birthday, 'years',false);

    });

  }
}
