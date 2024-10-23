// Git 2

function app() {
    let answers = {
        q1: 'soal1-b',
        q2: 'soal2-a',
        q3: 'soal3-a',
        q4: 'soal4-b',
        q5: 'soal5-d'
    }

    document.querySelector('#btn').addEventListener('click', () => {
        let score = 0;

        for(let i = 0; i <= 5; i++) {
            const ans = document.querySelector(`input[name=soal${i}]:checked`)
            if(ans) {
                if(ans.id === answers[`q${i}`]) {
                    score += 20
                }
            }
        }

        document.querySelector('#score').innerHTML = "Score anda : " + score
    })

    document.querySelector('#clear').addEventListener('click', () => {
        const ans = document.querySelectorAll('input[type="radio"]')
        ans.forEach(e => {
            e.checked = false;
        });

        document.querySelector('#score').innerHTML = ""
    })


}

app();