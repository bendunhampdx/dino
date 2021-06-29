const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const values = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];

export class WordScore {
  constructor(word) {
    this.word = word;
  }
  getValue () {
    let pos = letters.indexOf(this.word);
    let wordValue = values[pos];
    return wordValue;
  }
}



//Define Point Values

/*
0 Points - Blank tile.
1 Point - A, E, I, L, N, O, R, S, T and U.
2 Points - D and G.
3 Points - B, C, M and P.
4 Points - F, H, V, W and Y.
5 Points - K.
8 Points - J and X.
10 Points - Q and Z.

DINO API: http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1
*/