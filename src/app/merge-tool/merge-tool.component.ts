import { Component, OnInit } from '@angular/core';
import { ApiService} from  '../api.service';

@Component({
  selector: 'app-merge-tool',
  templateUrl: './merge-tool.component.html',
  styleUrls: ['./merge-tool.component.css']
})
export class MergeToolComponent implements OnInit {

  displaySpreadsheetdir=''
  displayOutputDir=''

  constructor(private apiService : ApiService) { 
    
  }

  ngOnInit(): void {
    
  }

  getPathsAndMerge(spreadsheetsDirectory: string, outputDirectory: string) {
    this.displaySpreadsheetdir=spreadsheetsDirectory
    this.displayOutputDir=outputDirectory

    console.log(this.apiService.mergeSpreadsheets(spreadsheetsDirectory,outputDirectory));
  }

}
