let votes = { 'شخص 1': 0, 'شخص 2': 0, 'شخص 3': 0 };
let totalVotes = 0;
let totalVoters = 0;
let maxVoters = 10;
let votedUsers = {};
let users = {
    '1111': 'أحمد',
    '2222': 'محمد',
    '3333': 'سارة',
    '4444': 'رغد',
    '5555': 'سوزان',
    '6666': 'عبدالله',
    '7777': 'سندس',
    '8888': 'عمر',
    '9999': 'حمزه',
    '1000': 'ليث',
    // أضف المزيد من المستخدمين حسب الحاجة
};

function verifyUser() {
    const userNumber = document.getElementById('user-number').value;
    document.getElementById('results').style.display = 'none';
    if (userNumber in users) {
        if (votedUsers[userNumber]) {
            alert('لقد قمت بالتصويت مسبقًا!');
        } else if (totalVoters >= maxVoters) {
            alert('تم الوصول إلى الحد الأقصى من المصوتين!');
            document.getElementById('vote-form').style.display = 'none';
            document.getElementById('results').style.display = 'block';
        } else {
            document.getElementById('user-name').innerText = users[userNumber];
            document.getElementById('vote-form').style.display = 'none'; // إخفاء حقل التحقق
            document.getElementById('person-selection').style.display = 'block'; // إظهار حقل التصويت
        }
    } else {
        alert('الرقم غير موجود في النظام.');
    }
}

function vote() {
    const selectedPerson = document.querySelector('input[name="person"]:checked');
    const userNumber = document.getElementById('user-number').value;
    
    if (selectedPerson) {
        const personName = selectedPerson.value;
        votes[personName]++;
        totalVotes++;
        totalVoters++;
        votedUsers[userNumber] = true;

        updateResults();
        updateVoterCount();
        alert('تم التصويت بنجاح!');
        document.getElementById('person-selection').style.display = 'none'; // إخفاء بعد التصويت
        document.getElementById('vote-form').style.display = 'block';
    } else {
        alert('يرجى اختيار شخص للتصويت له');
    }
   
}

function updateResults() {
    for (let person in votes) {
        const voteCount = votes[person];
        const percent = totalVotes > 0 ? ((voteCount / totalVotes) * 100).toFixed(2) : 0;
        
        document.getElementById(`votes${person.split(' ')[1]}`).innerText = voteCount;
        document.getElementById(`percent${person.split(' ')[1]}`).innerText = `${percent}%`;
    }
}

function updateVoterCount() {
    document.getElementById('voter-count').innerText = totalVoters;
}
