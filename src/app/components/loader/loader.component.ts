import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  showLoader = false;

  constructor(private loaderService: LoaderService, private cdRef: ChangeDetectorRef) {
    
  }
  
  ngOnInit() {
    this.init();
  }
  
  init() {
    this.loaderService.getLoaderObserver().subscribe((status) =>{
      this.showLoader = (status === 'start');
      this.cdRef.detectChanges();
    });
  }
  
}
