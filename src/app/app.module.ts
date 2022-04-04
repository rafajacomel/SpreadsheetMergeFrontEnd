import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ArchiveToolComponent } from './archive-tool/archive-tool.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdminComponent } from './admin/admin.component';
import { ConfigComponent } from './config/config.component';
import { OpenSpreadsheetComponent } from './open-spreadsheet/open-spreadsheet.component';
import { SetMergeRulesComponent } from './set-merge-rules/set-merge-rules.component';
import { MergeToolComponent } from './merge-tool/merge-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ArchiveToolComponent,
    AdminComponent,
    ConfigComponent,
    OpenSpreadsheetComponent,
    SetMergeRulesComponent,
    MergeToolComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTooltipModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
