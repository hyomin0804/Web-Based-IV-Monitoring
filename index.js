const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.set('view engine', 'ejs') //어떤 templating 쓸건지 설정
app.set('views', path.join(__dirname, '/view')) // 파일의 현재 디렉토리를 가져와서 경로를 합쳐줌 이렇게 설정하면 코드를 어디서 실행하던 잘 가져옴
app.set('public', path.join(__dirname, '/public'))

app.get('/', (req, res) => {
    res.render('main');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(3000, () => { // 8080은 우리 기기로 연결하는 포트 주소
    console.log("Listening On Port 3000")
})