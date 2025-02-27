import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  providers: [CursosService],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  
  cursos: string[] = [];
  // cursosService: CursosService; 
  
  constructor(private cursosService: CursosService) {
    // this.cursosService = new CursosService();
  }
  
  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }
  
}

