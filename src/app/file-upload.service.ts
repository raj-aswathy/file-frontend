import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private apiUrl = 'http://localhost:3000/upload'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  uploadFiles(files: File[]): Observable<any> {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file); // Match the field name 'files' in backend
    });

    return this.http.post(this.apiUrl, formData, {
      headers: new HttpHeaders(),
    });
  }
}
