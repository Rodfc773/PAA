## Questão  1º) 

## Enunciado da questão:

__Inteiros positivos são arranjados em um triângulo equilátero com n números em sua base, como o mostrado na figura abaixo para n = 4. O problema é encontrar a menor soma em uma descida do ápice do triângulo até sua base por meio de uma sequência de números adjacentes (mostrados na figura pelos círculos). Projete um algoritmo de programação dinâmica para este problema__


### Pseudo-código:

```
Procedure MinSum(triangle T):

    n <- tamanho(T)
    matriz A[n][n]
    
    for i = 0 -> n-1:
        matriz[0][i] <- triangulo[n-1][i]

    for i = 1 -> n-1:

        for j = 0 -> n-1 :

            if j = 0:

                A[i][j] = T[n-1-i][j] + A[i-1][j]

            elif j = i:

                A[i][j] = T[n-1-i][j] + A[i-1][j-1]

            else:
                A[i][j] <- T[n-1-i][j] + min(A[i-1][j-1], A[i-1][j])
    

    return min(A[n-1])

```