class Graph {
    constructor (vertices) {
        this.vertices = vertices;
        this.adjList = new Array(this.vertices);

        for(let i = 0; i < this.vertices; i++) {
            this.adjList[i] = [];
        }
    }

    addEdge (u, v) {
        this.adjList[u].push(v);
        this.adjList[v].push(u);
    }
    
}

function printGraph(graph) {
    for (let v = 0; v < graph.vertices; v++) {
      console.log(`Vertex ${v}`);
      const neighbors = graph.adjList[v];
      console.log(`Neighbors: ${neighbors.join(', ')}`);
    }
  }

function createChessBoard () {
    const vertices = 8 * 8;
    const graph = new Graph(vertices);

    // Implement logic to check for board boundaries here
    for(let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const currentSquare = row * 8 + col;

            const potentialMoves = [[2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [1, -2], [-1, 2], [-1, -2]];

            for (const move of potentialMoves) {
                const newRow = row + move[0];
                const newCol = col + move[1];

                if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                    const neighbourSquare = newRow * 8 + newCol;
                    graph.addEdge(currentSquare, neighbourSquare);
                }
            }
        }
    }

    return graph;
}

function reconstructPath(parent, currentSquare) {
    const path = [];
    while (currentSquare !== -1) {
      path.push([Math.floor(currentSquare / 8), currentSquare % 8]);
      currentSquare = parent[currentSquare];
    }
    return path.reverse(); // Reverse to get path from start to target
  }


function knightMoves (startingPoint, targetPoint) {
    const vertices = 8*8;

    const graph = createChessBoard();

    const queue = [];

    const visited = new Array(vertices);

    const parent = new Array(vertices).fill(-1);

    queue.push(startingPoint[0] * 8 + startingPoint[1]);
    visited[startingPoint[0] * 8 + startingPoint[1]] = true;

    while (queue.length > 0) {
        const currentSquare = queue.shift();

        if (currentSquare === targetPoint [0] * 8 + targetPoint[1]) {
            return reconstructPath(parent, currentSquare);
        }

        for (const neighbor of graph.adjList[currentSquare]) {
            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
                parent[neighbor] = currentSquare;
            }
        }
    }

    return [];
}

console.log(knightMoves([0, 0], [3, 2]));