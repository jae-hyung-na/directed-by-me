import Database from "better-sqlite3";

const db = new Database("portfolio.db");

const credits = `Artist | Zico, Crush

Production | Bangjaeyeob Film
Director | Bang Jae Yeob, Nany Kim (Nän)
Ad | Ahn Jimin, Bae Soyeon, Baek Seunghee, Ahn Yeoeun, Jeon Jaemin
Producer | Park Chanyoung, Baek Seunghoon (Hattrick)

Director Of Photography | Lee Jinhyuk
Focus Puller | Shin Donghyeok
2nd | Jeong Gunwoo
3rd | Kim Minsung
Dit | Lee Sooyeong

Gaffer | Oh Jonghwan (High Light)
1st | Kim Hyunggyoon
2nd | Park Seonghun, Park Kwangho, Kim Taeyang
3rd | Yeom Seunghyuk, Song Seungeun, Kim Seongju, Son Jiwon, Lee Wonjun, Lee Hyeonwoo
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

Vfx Studio | Orb Haus
Vfx Supervisor / 3d Artist | Zaddicted
Vfx Producer | T Leena
2d Vfx / Composition | Lamie Doan

2d Clean&beauty | Shin Yejin (Ssss)
2d Clean&beauty Assistant | Kim Miji

2d Design | Jeon Jaemin

Di | Lucid Colour
Colorist | Na Somi
Di Crew | Lee Minkyung
Di Supervisor | Yeom Jiyun
Di Producer | Kim Suhyeon
Di Manager | Park Heejin

Special Thanks To | Kim Namseok`;

const result = db.prepare("UPDATE projects SET title = ?, credits = ?, thumbnail_url = ?, description = '', role = '' WHERE id = 2").run(
  "ZICO, Crush 'Yin and Yang'",
  credits,
  "AY.jpg"
);

console.log("Updated rows:", result.changes);
