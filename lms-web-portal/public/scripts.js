document.addEventListener('DOMContentLoaded', () => {
    const apiBaseUrl = 'http://localhost:4000';

    // Function to fetch data and handle errors
    const fetchData = async (url, callback) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            callback(data);
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
        }
    };

    // Fetch Login Count
    fetchData(`${apiBaseUrl}/logins`, (data) => {
        document.getElementById('login-count-display').textContent = data.loginCount;
    });

    // Fetch Users
    fetchData(`${apiBaseUrl}/api/users`, (data) => {
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';
        data.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} (Last Login: ${new Date(user.lastLogin).toLocaleString()})`;
            userList.appendChild(listItem);
        });
    });

    // Fetch Course Ratings
    fetchData(`${apiBaseUrl}/api/course-ratings`, (data) => {
        const courseRatings = document.getElementById('course-ratings-list');
        courseRatings.innerHTML = '';
        data.forEach(course => {
            const listItem = document.createElement('li');
            listItem.textContent = `Course ID: ${course.courseId}, Rating: ${course.rating}`;
            courseRatings.appendChild(listItem);
        });
    });

    // Fetch Engagement Metrics and Render Chart
    fetchData(`${apiBaseUrl}/api/engagement-metrics`, (data) => {
        const ctx = document.getElementById('engagement-chart').getContext('2d');
        const engagementData = data.map(metric => metric.views);
        const labels = data.map(metric => `Course ${metric.courseId}`);

        const engagementChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Views',
                    data: engagementData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
});

