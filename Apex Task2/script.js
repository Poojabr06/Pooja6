function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        alert("All fields are required!");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function addImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    const imageGallery = document.getElementById('imageGallery');

    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Gallery Image";
        img.onclick = function() {
            imageGallery.removeChild(img);
        };

        imageGallery.appendChild(img);
        document.getElementById('imageUrl').value = '';
    }
}