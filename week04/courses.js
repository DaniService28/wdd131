// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],

    function enrollStudent(sectionNum){
    console.log("in enroll students", this)
    const section = this.section.find(
        (section) => section.sectionNum === sectionNum
    )}
}



function setCourseInformation(course){
    document.querySelector("#courseName").innerHTML = course.name
    document.querySelector("#courseCode").innerHTML = course.code
}

function renderSectionInfo(sections){
    let sectionEl = document.querySelector("#sections")
    const format = `<tr><td>${sections.sectionNum}</td>
                    <td>${sections.roomNum}</td>
                    <td>${sections.enrolled}</td>
                    <td>${sections.days}</td>
                    <td>${sections.instructor}</td></tr>`
    sectionEl.innerHTML += format 
}



function clickHandler(event){
    console.log("in clickHandler", this)
    aCourse.enrollStudent(2)
}


setCourseInformation(aCourse)
aCourse.sections.map(renderSectionInfo).join("")

document.querySelector("#enrollStudent")