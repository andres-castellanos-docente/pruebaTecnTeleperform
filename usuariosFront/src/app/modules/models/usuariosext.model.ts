export class UsuariosExtModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  constructor(json: any = null) {
    if (json !== null) {
      this.userId = json.userId;
      this.id = json.id;
      this.title = json.title;
      this.completed = json.completed;
    } else {
      this.userId = null;
      this.id = null;
      this.title = null;
      this.completed = null;
    }
  }
}
