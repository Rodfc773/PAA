## Questão 4º)

## Enuncidado: 

__Projete um algoritmo eficiente para encontrar o comprimento do caminho mais longo em um DAG. (Este problema é importante como um protótipo de muitos outros aplicativos de programação dinâmica, pois determina o tempo mínimo necessário para concluir um projeto que compreende tarefas de precedência restrita.)__


### Resposta:

### Pseudo-código:

```
procedure solve_DAG_parallel(Grafo G(Direcionado))

 
    minimum_distances = array[G.num_vertices]

    destination = G.destino

    for i = 0 -> G.num_vertices-1:
        minimum_distances[i] = solve_DAG_recursive(G, i, destination)
    
    return minimum_distances[origem]
    
end procedure
```