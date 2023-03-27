
##Enunciado:

###


###Projetando o algoritmo:


``` 
Procedure PancakeSort(Panquecas[], n)

    if(n == 1) return;
    else
    {

        Indice_Maior_Panqueca = Busca_Indice_Maior_Panqueca(panquecas[1....n])

        Usar_espatula(Panquecas[Indice_Maior_Panqueca])

        Usar_espatula(Panquecas[n])
        PancakeSort(Panquecas[], n-1)
    }

    return panquecas[]; 
 ```


calucalando a recorrencia temos:

T(n): {
    1 , if n = 1
    n + T(n -1), else > 1
}


T(n): n + T(n-1)

T(n - 1): n + n - 1 + T(n - 2)
T(n - 2): n + n - 1+ n - 2 + T(n - 3)
T(n - 3): n + n -1 + n - 2+ n -3  + T(n - 4)

*
*
*
*
T(n - i) = 

$$\left( \sum_{i=0}^n n - i \right) + t(n-i)$$

Pelo caso base temos que: n - i = 1, logo

$$ (n(n - 1))/2 + T(1)$$

Ou seja o algorimto possui no pior caso:

$$O(n^2)$$