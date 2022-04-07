import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //baseUrl = 'http://127.0.0.1:8000/api/fixes/';
  baseUrl='http://127.0.0.1:8000/merge_two_spreadsheets/';

  constructor(
    private httpclient : HttpClient
  ) { }

  getFspids() {
    return this.httpclient.get<Array<any>>(this.baseUrl);
  }

  mergeSpreadsheets(spreadsheetsDir: string, outputDir: string){

    
    const httpParams = new HttpParams({
      fromObject: {
        merge_dir : 'C:\\Users\\RafaelMedeirosJacome\\Documents\\ibm_documents\\mentoria_jp\\test_spreadsheets\\',
        output_file : 'C:\\Users\\RafaelMedeirosJacome\\Documents\\ibm_documents\\mentoria_jp\\test_spreadsheets\\merged.xlsx',
      }
    });

    return (this.httpclient.get(this.baseUrl, {params : httpParams}).subscribe((data) => console.log(data)));
    
  }
  
}
