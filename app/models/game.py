from sqlalchemy.orm import relationship
from .db import db

class Game(db.Model):
  __tablename__ = 'games'

  id = db.Column(db.Integer, primary_key = True)
  player1 = db.Column(db.String(40))
  player2 = db.Column(db.String(40))
  moves = relationship('Move', back_populates='game', order_by='desc(Move.id)')

  def board(self, ):
    column_height = [0]*4
    board = [[None]*5 for i in range(0, 4)]
    for move in self.moves:
      board[move.column][column_height[move.column]] = move.player_id
      column_height[move.column] += 1
    return board

  def column_has_room(self, column_id):
    print("Column has room", column_id)
    column_count = [move for move in self.moves if move.column == column_id]
    print("Column has room", column_count)
    return len(column_count) < 5

  def to_dict(self):
    return {
      "id": self.id,
      "player1": self.player1,
      "player2": self.player2,
      "board": self.board()
    }
