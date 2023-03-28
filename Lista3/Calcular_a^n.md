## _Questão: Escreva um algoritmo de divisão-e-conquista O(n log n) para computar:_
## $$a^n$$ 
## _em que n é um inteiro positivo_


### _Pseudo-Código:_
``` 
Procedure Exponetial_DC(a, n)

if (n == 0) return 1;
else if(n & 1){

    return a * Exponetial_DC(a, n/2) * Expotenial(a/2)
}
else{
    return Exponetial_DC(a, n/2) * Expotenial(a, n/2)
}

```
### Calculando a recorrência:


T(n) = {
    1, se n == 1,<br>
    2T(n/2) +  1, se n > 1
}


$$ T(n) = 2T(\frac{n}{2}) + 1 $$

$$ T(n/2) = 2 * (2T(\frac{n}{4}) + 1) + 1 =  4T(\frac{n}{4}) + 3 $$

$$ T(n/4) = 4 * (2 * T(\frac{n}{8}) + 1) + 3 = 8T(\frac{n}{8}) + 7$$

* 
* 
* 
* 
$$ T(\frac{n}{k}) = 2^k T(\frac{n}{2^k}) + 2 ^k - 1$$

#### Resolsvendo o caso base temos:

$$ \frac{n}{2^k} = 1$$

$$ n = 2 ^ k, \log_2 n = k$$

####Logo temos:

$$T(n) = n * T(1) + n - 1$$

#### Ou seja o algoritmo ```Expotenial_DC``` é O(n)

