import { Component } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receber-curso-criado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receber-curso-criado.component.html',
  styleUrl: './receber-curso-criado.component.css'
})
export class ReceberCursoCriadoComponent {

  curso: string | undefined;

  constructor(private cursosService: CursosService) { }
  
  ngOnInit() {
    this.cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    )
  }
}
