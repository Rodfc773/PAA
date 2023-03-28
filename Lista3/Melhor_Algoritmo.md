### _Questao 6)_

### _Enunciado_:

#### Suponha que esteja escolhendo entre os seguintestrês algoritmos:

*  __Algoritmo A resolve problemas dividindo-os
em cinco subproblemas de metade do tama-
nho, solucionando cada subproblema recursi-
vamente e, então, combinando as soluções em
tempo linear.__

• __Algoritmo B resolve problemas de tamanho n
resolvendo recursivamente dois subproblemas
de tamanho n − 1 e, então, combinando as so-
luções em tempo constante.__

• __Algoritmo C soluciona problemas de tamanho
n dividindo-os em nove subproblemas de ta-
manho n/3, resolvendo recursivamente cada
subproblema e, então, combinando as respos-
tas em tempo O(n ^ 2) .__

#### Qual o tempo de execução de cada um desses algoritmos (em notação O) e qual você escolheria?


#### Resposta:

#### _Calculando primeiramente a recorrência do algoritmo A_:

$$T(n) = \left\{ 
\begin{array}{ll} 
1, & \text{se } n = 1 \\ 
5 \cdot T(\frac{n}{2}) + \space n, & \text{se } n > 1 
\end{array} 
\right.$$

--> __Temos__:

$$T(n) = 5 \cdot T(\frac{n}{2}) + n $$

$$T(n/2) = 5 \cdot (5 \cdot T(\frac{n}{4}) + \frac{n}{2})  = 25 \cdot T(\frac{n}{4}) + \frac{5n}{2} + n $$

----

$$T(\frac{n}{4}) = 25 \cdot(5 \cdot(T(\frac{n}{8}) + \frac{n}{4}) +\frac{5n}{2} + n = 125 \cdot T(\frac{n}{8}) + \frac{25n}{4} + \frac{5n}{2} + n$$

*
*
*
*
*

$$T(\frac{n}{2^k}) = 5^k \cdot T(\frac{n}{2 ^ k}) + \frac{5^{k - 1}}{2 ^{k -1}} \cdot n$$

--------

--> __Pelo caso base temos:__

$$ \frac{n}{2 ^ k} = 1, n = 2^k, \log_2n = k$$

-------

--> __Usando um pouco de manipulação algebrica temos:__


$$ T(\frac{n}{2 ^ k}) = 5 ^{\log_2 n} \cdot T(1) + (\frac{5}{2}) ^ {\log_2 n - 1}  \cdot n$$

*
*
$$ T(\frac{n}{2 ^ k}) = 5 ^{\log_2 n} \cdot 1 + (\frac{(\frac{5}{2}) ^ {\log_2 n}}{\frac{5}{2}})  \cdot n$$

* 
*
$$ Sabemos \space que: \space a^{\log_b(c)} = c^{\log_b(a)}$$

*
*
$$ T(\frac{n}{2 ^ k}) = 5 ^{\log_2 n} \cdot 1 + (\frac{2}{5})  \cdot n ^ {log_2 (5)}$$


--> Ou seja, T(n) é O(n log n)

-------------

#### Calculando a recorrência para o Algorimto B:




