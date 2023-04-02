## Questão 3º)

__Apresente o pseudocódigo do algoritmo de FloydWarshall para o problema dos caminhos mínimos entre todos os pares de vértices. Apresente a recorrência para o cálculo da distância.__

### Resposta:

```
Para cada par (i, j) de vértices:
    Se i = j, então dist[i][j] = 0
    Senão, se (i, j) pertence a E, então dist[i][j] = peso(i, j)
    Senão, dist[i][j] = infinito

Para cada vértice k:
    Para cada par (i, j) de vértices:
        dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

```



__Para a recorrência do calculo da distância temos:__


$$ D^k[i, j] = \left\{ 
\begin{array}{ll} 
c_{ij}, & \text{se } k = 1 \\ 
min(D^{k-1}[i,j], D^{k-1}[i,k] + D^{k+1}[k,j]) & \text{se } k > 1 
\end{array} 
\right.$$