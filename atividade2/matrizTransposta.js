function transporMatriz(A) {
    for (let i = 0; i < A.length; i++) {
        console.log(A[i].join(", "));
    }

    let matTransposta = [];
    for (let i = 0; i < A[0].length; i++) {
        matTransposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            matTransposta[i][j] = A[j][i];
        }
    }

    console.log("\n")
    
    for (let i = 0; i < matTransposta.length; i++) {
        console.log(matTransposta[i].join(", "));
    }
}

let teste = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]

transporMatriz(teste)
