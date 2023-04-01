## Questão 2º)

## Enunciado:

__Algumas moedas são espalhadas nas células de um tabuleiro n × m, uma moeda por célula. Um robô, localizado na célula superior esquerda do tabuleiro,precisa coletar o máximo de moedas possível e traze-las para a célula inferior direita. Em cada etapa, o robô pode mover uma célula para a direita ou uma célula para baixo de sua localização atual. Quando o robô visita uma célula com uma moeda, ele pega a moeda. Elabore um algoritmo para encontrar o número máximo de moedas que o robô pode coletar e um caminho que ele precisa seguir para fazer isso.__


### Reposta:

### Pseudo-codigo:

```
Procedure MaxCoins(matriz M)

    n = selecione o tamanho das linhas de M
    m = selecione o tamanho das colunas de M

    maxcoins[n][m]

    path[n][m]

    for i = 0 -> n:

        if M[i][0] == 1 :

            maxcoins[i][0] = 1
            path[i][0] = "down";

    for j = 0 -> m:

        if(M[0][j] == 1):

            maxcoins[0][j] = 1
            path[0][i] = "left"

    for i = 1 -> n:

        for j = 1 -> m:

            if  M[i][j] == 1:

                if maxcoins[i -1][j] < maxcoins[i][j-1]:

                    maxcoins[i][j] = maxcoins[i][j-1] + 1
                    path = "right"
                
                else:

                    maxcoins[i][j] = maxcoins[i-1][j] + 1
                    path = 'down'

    return maxcoisn[n -1][m - 1] and path
```