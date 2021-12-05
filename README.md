# DataSub

# 1)    SELECT Students.FirstName, Students.LastName, COUNT (Students.StudentId) AS count FROM Students INNER JOIN Exams ON Students.StudentId = Exams.StudentId WHERE Exams.Result < 3 GROUP BY Students.StudentId HAVING count>= 2;
