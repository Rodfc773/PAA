## Questão 9)

### Enunciado:

 __Resolver o problema da Torre de Hanói quando se
dispõe de 4 torres, em vez de 3. Determinar o nú-
mero de movimentos de disco.__

### Resposta:
 
 * __Utilizando 4 torres, sendo elas A(torre original), B e C(torre auxiliares) e D(Torre de destino).__


#### Pseudo-código:

```
Procedure Hanoi4(n, A, D, B, C)

    if(n == 1){

        move_disks(A,D)
    }
    elif n == 2{

        move_disks(A, B)
        move_disks(A, D)
        move_disks(B, D)
    }
    else{

        hanoi4(n - ceil(sqrt(2n - 1)), A, B, C, D)
        hanoi4(ceil(sqrt(2n - 1)), A, D, C, B)
        hanoi4(n - ceil(sqrt(2n - 1)), B, D, C, A)
    }
```

*  A quantidade de moovimentos de discos ainda é uma questão em aberta, porém sabe-se que ao utilizarmos ```ceil(sqrt(2n-1))``` para diminuir a quantidade de discos na torre de inicio garente que o numero total de movimentos nescessários é menor ou igual a que :

$$2 \cdot (2^n - 1)^{(\frac{3}{2})} - 2^{(n-1)}$$