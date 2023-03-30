## Questão 3)

## Enunciado:

__Considere o problema de agendamento de intervalos. Nós temos um conjunto de atividades {1, 2, . . . , n}; cada atividade i possui um intervalo de tempo a partir de si e termina em fi . Um agendamento — conjunto de atividades — é dito compatível, se nenhuma atividade se sobrepõem no tempo.O objetivo é determinar um agendamento compatível com o maior número possível de atividades. Projete uma algoritmo para este problema.__

## Resposta:

* __Suponha inicialmente um pré-processamento em que ordene o conjunto de atividades pelo tempo de término(fi), e uma função ```solution``` que verifica se a solução é válida e uma função chamada ```select_min_fi``` que pega a atividade de menor término no conjunto de tarefas.__

* __Logo temos o seu Pseudo-código abaixo:__

----

## Pseudo-código:

```
Procedure greedy_tasks(tasks[1.....n],s[], f[])

    S = {tasks[1]}

   i = 1
   for  m = 2 ->  n

    if(s[m] > f[i]){

        S = S U(union) tasks[m]
        i = m
    }
    return S;

```