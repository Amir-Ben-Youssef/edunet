const db = require('sequelize');


const sql = new db('edunet','root','root',{dialect: 'mysql'});


const student = sql.define('student',{
    first_name : db.STRING,
    last_name : db.STRING,
    email: {
        type: db.STRING,
        allowNull: false,
        validate: {
            isEmail:true
        },
        unique: true
    },
    password : db.STRING,
    photo : db.STRING,
    createdAt: {
        allowNull: false,
        type: db.DATE,
        defaultValue: db.NOW
      },
      updatedAt: {
        allowNull: false,
        type: db.DATE,
        defaultValue: db.NOW
      }
});


/*const university = sql.define('University', {
    name : {
        type: db.STRING,
        unique : true
    }
});*/

const teacher = sql.define('teacher',{
    first_name : db.STRING,
    last_name : db.STRING,
    email: {
        type: db.STRING,
        allowNull: false,
        validate: {
            isEmail:true
        },
        unique : true
    },
    password : db.STRING,
    github: db.STRING,
    linkedIn: db.STRING,
    photo : db.STRING,
    createdAt: {
        allowNull: false,
        type: db.DATE,
        defaultValue: db.NOW
      },
      updatedAt: {
        allowNull: false,
        type: db.DATE,
        defaultValue: db.NOW
      }
});


const course = sql.define('course',{
    title : db.STRING,
    category : db.STRING,
    description :db.STRING,
    photo : db.STRING,
    createdAt: {
        allowNull: false,
        type: db.DATE,
        defaultValue: db.NOW
      },
      updatedAt: {
        allowNull: false,
        type: db.DATE,
        defaultValue: db.NOW
      }
});


const video = sql.define('video',{
    title : db.STRING,
    description :db.STRING,
    url : db.STRING,
    createdAt: {
        allowNull: false,
        type: db.DATE,
        defaultValue: db.NOW
      },
      updatedAt: {
        allowNull: false,
        type: db.DATE,
        defaultValue: db.NOW
      }
});

const category = sql.define('category',{
    name : {
        type : db.STRING,
        unique : true
    }
});


const course_student = sql.define('course_student',{});

student.belongsToMany(course, {through: course_student});
course.belongsToMany(student, {through: course_student});


course.hasOne(teacher);
teacher.hasMany(course);
video.belongsTo(course);
course.hasMany(video);

/*teacher.belongsTo(university);
university.hasMany(teacher);*/

course.belongsTo(category);
category.hasMany(course, {foreignKey: "categoryId"});


/*university.sync();*/
student.sync();
course.sync();
video.sync();
teacher.sync();
category.sync()
    .then(function() {
            category.create({name: 'Marketing'});
            category.create({name: 'IT'});
            category.create({name: 'Language'});
        });
course_student.sync();

/*module.exports.University = university;*/
module.exports.Student = student;
module.exports.Course = course;
module.exports.Video = video;
module.exports.Teacher = teacher;
module.exports.Course_Student = course_student;
module.exports.Category = category;
module.exports.sql = sql;
