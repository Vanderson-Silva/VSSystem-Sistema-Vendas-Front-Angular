import { Component,OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit{
  ELEMENT_DATA: Cliente[] =[
    {
      id: 1,
      nome: 'Vanderson Silva',
      cpf: '123.456.789-10',
      email: 'wandersonwandao@hotmail.com',
      senha: '12345',
      perfis:['0'],
      dataCriacao: '15/08/2022'

    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes'];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);

    constructor(){}
    ngOnInit(): void {        
    }
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
}

