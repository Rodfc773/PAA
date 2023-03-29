## Questão 3)

## Enunciado:

__Considere o problema de agendamento de intervalos. Nós temos um conjunto de atividades {1, 2, . . . , n}; cada atividade i possui um intervalo de tempo a partir de si e termina em fi . Um agendamento — conjunto de atividades — é dito compatível, se nenhuma atividade se sobrepõem no tempo.O objetivo é determinar um agendamento compatível com o maior número possível de atividades. Projete uma algoritmo para este problema.__

## Resposta:

* __Suponha inicialmente um pré-processamento em que ordene o conjunto de atividades pelo tempo de término(fi), e uma função ```solution``` que verifica se a solução é válida e uma função chamada ```select_min_fi``` que pega a atividade de menor término no conjunto de tarefas.__

* __Logo temos o seu Pseudo-código abaixo:__

----

## Pseudo-código:

```
Procedure greedy_tasks(tasks[])

    S = {}

    while tasks != {} && !solution(S)

        task = select_min_fi(tasks)

        if (S = {})

            S = S U {task}
            tasks = tasks - {task}.

        else

            if(o tempo de inicio de task for maior ou igual ao tempo de término da ultima atividade adicionado em S)

                S = S U {task}
                tasks = tasks - {task}.


    return S;

```