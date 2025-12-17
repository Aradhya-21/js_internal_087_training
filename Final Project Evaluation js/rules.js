const form = document.getElementById("studentForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    clearErrors();
    output.innerHTML = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;
    let terms = document.getElementById("terms").checked;
    let gender = document.querySelector('input[name="gender"]:checked');

    let isValid = true;

    if (name === "") {
        showError(0, "Name is required");
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError(1, "Enter valid email");
        isValid = false;
    }

    if (!gender) {
        showError(2, "Select gender");
        isValid = false;
    }

    if (course === "") {
        showError(3, "Select course");
        isValid = false;
    }

    if (!terms) {
        showError(4, "Accept terms & conditions");
        isValid = false;
    }

    if (isValid) {
        // 1️⃣ Show result on SAME page
        output.innerHTML = `
            <p class="success">Registration Successful!</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Gender:</strong> ${gender.value}</p>
            <p><strong>Course:</strong> ${course}</p>
            <p>Redirecting to result page...</p>
        `;

        // 2️⃣ Store data for NEXT page
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("gender", gender.value);
        localStorage.setItem("course", course);

        // 3️⃣ Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = "result.html";
        }, 2000);

        form.reset();
    }
});

function showError(index, message) {
    document.getElementsByClassName("error")[index].innerText = message;
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let err of errors) {
        err.innerText = "";
    }
}

function validateEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
