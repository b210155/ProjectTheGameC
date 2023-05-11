CREATE TABLE users ( -- 會員資料表
user_id INT AUTO_INCREMENT PRIMARY KEY,  -- 會員 id
username VARCHAR(15) NOT NULL UNIQUE, -- 會員帳號
password VARCHAR(15) NOT NULL,  -- 會員密碼
email VARCHAR(30) NOT NULL UNIQUE,  -- email
phone VARCHAR(11),  -- 電話
birthday DATE NOT NULL,  -- 生日
c_coin_balance INT UNSIGNED DEFAULT 0, -- c幣餘額
nickname VARCHAR(15), -- 暱稱 (預設為帳號)
avatar VARCHAR(255) DEFAULT '/img/login/avatar/avatar_default.jpg', -- 大頭貼
registration_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 帳號建立時間
);

SELECT * FROM `users` WHERE 1;


INSERT INTO users (username, password, email, phone, birthday, c_coin_balance)
VALUES
('myuser1', 'password1', 'myuser1@example.com', '0912345678', '1990-01-01', 0),
('myuser2', 'password2', 'myuser2@example.com', '0923456789', '1991-02-02', 0),
('myuser3', 'password3', 'myuser3@example.com', '0934567890', '1992-03-03', 0),
('myuser4', 'password4', 'myuser4@example.com', '0945678901', '1993-04-04', 0),
('myuser5', 'password5', 'myuser5@example.com', '0956789012', '1994-05-05', 0),
('myuser6', 'password6', 'myuser6@example.com', '0967890123', '1995-06-06', 0),
('myuser7', 'password7', 'myuser7@example.com', '0978901234', '1996-07-07', 0),
('myuser8', 'password8', 'myuser8@example.com', '0989012345', '1997-08-08', 0),
('myuser9', 'password9', 'myuser9@example.com', '0990123456', '1998-09-09', 0),
('myuser10', 'password10', 'myuser10@example.com', '0911123456', '1999-10-10', 0),
('myuser11', 'password11', 'myuser11@example.com', '0922234567', '2000-11-11', 0),
('myuser12', 'password12', 'myuser12@example.com', '0933345678', '2001-12-12', 0),
('myuser13', 'password13', 'myuser13@example.com', '0944456789', '2002-01-13', 0),
('myuser14', 'password14', 'myuser14@example.com', '0955567890', '2003-02-14', 0),
('myuser15', 'password15', 'myuser15@example.com', '0966678901', '2004-03-15', 0),
('myuser16', 'password16', 'myuser16@example.com', '0977789012', '2005-04-16', 0),
('myuser17', 'password17', 'myuser17@example.com', '0988890123', '2006-05-17', 0),
('myuser18', 'password18', 'myuser18@example.com', '0999901234', '2007-06-18', 0),
('myuser19', 'password19', 'myuser19@example.com', '0911012345', '2008-07-19', 0),
('myuser20', 'password20', 'myuser20@example.com', '0922123456', '2009-08-20', 0);