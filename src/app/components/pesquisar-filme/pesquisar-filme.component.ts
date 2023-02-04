import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movie';
import { FilmeService } from 'src/app/service/filme.service';

@Component({
  selector: 'app-pesquisar-filme',
  templateUrl: './pesquisar-filme.component.html',
  styleUrls: ['./pesquisar-filme.component.scss']
})
export class PesquisarFilmeComponent implements OnInit {
  nomeFilme: String;
  dadosFilme: Movie;
  mostrarResultado: boolean;
  erroFilme: boolean = false;
  generos: [];

  constructor(private filmeService: FilmeService){}

  ngOnInit(){}

  obterFilme(nomeFilme): void{
    this.filmeService.getFilme(nomeFilme).subscribe({
      next: (res) => this.preencherDados(res),
      error: (e) => console.error(e)
    })    
  }

  preencherDados(res){
    this.dadosFilme = res
    this.mostrarResultado = true;

    if (res.Response == "False"){
      this.erroFilme = true;
      return;
    }
    this.generos = res.Genre.split(',');
    this.erroFilme = false;
  }

}
