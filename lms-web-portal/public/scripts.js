document.addEventListener('DOMContentLoaded', () => {
    // API Base URL
    const apiBaseUrl = 'http://localhost:3000';

    fetch(`${apiBaseUrl}/logins`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('login-count').textContent = data.loginCount;
        })
        .catch(error => console.error('Error fetching login count:', error));

    // Fetch Users
    fetch(`${apiBaseUrl}/api/users`)
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');
            userList.innerHTML = '';
            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `${user.name} (Last Login: ${new Date(user.lastLogin).toLocaleString()})`;
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching users:', error));

    // Fetch Course Ratings
    fetch(`${apiBaseUrl}/api/course-ratings`)
        .then(response => response.json())
        .then(data => {
            const courseRatings = document.getElementById('course-ratings');
            courseRatings.innerHTML = '';
            data.forEach(course => {
                const listItem = document.createElement('li');
                listItem.textContent = `Course ID: ${course.courseId}, Rating: ${course.rating}`;
                courseRatings.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching course ratings:', error));

    // Fetch Engagement Metrics
    fetch(`${apiBaseUrl}/api/engagement-metrics`)
        .then(response => response.json())
        .then(data => {
            const engagementMetrics = document.getElementById('engagement-metrics');
            engagementMetrics.innerHTML = '';
            data.forEach(metric => {
                const listItem = document.createElement('li');
                listItem.textContent = `Course ID: ${metric.courseId}, Views: ${metric.views}, Completions: ${metric.completions}`;
                engagementMetrics.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching engagement metrics:', error));
});
