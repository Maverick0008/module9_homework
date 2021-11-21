const parser = new DOMParser();

const xmlData = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`
const xmlDOM = parser.parseFromString(xmlData, "text/html")

const listData = xmlDOM.querySelector('list')
const studentData = [...listData.querySelectorAll('student')]
const list = []
studentData.forEach(studentData => {
    const nameData = studentData.querySelector('name');
    const langData = nameData.getAttribute('lang')
    const firstForm = studentData.querySelector('first')
    const secondForm = studentData.querySelector('second')
    const ageData = studentData.querySelector('age')
    const profData = studentData.querySelector('prof')
    list.push({
        prof:profData.textContent,
        first: firstForm.textContent,
        second: secondForm.textContent,
        lang: langData,
        age: Number(ageData.textContent)

    })
})
const result = {
    list: list
}
console.log('result', result)