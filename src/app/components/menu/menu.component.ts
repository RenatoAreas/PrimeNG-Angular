import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: any;

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
          label: 'Arquivo',
          items: [{
                  label: 'Cadastra',
                  items: [
                      {label: 'Fornecedor'},
                      {label: 'Produto'},
                  ]
              },
              {label: 'Pesquisar'},
              {label: 'Sair'}
          ]
      },
      {
          label: 'Editar',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Editar', icon: 'pi pi-fw pi-pencil'},
              {label: 'Deletar', icon: 'pi pi-fw pi-trash'},
          ]
      },
      {
        label: 'Atualizar',
        icon: 'pi pi-fw pi-refresh'
      }
  ];
  }

  sair(){
    console.log("Saindo")
  }

}
