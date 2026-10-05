export interface Player {
  id: string;
  name: string;
  number: string;
  role: string;
  badge: string;
  category: 'mid' | 'att' | 'def' | 'gk';
  award: string;
  nationality: string;
  age: number;
  appearances: number;
  photo: string;
  goals: number;
  assists: number;
  passAcc: string;
  motm: number;
  stats: {
    pace: number;
    shooting: number;
    passing: number;
    dribble: number;
    defending: number;
    physical: number;
  };
  bio: string;
  strengths: string[];
}

export const PLAYERS_DATA: Record<string, Player> = {
  bellingham: {
    id: 'bellingham',
    name: 'JUDE BELLINGHAM',
    number: '#5',
    role: 'CENTRAL ATTACKING MIDFIELDER',
    badge: 'CAM',
    category: 'mid',
    award: 'MAN OF THE MATCH · UCL',
    nationality: 'ENGLAND',
    age: 21,
    appearances: 38,
    photo: 'https://www.lequipe.fr/_medias/img-photo-jpg/le-milieu-de-terrain-du-real-madrid-jude-bellingham-lors-du-match-de-liga-contre-osasuna-le-7-octobr/1500000001851041/374:13,1668:1308-828-828-75/a0479.jpg',
    goals: 24,
    assists: 12,
    passAcc: '87%',
    motm: 6,
    stats: { pace: 84, shooting: 85, passing: 86, dribble: 88, defending: 78, physical: 88 },
    bio: 'A generational midfielder blending physical dominance with refined playmaking and clutch late-arriving box entries.',
    strengths: ['Late Box Arrivals', 'Ball Retention in Traffic', 'Aerial Threat', 'Leadership & Clutch Finishing']
  },
  mbappe: {
    id: 'mbappe',
    name: 'KYLIAN MBAPPÉ',
    number: '#9',
    role: 'CENTRE FORWARD · STRIKER',
    badge: 'CF',
    category: 'att',
    award: 'UCL TOP SCORER CANDIDATE',
    nationality: 'FRANCE',
    age: 25,
    appearances: 35,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkip0V0UI7p1sQp97nsfa4lEaZiHrxkytwIONLQFsFffIWiRN4nuJ8Tqw&s=10',
    goals: 28,
    assists: 7,
    passAcc: '89%',
    motm: 8,
    stats: { pace: 98, shooting: 93, passing: 82, dribble: 94, defending: 42, physical: 80 },
    bio: 'Electrifying pace, laser-guided finishing, and unmatched acceleration in defensive transitions.',
    strengths: ['Explosive Sprint Speed (36.2 km/h)', 'Devastating 1v1', 'Clinical Left & Right Finishing', 'Counter Attack Transitions']
  },
  vinicius: {
    id: 'vinicius',
    name: 'VINÍCIUS JR.',
    number: '#7',
    role: 'LEFT WINGER · ATTACKER',
    badge: 'LW',
    category: 'att',
    award: "BALLON D'OR CONTENDER",
    nationality: 'BRAZIL',
    age: 24,
    appearances: 39,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSN2ne1eD-gWBZmTE5D_3ow5fLkfDU6-THcLqrDDyXrQJczaQrFvQR5W8&s=10',
    goals: 21,
    assists: 11,
    passAcc: '84%',
    motm: 7,
    stats: { pace: 97, shooting: 87, passing: 84, dribble: 96, defending: 40, physical: 76 },
    bio: 'The ultimate tormentor of defensive lines with mesmerizing Brazilian flair, rapid change of direction, and decisive big-game goals.',
    strengths: ['Unpredictable Dribbling', 'Cut-in Trivela Crosses', 'Championship Final Decider', 'High-speed Agility']
  },
  valverde: {
    id: 'valverde',
    name: 'FEDE VALVERDE',
    number: '#8',
    role: 'BOX-TO-BOX MIDFIELDER',
    badge: 'CM',
    category: 'mid',
    award: 'TIRELESS ENGINE OF THE SQUAD',
    nationality: 'URUGUAY',
    age: 26,
    appearances: 41,
    photo: 'https://www.reuters.com/resizer/v2/K5LDTS36WNMLDG7YUIB7FHHUME.jpg?auth=a9503dc8d1bfeb2b3229544a6e0212234b52484493d2aa4366af4dafce9b0372&height=2400&width=1920&quality=80&smart=true',
    goals: 8,
    assists: 9,
    passAcc: '92%',
    motm: 4,
    stats: { pace: 91, shooting: 86, passing: 89, dribble: 85, defending: 84, physical: 92 },
    bio: 'El Halcón covers every blade of grass with immense stamina, missile-like long-range cannon strikes, and relentless tactical pressing.',
    strengths: ['Long-Range Cannon Shots', 'Relentless Press Recovery', 'Stamina & Covering Distance', 'High Tactical Flexibility']
  },
  guler: {
    id: 'guler',
    name: 'ARDA GÜLER',
    number: '#15',
    role: 'ATTACKING PLAYMAKER',
    badge: 'AM',
    category: 'mid',
    award: 'GOLDEN BOY CANDIDATE',
    nationality: 'TURKEY',
    age: 19,
    appearances: 26,
    photo: 'https://iasbh.tmgrup.com.tr/fd8d4f/1200/1200/134/0/668/534?u=https://isbh.tmgrup.com.tr/sb/album/2026/09/10/arda-guler-ile-anlasma-saglandi-resmi-aciklama-bekleniyor-1789052088925.jpeg',
    goals: 6,
    assists: 6,
    passAcc: '94%',
    motm: 2,
    stats: { pace: 78, shooting: 82, passing: 91, dribble: 89, defending: 52, physical: 68 },
    bio: 'Sublime left foot with surgical vision in tight spaces, pinpoint curled finishes, and elegant tempo orchestration.',
    strengths: ['Surgical Key Passes', 'Dead-Ball Mastery', 'Pocket Space Manipulation', 'High Finishing Efficiency']
  },
  rodrygo: {
    id: 'rodrygo',
    name: 'RODRYGO GOES',
    number: '#11',
    role: 'RIGHT WINGER · FORWARD',
    badge: 'RW',
    category: 'att',
    award: 'MR. CHAMPIONS LEAGUE',
    nationality: 'BRAZIL',
    age: 23,
    appearances: 37,
    photo: 'https://www.football-espana.net/wp-content/uploads/2026/01/real-madrid-v-atletico-madrid-spanish-super-cup.jpg',
    goals: 17,
    assists: 10,
    passAcc: '88%',
    motm: 5,
    stats: { pace: 92, shooting: 86, passing: 85, dribble: 91, defending: 46, physical: 74 },
    bio: 'Magical touch in small areas with historic clutch Champions League instinct and ice-cold composure.',
    strengths: ['Clutch UCL Instincts', 'Tight-space Combination', 'Both-Footed Threat', 'Off-ball Intelligence']
  }
};

export interface Trophy {
  id: string;
  name: string;
  count: number;
  subtitle: string;
  tag: string;
  tagColor: string;
  image?: string;
  icon?: string;
  years: number[];
  notableFinals: { year: number; opponent: string; score: string; venue: string }[];
  description: string;
}

export const TROPHIES_DATA: Trophy[] = [
  {
    id: 'ucl',
    name: 'UEFA Champions League',
    count: 15,
    subtitle: 'KINGS OF EUROPE',
    tag: '15TH IN LONDON',
    tagColor: 'bg-primary text-black',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1rhfgqTU71w7hQPH1IoUs4WwLrxd8BRHJua-tpCShGD4vtSUsNQakyn2OI3V6CeNQoXLp4EQOpyjZq3aEzmplyV3kusCEG6JC6H0gv2f4mfLoUUSOI25Ki3pBpq4MjdAyPpGjw0iRzhnEREDk-KUseNO7IrQA6rx43fKx9tf_g6va1-zu1UejIlWcmKxJBmq2zqE-DklvgHLD3Bre9SbNDBr85vkUb1QRMxF74NldnYrcQWA4PuFAsQ',
    years: [1956, 1957, 1958, 1959, 1960, 1966, 1998, 2000, 2002, 2014, 2016, 2017, 2018, 2022, 2024],
    notableFinals: [
      { year: 2024, opponent: 'Borussia Dortmund', score: '2 – 0', venue: 'Wembley Stadium, London' },
      { year: 2022, opponent: 'Liverpool FC', score: '1 – 0', venue: 'Stade de France, Paris' },
      { year: 2018, opponent: 'Liverpool FC', score: '3 – 1', venue: 'NSC Olimpiyskiy, Kyiv' },
      { year: 2017, opponent: 'Juventus', score: '4 – 1', venue: 'Millennium Stadium, Cardiff' },
      { year: 2016, opponent: 'Atlético Madrid', score: '1 – 1 (5-3 pens)', venue: 'San Siro, Milan' },
      { year: 2014, opponent: 'Atlético Madrid', score: '4 – 1 (aet)', venue: 'Estádio da Luz, Lisbon' },
      { year: 2002, opponent: 'Bayer Leverkusen', score: '2 – 1', venue: 'Hampden Park, Glasgow' },
      { year: 1960, opponent: 'Eintracht Frankfurt', score: '7 – 3', venue: 'Hampden Park, Glasgow' }
    ],
    description: 'The eternal relationship with European royalty. Real Madrid won the first five editions (1956-1960) and holds more than double the trophies of any other club in football history.'
  },
  {
    id: 'laliga',
    name: 'La Liga Titles',
    count: 36,
    subtitle: 'SPANISH CHAMPIONS',
    tag: 'REIGNING CAMPEÓN',
    tagColor: 'bg-blue-600 text-white',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNMuE1jZUb0RJYSmQAmdjPOY2fPZQgzF6Lvaz8MfoOPgWjnK-ohnlHPnTAiP2JwCB3PgRXJMHOyZEKge2vd3Gb6w7Od61tUw6mTx2g-5YpoOSglJQSQ2Fn-JjphIJBPzdDw0OiBUTttCIud76QyBeh8slkVMaq70AgrEfXDskIdF_aCY4s-NKpC4VzD7erHPJaecSbJUAGh_8RzQY4-T7B1GZKVtrjkd8OOZv3P-Jrto2lykUl9RdMcQ',
    years: [
      1932, 1933, 1954, 1955, 1957, 1958, 1961, 1962, 1963, 1964, 1965, 1967, 1968, 1969, 1972, 1975,
      1976, 1978, 1979, 1980, 1986, 1987, 1988, 1989, 1990, 1995, 1997, 2001, 2003, 2007, 2008, 2012,
      2017, 2020, 2022, 2024
    ],
    notableFinals: [
      { year: 2024, opponent: '38 Matchday Campaign', score: '95 Pts (Only 1 loss)', venue: 'Santiago Bernabéu' },
      { year: 2022, opponent: '38 Matchday Campaign', score: '86 Pts Champion', venue: 'Santiago Bernabéu' },
      { year: 2012, opponent: 'Liga de los 100 puntos', score: '100 Pts (121 goals)', venue: 'Santiago Bernabéu' }
    ],
    description: 'Thirty-six national league crowns affirm Real Madrid as the benchmark of consistency, winning championships across ten consecutive decades.'
  },
  {
    id: 'copadelrey',
    name: 'Copa del Rey',
    count: 20,
    subtitle: 'SPANISH CUP HONOURS',
    tag: 'COPA DE ESPAÑA',
    tagColor: 'bg-primary/20 text-primary border border-primary/30',
    image: 'https://i.imgur.com/geG9A12.png',
    icon: 'shield',
    years: [1905, 1906, 1907, 1908, 1917, 1934, 1936, 1946, 1947, 1962, 1970, 1974, 1975, 1980, 1982, 1989, 1993, 2011, 2014, 2023],
    notableFinals: [
      { year: 2023, opponent: 'CA Osasuna', score: '2 – 1', venue: 'La Cartuja, Seville' },
      { year: 2014, opponent: 'FC Barcelona', score: '2 – 1 (Bale 85\')', venue: 'Mestalla, Valencia' },
      { year: 2011, opponent: 'FC Barcelona', score: '1 – 0 (aet)', venue: 'Mestalla, Valencia' }
    ],
    description: 'From winning four consecutive cups between 1905 and 1908 to Gareth Bale’s legendary sprint at Mestalla and Rodrygo’s double in Seville.'
  },
  {
    id: 'cwc',
    name: 'FIFA Club World Cups',
    count: 5,
    subtitle: 'GLOBAL TRIUMPHS',
    tag: 'INTERCONTINENTAL',
    tagColor: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    image: 'https://i.imgur.com/ARQEfsS.png',
    icon: 'public',
    years: [2014, 2016, 2017, 2018, 2022],
    notableFinals: [
      { year: 2022, opponent: 'Al-Hilal', score: '5 – 3', venue: 'Prince Moulay Abdellah Stadium, Rabat' },
      { year: 2018, opponent: 'Al Ain', score: '4 – 1', venue: 'Zayed Sports City Stadium, Abu Dhabi' },
      { year: 2017, opponent: 'Grêmio', score: '1 – 0', venue: 'Zayed Sports City Stadium, Abu Dhabi' },
      { year: 2016, opponent: 'Kashima Antlers', score: '4 – 2 (aet)', venue: 'International Stadium, Yokohama' },
      { year: 2014, opponent: 'San Lorenzo', score: '2 – 0', venue: 'Stade de Marrakech, Marrakesh' }
    ],
    description: 'Unchallenged champions of the globe, having conquered clubs from all continents in South America, Asia, Africa, and North America.'
  }
];

export interface NotificationItem {
  id: string;
  title: string;
  desc: string;
  time: string;
  read: boolean;
  category: 'tickets' | 'match' | 'club';
}

export const NOTIFICATIONS_DATA: NotificationItem[] = [
  {
    id: '1',
    title: 'UCL Knockout Tickets: Priority Window Open',
    desc: 'Madridista Premium members have exclusive 48h early reservation for Real Madrid vs Borussia Dortmund at the Santiago Bernabéu.',
    time: '15m ago',
    read: false,
    category: 'tickets'
  },
  {
    id: '2',
    title: 'Carlo Ancelotti Post-Match Press Room',
    desc: 'Tactical analysis from Valdebebas following the 3-1 victory in El Clásico: "The verticality with Jude and Kylian was devastating."',
    time: '2h ago',
    read: false,
    category: 'match'
  },
  {
    id: '3',
    title: 'Bernabéu 360 SkyBar 980 Re-Opening',
    desc: 'New reservation dates announced for VIP matchday hospitality atop the 10th floor panoramic terrace.',
    time: '5h ago',
    read: true,
    category: 'club'
  }
];
