import Database from "better-sqlite3";

const db = new Database("portfolio.db");

const creditsText = `Artist | Zico, Crush

Production | Bangjaeyeob Film
Director | Bang Jae Yeob @bangjaeyeob, Nany Kim (Nän) @heynanynany
Ad | Ahn Jimin @jimin4hn, Bae Soyeon @sobae8794, Baek Seunghee @seunghz, Ahn Yeoeun @yeorumahn, Jeon Jaemin @kamikacki
Producer | Park Chanyoung @pcypccy, Baek Seunghoon (Hattrick)

D.o.p | Lee Jinhyuk @13rolls
Focus Puller | Shin Donghyeok
2nd | Jeong Gunwoo
3rd | Kim Minsung
Dit | Lee Sooyeong

Gaffer | Oh Jonghwan (High Light) @j.oooooo
1st | Kim Hyunggyoon
2nd | Park Seonghun, Park Kwangho, Kim Taeyang
3rd | Yeom Seunghyuk, Song Seunghun, Kim Seongju, Son Jiwon, Lee Wonjun, Lee Hyeonwoo
Generator | Yu Jinsun

Robot Arm (M.c.c) Operator | Kim Daehong (Axsix)
Robot Arm Assistant | Choi Sejun, Jung Minkyu, Choi Hyunjun, Oh Seungjun, Kim Kidong

Key Grip | Hwang Jiin
1st | Choi Daeheon
2nd | Oh Chihun, Lee Woungbee

Jimmy Jib Operator | Ji Yoongu
Jimmy Jib Assistant | Yoo Jinho, Yoo Seungjun, Yoo Gwanghyun

Production Support | Lee Kyoungjin
Team Leader | Lee Heechan
Team Member | Kim Dabin, Seo Jungyu, Yang Yujin, Woo Beakho, Lee Dongwon, Lee SANGMI

Edit | Bae Soyeon, Jeon Jaemin (Bangjaeyeob Film)

Vfx Studio | Orb Haus @orb.haus
Vfx Supervisor / 3d Artist | Zaddicted
Vfx Producer | T Leena
2d Vfx / Composition | Lamie Doan

2d Clean&beauty | Shin Yejin (Ssss) @ssss__svc
2d Clean&beauty Assistant | Kim Miji

2d Design | Jeon Jaemin

Di | Lucid Colour
Colorist | Na Somi @imosannn
Di Crew | Lee Minkyung
Di Supervisor | Yeom Jiyun
Di Producer | Kim Suhyeon
Di Manager | Park Heejin

Special Thanks To | Kim Namseok @macdoong`;

const result = db.prepare("UPDATE projects SET credits = ? WHERE title LIKE '%ZICO X Crush%'").run(creditsText);
console.log("Updated rows:", result.changes);
