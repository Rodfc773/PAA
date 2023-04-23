## Questao 10º)

## Enunciado:

Mostre um algoritmo de programação dinâmica para o problema do CAMINHO MÁXIMO entre dois
vértices s e t (caminho simples). Qual a complexidade do algoritmo (tempo e memória)?


## Resposta: 

```
Procedure CaminhosMax-DP(Graph G(V,E), s , t)

    topo = topological_sort(G) // organiza os vertices em ordem topologica utilizando o algoritmo de kahn

    dist = crie uma lista com tamanho igual a quantidade de  vertices em G, e inicialize as posições com -1 * infinito

    dist[s] = 0

    for vertice v in topo:

        if(dist[u] + w > dist[v]):
            dist[v] = dist[u] + w

    retorne dist[t]
```