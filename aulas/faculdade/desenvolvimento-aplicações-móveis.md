# Microfundamento: Desenvolvimento de Aplicações Móveis

## Componentes

 Os componentes do React contam com a sintaxe JSX, que é usada para descrever a estrutura da IU. Componentes permitem você dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente.

 A maneira mais simples de definir um componente é escrever uma função JavaScript. Conforme pode ser visualizado no código abaixo.


```js 
import * as React from 'react';
import { Text } from 'react-native';

const MeuComponente = () => {

  const nome = "Anakin Skywalker";

  return (
     <Text>
        Olá {nome}
      </Text>
  );

};

export default function App() {

  return (
     <MeuComponente />
  );
}
```

Os componentes definidos por funções em Javascript nunca devem alterar suas próprias propriedades, pois aplicam o conceito de funções puras. Uma função pura é uma função sem efeitos colaterais. Ou seja, chamada com um determinado conjunto de argumentos, a função sempre produz a mesma saída. Isso é relevante para componentes React porque, dado um conjunto de propriedades, é mais fácil prever qual será o conteúdo renderizado

Assim, para alterar o valor das propriedades usamos o estado dos componentes. Para isso usamos o recurso do React conhecido como hooksLinks to an external site., que permite a alteração do estado do componente sem a necessidade de criar classes.

Observe o código abaixo, onde o hook "useState" é utilizado para alterar o valor da variável nome. Assim, ao clicar no botão o valor da variável nome é alterado.


```js 
import React, { useState } from 'react';
import { Text, Button, View} from 'react-native';

const MeuComponente = () => {

  const [nome, setNome] = useState("");

  return (
    <View>      
     <Text>
        Olá {nome}
      </Text>
      <Button 
        title='Mudar nome'
        onPress={() => setNome("Anakin Skywalker")} 
      />
    </View>
  );

};

export default function App() {

  return (
     <MeuComponente />
  );
}
```
Além disso, é possível passar valores para os componentes, conhecidos como "Props", que representam os parâmetros passados para o componente, conforme exemplificado no código abaixo, onde o valor do nome é passado para o componente como um parâmetro.

```js
import React from 'react';
import { Text } from 'react-native';

const MeuComponente = ({nome}) => {

  return ( 
     <Text>
        Olá {nome}
      </Text>
  );

};

export default function App() {

  return (
     <MeuComponente nome={"Anakin Skywalker"} />
  );
}
```

## Contexto

Conforme seu aplicativo React cresce, ele usará mais componentes. Não apenas terá mais componentes, mas a estrutura de seu aplicativo mudará para que os componentes sejam aninhados mais profundamente. Os componentes aninhados no nível mais profundo ainda precisam ter os dados transmitidos a eles. Passar dados de um componente pai para um componente filho não é grande coisa. O desafio é quando você precisa começar a usar componentes como vias indiretas para transmitir dados ao redor de seu aplicativo.

Para dados que precisam chegar a qualquer componente em seu aplicativo, você pode criar e usar um contexto. Há dois conceitos-chave a serem lembrados ao usar contextos no React - provedores e consumidores. Um provedor de contexto cria dados e garante que estejam disponíveis para qualquer componente React. Um consumidor de contexto é um componente que usa esses dados dentro do contexto.

# REACT

## Criando e aninhando componentes

Os componentes React são funções JavaScript que retornam marcação:

```js
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

Agora que você declarou MyButton, você pode aninhá-lo em outro componente:


```js
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

- Nomes de componentes React devem sempre começar com uma letra maiúscula
- Sintaxe ```<MyButton />``` chamando um componente.
-  



