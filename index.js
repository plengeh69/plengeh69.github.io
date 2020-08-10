Array.from(document.querySelectorAll('.pill')).forEach(el => {
    el.addEventListener('click', e => {
        let bg = e.target.style.backgroundColor, color = e.target.style.color
        document.querySelector('.about-skilled h2').classList.add('active')
        document.querySelector('.about-skilled h2').innerHTML = e.target.getAttribute('data-lang')
        switch (e.target.getAttribute('data-lang')) {
            case 'JavaScript':
                document.querySelector('.about-skilled .desc').innerHTML = 'Tingkat keterampilan target<div class="progress" data-percent="50"></div><br>JavaScript adalah bahasa pemrograman skrip yang biasa digunakan dalam browser web. jQuery Kami berusaha untuk menghindari penggunaan punggung Anda sebanyak mungkin. Halaman ini juga seluruhnya terbuat dari JavaScript murni. <a href="https://id.m.wikipedia.org/wiki/JavaScript" target="_blank">Wikipedia</a>'
                break
            case 'HTML':
                document.querySelector('.about-skilled .desc').innerHTML = 'Tingkat keterampilan target<div class="progress" data-percent="10"></div><br>HTML terus terang dasar ㅎㅎ Tentu saja ejs juga dilakukan. <a href="https://ko.wikipedia.org/wiki/HTML" target="_blank">Wikipedia</a>'
                break
            case 'CSS':
                document.querySelector('.about-skilled .desc').innerHTML = 'Tingkat keterampilan target<div class="progress" data-percent="10"></div><br>CSS adalah bahasa yang menjelaskan bagaimana bahasa markup sebenarnya ditampilkan. Seperti JavaScript, kami mencoba sebaik mungkin untuk tidak menggunakan kerangka kerja seperti Semantic UI atau Bootstrap, dan kami telah mengimplementasikan halaman ini secara langsung dengan CSS murni. <a href="https://id.m.wikipedia.org/wiki/Dependent_sheet" target="_blank">Wikipedia</a>'
                break
            case 'Python':
                document.querySelector('.about-skilled .desc').innerHTML = 'Tingkat keterampilan target<div class="progress" data-percent="30"></div><br>Python adalah bahasa pengetikan interaktif yang independen, ditafsirkan, berorientasi objek, dan dinamis. Wikipedia mengatakan ㅎㅎ Python hampir terlipat! (Wow!)  <a href="https://id.m.wikipedia.org/wiki/Python_(bahasa_pemrograman)" target="_blank">Wikipedia</a>'
                break
            default:
                document.querySelector('.about-skilled h2').classList.remove('active')
                document.querySelector('.about-skilled h2').innerHTML = 'Klik salah satu bahasa untuk mempelajari lebih lanjut!'
                break
        }
        document.querySelector('.about-skilled .desc .progress').innerHTML = `<div class="progress-bar" style="background-color: ${bg}; color: ${color};"><div class="number">${document.querySelector('.about-skilled .desc .progress').getAttribute('data-percent')}%</div></div>`
        setTimeout(() => {
            document.querySelector('.about-skilled .desc .progress .progress-bar').style.width = `${document.querySelector('.about-skilled .desc .progress').getAttribute('data-percent')}%`
        }, 100)
    })
})
