import { knightMoves } from './knightMoves.js';
import readline from 'readline';

// Simple UI simulation:
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter start coordinate (e.g. 0,0): ', (startStr) => {
  const [sx, sy] = startStr.split(',').map(Number);
  rl.question('Enter end coordinate (e.g. 7,7): ', (endStr) => {
    const [ex, ey] = endStr.split(',').map(Number);
    const path = knightMoves([sx, sy], [ex, ey]);
    console.log(`You made it in ${path.length - 1} moves! Here is your path:`);
    path.forEach(pos => console.log(pos));
    rl.close();
  });
});
