class Person{
getSleep(){
    console.log("I am sleeping 8 hours per day")
}
}

class Student extends Person {
    getSleep(){
        console.log("I am sleeping ৭ hours per day")
    }

}

class Developer extends Person {
    getSleep(){
        console.log("I am sleeping 6 hours per day")
    }

}

const getSleepingHours = (param:Person) =>{
    param.getSleep()
}

const person = new Person()
const student = new Student()
const developer = new Developer()


getSleepingHours(student)



//mongoDb Practice 

//2.find favourite color:
//db.practice.find({favoutiteColor:{$in:["Maroon","Blue"]}}).project({favoutiteColor:1})

//3.Empty array
//db.practice.find({skills: []}).project({skills:1})

//4.Find skills
//db.practice.find({"skills.name": { $all: ["JAVASCRIPT","JAVA"]}}).project({skills:1})
 