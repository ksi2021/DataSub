# DataSub

# 1)  SELECT Students.FirstName, Students.LastName FROM Students INNER JOIN Exams ON Students.StudentId = Exams.StudentId WHERE Exams.Result < 3 GROUP BY Students.StudentId HAVING COUNT(Students.StudentId)>= 2;
