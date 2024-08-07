import { WebSocket } from "ws";

export class GameManager {
  private games: Game[];
  private pendingUser: WebSocket;
  private users: WebSocket;

  constructor() {
    this.games = [];
  }

  addUser(socket: WebSocket) {}
  removeUser(socket: WebSocket) {}
}
