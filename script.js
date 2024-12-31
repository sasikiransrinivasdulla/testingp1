// script.js

// Redirect function for subject buttons
function redirect(resource) {
    const baseUrl = "https://drive.google.com"; // Replace with actual base link
    const paths = {
        "uhv-syllabus": "path-to-uhv-syllabus",
        "uhv-resources": "path-to-uhv-resources",
        "ps-syllabus": "path-to-ps-syllabus",
        "ps-resources": "path-to-ps-resources",
        "os-syllabus": "path-to-os-syllabus",
        "os-resources": "path-to-os-resources",
        "dbms-syllabus": "path-to-dbms-syllabus",
        "dbms-resources": "path-to-dbms-resources",
        "se-syllabus": "path-to-se-syllabus",
        "se-resources": "path-to-se-resources",
        "es-syllabus": "path-to-es-syllabus",
        "es-resources": "path-to-es-resources",
        "fsd-syllabus": "path-to-fsd-syllabus",
        "fsd-resources": "path-to-fsd-resources"
    };

    if (paths[resource]) {
        window.open(`${baseUrl}/${paths[resource]}`, "_blank");
    } else {
        alert("Resource not found!");
    }
}
