// Shallow Copy (cópia superficial): não pega os itens aninhados.

const htmlCourse = {
  course: "HTML",
  students: [
    {
      name: "Jonas",
      email: "jonas@email.com",
    },
  ],
};

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

const jsCourse = {
  ...htmlCourse,
  course: "Javascript",
};

jsCourse.students = [
  ...htmlCourse.students,
  { name: "tantofaz", email: "tantofaz@email.com" },
];

console.log(htmlCourse, jsCourse);
