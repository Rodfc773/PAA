## Questão 7)

## Enunciado:

__Considere o seguinte problema.__

* __Entrada: Grafo não direcionado G = (V, E ); pesos de arestas we ; subconjunto de vértices U ⊂ V .__
* __Saída: A Árvore Geradora mais leve na qual os nós de U são folhas (pode haver outras folhas na árvore também).__


## Resposta:

__ __
## Pseudo-código:

```
Procedure AGM_U(Grafo G = (V, E), subconjunto U)
    
    S = {}

    while S não possuir todas os  de G

        w   =  selecione a aresta com menor peso de G

        if(w for uma aresta que conecta dois vértices não existentes em S)

            S = S U {vertices conectados a w}
            V = V - {vertices conectados a w}



            
    Return S

```
