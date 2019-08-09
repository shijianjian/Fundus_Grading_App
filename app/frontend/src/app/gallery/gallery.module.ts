import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatCheckboxModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule } from '@angular/material'; 

import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryComponent } from './gallery.component';
import { CSVService } from './csv.service';


@NgModule({
  declarations: [
    GalleryComponent,
    GalleryListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    GalleryComponent
  ],
  providers: [
    CSVService
  ]
})
export class GalleryModule { }
