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
