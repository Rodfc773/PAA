## Questao 1º)

## Enunciado:

Maria aposta com João que ela pode fazer o seguinte truque. João recitará n − 1 números diferentes de 1 a n em uma ordem aleatória e ela será capaz de nomear o único número nesse intervalo que ele terá perdido. Claro, ela terá que realizar a tarefa em sua cabeça, sem fazer anotações. Como ela deve fazer esse truque? Em outras palavras, projete um algoritmo que descubra o número faltante utilizando O(1) de espaço em memória

## Resposta:

- Considere que a entrada seja um array A de tamanho n-1 contendo numeros de 1 a n

```
Procedure NumeroFaltando(A[])

    B = crie um array de tamanho (n-1) + 1 cotendo numeros de 1 a n sem repetições

    elemento = faça a diferença(operação de conjuntos) do conjunto A em relação a ao Conjunto B

    retorne elemento;
```