CREATE TABLE game_reviews ( 
  game_review_id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT NOT NULL,
  user_id INT NOT NULL,
  nickname VARCHAR(15),
  rating TINYINT UNSIGNED NOT NULL, -- 評分
  comment TEXT, -- 評論
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(game_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  UNIQUE (game_id, user_id), -- 一個遊戲，一個會員只能評論一次
  CHECK (rating <= 5) -- 評分最多為5分
);

