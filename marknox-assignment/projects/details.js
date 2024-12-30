

// document.addEventListener('DOMContentLoaded', function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const projectId = urlParams.get('id'); // Get the 'id' parameter from the URL

//     if (projectId) {
//         getProjectDetails(projectId);
//     }
// });

// function getProjectDetails(id) {
//     fetch('projects.json')  // Path to the JSON file, which is in the same folder as details.js
//         .then(response => response.json())
//         .then(data => {
//             const project = data.find(p => p.id === id);  // Find the project by name (or id)
//             if (project) {
//                 displayProjectDetails(project);
//             } else {
//                 document.getElementById('project-details').innerHTML = '<p>Project not found.</p>';
//             }
//         })
//         .catch(error => console.error('Error fetching project details:', error));
// }

// function displayProjectDetails(project) {
//     document.getElementById('project-title').textContent = project.name;
//     document.getElementById('project-details').textContent = project.details;
//     document.getElementById('project-image').src = `/assets/images/projects/${project.image}.png`;
//     document.getElementById('project-code').href = project.links.code;
// }
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id'); // Get the 'id' parameter from the URL

    if (projectId) {
        getProjectDetails(projectId);
    }
});

function getProjectDetails(id) {
    fetch('project/projects.json')  // Correct path to the JSON file
        .then(response => response.json())
        .then(data => {
            const project = data.find(p => p.id === id);  // Find the project by id
            if (project) {
                displayProjectDetails(project);
            } else {
                document.getElementById('project-details').innerHTML = '<p>Project not found.</p>';
            }
        })
        .catch(error => console.error('Error fetching project details:', error));
}

function displayProjectDetails(project) {
    document.getElementById('project-title').textContent = project.name;
    document.getElementById('project-details').textContent = project.details;
    document.getElementById('project-image').src = `/assets/images/projects/${project.image}.png`;
    document.getElementById('project-code').href = project.links.code;
}