import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements AfterViewInit {
  countryName: string = '';
  countryCapital: string = '';
  countryRegion: string = '';
  incomeLevel: string = '';
  countryLendingType: string = '';
  countryAlpha2Code: string = '';

  constructor(private elementRef: ElementRef, private apiService: ApiService) {}

  ngAfterViewInit(): void {
    const svgElement = this.elementRef.nativeElement.querySelector('svg');
    const pathElements = svgElement.querySelectorAll('path');
    pathElements.forEach((path: SVGPathElement) => {
      path.addEventListener('click', this.handleClick.bind(this));
    });
  }

  handleClick(event: MouseEvent): void {
    const path = event.target as SVGPathElement;
    const countryId = path.id;
  
    if (countryId) {
      this.apiService.getCountryInformation(countryId).subscribe((data: any) => {
        const countryName = data[1][0].name;
        const income = data[1][0].incomeLevel.value;
        const capitalCity = data[1][0].capitalCity;
        const region = data[1][0].region.value;
        const alpha2Code = data[1][0].iso2Code; // Property name is iso2Code
        const lendingType = data[1][0].lendingType.value;

  
        this.countryName = countryName;
        this.incomeLevel = income;
        this.countryCapital = capitalCity;
        this.countryRegion = region;
        this.countryAlpha2Code = alpha2Code; // Assign the alpha-2 code
        this.countryLendingType = lendingType;
      });
    } else {
      console.log("Country ID is null.");
    }
  }  
  }

