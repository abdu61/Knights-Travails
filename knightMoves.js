export function knightMoves(start, end) {
  // Helper to generate valid moves
  function getValidMoves([x, y]) {
    const moves = [
      [x+2, y+1], [x+2, y-1], [x-2, y+1], [x-2, y-1],
      [x+1, y+2], [x+1, y-2], [x-1, y+2], [x-1, y-2],
    ];
    return moves.filter(([nx, ny]) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8);
  }

  // BFS
  const queue = [[start]];
  const visited = new Set([start.toString()]);

  while (queue.length) {
    const path = queue.shift();
    const current = path[path.length - 1];

    if (current[0] === end[0] && current[1] === end[1]) {
      return path;
    }

    for (const move of getValidMoves(current)) {
      if (!visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push([...path, move]);
      }
    }
  }
  return null; 
}
