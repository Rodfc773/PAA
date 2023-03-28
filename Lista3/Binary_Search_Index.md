### _Enunciado da questão_:

#### Dado A[1, . . . , n], um vetor ordenado de inteiros distintos, você quer saber se existe um índice i para o qual A[i ] = i . Dê um algoritmo de divisão-e-conquista que execute em tempo O(log n)


#### Resposta:

* __Um algorimo de divisão e conquista para buscar um determinado elemento em um vetor com o complexidade O(log n), é o próprio algoritmo de busca binária adpatado para o problema, logo temos abaixo seu pseudo código__


#### Pseudo-Código:

```
Procedure Binary_search_index(A[],initial, end)

    if(end < initial) return False

    i = (init + end)/2

    if(A[i] == i) return True

    else if(A[i] > i) return Binary_search_index(A[],initial, i - 1)

    else{
        return Binary_search_index(A[],i + 1, end)
    }
```

#### * Corretude *:

* Provando por indução forte temos:
<br>

* P(n) = Se houver um valor A[ i ] que seja igual ao indice i, i.e, A[ i ] = i, então essa valor vai estar no intervalo A[init........end]


__Caso base P(1):__

--> No caso base o Array A possuíra somente um único elemento, já que seu tamnho é 1, e com isso será feita a verificação na linha ```if(end < init) return False```

--> como ```end == init ```, o algoritmo irá criar a variável i, em que i será a metade do tamanho do array A, logo ``` i = (1 + 1)/2, i == 1 ```

--> Após isso o algoritmo irá checar a linha ```  if(A[i] == i) ```, caso a verificação seja um sucesso ele retornará que existe um A[i] = i, caso não ele retornará falso, já que no passo da recursão ele verificará uma posição inexistente no array.

__Hipotése:__ Suponha que o Algoritmo Binary_searc_index retorne corretamente a reposta se há um valor A[i] = i para um índice i qualquer para um Array A[] de tamanho k, com k < n.

__Passo Indutivo__:

--> Suponha que o algoritmo recebeu como entrada um vetor A[] de tamanho n, como end que representa o fim do vetor é mairo que initial que representa o inicio do vetor, temos que o algoritmo irá calcular i  e atribuir a soma aritmétrica de init e end.

--> Com isso sera feita a verificação na linha ```if(A[i] == i) return True ```, agora supomos que A[i] != i, logo o algoritmo ira  passar para as próximas verificações

--> Caso A[i] > i  ele chamara recursivamente passando o subvetor A[init..... i-1] como paramêtro.

--> caso A[i] < i ele chamara recursivamente passando como paramêtro o subvetor A[i + 1 ..... end]

--> Em Ambos os casos, será feita uma chamada recursiva passando um subvetor de tamanho k, com k < n, logo pela nossa hipotése o Algoritmo retornará a resposta correta se há um A[i] = i, e como  ambos os subvetores estão contidos em A, o algoritmo retornará a resposta correta da verficação A[i] = i para o array A.

Provado!!!

#### * Calculando a recorrência *:

seja a recorrência:

T(n) = { 1, se n = 1
T(n/2) + 1, se n > 1


$$ T(n) = T(n/2) + 1$$

$$T(n/2) = T(n/4) + 1 + 1 = T(n/4) + 2$$

<br>

$$ T(n/4) = T(n/8) + 1 + 1 + 1 = T(n/8) + 3 $$


*
*
*
*

$$ T(n) = T(\frac{n}{2 ^ k}) + k $$


$$ \frac{n}{2 ^ k} = 1, n = 2^k, k = \log_2 n $$

--> Logo temos:

$$ T(n) = T(1) + \log_2 n$$

$$O(\log_2 n)$$

