# DataSub SQL

# 1)  SELECT Students.FirstName, Students.LastName FROM Students INNER JOIN Exams ON Students.StudentId = Exams.StudentId WHERE Exams.Result < 3 GROUP BY Students.StudentId HAVING COUNT(Students.StudentId)>= 2;

# 2) SELECT students._Group FROM students WHERE StudentId in (SELECT exams.StudentId FROM exams WHERE exams.Result < 3 GROUP BY exams.StudentId HAVING COUNT(Students.StudentId) >= 2) GROUP BY students._Group HAVING   COUNT(students._Group) >= 10
