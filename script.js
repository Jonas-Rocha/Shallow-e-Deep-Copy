// Shallow Copy (cópia superficial): não pega os itens aninhados.

// const htmlCourse = {
//   course: "HTML",
//   students: [
//     {
//       name: "Jonas",
//       email: "jonas@email.com",
//     },
//   ],
// };

// const jsCourse = {
//   ...htmlCourse,
//   course: "Javascript",
// };

// Vai modificar o htmlCourse também  students é uma referência e não uma cópia.
//jsCourse.students.push({ name: "Andressa", email: "andressa@email.com" });

// Deep Copy (cópia profunda)

/*
const jsCourse = {
  ...htmlCourse,
  course: "Javascript",
  students: [...htmlCourse.students { nome: "maria", email: "maria@email.com" }],
};

jsCourse.students.push({ nome: "joão", email: "joao@email.com" });
*/

// const jsCourse = {
//   ...htmlCourse,
//   course: "Javascript",
// };

// jsCourse.students = [
//   ...htmlCourse.students,
//   { name: "tantofaz", email: "tantofaz@email.com" },
// ];

// console.log(htmlCourse, jsCourse);

const book = {
  title: "Objetos Imutáveis",
  category: "Javascript",
  author: {
    name: "Jonas",
    email: "jonas@email.com",
  },
};

// O Javascript em si não impõe restrições à modificação dos objetos.
book.category = "HTML";

// Congela o objeto e impede a modificação.
Object.freeze(book); // O FREEZE APENAS RESTRINGE O SHALLOW(RASO), OBJETOS ANINHADOS(DEEP) ELE NÃO RESTRINGE.
book.category = "CSS"; // NÃO MODIFICA.

book.author.name = "João"; // AQUI O FREEZE JÁ NÃO RESTRINGE MAIS

// RESUMO: O Object.freeze() não impede modificações profundas em objetos aninhados (shallow freezing)

console.log(book);

/*
Deep freeze
Nesta aula, vamos ver como implementar o conceito de Deep Freeze em JavaScript,
que consiste em congelar de forma profunda um objeto, percorrendo recursivamente cada propriedade. 
Vamos aprender como criar uma função recursiva para congelar todas as propriedades de um objeto, 
garantindo um congelamento profundo.
*/

const book2 = {
  title: "Objetos Imutáveis",
  category: "Javascript",
  author: {
    name: "Jonas",
    email: "jonas@email.com",
  },
};

function deepFreeze(object) {
  // Obtém um array com todas as propriedades do objeto.
  const props = Reflect.ownKeys(object);

  // Itera sobre todas as propriedades do objeto
  for (const prop of props) {
    // Obtém o valor associado a à propriedade atual.
    const value = object[prop];
    //console.log(value)

    // Verifica se o valor é um objeto ou função para continuar aplicando deepFreeze em objetos aninhados.
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }
  // Retorna o objeto congelado.
  return Object.freeze(object);
}

// Chama a função para congelar o objeto com Deep freeze (imutabilidade profunda)
deepFreeze(book2);

// Agora não funciona nem no shallow nem no deep
book2.category = "HTML";
book2.author.name = "João";

console.log(book2);
