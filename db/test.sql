SELECT title as job, salary, department.name FROM roles 
INNER JOIN department 
ON roles.department_id = department.id;