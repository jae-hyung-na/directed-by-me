import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Database from "better-sqlite3";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Database setup
  const db = new Database("portfolio.db");
  db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      category TEXT,
      display_category TEXT,
      video_url TEXT,
      thumbnail_url TEXT,
      role TEXT,
      credits TEXT,
      year TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Seed data if empty
  const count = db.prepare("SELECT COUNT(*) as count FROM projects").get() as { count: number };
  if (count.count === 0) {
    const projects = [
      {
        title: "Crush 'wanderlust'",
        description: "",
        category: "Content",
        display_category: "Music Video",
        video_url: "https://www.youtube.com/embed/EwpdpZQfqEc",
        thumbnail_url: "/001_wanderlust.png",
        role: "Co-Director, Drone Camera Operator",
        credits: `Director | Sungjoo Hwang, Jaehyeong Na

Director Of Photography | Sungjoo Hwang
Drone Camera Operator | Sungjoo Hwang, Jaehyeong Na

Equipment Support | Dongseo Media Center (Busan, Korea)

ⓟ 2016 Amoeba Culture. Distributed by Genie Music, Stone Music Entertainment.
ⓒ 2021 Sungjoo Hwang, Jaehyeong Na. This content was created for non-commercial use.`,
        year: "2021"
      },
      {
        title: "단편.zip '드립을 치다'",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/0AIHgFiI8ow",
        thumbnail_url: "/002_드립을치다.jpg",
        role: "Producer, Content Planning, Color Grading",
        credits: `Producer | Jaehyeong Na
Content Planning | Jaehyeong Na, Youngjin Ahn, Dangchan Park, Sejun Park, Yejin Seo
Written & Directed By | Youngjin Ahn

Director Of Photography | Dangchan Park

Editor | Youngjin Ahn
Additional Editor | Sejun Park, Dangchan Park
Color Grading | Jaehyeong Na

Storyboard Artist | Yejin Seo

Location Support | Dongseo University Dept. of Broadcasting & Media (Busan, Korea), Hwa Odeng & Tteokbokki (Busan, Korea)

© 2021 Youngjin Ahn, Jaehyeong Na, Dangchan Park, Sejun Park, Yejin Seo.`,
        year: "2021"
      },
      {
        title: "단편.zip '빨간불을 기다리며'",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/fkUugFLLl2Q",
        thumbnail_url: "/003_빨간불을기다리며.jpg",
        role: "Producer, Content Planning, Editor",
        credits: `Starring | Yejin Seo, Darok Han

Producer | Jaehyeong Na
Content Planning | Jaehyeong Na, Yejin Seo, Dangchan Park, Sejun Park, Youngjin Ahn
Written & Directed By | Yejin Seo

Director Of Photography | Dangchan Park
Camera Crew | Sejun Park, Youngjin Ahn

Editor | Jaehyeong Na
Color Grading | Dangchan Park

Storyboard Artist | Yejin Seo

© 2021 Yejin Seo, Jaehyeong Na, Dangchan Park, Sejun Park, Youngjin Ahn.`,
        year: "2021"
      },
      {
        title: "단편.zip '짝사랑'",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/scDpz5uCevc",
        thumbnail_url: "/004_짝사랑.png",
        role: "Producer, Content Planning, Director, Editor",
        credits: `Starring | Jaehyeong Na, Sejun Park, Youngjin Ahn

Producer | Jaehyeong Na
Content Planning | Jaehyeong Na, Dangchan Park, Sejun Park, Youngjin Ahn, Yejin Seo
Written & Directed By | Jaehyeong Na

Director Of Photography | Dangchan Park

Editor | Jaehyeong Na
Additional Editor | Dangchan Park
Color Grading | Jaehyeong Na

Storyboard Artist | Yejin Seo

© 2021 Jaehyeong Na, Dangchan Park, Sejun Park, Youngjin Ahn, Yejin Seo.`,
        year: "2021"
      },
      {
        title: "단편.zip '개개풀어지다'",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/",
        thumbnail_url: "/005_개개풀어지다.jpg",
        role: "Producer, Content Planning",
        credits: `Producer | Jaehyeong Na
Content Planning | Jaehyeong Na, Sejun Park, Dangchan Park, Yejin Seo, Youngjin Ahn
Written & Directed By | Sejun Park

Director Of Photography | Dangchan Park

Editor | Sejun Park, Dangchan Park
Color Grading | Sejun Park, Dangchan Park

Storyboard Artist | Yejin Seo

Cast
Male Lead, Narration | Sejun Park
Friend Of Male Lead 1 | Dangchan Park
Friend Of Male Lead 2 | Jaehyeong Na
Laughing Woman | Yejin Seo
Laughing Man | Youngjin Ahn

Location Support | Dongseo University Dept. Of Broadcasting & Media (Busan, Korea)

© 2021 Sejun Park, Jaehyeong Na, Dangchan Park, Yejin Seo, Youngjin Ahn.`,
        year: "2021"
      },
      {
        title: "Navy Swag",
        description: "",
        category: "Content",
        display_category: "Music Video",
        video_url: "https://www.youtube.com/embed/AUM416ObjdA",
        thumbnail_url: "/006_공정병역.png",
        role: "Recording Engineer, Mix & Mastering Engineer",
        credits: `Director | Youngjin Ahn
Director Of Photography | Dangchan Park

Lyrics by Youngjin Ahn
Composed by Casa Milla
Arranged by Casa Milla, Youngjin Ahn
Programming by Casa Milla
Background Vocals by Youngjin Ahn
Rap Arrangement by Jaehyeong Na, Youngjin Ahn
Recorded by Jaehyeong Na at Community Media Center, Busan, Korea
Digital Editing by Jaehyeong Na at HYNG’s ROOM
Mixed by Jaehyeong Na at HYNG’s ROOM
Mastered by Jaehyeong Na at HYNG’s ROOM

© 2021 Youngjin Ahn, Dangchan Park, Jaehyeong Na.`,
        year: "2021"
      },
      {
        title: "나의 피로회복 정류장은 친구들이다",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/dfg31KjxhCc",
        thumbnail_url: "/007_제8회박카스.png",
        role: "Producer, Content Planning, Director, Editor",
        credits: `Production | Iny Studio
Producer | Junbeom Kim, Jaehyeong Na
Content Planning | Junbeom Kim, Jinkyung Park, Youngchan Lee, Jaehyeong Na
Written & Directed By | Junbeom Kim, Jaehyeong Na

Camera Operator | Junbeom Kim

Editor, Color Grading | Jaehyeong Na

Cast
Female Lead | Daeun Jeong
Friend Of Female Lead 1 | Jimin Jeong
Friend Of Female Lead 1 (Voice) | Junbeom Kim
Friend Of Female Lead 2 | Jinkyung Park
Friend Of Female Lead 3, Counter Staff (Voice) | Jaehyeong Na

Equipment Support | Dongseo Media Center (Busan, Korea), Youngjin Ahn
Location Support | 1943 (Nampodong, Busan, Korea)

© 2021 Junbeom Kim, Jaehyeong Na, Jinkyung Park, Youngchan Lee.`,
        year: "2021"
      },
      {
        title: "당신을 위해 마음을 기울이다",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/Cr4rtaENgIE",
        thumbnail_url: "/008_제7회신한.png",
        role: "Director, Editor",
        credits: `Written & Directed By | Jaehyeong Na
Camera Operator | Youngjin Ahn
Editor, 2D Beauty | Jaehyeong Na

Cast
Shinhan Bank Customer | Mingyu Kim
Shinhan Bank Employee, Narration | Jaehyeong Na
Extras | Minjae Song, Youngjin An

© 2021 Jaehyeong Na, Youngjin Ahn.`,
        year: "2021"
      },
      {
        title: "한옥의 멋",
        description: "",
        category: "Content",
        display_category: "Music Video",
        video_url: "https://www.youtube.com/embed/a437hI_ZSxc",
        thumbnail_url: "/009_한옥의멋.png",
        role: "Producer, Co-Director, Editor, Color Grading, Co-wrote, Mix & Mastering Engineer",
        credits: `Producer | Jaehyeong Na
Director | Youngjin Ahn, Jaehyeong Na

Camera Operator | Jaehyeong Na

Editor | Youngjin Ahn, Jaehyeong Na
Color Grading | Jaehyeong Na

Location Support | Gimhae Hanok Experience Hall

Lyrics by Youngjin Ahn
Composed by Casa Milla, Jaehyeong Na, Youngjin Ahn
Arranged by Casa Milla, Youngjin Ahn
Programming by Casa Milla
Background Vocals by Youngjin Ahn
Rap Arrangement by Youngjin Ahn, Jaehyeong Na
Recorded by Youngjin Ahn
Digital Editing by Jaehyeong Na at HYNG’s ROOM
Mixed by Jaehyeong Na at HYNG’s ROOM
Mastered by Jaehyeong Na at HYNG’s ROOM

© 2021 auri (Architecture & Urban Research Institute). Manufactured by Youngjin Ahn, Jaehyeong Na.`,
        year: "2021"
      },
      {
        title: "내가 원하는 삶은 '코로나가 종식된 삶'이다",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/ZK8mDcvYHG8",
        thumbnail_url: "/010_정원삼.jpg",
        role: "Producer, Content Planning, Co-Director, Camera Operator, Editor",
        credits: `Production | Iny Studio
Producer | Jaehyeong Na
Content Planning | Junbeom Kim, Sungjun Kim, Jaehyeong Na
Written & Directed By | Junbeom Kim, Sungjun Kim, Jaehyeong Na

Camera Operator | Junbeom Kim, Jaehyeong Na

Editor | Jaehyeong Na, Sungjun Kim
2D Beauty, Color Grading, Sound Design | Jaehyeong Na

Equipment Support, Location Support | Dongseo Media Center (Busan, Korea)

Cast
News Anchor | Jaehyeong Na
News Reporter | Sungjun Kim
Interviewee | Junbeom Kim

© 2021 Junbeom Kim, Sungjun Kim, Jaehyeong Na.`,
        year: "2021"
      },
      {
        title: "세상의 모든 지식: 시티팝 편",
        description: "",
        category: "Content",
        display_category: "Web Content",
        video_url: "https://www.youtube.com/embed/KVC0RYrUMAY",
        thumbnail_url: "/011_세상의모든지식.png",
        role: "Content Creator",
        credits: `Content Creator | Jaehyeong Na

ⓒ 2021 Manufactured by Jaehyeong Na. This content was created for non-commercial use.`,
        year: "2021"
      },
      {
        title: "이 '호치킨'이 네 치킨이냐?",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/2pveIL9bNF8",
        thumbnail_url: "/012_호치킨.png",
        role: "Producer, Content Planning, Co-Director, Camera Operator, Editor",
        credits: `Production | Iny Studio
Producer | Jaehyeong Na
Content Planning | Hayoon Kim, Jinkyung Park, Jeongup Kan, Jaehyeong Na
Written & Directed By | Jaehyeong Na, Hayoon Kim

Camera Operator | Jaehyeong Na, Hayoon Kim, Jeongup Kang, Jinkyung Park

Editor, Color Grading | Jaehyeong Na

Equipment Support | Sangwoo Lee, Dongseo Media Center (Busan, Korea)
Location Support | Dongseo Media Center (Busan, Korea)

Cast
Female Lead | Jinkyung Park
San Sin Ryung | Jaehyeong Na
Friend Of Female Lead | Hayoon Kim

© 2021 Hayoon Kim, Jinkyung Park, Jeongeup Kang, Jaehyeong Na.`,
        year: "2021"
      },
      {
        title: "지워지지 않는 고정력, 에뛰드 픽싱틴트",
        description: "",
        category: "Content",
        display_category: "Promotional Video",
        video_url: "https://www.youtube.com/embed/JlvgiZuzwkk",
        thumbnail_url: "/013_에뛰드.png",
        role: "Content Planning, Post-Production Specialist",
        credits: `Content Planning | Yeojin Jeon, Yeeun Seo, Dayoung Yoon, Jaehyeong Na, Sooin An
Director | Yeojin Jeon, Yeeun Seo, Dayoung Yoon

Camera Operator | Yeojin Jeon, Yeeun Seo, Jaehyeong Na

Editor | Yeojin Jeon
Post-Production Specialist | Jaehyeong Na

Equipment Support | Youngjin Ahn, Dongseo Media Center (Busan, Korea)

ⓟ 2009 Matt Mulholland Covers Limited. Distributed by The Orchard Enterprises.
ⓒ 2021 Manufactured by Documentary Lab. This content was created for non-commercial use.`,
        year: "2021"
      },
      {
        title: "경청하다",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/SGKiWr0lq3Q",
        thumbnail_url: "/014_경청하다.png",
        role: "Producer, Camera Operator, Lighting, Boom Operator\n2D Clean & Beauty, Sound Design/Mixer, Storyboard Artist",
        credits: `Director, Writer | Gayun Kim, Yerin Park
Assistant Director | Yuri Gu, Jeongmok Kim
Producer | Jaehyeong Na

Camera Operator | Eunbin Jang, Jaehyeong Na
Lighting, Boom Operator | Jeongmok Kim, Jaehyeong Na

Editor, Color Grading | Yerin Park, Gayun Kim
2D Clean & Beauty | Jaehyeong Na
Sound Design/Mixer | Jaehyeong Na

Scripter | Ye-rin Park, Yuri Gu
Storyboard Artist | Jaehyeong Na

Production Accountant | Gayun Kim

Equipment Support | Dongseo Media Center (Busan, Korea)
Location Support | Dongseo University Dept. Of Broadcasting & Media (Busan, Korea), Cafe Nut, Gayun Kim’s Residence, Airbnb
Production Support | Dongseo Media Center, Media Outlet (Moca), Dongseo University Linc 3.0 Business Group

Special Thanks To | Sangwoo Lee, Junghwan Yoon, Eunae Baek, Bada Jeong, Minji Kim, Giyun Yang, Owner Of Cafe Nut

Cast
Yunha Park (Male Cafe Owner) | Yundam Go
Junseok Lee (College Student) | Donggi Lee
Jonggil Kim (Old Man) | Taean Shin

© 2021 Jaehyeong Na, Gayun Kim, Yerin Park, Yuri Gu, Eunbin Jang, Jeongmuk Kim.`,
        year: "2021"
      },
      {
        title: "둘러봐",
        description: "",
        category: "Content",
        display_category: "Music Video",
        video_url: "https://www.youtube.com/embed/YT6YG4m5fs0",
        thumbnail_url: "/015_2030세계박람회.jpg",
        role: "Producer, Content Planning, Co-Director, B Cam Operator\nAdditional Editor, Color Grading\nCo-wrote, Digital Editing, Mix & Mastering Engineer",
        credits: `Producer | Jaehyeong Na
Content Planning | Mingyu Chae, Jaehyeong Na, Youngjin Ahn, Jieun Lee
Director | Mingyu Chae, Jaehyeong Na

Director Of Photography | Mingyu Chae
B Cam Operator | Jaehyeong Na 

Editor | Youngjin Ahn
Additional Editor | Jaehyeong Na, Mingyu Chae
Color Grading | Jaehyeong Na, Mingyu Chae

Still Photographer | Jieun Lee

Equipment Support | Dongseo Media Center (Busan, Korea), Hanbeom Yeo
Location Support | Scotch Egg (Bupyeong Kkangtong Market), Miryang Sundae Dwaeji Gukbap, Wooseong Sikyuk Sikdang

Special Thanks To | Heeyoung An, Miyoung Yu, Hanbeom Yeo, Dongwoo Kim

Lyrics by Youngjin Ahn
Composed by WhiteLIT Beatz, Youngjin Ahn, Jaehyeong Na
Arranged by WhiteLIT Beatz, Youngjin Ahn
Programming by WhiteLIT Beatz
Background Vocals by Youngjin Ahn
Rap Arrangement by Youngjin Ahn
Recorded by Youngjin Ahn
Digital Editing by Jaehyeong Na at HYNG’s ROOM
Mixed by Jaehyeong Na at HYNG’s ROOM
Mastered by Jaehyeong Na at HYNG’s ROOM

© 2022 Mingyu Chae, Jaehyeong Na, Youngjin Ahn, Jieun Lee.`,
        year: "2022"
      },
      {
        title: "나는 모나미로 꿈을 실현한다",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/W2pQSDPi9v0",
        thumbnail_url: "/016_모나미.png",
        role: "Producer, Content Planning, Co-Director, Editor",
        credits: `Producer | Jaehyeong Na
Content Planning | Dohye Kim, Jaehyeong Na, Hyunjeong Song, Soyoung Roh
Director | Jaehyeong Na, Dohye Kim

Camera Operator | Dohye Kim, Hyunjeong Song, Jaehyeong Na

Editor | Jaehyeong Na
Color Grading | Jaehyeong Na, Mingyu Chae

Equipment Support | Mingyu Chae

© 2022 Dohye Kim, Jaehyeong Na, Hyunjung Song, Soyoung Noh.`,
        year: "2022"
      },
      {
        title: "하이틴하면 가장 떠오르는 여돌은?",
        description: "",
        category: "Content",
        display_category: "Web Content",
        video_url: "https://www.youtube.com/embed/__filVF1jI4",
        thumbnail_url: "/017_핵심만.jpg",
        role: "Producer, Content Director, Content Planning",
        credits: `Client | Knn
Supervising Producer | Eunji Kim

Video Production | Dongseo University Dept. Of Broadcasting & Media
Academic Advisor | Professor Jahye Lee

Producer, Contents Director | Jaehyeong Na
Contents Planning | Jaehyeong Na, Sichang Kim
Contents Writer | Sichang Kim

Editor | Yubin Kim

ⓒ 2022 KNN. Manufactured by Dongseo University Dept. of Broadcasting & Media, Busan, Korea.`,
        year: "2022"
      },
      {
        title: "녹차밭에서",
        description: "",
        category: "Content",
        display_category: "Music Video",
        video_url: "https://www.youtube.com/embed/mc09hrXIVDE",
        thumbnail_url: "/018_차 공모전.jpg",
        role: "Producer, Co-wrote, Digital Editing, Mix & Mastering Engineer",
        credits: `Director | Youngjin Ahn
Producer | Jaehyeong Na

Equipment Support | Dohyeong Kim, Seongsan Hanbit Church
Location Support | Seongok Tea House

Special Thanks To | Heedo Park (Owner Of Seongok Tea House), Mingyu Kim

Lyrics by Youngjin Ahn, Jaehyeong Na
Composed by Youngjin Ahn
Arranged by Youngjin Ahn
Background Vocals by Youngjin Ahn
Recorded by Youngjin Ahn
Digital Editing by Jaehyeong Na at HYNG’s ROOM
Mixed by Jaehyeong Na at HYNG’s ROOM
Mastered by Jaehyeong Na at HYNG’s ROOM

© 2022 Mafra. Manufactured by Youngjin Ahn.`,
        year: "2022"
      },
      {
        title: "이게 동원이야~~!",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/euPVO9WKtZQ",
        thumbnail_url: "/019_동원.png",
        role: "Assistant Director, Content Planning",
        credits: `Director | Daehyun Kwon
Assistant Director | Jaehyeong Na
Content Planning | Daehyun Kwon, Hyeonggeon Kim, Jaehyeong Na, Mingyu Chae

Director Of Photography | Mingyu Chae

Editor | Daehyun Kwon
Color Grading | Mingyu Chae, Daehyun Kwon

© 2022 Daehyun Kwon, Mingyu Chae, Hyeonggeon Kim, Jaehyeong Na.`,
        year: "2022"
      },
      {
        title: "니 고민을 말해 BAR 'EP.1 신입회원의 고민'",
        description: "",
        category: "Content",
        display_category: "Web Content",
        video_url: "https://www.youtube.com/embed/UR0KmCJ3lsE",
        thumbnail_url: "/020_니고민을말해봐EP1.png",
        role: "Director Of Photography, Editor, Sound Design/Mixer",
        credits: `Producer, Content Director | Dahyun Go
Content Planning | Dahyun Go, Minseo Jeong, Kun Ko, Minjeong Ko

Director Of Photography | Jaehyeong Na
B Camera Operator | Dahyun Go

Editor, Color Grading | Jaehyeong Na

Sound | Minseo Jeong
Sound Design, Mixer | Jaehyeong Na

Equipment Support | Dongseo Media Center (Busan, Korea)

Special Thanks To | Naeun Kang, Jaehyun Ahn

ⓒ 2022 Manufactured by Documentary Lab. This content was created for non-commercial use.`,
        year: "2022"
      },
      {
        title: "니 고민을 말해 BAR 'EP.2 고학번 회원의 고민'",
        description: "",
        category: "Content",
        display_category: "Web Content",
        video_url: "https://www.youtube.com/embed/dqso72Jflm4",
        thumbnail_url: "/021_니고민을말해봐EP2.png",
        role: "Director Of Photography, Editor, Sound Design/Mixer",
        credits: `Producer, Content Director | Dahyun Go
Content Planning | Dahyun Go, Minseo Jeong, Kun Ko, Minjeong Ko

Director Of Photography | Jaehyeong Na
B Camera Operator | Dahyun Go

Sound | Minseo Jeong
Sound Design, Mixer | Jaehyeong Na

Editor, Color Grading | Jaehyeong Na

Equipment Support | Dongseo Media Center (Busan, Korea)

Special Thanks To | Naeun Kang, Jaehyun Ahn

ⓒ 2022 Manufactured by Documentary Lab. This content was created for non-commercial use.`,
        year: "2022"
      },
      {
        title: "우린 다 조빱이야 마음껏 헤엄쳐",
        description: "",
        category: "Content",
        display_category: "Documentary",
        video_url: "https://www.youtube.com/embed/1_nLEaKM3lE",
        thumbnail_url: "/022_조빱이야.png",
        role: "Assistant Director, Additional Sound Design & Dialogue Editing",
        credits: `Produced, Director | Juhee Seo
Content Planning | Juhee Seo, Seongbin Park 
Content Writer | Seongbin Park
Assistant Director | Jaehyeong Na

Director of Photography | Mingyu Kim
B Camera Operator | Seongwoo Jin

Editor | Seongwoo Jin
Color Grading | Mingyu Kim

Additional Sound Design & Dialogue Editing | Jaehyeong Na

Equipment Support | Dongseo Media Outlet (MOCA), Dongseo University 
Production Support | Dongseo Media Center, Dongseo Media Outlet (MOCA), Dongseo University LINC 3.0 Business Group

Interviewer | Jaeyong Lee, Seonggyu Lee, Yeonghan Woo

ⓒ 2022 Joohee Seo, Seongbin Park, Sungwoo Jin, Mingyu Kim, Jaehyeong Na. Manufactured by Dongseo University Dept. of Broadcasting & Media, Busan, Korea.`,
        year: "2022"
      },
      {
        title: "손해 보지마! 이 바보야! l 2023년에 바뀌는 것",
        description: "",
        category: "Content",
        display_category: "Web Content",
        video_url: "https://www.youtube.com/embed/BXzYSUBLyz4",
        thumbnail_url: "/023_핵심만.jpg",
        role: "Producer, Content Director, Content Planning",
        credits: `Client | KNN
Supervising Producer | Eunji Kim

Video Production | Dongseo University Dept. Of Broadcasting & Media
Academic Advisor | Professor Jahye Lee

Producer, Contents Director | Jaehyeong Na
Contents Planning | Jaehyeong Na, Sichang Kim
Contents Writer | Sichang Kim

Editor | Yubin Kim

ⓒ 2022 KNN. Manufactured by Dongseo University Dept. of Broadcasting & Media, Busan, Korea.`,
        year: "2022"
      },
      {
        title: "TST에서만 만날 수 있지",
        description: "",
        category: "Sound",
        display_category: "Sound",
        video_url: "https://www.youtube.com/embed/KiWv0sTcpkU",
        thumbnail_url: "/024_TST홍보.png",
        role: "Mix & Mastering Engineer",
        credits: `Director | Youngjin Ahn
Camera Operator | Mingyu Chae

Lyrics by Youngjin Ahn
Background Vocals by Youngjin Ahn
Recorded by Youngjin Ahn
Mixed by Jaehyeong Na at SOUNDCAMP
Mastered by Jaehyeong Na at SOUNDCAMP

*Original Song by MINO, Basick, lIlBOI, Hanhae (from the commercial song "버라이어티 T" in released 2014)

ⓒ 2023 Manufactured by Dongseo University Volunteer Club "CCC". This content was created for non-commercial use.`,
        year: "2023"
      },
      {
        title: "Drinking",
        description: "",
        category: "Sound",
        display_category: "Sound",
        video_url: "https://www.youtube.com/embed/yLXMo0s2x2M",
        thumbnail_url: "/025_카페봄봄.png",
        role: "Co-wrote, Digital Editing, Mix & Mastering Engineer",
        credits: `Lyrics by Youngjin Ahn, Jaehyeong Na
Composed by Youngjin Ahn
Arranged by Youngjin Ahn
Background Vocals by Youngjin Ahn
Recorded by Youngjin Ahn
Digital Editing by Jaehyeong Na at HYNG's ROOM
Mixed by Jaehyeong Na at HYNG's ROOM
Mastered by Jaehyeong Na at HYNG's ROOM

Artwork Design | Jaehyeong Na

© 2023 Youngjin Ahn, Jaehyeong Na.`,
        year: "2023"
      },
      {
        title: "\"선생님...! 저 농구가 하고 싶어요\" 농놀 ㄱ?",
        description: "",
        category: "Content",
        display_category: "Web Content",
        video_url: "https://www.youtube.com/embed/VIzm6uaPKOc",
        thumbnail_url: "/026_핵심만.jpg",
        role: "Producer, Content Director, Content Planning, Vocieover Editor",
        credits: `Client | Knn
Supervising Producer | Jinjoo Seok

Video Production | Dongseo University Dept. Of Broadcasting & Media
Academic Advisor | Professor Jahye Lee

Producer, Content Director | Jaehyeong Na
Content Planning | Youngseo Kim, Jaehyeong Na
Content Writer | Youngseo Kim

Editor | Yubin Kim

Voice Over | Youngseo Kim
VO Digital Editing Engineer | Jaehyeong Na

Thumbnail Design | Jaehyeong Na

Production Support | Dongseo University Linc 3.0 Business Group

ⓒ 2023 KNN. Manufactured by Dongseo University Dept. of Broadcasting & Media, Busan, Korea.`,
        year: "2023"
      },
      {
        title: "어디까지 알고있니? 사람보다 더 사람같은 버츄얼 아이돌!",
        description: "",
        category: "Content",
        display_category: "Web Content",
        video_url: "https://www.youtube.com/embed/La1QhPmU5Rs",
        thumbnail_url: "/027_핵심만.jpg",
        role: "Producer, Content Director, Content Planning, Vocieover Editor",
        credits: `Client | Knn
Supervising Producer | Jinjoo Seok

Video Production | Dongseo University Dept. Of Broadcasting & Media
Academic Advisor | Professor Jahye Lee

Producer, Content Director | Jaehyeong Na
Content Planning | Jaehyeong Na, Youngseo Kim
Content Writer | Youngseo Kim

Editor | Yubin Kim

Voice Over | Youngseo Kim
VO Digital Editing Engineer | Jaehyeong Na

Thumbnail Design | Minji Kim

Production Support | Dongseo University Linc 3.0 Business Group

ⓒ 2023 KNN. Manufactured by Dongseo University Dept. of Broadcasting & Media, Busan, Korea.`,
        year: "2023"
      },
      {
        title: "풀뿌리K '부산 야외세트장 현황은?'",
        description: "",
        category: "Sound",
        display_category: "Sound",
        video_url: "https://www.youtube.com/embed/AJ6zZx2pXAE",
        thumbnail_url: "/028_풀뿌리K.jpg",
        role: "Voice Over Recording Engineer, Digital Editing",
        credits: `Client | Kbs

Video Production | Dongseo University Dept. Of Broadcasting & Media
Academic Advisor | Professor Yongsung Kim

Producer, Content Director | Kyungmin Kim
Content Writer | Yeonsu Seo
Director Of Photography | Junghyun Park

Editor | Wonchul Jung

Voice Over | Wonchul Jung
Voice Over Recording Engineer, Digital Editing | Jaehyeong Na

Production Support | Dongseo University Linc 3.0 Business Group

ⓒ 2023 KBS (Busan, Korea). Manufactured by Dongseo University Dept. of Broadcasting & Media, Busan, Korea.`,
        year: "2023"
      },
      {
        title: "벌써 여름 수련회라니",
        description: "",
        category: "Sound",
        display_category: "Sound",
        video_url: "https://www.youtube.com/embed/3UpVGeXKblk",
        thumbnail_url: "/029_부산CCC.jpg",
        role: "Mix & Mastering Engineer",
        credits: `Lyrics by Youngjin Ahn
Composed by Youngjin Ahn
Arranged by Youngjin Ahn

Recored by Youngjin Ahn
Mixed by Jaehyeong Na at SOUNDCAMP
Mastered by Jaehyeong Na at SOUNDCAMP`,
        year: "2023"
      },
      {
        title: "Best Insert",
        description: "",
        category: "Content",
        display_category: "Personal Project",
        video_url: "https://www.youtube.com/embed/f3efHVy6VJA",
        thumbnail_url: "/030_BESTINSRET.png",
        role: "Director, Content Planning, Editor",
        credits: `Director | Jaehyeong Na
Production | Dongseo University Xrt Lab.
Production Leader | Jaehyeong Na
Content Planning | Jaehyeong Na, Suchan Kim, Minje Lee

3D Supervising & Engineering | Sichang Kim
3D Engineering | Jiyun Jang
Motion Capture | Suchan Kim

Production Accountant | Jihyeon Lee

Equipment Support | Dongseo University 3D Convergence Research Center

ⓒ 2023 Manufactured by Dongeo University XRT Lab.`,
        year: "2023"
      },
      {
        title: "새로이",
        description: "",
        category: "Sound",
        display_category: "Sound",
        video_url: "https://portal.moca.or.kr/%ec%83%88%eb%a1%9c%ec%9d%b4/",
        thumbnail_url: "/031_새로이.png",
        role: "Voice Over Recording Engineer, Digital Editing",
        credits: `Producer, DirectorㅣYeonjoo Shin
Content Writer | Sichang Kim

Camera Operator | Dohyun Kim, Sichang Kim, Yeonjoo Shin, Jiyoon Jang

Post-Production Specialist | Gayoon Kim
Opening Title Sequence, CG Design | Gayoon Kim

Voice Over | Dohyun Kim
Voice Over Recording Engineer & Digital Editing | Jaehyeong Na

Production Accountant | Yeonjoo Shin

Equipment Support | Dongseo Media Center (Busan, Korea)
Location Support | Munhyeon-dong Antique Street (Busan, Korea), Shinsegae Antique Art Auction House
Production Support | Dongseo University Clean Archive, Dongseo University Dept. Of Broadcasting & Media, Dongseo Media Center, Media Outlet (MOCA), Dongseo University Linc 3.0 Business Group

Special Thanks to | Hyosoon Jang (Owner of Busan Shinsegae Gallery),
Taesung Kang (Owner of 'Saogi' Busan Antique Shop)
Nahyeong Kim, Junbeom Kim, Jihoon Choi, Jinseop Lim, Minseok Kang

© 2023 Yeonjoo Shin, Sichang Kim, Gayoon Kim. Manufactured by Dongseo University Dept. of Broadcasting & Media, Busan, Korea.`,
        year: "2023"
      },
      {
        title: "우리 소개서: 우리들의 자기 소개서",
        description: "",
        category: "Content",
        display_category: "Documentary",
        video_url: "https://www.youtube.com/embed/jTjDFl2Gt9M",
        thumbnail_url: "/032_우리소개서.png",
        role: "Executive Producer, Director, Content Planning, Day 4, 5, 6 Director Of Photography, Colorist, Sound Design/Mastering",
        credits: `Interviewer | Yongun Im, Jin Namkoong, Yeonho Kim, Mingyu Chae, Minseop Hwang, Minseo Jeong, Minju Kim, Eunji Kim

Executive Producer, Director | Jaehyeong Na
Content Planning | Youngseo Kim, Jaehyeong Na, Yubin Kim
Content Writer | Youngseo Kim

Director Of Photography | Sunwoo Kim
B Camera Operator | Youngjin An (Day 1), Heejin Lee (Day 2), Sichang Kim (Day 2), Ebin Lee (Day 3)
Day 4, 6 Director Of Photography | Jaehyeong Na
Day 5 Director Of Photography | Jaehyeong Na, Yebin Lee

Editor | Yubin Kim
Colorist, Sound Design/Mastering | Jaehyeong Na

Opening Title Sequence | Daeho Kim
CG Design | Minji Kim, Miri Im

Location Support | Department Of Broadcasting & Next-generation Media, Dongseo University Nurungji-tongdak
Equipment Support | Dongseo Media Center, Boogi Rental Dohyun Kim, Mingyu Chae
Production Support | Dongseo Media Center, Dongseo Media Outlet (Moca), Dongseo University Linc 3.0 Business Group

Special Thanks To | Professor Misun Park, Professor Jongseo Oh, Graduation Project Team 6 & 8, Seongwoo Jin, Juhee Seo, Mingyu Kim, Jaehyeon An, Myeongjin Kim

© 2023 Jaehyeong Na, Youngseo Kim, Yubin Kim, Sunwoo Kim. Manufactured by Dongseo University Dept. of Broadcasting & Media, Busan, Korea.`,
        year: "2023"
      },
      {
        title: "West Wars",
        description: "",
        category: "Content",
        display_category: "Thriller Film",
        video_url: "https://www.youtube.com/embed/r6rGO9YU4Ms",
        thumbnail_url: "/033_WestWars.png",
        role: "Project Management, Content Planning, Motion Capture Engineer, Sound Design & SFX Editor",
        credits: `Director | Minje Lee
Project Management | Minseop Hwang, Jaehyeong Na
Content Planning | Minje Lee, Sichang Kim, Jaehyeong Na

Motion Capture Studio | Dongseo University 3D Convergence Research Center
Motion Capture Supervisor | Sichang Kim
Motion Capture Engineer | Jaehyeong Na, Woohyun Kim
Motion Capture Actor | Sichang Kim, Minje Lee, Woohyun Kim

2d Vfx | Woohyun Kim
Additional Visual Effects | Sichang Kim

3d Supervising & Engineering | Sichang Kim
3d Animation | Sichang Kim
Map Producer | Minje Lee

Sound Design & SFX Editor | Jaehyeong Na

Production Support | Dongseo University Linc 3.0 Business Group

ⓒ  2023 Minje Lee, Sichang Kim, Jaehyeong Na, Woohyun Kim, Minseop Hwang.`,
        year: "2023"
      },
      {
        title: "EBS 평생학교 '진짜 부산을 만나다'",
        description: "",
        category: "Content",
        display_category: "Television",
        video_url: "https://www.youtube.com/embed/4DLMOH0Sg9U?start=3",
        thumbnail_url: "/034_평생학교.jpg",
        role: "Co-Director, Color Grading",
        credits: `Client | Ebs

Production | Dongseo University Dept. Of Broadcasting & Media
Executive Producer | Professor Misun Park, Professor Jahye Lee 
Producer, Content Director | Minju Kim
Co-Director | Jaehyeong Na
Content Writer | Minju Kim, Sumin Sung

Director Of Photography | Mingyu Chae, Junbeom Kim

Editor | Hyejin Nam
Color Grading | Mingyu Chae, Jaehyeong Na

Equipment Support | Dongseo Media Center (Busan, Korea)
Production Support | Dongseo University Linc 3.0 Business Group, Dongseo Media Center

ⓒ 2024 EBS. Manufactured by Dongseo University Dept. of Broadcasting & Media, Busan, Korea.`,
        year: "2024"
      },
      {
        title: "안영진 Single '졸업이라니'",
        description: "",
        category: "Sound",
        display_category: "Sound",
        video_url: "https://www.youtube.com/embed/rpfYI3mXFYo",
        thumbnail_url: "/035_졸업이라니.jpg",
        role: "Recording Engineer (Track 3), Digital Editing (Track 1, 3), Mixing Engineer (Track 3), Mastering Engineer (Track 2, 3), A&R Producer, Promotion Planning & Design, Art Design",
        credits: `Artist | Youngjin Ahn
Executive Producer | Youngjin Ahn
Album Producer | Youngjin Ahn

Recording Engineer | Youngjin Ahn, Jaehyeong Na at SOUNDCAMP
Digital Editing Engineer | Jaehyeong Na at SOUNDCAMP, Youngjin Ahn
Mixing Engineer | Lia Lee at Lia Sounds, Youngjin Ahn, Jaehyeong Na at SOUNDCAMP
Mastering Engineer | Jaehyeong Na at SOUNDCAMP, Lia Lee at Lia Sounds

A&R Producer | Jaehyeong Na
Promotion Planning & Design | Jaehyeong Na

Photography | Mingyu Chae
Music Video Director | Youngjin Ahn
Music Video Cinematographer | Mingyu Chae
Art Direction | Youngjin Ahn
Art Design | Youngjin Ahn, Jaehyeong Na`,
        year: "2024"
      },
      {
        title: "In Your Love",
        description: "",
        category: "Content",
        display_category: "Music Video",
        video_url: "https://www.youtube.com/embed/8gvbCFfOrew",
        thumbnail_url: "/036_GAMFF.png",
        role: "Director, Production Leader, Camera Operator, Editor, Co-wrote, Mastering Engineer",
        credits: `Director, Production Leader | Jaehyeong Na 
Camera Operator | Jaehyeong Na, Sichang Kim, Hyogyeong Kim, Suhyeon Shin

Lyrics by ChatGPT, Jaehyeong Na
Composed by Suno AI
Arranged by Suno AI
Mastered by Jaehyeong Na @ SOUNDCAMP

© 2024 Na Jaehyeong, Kim Sichang, Kim Hyogyung, Shin Suhyun. Manufactured by Dongseo University XRT Lab.`,
        year: "2024"
      },
      {
        title: "우리의 계절",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/HBZ5WPhk0Zo",
        thumbnail_url: "/037_제10회신한.png",
        role: "Producer, Content Planning, Poetry Writer, Color Grading, 2D Comp, Beauty, Poster & End Titles Design,\nVoice Over Recording Engineer & Digital Editing",
        credits: `Producer | Jaehyeong Na
Content Planning | Suhyeon Heo, Jaehyeong Na, Hyogyeong Kim, Minjae Kim

Starring | Siwon Jin, Sieun Jin

Director, Camera Operator | Suhyeon Heo
Assistant Director | Hyogyeong Kim
Poetry Writer | Jaehyeong Na, Hyogyeong Kim

Editor | Suhyeon Heo
Color Grading, 2D Comp, Beauty | Jaehyeong Na

Voice Over | Minjae Kim
Voice Over Recording Engineer & Digital Editing | Jaehyeong Na

Poster & End Titles Design | Jaehyeong Na

Equipment Support | Dongseo University XRT Lab, Sichang Kim, Dongseo Media Center
Production Support | Dongseo University Regional Activation Project Group

Special Thanks To Mingyu Chae, Honey Homebee (Samjung Tower)

© 2024 Soohyun Heo, Jaehyeong Na, Hyogyung Kim, Minjae Kim.`,
        year: "2024"
      },
      {
        title: "안영진 Single '따라가보자고'",
        description: "",
        category: "Sound",
        display_category: "Sound",
        video_url: "https://www.youtube.com/embed/jw0FpHyKs2U",
        thumbnail_url: "/038_따라가보자고.jpg",
        role: "Producer, Recording Engineer, Digital Editing, Mix & Mastering Engineer",
        credits: `Artist | Youngin Ahn
Executive Producer | Youngin Ahn

Producer | Jaehyeong Na
Recording Engineer | Youngin Ahn, Jaehyeong Na at SOUNDCAMP
Digital Editing Engineer | Jaehyeong Na at SOUNDCAMP
Mixing Engineer | Jaehyeong Na at SOUNDCAMP
Mastering Engineer | Jaehyeong Na at SOUNDCAMP`,
        year: "2025"
      },
      {
        title: "The Smoke",
        description: "",
        category: "Content",
        display_category: "Short Film",
        video_url: "https://www.youtube.com/embed/HUGguG_yr3w",
        thumbnail_url: "/039_TheSmoke.png",
        role: "Director, Editor",
        credits: `Production | Dongseo University XRT Lab
Director | Jaehyeong Na

Director Of Photography | Mingyu Chae
Camera Crew | Sichang Kim, Minjae Kim, Suhyeon Heo, Hyogyeong Kim

Editor | Jaehyeong Na
Color Grading, 2D Clean & Beauty | Jaehyeong Na

Equipment Support | Dongseo Media Center (Busan, South Korea)

ⓟ Shigeru Umebayashi performing Yumeji's Theme by First Name Soundtracks., Lantis Company Limited.
ⓒ 2026 Manufactured by Dongseo University XRT Lab. This content was created for non-commercial use.`,
        year: "2026"
      }
    ];

    const insert = db.prepare(`
      INSERT INTO projects (title, description, category, display_category, video_url, thumbnail_url, role, credits, year)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const p of projects) {
      insert.run(p.title, p.description, p.category, p.display_category, p.video_url, p.thumbnail_url, p.role, p.credits, p.year);
    }
    console.log("Database seeded with projects.");
  }

  app.use(express.json());

  // API Routes
  app.get("/api/projects", (req, res) => {
    const projects = db.prepare("SELECT * FROM projects ORDER BY id DESC").all();
    res.json(projects);
  });

  app.get("/api/projects/:id", (req, res) => {
    const project = db.prepare("SELECT * FROM projects WHERE id = ?").get(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  });

  app.post("/api/projects", (req, res) => {
    const { title, description, category, display_category, video_url, thumbnail_url, role, credits, year } = req.body;
    const result = db.prepare(`
      INSERT INTO projects (title, description, category, display_category, video_url, thumbnail_url, role, credits, year)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(title, description, category, display_category, video_url, thumbnail_url, role, credits, year);
    res.json({ id: result.lastInsertRowid });
  });

  app.put("/api/projects/:id", (req, res) => {
    const { title, description, category, display_category, video_url, thumbnail_url, role, credits, year } = req.body;
    db.prepare(`
      UPDATE projects 
      SET title = ?, description = ?, category = ?, display_category = ?, video_url = ?, thumbnail_url = ?, role = ?, credits = ?, year = ?
      WHERE id = ?
    `).run(title, description, category, display_category, video_url, thumbnail_url, role, credits, year, req.params.id);
    res.json({ success: true });
  });

  app.delete("/api/projects/:id", (req, res) => {
    db.prepare("DELETE FROM projects WHERE id = ?").run(req.params.id);
    res.json({ success: true });
  });

  // Simple Auth (Mock)
  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin123") {
      res.json({ token: "mock-token-123" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
