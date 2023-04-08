## Questão 6º)

## Enunciado:

__Dadas duas strings x = x1 x2 · · · xn e y = y1 y2 · · · ym ,desejamos encontrar o comprimento da maior substring comum delas, isto é, o maior k para o qual existem índices i e j com xi xi +1 · · · xi +k−1 = y j y j +1 · · · y j +k−1. Mostre como fazer isso em tempo O(mn)__



## Resposta:

```
Procedure MaiorSubstring(string x, string y):

    m = x.size()
    n = y.size()

    tabela = crie uma matriz com n+1 linhas e m+1 colunas

    maiorSubstring = 0
    posFinal = 0
    tabela[0][0] = 0


    for i = 1 -> n:

        for j = 1 -> m:

            if x[i] == y[j]:

                tabela[i][j] = tabela[i-1][j-1] + 1

                if tabela[i][j] > maiorsubstring:

                    maiorSubstring = tabela[i][j]
                    posFinal = i
            else:

            tabela[i][j] = 0

    substring = ""
    for i = posFinal - maiorSubstring + 1 -> posFinal:

        cocatene substring com x[i]

    return substring, maiorSubstring





```