import { Component } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  standalone: false,
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  selectedFiles: File[] = []; // Support multiple files
  message: string = '';
  uploadResults: any[] = [];

  constructor(private fileUploadService: FileUploadService) {}

  onFilesSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files); // Convert FileList to an array
  }

  uploadFiles() {
    if (this.selectedFiles.length === 0) {
      this.message = 'No files selected for upload.';
      return;
    }

    this.fileUploadService.uploadFiles(this.selectedFiles).subscribe({
      next: (response) => {
        this.message = 'Files uploaded successfully!';
        this.uploadResults = response.files; // Assume the response contains file paths or details
        console.log(response);
      },
      error: (error) => {
        this.message = 'File upload failed!';
        console.error(error);
      },
      complete: () => {
        console.log('Upload request completed.');
      },
    });
  }
}
