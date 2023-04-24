## Questao 1º)

## Enunciado:

Maria aposta com João que ela pode fazer o seguinte truque. João recitará n − 1 números diferentes de 1 a n em uma ordem aleatória e ela será capaz de nomear o único número nesse intervalo que ele terá perdido. Claro, ela terá que realizar a tarefa em sua cabeça, sem fazer anotações. Como ela deve fazer esse truque? Em outras palavras, projete um algoritmo que descubra o número faltante utilizando O(1) de espaço em memória

## Resposta:


```
Procedure NumeroFaltando(int n)

    int sum_Joao = soma dos numeros ditos por joao
    int sum_Maria = soma dos numeros de 1 até n

    num = sum_maria - sum_joao

    retorne num;
```
