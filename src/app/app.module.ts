import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FileUploadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
