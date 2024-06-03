import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { TodoModel } from '../models/todo-model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  public todos: TodoModel[] = [];
  public hayError = false;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  public retrieveTodos(): void {
    this.todosService.allTodos().subscribe(
      (todos: TodoModel[]) => this.loadTodos(todos),
      (error: HttpErrorResponse) => this.showError(error)
    )
  }

  private loadTodos(todosResponse: TodoModel[]): void {
    this.todos = todosResponse;
  }

  private showError(error: HttpErrorResponse): void{
    this.hayError = true;
  }

  randomMethod() {}
}
