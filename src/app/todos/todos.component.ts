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
  public showTodos: TodoModel[] = [];
  public hayError = false;
  public searchText: string = "";
  public currentTodo: TodoModel | null = null;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  public retrieveTodos(): void {
    this.todosService.allTodos().subscribe(
      (todos: TodoModel[]) => this.loadTodos(todos),
      (error: HttpErrorResponse) => this.showError(error)
    )
  }

  public retrieveOneTodo(clickedTodo: TodoModel): void {
    this.todosService.oneTodo(clickedTodo.id).subscribe(
      (todo: TodoModel) => this.currentTodo = todo
    )
  }

  public makeSearch(): void {
    this.showTodos = this.todos.filter(t => t.title.includes(this.searchText))
  }

  public searchTitleText(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value;

    this.searchText = searchValue;
  }

  private loadTodos(todosResponse: TodoModel[]): void {
    this.todos = todosResponse;
    this.showTodos = todosResponse;
  }

  private showError(error: HttpErrorResponse): void{
    this.hayError = true;
  }
}
