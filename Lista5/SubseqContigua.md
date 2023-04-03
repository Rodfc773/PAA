## Questão 5º)

## Enunciado:

__Uma subsequência contígua de uma lista S é uma subsequência feita de elementos consecutivos de S. Por exemplo, se S é 5, 15, −30, 10, −5, 40, 10, então 15, −30, 10 é uma subsequência contígua, mas 5, 15, 40 não é. Forneça um algoritmo de tempo linear para a seguinte tarefa:__ 

__Entrada: Uma lista de números a1, a2, . . . , an .__

__Saída: A subsequência contígua de soma máxima (a subsequência de tamanho zero tem soma zero). Para o exemplo anterior, a resposta seria 10, −5, 40, 10, com uma soma de 55. (Dica: Para cada j ∈ {1, 2, . . .n}__

__considere subsequências contíguas terminando exatamente na posição j .)__

### Resposta:

### Algoritmo:

```
def algoritmo_linear(a):
    max_terminando_aqui = max_ate_agora = a[0]
    for x in a[1:]:
        max_terminando_aqui = max(x, max_terminando_aqui + x)
        max_ate_agora = max(max_ate_agora, max_terminando_aqui)
    return max_ate_agora
```