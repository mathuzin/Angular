import { Component } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';
import { CommonModule } from '@angular/common';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@Component({
  selector: 'app-criar-curso',
  standalone: true,
  imports: [CommonModule, ReceberCursoCriadoComponent],
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.css'
})
export class CriarCursoComponent {
  
  cursos: string[] = [];
  constructor(private cursosService: CursosService) { }
  
  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }
  
  onAddCurso(curso: string){
    this.cursosService.addCurso(curso);
  }

}
