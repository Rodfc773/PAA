## Questão 8º)

__Forneça um algoritmo de programação dinâmica (note que será pseudo-polinomial) para o problema SUBSET SUM.__

__Entrada: Um conjunto A com valores inteiros positivos, e um inteiro t .__

__Questão: Existe um subconjunto A′ ⊆ A cuja somados valores seja exatamente t ?__

## Resposta:

```
Procedure DP-SumSet(A[], int t)

    n = A.tam + 1
    m = t + 1
    subsetsum = crie uma matriz booleana de dimensões  n x  m

    for i = 0 -> n:

        subsetsum[i][0] = true

    for i = 1 -> m:

        subsetsum[0][i] = false

    for i = 1 -> n:

        for j = 1 -> m:

            if(j < A[i - 1]){
                subsetsum[i][j] = subsetsum[i - 1][j]
            }
            else{

                subsetsum[i][j] = subsetsum[i-1][j] || subsetsum[i-1][j - set[i - 1]]
            }
    return subsetsum[n - 1][t]
    
```