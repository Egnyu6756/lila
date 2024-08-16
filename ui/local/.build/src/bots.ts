import * as fs from 'node:fs';

const bots = [
  {
    uid: '#terrence',
    version: 4,
    author: 'admin',
    name: 'Terrence',
    description: 'Terrence just learned how the pieces move. Now he wants blood.',
    image: 'terrence.webp',
    ratings: {
      classical: 700,
    },
    books: [{ key: 'Performance', weight: 1 }],
    zero: { multipv: 1, net: 'tinygyal-8.pb' },
    operators: {},
    sounds: {},
  },
  {
    uid: '#tbone',
    version: 4,
    author: 'admin',
    name: 'T-Bone',
    description: "T-Bone Duplexus is a retired professional alligator wrestler. He's not so good at chess.",
    image: 't-bone.webp',
    ratings: { classical: 800 },
    books: [{ key: 'komodo', weight: 1 }],
    zero: { multipv: 1, net: 'naise700.pb' },
    operators: {},
    sounds: {},
  },
  {
    uid: '#nacho',
    version: 4,
    author: 'admin',
    name: 'Nacho',
    description: 'Nacho might try to cheese you.',
    image: 'nacho.webp',
    ratings: { classical: 900 },
    books: [
      { key: 'varied', weight: 1 },
      { key: 'komodo', weight: 1 },
    ],
    zero: { multipv: 1, net: 'nocap2000.pb' },
    operators: {},
    sounds: {},
  },
  {
    uid: '#marco',
    version: 3,
    author: 'admin',
    name: 'Marco',
    description: 'They never asked Marco to star in a video game. He is not pleased.',
    image: 'marco.webp',
    ratings: { classical: 1000 },
    books: [
      { key: 'gm2600', weight: 1 },
      { key: 'Performance', weight: 1 },
    ],
    zero: { multipv: 1, net: 'tinygyal-8.pb' },
    operators: {},
    sounds: {},
  },
  {
    uid: '#ghost',
    version: 3,
    author: 'admin',
    name: 'Ghost',
    description: 'Ghost was kidnapped as a young grandmaster and raised by a tribe of beginners.',
    image: 'ghost.webp',
    ratings: { classical: 1100 },
    books: [
      { key: 'final-book', weight: 1 },
      { key: 'KomodoVariety', weight: 1 },
    ],
    zero: { multipv: 1, net: 'evilgyal-6.pb' },
    operators: {},
    sounds: {},
  },
  {
    uid: '#maia',
    version: 4,
    author: 'admin',
    name: 'Maia',
    description: 'Maia was a famous author before she began modeling for Elle (c0).',
    image: 'maia.webp',
    ratings: { classical: 1200 },
    books: [
      { key: 'gm2600', weight: 1 },
      { key: 'komodo', weight: 1 },
    ],
    zero: { multipv: 1, net: 'maia-1700.pb' },
    operators: {},
    sounds: {},
  },
  {
    uid: '#gerard',
    version: 4,
    author: 'admin',
    name: 'Gerard',
    description: 'It appears that Gerard has brought a sword to a chess match.',
    image: 'gerard.webp',
    ratings: { classical: 1300 },
    books: [
      { key: 'gm2600', weight: 1 },
      { key: 'komodo', weight: 1 },
    ],
    zero: { multipv: 1, net: 'maia-1800.pb' },
    operators: {},
    sounds: {},
  },
  {
    uid: '#bionica',
    version: 5,
    author: 'admin',
    name: 'Bionica',
    description: 'Bionica was programmed with a full range of emotions, but she prefers contempt.',
    image: 'bionica.webp',
    ratings: { classical: 1400 },
    books: [
      { key: 'gm2600', weight: 1 },
      { key: 'komodo', weight: 1 },
    ],
    zero: { multipv: 1, net: 'maia-1900.pb' },
    operators: {},
    sounds: {},
  },
  {
    uid: '#mitsoko',
    version: 5,
    author: 'admin',
    name: 'Mitsoko',
    description: 'Mitsoko, like most anime women, is an inexplicably powerful warrior.',
    image: 'mitsoko.webp',
    ratings: { classical: 1500 },
    fish: { multipv: 12, by: { depth: 12 } },
    books: [],
    operators: {},
    sounds: {},
  },
  {
    uid: '#spectre',
    version: 3,
    author: 'admin',
    name: 'Spectre',
    description: 'Spectre will strike without warning. You have been warned.',
    image: 'spectre.webp',
    ratings: { classical: 1600 },
    fish: { multipv: 1, by: { depth: 10 } },
    books: [],
    operators: {},
    sounds: {},
  },
  {
    uid: '#aurora',
    version: 4,
    author: 'admin',
    name: 'Aurora',
    description: 'Aurora can see the future. She sees your defeat.',
    image: 'aurora.webp',
    ratings: { classical: 1700 },
    fish: { multipv: 12, by: { depth: 12 } },
    books: [],
    operators: {},
    sounds: {},
  },
  {
    uid: '#hanzo',
    version: 4,
    author: 'admin',
    name: 'Hanzo',
    description: 'Hanzo will not rest until he has defeated you. But then he will rest.',
    image: 'nullzo.webp',
    ratings: { classical: 1800 },
    zero: { multipv: 1, net: 'badgyal-8.pb' },
    books: [],
    operators: {},
    sounds: {},
  },
  {
    uid: '#eliza',
    version: 3,
    author: 'admin',
    name: 'Eliza',
    description: "Some say Eliza is an engine, but that's probably just transistor bias.",
    image: 'eliza.webp',
    ratings: { classical: 1900 },
    zero: { multipv: 1, net: 'badgyal-8.pb' },
    books: [],
    operators: {},
    sounds: {},
  },
  {
    uid: '#thinman',
    version: 3,
    author: 'admin',
    name: 'Thinman',
    description: "Thinman is not your friend. That's why he is pointing a laser gun at your face.",
    image: 'thinman.webp',
    ratings: { classical: 2000 },
    zero: { multipv: 1, net: 'evilgyal-6.pb' },
    books: [],
    operators: {},
    sounds: {},
  },
  {
    uid: '#listress',
    version: 4,
    author: 'admin',
    name: 'Listress',
    description: 'You are a wretched, pitiful worm. Listress will not be merciful.',
    image: 'listress.webp',
    ratings: { classical: 2100 },
    zero: { multipv: 1, net: 'tinygyal-8.pb' },
    books: [],
    operators: {},
    sounds: {},
  },
];

function main() {
  fs.writeFileSync('../json/local.bots.json', JSON.stringify(bots, null, 2));
}

main();
