const URL = 'http://127.0.0.1:5000'; 
document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todoList');
    const todoForm = document.getElementById('todoForm');
    const newTaskInput = document.getElementById('newTask');
    
    function fetchTodos() {
        fetch('/api/todos')
            .then(response => response.json())
            .then(todos => {
                todoList.innerHTML = '';
                todos.forEach(todo => {
                    const li = document.createElement('li');
                    li.textContent = todo.task;
                    if (todo.completed) {
                        li.classList.add('completed');
                    }
                    li.addEventListener('click', () => toggleComplete(todo.id));
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        deleteTodo(todo.id);
                    });
                    li.appendChild(deleteBtn);
                    todoList.appendChild(li);
                });
            });
    }

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = newTaskInput.value;
        fetch(URL+'/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task }),
        })
        .then(response => response.json())
        .then(() => {
            newTaskInput.value = '';
            fetchTodos();
        });
    });

    function toggleComplete(id) {
        fetch(URL+`/api/todos/${id}`, {
            method: 'PUT',
        })
        .then(() => fetchTodos());
    }

    function deleteTodo(id) {
        fetch(URL+`/api/todos/${id}`, {
            method: 'DELETE',
        })
        .then(() => fetchTodos());
    }

    fetchTodos();  
});
document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todoList');
    const todoForm = document.getElementById('todoForm');
    const newTaskInput = document.getElementById('newTask');

    function fetchTodos() {
        fetch(URL+'/api/todos')
            .then(response => response.json())
            .then(todos => {
                todoList.innerHTML = '';
                todos.forEach(todo => {
                    const li = document.createElement('li');
                    li.textContent = todo.task;
                    if (todo.completed) {
                        li.classList.add('completed');
                    }
                    li.addEventListener('click', () => toggleComplete(todo.id));
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        deleteTodo(todo.id);
                    });
                    li.appendChild(deleteBtn);
                    todoList.appendChild(li);
                });
            });
    }

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const task = newTaskInput.value;
        fetch(URL+'/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task }),
        })
        .then(response => response.json())
        .then(() => {
            newTaskInput.value = '';
            fetchTodos();
        });
    });

    function toggleComplete(id) {
        fetch(URL+`/api/todos/${id}`, {
            method: 'PUT',
        })
        .then(() => fetchTodos());
    }

    function deleteTodo(id) {
        fetch(URL+`/api/todos/${id}`, {
            method: 'DELETE',
        })
        .then(() => fetchTodos());
    }

    fetchTodos();  
});
