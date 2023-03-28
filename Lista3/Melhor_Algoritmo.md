### _Questao 6)_

### _Enunciado_:

#### Suponha que esteja escolhendo entre os seguintestrês algoritmos:

* __Algoritmo A resolve problemas dividindo-os
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

### _Calculando primeiramente a recorrência do algoritmo A_:

$$T(n) = \left\{ 
\begin{array}{ll} 
1, & \text{se } n = 1 \\ 
5 \cdot T(\frac{n}{2}) + \space n, & \text{se } n > 1 
\end{array} 
\right.$$

--> __Temos__:

$$T(n) = 5 \cdot T(\frac{n}{2}) + n $$

$$T(n/2) = 5 \cdot (5 \cdot T(\frac{n}{4}) + \frac{n}{2})  = 25 \cdot T(\frac{n}{4}) + \frac{5n}{2} + n $$



$$T(\frac{n}{4}) = 25 \cdot(5 \cdot(T(\frac{n}{8}) + \frac{n}{4}) +\frac{5n}{2} + n = 125 \cdot T(\frac{n}{8}) + \frac{25n}{4} + \frac{5n}{2} + n$$

*
*
*
*
*

$$T(\frac{n}{2^k}) = 5^k \cdot T(\frac{n}{2 ^ k}) + \frac{5^{k - 1}}{2 ^{k -1}} \cdot n$$



--> __Pelo caso base temos:__

$$ \frac{n}{2 ^ k} = 1, n = 2^k, \log_2n = k$$



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

### Calculando a recorrência para o Algorimto B:

$$T(n) = \left\{ 
\begin{array}{ll} 
1, & \text{se } n = 1 \\ 
2 \cdot T(n - 1) + \space 1, & \text{se } n > 1 
\end{array} 
\right.$$



$$T(n) = 2 \cdot T(n -1) + 1$$

$$T(n - 1) = 2 \cdot (2 \cdot T(n-2) + 1) + 1 = 4 \cdot T(n- 1) + 2 + 1$$

$$T(n - 2) = 4 \cdot(2 \cdot T(n-3) + 1) + 2 + 1 = 8 \cdot T(n-3) + 4 + 2 + 1$$

*
*
*
*
$$T(n - k) = 2 ^k \cdot T(n - k) + \sum_{k=0}^{n} 2 ^{k - 1}$$

--> __Pelo caso base temos__:

$$ \frac{n}{2 ^ k} = 1, n = 2 ^ k, \log_2 n = k$$


--> __Logo temos__:

$$T(n - k) = \log_2 n \cdot T(1) \space + \frac{2 ^{n+1} - 1}{2}$$


---> __Logo a complexidade de tempo do algorimto__:

$$ O(2^n) $$

---

### Calculando a complexidade de tempo do algoritmo C

$$T(n) = \left\{ 
\begin{array}{ll} 
1, & \text{se } n = 1 \\ 
9 \cdot T(\frac{n}{3}) + \space n^2, & \text{se } n > 1 
\end{array} 
\right.$$ 

--> __Temos__:

$$T(n) = 9 \cdot T(\frac{n}{3}) + n ^2$$

--> __Por substituição iterativa:__

$$T(\frac{n}{3}) = 9 \cdot (9 \cdot T(\frac{n}{9}) \space + n ^ 2) + n^2 = 81 \cdot T(\frac{n}{9}) + 9n^2 + n^2$$

$$T(\frac{n}{9}) = 81 \cdot (9 \cdot T(\frac{n}{27}) + n ^ 2) + 9n^2 + n^2 = 729 \cdot T(\frac{n}{27}) + 81n^2+ 9n^2+ n ^2$$


*
*
*
*

-->__Formula geral__:

$$T(\frac{n}{3^k}) = 9 ^k \cdot T(\frac{n}{3^k}) + \sum_{k=0}^{n} 9 ^{k - 1} \cdot n^2$$