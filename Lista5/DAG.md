## Questão 4º)

## Enuncidado: 

__Projete um algoritmo eficiente para encontrar o comprimento do caminho mais longo em um DAG. (Este problema é importante como um protótipo de muitos outros aplicativos de programação dinâmica, pois determina o tempo mínimo necessário para concluir um projeto que compreende tarefas de precedência restrita.)__


### Resposta:

### Pseudo-código:

```
def longest_path_dag(graph, weights):
   
    topo_order = topological_sort(graph)
    
   
    dist = [0] + [-float('inf')] * (len(graph) - 1)
    
   
    for v in topo_order:
        for u in graph[v]:
           
            new_dist = dist[u] + weights[(u,v)]
            if new_dist > dist[v]:
                dist[v] = new_dist

    return max(dist)

```