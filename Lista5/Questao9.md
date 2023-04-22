## Questão 9º)

## Enunciado:

Dado um DAG G(V, E ) e dois vértices s, t ∈ V , projete
um algoritmo de programação dinâmica que encon-
tre a quantidade de caminhos simples distintos entre
s e t .

## Resposta:

```
Procedure DistinctsWays-DP(Graph(V, E), s, t)

    n = numeros de vértices em G

    ways = vetor de tamanho n inicalizado com zeros

    dp[s] = 1

    ordem = []

    for v in V:

        if(v não tem predecessores em G, adicione v em ordem)

    while(ordem != null):

        remova o  primeiro vertice v de ordem 

        for e(u,v) in E:
            ways[v] += ways[u]

    retorno ways[t]
```