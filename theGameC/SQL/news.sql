-- 新聞
CREATE TABLE news (
news_id INT AUTO_INCREMENT PRIMARY KEY, -- 文章編號
news_title VARCHAR(50) NOT NULL UNIQUE, -- 文章標題
news_type VARCHAR(10) NOT NULL, -- 文章類型
news_img VARCHAR(255), -- 文章封面圖
content TEXT NOT NULL, -- 文章內容
dateTime TEXT, -- 活動時間
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO news (news_title, news_type, news_img, content, dateTime)
VALUES 
-- 最新消息
('【夜長夢多】又再熬夜打遊戲嗎？你的健康我們照顧！', '最新消息', 'latest/night.jpg', ' 總是熬夜打遊戲的你是否也感覺到眼睛的疲勞及身體的哀號呢？我們這裡為您推薦幾款保健藥品。',''),
('【小道消息】GTA5 新增黑幫火拚模式，誰能成為幫派之王？', '最新消息', 'latest/gta5.jpg', ' GTA5 即將推出幫派火拚模式，玩家將與其他玩家組成幫派，在開放式地圖奪取老大的地位。',''),
('【我命由我不由天】挑戰天命、衝擊運氣！你若敢挑戰，我們就趕送！', '最新消息', 'latest/TheGameC.png', ' 挑戰連續登入遊戲 120 小時，成功者我們將送高達 2000 點的 C 幣。','活動時間：4 月 28 ~ 5 月 5 日'),
('【一起來投票】為你最喜歡的遊戲投出你神聖的一票吧！', '最新消息', 'latest/vote.jpg', ' TheGameC 舉辦投票活動，會員們可以從線上遊戲中選出最喜歡的一款，前三名的所有玩家將獲得 200 點 C 幣。','活動時間：5 月 15 ~ 5 月 30 日'),
('【全新遊戲】全新線上遊戲 Counter Strike 2，正在連接！', '最新消息', 'latest/CSO2.png', ' 人氣遊戲 CSO 出第二代啦！TheGameC 以向開發商取得代理權利，預計將於 8 月登場！',''),
('【周末隨便玩】每天抽取一名在線幸運玩家 贈送奧迪一台', '最新消息', 'latest/activity.png', ' TheGameC 為了回饋玩家，將於每日隨機時段抽取一名在線玩家贈與奧迪豪車。', '活動時間：5 月 30 ~ 6 月 20 日'),
-- 遊戲更新
('【英雄聯盟】版本 21.15 更新', '遊戲更新', 'games_updates/LOL/patch_update.jpg', ' 版本 21.15 更新，對部分英雄數的值調整進行了平衡調整，當中包括了辛吉德、雷尼克頓、烏迪爾。',''),
('【特戰英豪】版本 6.2.0 更新', '遊戲更新', 'games_updates/Valorant/patch_update.jpg', ' 新增地圖 - 煉獄阿茲卡班，武器更新：戰神 - 傷害調低、移動速度增加、準度增加。',''),
('【新楓之谷】版本 51.1 更新', '遊戲更新', 'games_updates/maplestory/patch_update.jpg', ' 新增全新區域 - 小丑天堂，新增全新怪物 - 小丑王阿寬、小丑阿宏、小丑阿陳、小丑阿沛。',''),
('【英雄聯盟】版本 21.16 更新', '遊戲更新', 'games_updates/LOL/patch_update.jpg', ' 版本 21.16 更新，對部分英雄數的值調整進行了平衡調整，當中包括了雷葛爾、路西恩、雷玟。',''),
('【CSO絕對武力】版本 6.7.6 更新', '遊戲更新', 'games_updates/CSO/patch_update.jpg', ' 版本 6.7.7 更新，新增槍枝 - 步槍：CV-47、步槍：AWP、衝鋒槍：Uzi，期望玩家能有更多打法。',''),
('【英雄聯盟】版本 21.17 更新', '遊戲更新', 'games_updates/LOL/patch_update.jpg', ' 版本 21.17 更新，對部分英雄數的值調整進行了平衡調整，當中包括了蓋倫、易大師、阿卡麗。',''),
('【CSO絕對武力】版本 6.7.7 更新', '遊戲更新', 'games_updates/CSO/patch_update.jpg', ' 版本 6.7.7 更新，新增地圖 - 商場奇襲 (de_shop)，期望玩家能有更多打法。',''),
('【英雄聯盟】版本 21.18 更新', '遊戲更新', 'games_updates/LOL/patch_update.jpg', ' 版本 21.18 更新，對部分英雄數的值調整進行了平衡調整，當中包括了雷茲、牙宿、歐拉夫。',''),
('【特戰英豪】版本 6.2.1 更新', '遊戲更新', 'games_updates/Valorant/patch_update.jpg', ' 新增角色 - 斐特列，新增武器 - 步槍：戰神 PLUS、手槍：夜鶯、狙擊槍：凱薩。',''),
('【新楓之谷】版本 51.2 更新', '遊戲更新', 'games_updates/maplestory/patch_update.jpg', '新增全新區域 - 冰原地域，新增全新怪物 - 雪吉拉君主、企鵝男爵、企鵝弟弟。',''),
('【英雄聯盟】版本 21.19 更新', '遊戲更新', 'games_updates/LOL/patch_update.jpg', ' 版本 21.19 更新，對部分英雄數的值調整進行了平衡調整，當中包括了賽恩、潘森、厄薩斯。',''),
('【CSO絕對武力】版本 6.7.8 更新', '遊戲更新', 'games_updates/CSO/patch_update.jpg', ' 版本 6.7.8 更新，針對 AK-47 進行了大規模的削弱，同時也降低了價格，期望玩家能有更多打法。',''),
('【爆爆王】版本 12.5 更新', '遊戲更新', 'games_updates/CrazyArcade/patch_update.jpg', ' 在遊戲大廳添加了新的 UI，玩家可以更快速的選擇要進入的遊戲類型與房間。',''),
('【新楓之谷】最新版本 51.2 即將登場，雪吉拉成為最終BOSS！', '遊戲更新', 'games_updates/maplestory/patch_update.jpg', '新楓之谷將於 51.2 版本更新最新的 BOSS 雪吉拉君主，將會是玩家的全新挑戰。',''),
('【英雄聯盟】版本 21.20 更新', '遊戲更新', 'games_updates/LOL/patch_update.jpg', ' 版本 21.20 更新，對部分英雄數的值調整進行了平衡調整，當中包括了艾希、蓋倫、巴德、達瑞斯。',''),
-- 優惠活動
('【英雄聯盟】聯盟最大禮！百萬雄獅一齊渡江！', '優惠活動', 'products_promotions/LOL.jpg', ' 英雄聯盟為您送上最誠摯的祝福，百萬玩家一起享受傳說造型大優惠吧！','活動時間：4 月 20 ~ 6 月 30 日'),
('【跑跑卡丁車】車王之王，超跑全部 75 折！', '優惠活動', 'products_promotions/KartRider.png', ' 跑車的愛好者們你們有福了！上百台跑車 75 折，在不下單還對得起自己的超跑夢嗎？！','活動時間：5 月 05 ~ 5 月 25 日'),
('【AVA戰地之王】老兵集結令！老玩家回歸拿優惠！', '優惠活動', 'products_promotions/AVA.jpg', ' 你是戰地之王的老玩家嗎？只要現在回歸就送三樣商品 7 折優惠任您挑選！','活動時間：5 月 10 ~ 6 月 5 日'),
('【CSO絕對武力】經典老槍大回歸！你的童年我們交給你了！', '優惠活動', 'products_promotions/CSO.jpg', ' 有童年時期想要卻沒錢買的經典槍枝嗎？這次老槍大回歸，千萬不要錯過！','活動時間：5 月 15 ~ 6 月 15 日'),
('【新楓之谷】楓之谷商成大優惠，有錢沒錢巄總來！', '優惠活動', 'products_promotions/MapleStory.jpg', ' 新楓之谷商城將所有商品打 8 折，請玩家們不要錯過這次的機會了！','活動時間：5 月 20 ~ 5 月 25 日'),
('【英雄聯盟】造型大放送！五個造型半價大優惠！', '優惠活動', 'products_promotions/LOL.jpg', ' 英雄聯盟大型大優惠，五個造型半價出售，千萬不要錯過這次機會。','活動時間：5 月 25 ~ 6 月 30 日'),
-- 新品上架
('【最新商品】7月份，3 款模擬遊戲商品，將於商城上架！', '新品上架', 'new_products/7_sim.jpg', ' 3 款冒險遊戲將於 7 月份於商店上架，分別為：人生、模仿生活、模擬廚師。',''),
('【最新商品】7月份，4 款動作遊戲商品，將於商城上架！', '新品上架', 'new_products/7_action.png', ' 3 款動作遊戲將於 7 月份於商店上架，分別為：黑槍、求生、PUBG2、榮耀士官',''),
('【最新商品】7月份，1 款策略遊戲商品，將於商城上架！', '新品上架', 'new_products/7_strategy.jpg', ' 1 款動作遊戲將於 7 月份於商店上架，分別為：戰爭火線',''),
('【最新商品】8月份，1 款冒險遊戲商品，將於商城上架！', '新品上架', 'new_products/8_avg.jpg', ' 1 款冒險遊戲將於 8 月份於商店上架，分別為：原佛。',''),
('【最新商品】8月份，3 款動作遊戲商品，將於商城上架！', '新品上架', 'new_products/8_action.jpg', ' 3 款射擊遊戲將於 8 月份於商店上架，分別為：風暴、大戰槍、槍王之神。','')