-- 使用者已擁有的商品
CREATE TABLE user_products (
user_product_id INT AUTO_INCREMENT PRIMARY KEY, -- 已擁有的商品編號
user_id INT NOT NULL, -- 使用者 id
product_id INT, -- 已擁有的商品id
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (product_id) REFERENCES products(product_id)
);