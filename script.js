function app() {
    let answers = {
        q1: 'soal1-b', // Soekarno seharusnya benar untuk soal ini
        q2: 'soal2-a',
        q3: 'soal3-a',
        q4: 'soal4-b',
        q5: 'soal5-d'
    }

    document.querySelector('#btn').addEventListener('click', () => {
        let score = 0;
        let allAnswered = true; 

        for(let i = 1; i <= 5; i++) {
            const ans = document.querySelector(`input[name=soal${i}]:checked`);
            if(!ans) {
                allAnswered = false; 
                break; 
            } else if(ans.id === answers[`q${i}`]) {
                score += 20; 
            }
        }

        if (!allAnswered) {
            document.querySelector('#score').style.color = "red"
            document.querySelector('#score').innerHTML = "Anda belum menyelesaikan kuis.";
        } else {
            document.querySelector('#score').style.color = "black"
            document.querySelector('#score').innerHTML = `Skor Anda: ${score}`;
        }
    });

    document.querySelector('#clear').addEventListener('click', () => {
        const ans = document.querySelectorAll('input[type="radio"]');
        ans.forEach(e => {
            e.checked = false;
        });

        document.querySelector('#score').innerHTML = "";
    });
}

app();
