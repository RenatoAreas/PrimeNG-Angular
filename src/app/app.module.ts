import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {GMapModule} from 'primeng/gmap';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormCadastroComponent } from './cadastro/form-cadastro/form-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormCadastroComponent
  ],
  imports: [
    BrowserModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    PanelModule,
    CardModule,
    MenubarModule,
    TableModule,
    CalendarModule,
    FileUploadModule,
    HttpClientModule,
    InputTextModule,
    PasswordModule,
    GMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
