INSERT INTO department(name)
VALUES
    ("Management"),
    ("Sales"),
    ("Marketing"),
    ("Finance"),
    ("Legal");

INSERT INTO roles(title, salary, department_id)
VALUES
    ("CEO", 800000 , 1),
    ("Sales representative", 100000, 2),
    ("Director of Growth", 80000, 3),
    ("Accountant", 200000, 4),
    ("Lawyer", 300000, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("Toby", "Wallace", 1, NULL),
("Enzo", "Martinez", 2, 1),
("Robert", "Williams", 3, 1),
("Nico", "Gonzalez", 4, 1),
("Jason", "Kidd", 5, 1);






-- SELECT * FROM department;