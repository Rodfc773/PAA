### _Enunciado da questão_ :

#### São dadas duas listas ordenadas de tamanho m e n. Dê um algoritmo de tempo O(log m + log n) para computar o k-ésimo menor elemento da união das duas listas.

#### Resposta:

* Será utilizado uma versão adptada da busca binária nas duas listas, em que, a cada chamada recursiva metade de uma das listas será descartadas, assim garantindo a complexida log m + log n


##### Pseudo-código

```
Procedure Binary_Search_Modified(list1, list2, int k)

    m = len(list1)
    n = len(list2)

    if(m > n) return Binary_Search_Modified(list2, list1, k)

    if(m == 0) return list2[k - 1]

    if (k == 1) return min(list1[0], list2[0])

    i = min(k/2, m)
    j = k - i

    if(list1[i - 1] > list2[j - i]){

        return Binary_Search_Modified(list1, list2[j....n], i)
    }
    else{
         return Binary_Search_Modified(list1[i....m], list2, j)
    }
```