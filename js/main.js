function showTab(tabName, element) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

function toggleYear(yearId) {
    let yearContent = document.getElementById(yearId);
    yearContent.style.display = yearContent.style.display === 'block' ? 'none' : 'block';
}

        function toggleYear(yearId) {
            var content = document.getElementById(yearId);
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }