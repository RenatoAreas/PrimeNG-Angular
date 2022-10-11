import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.scss']
})
export class FormCadastroComponent implements OnInit {

  uploadedFiles: any[] = [];

  options: any;

  overlays: any[] | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
