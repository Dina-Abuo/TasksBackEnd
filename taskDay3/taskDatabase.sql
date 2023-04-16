
--// 1- Search how to create environment variable

--  environment variable       الي   mysql  ضفت ال       

--------------------------------------------------------------------------------------------------------------------------------------

-- 2- write a program to do binary searching for specifiec element on array using JULIA prgramming language


-- array1 = [ 12, 35, 7, 34, 72, 12, 5 ]
-- sch = 12
-- indexArray = findall( x -> x == sch, array1 )
-- for i in indexArray
--     println("Element found at position ", i)
-- end
-- if (length( findall( x -> x == sch, array1 )) == 0)
--     println("Element not found.")
-- end


--------------------------------------------------------------------------------------------------------------------------------------------------


--  3- create database school with the following tables using command line (
--         teacher table contain fields (id, name, email, age, subject), 
--         student table (id, name, email, age, grade), 
--         grades table (id, grade_name), 
--         subjects table (id, name, full_mark, fail_mark), 
--         exam_result table (id, name, teacher_id, student_id)
-- )
CREATE DATABASE school;
UES school;
CREATE TABLE IF NOT EXISTS teacher (
id INT AUTO_INCREMENT PRIMARY KEY ,
name VARCHAR(60) NOT NULL ,
email VARCHAR(60) NOT NULL ,
age INT,
subject VARCHAR(60)
);

CREATE TABLE IF NOT EXISTS student (
id INT AUTO_INCREMENT PRIMARY KEY ,
name VARCHAR(60) NOT NULL ,
email VARCHAR(60) NOT NULL ,
age INT NOT NULL,
grade FLOAT NOT NULL
);

CREATE TABLE IF NOT EXISTS grades (
id INT AUTO_INCREMENT PRIMARY KEY ,
grade_name VARCHAR(60) NOT NULL
);


CREATE TABLE IF NOT EXISTS subjects (
id INT AUTO_INCREMENT PRIMARY KEY ,
name VARCHAR(60) NOT NULL ,
full_mark INT NOT NULL,
fail_mark INT NOT NULL
);

CREATE TABLE IF NOT EXISTS exam_result (
id INT AUTO_INCREMENT PRIMARY KEY ,
name VARCHAR(60) NOT NULL ,
teacher_id INT NOT NULL,
student_id_id INT NOT NULL
);

SHOW TABLES;
DESCRIBE student;





