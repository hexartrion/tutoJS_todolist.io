const quotes = [
    {
        qoute : "나는 결코 성공에 대해 꿈꾸지 않았다. 나는 꿈을 위해 행동 했다",
        author : "Estee Lauder"
    },
    {
        qoute : "똑똑한 사람이 되려 하지 말아라, 좋은 사람이 되도록 해라",
        author : "Paul Rand"
    },
    {
        qoute : "더 좋은 것을 쫓기 위해 좋은 것을 버리는 것을 두려워 하지 마라",
        author : "John D. Rockefeller"
    },
    {
        qoute : "날지 못하면 달려라. 달리지 못하면 걸어라. 그리고 걷지 못하면 기어라. 당신이 무엇을 하든 앞으로 가야 한다는 것만 명심 해라",
        author : "Martin Lutuer King Jr."
    },
    {
        qoute : "우리의 최대의 약점은 포기다. 성공으로 가는 가장 확실한 방법은 언제든지 한번 더 시도해보는 것이다.",
        author : "Thomas Edison"
    },
    {
        qoute : "자신을 가장 빨리 변화시키는 방법은 당신이 되고 싶은 모습을 하는 사람들과 어울리는 것이다",
        author : "Reid Hoffman"
    },
    {
        qoute : "돈은 자동차 여행의 휘발유 같은 것이다. 여행 중에 휘발유가 떨어지는 것을 원치 않지만, 주유소를 위한 여행을 하고 있는 것은 아니다",
        author : "Tim O'Reilly"
    },
    {
        qoute : "성공을 꿈꾸는 사람들도 있지만, 매일 아침에 일어나 꿈을 실현시키는 사람들도 있다",
        author : "Wayne Huizenga"
    },
    {
        qoute : "무언가를 시작하고 실패하는 것보다 더 나쁜 것은. 아무것도 시작하지 않는 것이다",
        author : "Seth Godin"
    },    
    {
        qoute : "무언가를 정말 하고 싶다면, 당신은 방법을 찾을 것이다. 그렇지 않다면, 변명을 찾을 것이다",
        author : "Jim Rohn"
    }
];

const qoute = document.querySelector("#quote span:first-child");
// qoute의 첫번째 span 요소를 지정

const author = document.querySelector("#quote span:last-child");
// qoute의 두번째 span 요소를 지정



const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];
// 랜덤하게 1개의 qoutes 요소를 넣는다

qoute.innerHTML = `${todaysQoute.qoute} <br>`;
// qoutes에서 명언을 text로 넣는다

author.innerHTML = `---- ${todaysQoute.author} ----`;
// qoutes에서 저자를 text로 넣는다
