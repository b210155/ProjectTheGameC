CREATE TABLE game_reviews ( 
  game_review_id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT NOT NULL,
  user_id INT NOT NULL,
  rating TINYINT UNSIGNED NOT NULL, -- 評分
  comment TEXT, -- 評論
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(game_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  UNIQUE (game_id, user_id), -- 一個遊戲，一個會員只能評論一次
  CHECK (rating <= 5) -- 評分最多為5分
);

INSERT INTO game_reviews (game_id, user_id, rating, comment)
VALUES
  (1, 1, 4, '好遊戲，強烈推薦。'),
  (1, 2, 3, '普通遊戲，可以更好。'),
  (1, 3, 5, '優秀的遊戲，物超所值。'),
  (1, 4, 2, '令人失望的遊戲，不推薦。'),
  (1, 5, 4, '好玩的遊戲，畫面很棒。'),
  (1, 6, 5, '我玩過的最好的遊戲之一。');

