import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminComponent } from './admin/admin.component';
import { ConfigComponent } from './config/config.component';
import { OpenSpreadsheetComponent } from './open-spreadsheet/open-spreadsheet.component';
import { SetMergeRulesComponent } from './set-merge-rules/set-merge-rules.component';
import { MergeToolComponent } from './merge-tool/merge-tool.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, children: [
    {path:'open-spreadsheet', component: OpenSpreadsheetComponent},
    {path:'merge-tool', component: MergeToolComponent},
    {path:'set-merge-rules', component: SetMergeRulesComponent},
    {path:'config', component: ConfigComponent},
    {path:'admin', component: AdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
