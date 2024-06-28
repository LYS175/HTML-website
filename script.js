//헤더 컨트롤러
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
        // Scrolling down and not at the top of the page
        header.classList.add('hidden');
    } else {
        // Scrolling up or at the top of the page
        header.classList.remove('hidden');
    }

    if (scrollTop > header.offsetHeight) {
        // Scroll down beyond the header
        header.classList.add('sticky');
    } else {
        // Scroll up to the top of the page
        header.classList.remove('sticky');
    }

    lastScrollTop = scrollTop;
});

//배너 컨트롤러
let slideIndex1 = 0;
let slideIndex2 = 0;

function showSlides1() {
    const slides1 = document.querySelectorAll("#main_banner .slide");
    if (slideIndex1 >= slides1.length) { slideIndex1 = 0; }
    if (slideIndex1 < 0) { slideIndex1 = slides1.length - 1; }
    const offset1 = -slideIndex1 * 100;
    document.querySelector('.slideContainer1').style.transform = `translateX(${offset1}%)`;
}

function showSlides2() {
    const slides2 = document.querySelectorAll("#sub_banner .slide");
    if (slideIndex2 >= slides2.length) { slideIndex2 = 0; }
    if (slideIndex2 < 0) { slideIndex2 = slides2.length - 1; }
    const offset2 = -slideIndex2 * 100;
    document.querySelector('.slideContainer2').style.transform = `translateX(${offset2}%)`;
}

function plusSlides1(n) {
    slideIndex1 += n;
    showSlides1();
}

function plusSlides2(n) {
    slideIndex2 += n;
    showSlides2();
}

function autoSlide1() {
    slideIndex1++;
    showSlides1();
}

function autoSlide2() {
    slideIndex2++;
    showSlides2();
}

setInterval(autoSlide1, 2000); // Change main_banner slide every 2 seconds
setInterval(autoSlide2, 4000); // Change sub_banner slide every 4 seconds

// Initial call to display the first slide
showSlides1();
showSlides2();

//순위 컨트롤러
const rankings = document.getElementById('ranking');
const terms = [
    '리그 레게노', '마법사 체스', '신의 한 수', '애꾸는 블랙잭',
    '술래잡기', '우주 닌자', '우리중에', '날으는 지건',
    '승호리 철교'
];

//배열을 무작위로 섞는 함수
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//순위를 업데이트하는 함수
function updateRankings() {
    shuffle(terms); // 검색어를 무작위로 섞음
    const items = Array.from(rankings.children); // 현재 리스트 항목들을 가져옴

    // 각 항목을 순차적으로 숨김
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('hidden');
        }, index * 100); // 각 항목이 순차적으로 숨겨지도록 딜레이 적용
    });

    // 모든 항목이 숨겨진 후 새로운 순서로 리스트를 재생성
    setTimeout(() => {
        rankings.innerHTML = ''; // 기존 리스트 초기화
        terms.forEach((term, index) => {
            const li = document.createElement('li'); // 새로운 리스트 항목 생성
            const rank = document.createElement('span'); // 순위 표시를 위한 span 생성
            rank.className = 'rank';
            rank.textContent = index + 1; // 순위 설정
            li.appendChild(rank);
            li.appendChild(document.createTextNode(term)); // 검색어 텍스트 추가
            li.classList.add('hidden'); // 숨김 클래스 추가
            rankings.appendChild(li); // 리스트에 항목 추가
        });

        const newItems = Array.from(rankings.children); // 새 리스트 항목들을 가져옴
        newItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('hidden'); // 순차적으로 항목을 나타나게 함
            }, index * 100); // 각 항목이 순차적으로 나타나도록 딜레이 적용
        });
    }, items.length * 100 + 500); // 모든 항목이 숨겨진 후 실행
}

setInterval(updateRankings, 4000); // 4초마다 순위 업데이트

//기사 본문 콘트롤러
function loadContent(section) {
    let content = '';
    const defaultContent = `
    <ul>
        <li>
            <figure>
                <img src="./images/LoL.jpg" alt="example">
                <figcaption>
                    <dl>
                        <dt>손 안대고 이기기</dt>
                        <dd>손을 안대고 이기는 법은</dd>
                        <dd>그런건 없다 긁? 긁? 긁?</dd>
                    </dl>
                </figcaption>
            </figure>
        </li>
        <li>
            <figure>
                <img src="./images/chess.png" alt="example">
                <figcaption>
                    <dl>
                        <dt>웹페이지 만들기</dt>
                        <dd>아 진짜 너무 귀찮다</dd>
                        <dd>자고 싶은데 잘 수가 없다</dd>
                    </dl>
                </figcaption>
            </figure>
        </li>
        <li>
            <figure>
                <img src="./images/dbd.jpg" alt="example">
                <figcaption>
                    <dl>
                        <dt>챗 지피티 활용</dt>
                        <dd>프롬프팅: 해 줘.</dd>
                        <dd>지피티: 옛 썰!!!!</dd>
                    </dl>
                </figcaption>
            </figure>
        </li>
        <li>
            <figure>
                <img src="./images/rain6.jpg" alt="example">
                <figcaption>
                    <dl>
                        <dt>팀운이 좋나요?</dt>
                        <dd>그게 당신 운명입니다!</dd>
                        <dd>받아들이세요</dd>
                    </dl>
                </figcaption>
            </figure>
        </li>
        <li>
            <figure>
                <img src="./images/hearthston.png" alt="example">
                <figcaption>
                    <dl>
                        <dt>내 돈 안내고 밥 먹는법</dt>
                        <dd>그건 바로..........</dd>
                        <dd>남의 돈으로 먹는 것이다</dd>
                    </dl>
                </figcaption>
            </figure>
        </li>
        <li>
            <figure>
                <img src="./images/overww.png" alt="example">
                <figcaption>
                    <dl>
                        <dt>뒤로 백덤블링</dt>
                        <dd>간지 뒤졌죠?</dd>
                        <dd>무릅 관절도 뒤졌죠?</dd>
                    </dl>
                </figcaption>
            </figure>
        </li>
    </ul>`;
    switch(section) {
        case 'trending':
            content = defaultContent;
            break;
        case 'popular':
            content = `
            <ul>
                <li>
                    <figure>
                        <img src="./images/monkey.jfif" alt="example">
                        <figcaption>
                            <dl>
                                <dt>새벽 4시의 전설</dt>
                                <dd>아침부터 지금까지 했는데</dd>
                                <dd>끝날 기미가 안보여?</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="./images/blast.webp" alt="example">
                        <figcaption>
                            <dl>
                                <dt>중국어로 밥먹었니?</dt>
                                <dd>니 취팔러마~~ 짜장면?</dd>
                                <dd>워시 워셔액~ 불스원샷~</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                                <li>
                    <figure>
                        <img src="./images/lasereye.jfif" alt="example">
                        <figcaption>
                            <dl>
                                <dt>유튜브 활용법</dt>
                                <dd>"살려줘"를 검색한다</dd>
                                <dd>"안 살려줘를" 감상한다</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                                <li>
                    <figure>
                        <img src="./images/dog.jpg" alt="example">
                        <figcaption>
                            <dl>
                                <dt>자바 스크립트</dt>
                                <dd>솔직히 너무 쉽네요 ㅎㅎ</dd>
                                <dd>근데 너무 노가인데...</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                                <li>
                    <figure>
                        <img src="./images/frog.jfif" alt="example">
                        <figcaption>
                            <dl>
                                <dt>한 페이지 당 6개</dt>
                                <dd>난 무슨 생각으로 이걸</dd>
                                <dd>24개나 만든거지??</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                                <li>
                    <figure>
                        <img src="./images/cry.jfif" alt="example">
                        <figcaption>
                            <dl>
                                <dt>소름돋는 작품</dt>
                                <dd>아직 반절도 못했음 ㅋㅋ</dd>
                                <dd>워시 워셔액~ 불스원샷~</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                <!-- 추가 내용 생략 -->
            </ul>`;
            break;
        case 'genre':
            content = `
            <ul>
                <li>
                    <figure>
                        <img src="./images/hearthston.png" alt="example">
                        <figcaption>
                            <dl>
                                <dt>내 돈 안내고 밥 먹는법</dt>
                                <dd>그건 바로..........</dd>
                                <dd>남의 돈으로 먹는 것이다</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                                <li>
                    <figure>
                        <img src="./images/dog.jpg" alt="example">
                        <figcaption>
                            <dl>
                                <dt>자바 스크립트</dt>
                                <dd>솔직히 너무 쉽네요 ㅎㅎ</dd>
                                <dd>근데 너무 노가인데...</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                                <li>
                    <figure>
                        <img src="./images/cry.jfif" alt="example">
                        <figcaption>
                            <dl>
                                <dt>소름돋는 작품</dt>
                                <dd>아직 반절도 못했음 ㅋㅋ</dd>
                                <dd>워시 워셔액~ 불스원샷~</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                                <li>
                    <figure>
                        <img src="./images/lasereye.jfif" alt="example">
                        <figcaption>
                            <dl>
                                <dt>유튜브 활용법</dt>
                                <dd>"살려줘"를 검색한다</dd>
                                <dd>"안 살려줘를" 감상한다</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
            </ul>`;
            break;
        case 'guides':
            content = `
            <ul>
                <li>
                    <figure>
                        <img src="./images/LoL.jpg" alt="example">
                        <figcaption>
                            <dl>
                                <dt>손 안대고 이기기</dt>
                                <dd>손을 안대고 이기는 법은</dd>
                                <dd>그런건 없다 긁? 긁? 긁?</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="./images/chess.png" alt="example">
                        <figcaption>
                            <dl>
                                <dt>웹페이지 만들기</dt>
                                <dd>아 진짜 너무 귀찮다</dd>
                                <dd>자고 싶은데 잘 수가 없다</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="./images/hearthston.png" alt="example">
                        <figcaption>
                            <dl>
                                <dt>내 돈 안내고 밥 먹는법</dt>
                                <dd>그건 바로..........</dd>
                                <dd>남의 돈으로 먹는 것이다</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="./images/overww.png" alt="example">
                        <figcaption>
                            <dl>
                                <dt>뒤로 백덤블링</dt>
                                <dd>간지 뒤졌죠?</dd>
                                <dd>무릅 관절도 뒤졌죠?</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
            </ul>`;
            break;
        case 'more':
            content = `
            <ul>
                <li>
                    <figure>
                        <img src="./images/dbd.jpg" alt="example">
                        <figcaption>
                            <dl>
                                <dt>챗 지피티 활용</dt>
                                <dd>프롬프팅: 해 줘.</dd>
                                <dd>지피티: 옛 썰!!!!</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                                <li>
                    <figure>
                        <img src="./images/hearthston.png" alt="example">
                        <figcaption>
                            <dl>
                                <dt>내 돈 안내고 밥 먹는법</dt>
                                <dd>그건 바로..........</dd>
                                <dd>남의 돈으로 먹는 것이다</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="./images/overww.png" alt="example">
                        <figcaption>
                            <dl>
                                <dt>뒤로 백덤블링</dt>
                                <dd>간지 뒤졌죠?</dd>
                                <dd>무릅 관절도 뒤졌죠?</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src="./images/monkey.jfif" alt="example">
                        <figcaption>
                            <dl>
                                <dt>새벽 4시의 전설</dt>
                                <dd>아침부터 지금까지 했는데</dd>
                                <dd>끝날 기미가 안보여?</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </li>
            </ul>`;
            break;
    }
    document.getElementById('article_con').innerHTML = content;
}


//비디오 컨트롤러
document.getElementById('play-button').addEventListener('click', function() {
    var video = document.getElementById('video');
    var playButton = document.getElementById('play-button');
    video.style.display = 'block'; // 동영상을 보이게 함
    playButton.style.display = 'none'; // 재생 버튼을 숨김
    video.play();
});


//달력 컨트롤러 
let currentMonthIndex = 0;
const months = [
    { name: 'january', days: 31 },
    { name: 'february', days: 28 },
    { name: 'march', days: 31 },
    { name: 'april', days: 30 },
    { name: 'may', days: 31 },
    { name: 'june', days: 30 },
    { name: 'july', days: 31 },
    { name: 'august', days: 31 },
    { name: 'september', days: 30 },
    { name: 'october', days: 31 },
    { name: 'november', days: 30 },
    { name: 'december', days: 31 },
];

function createCalendar(month, days) {
    const daysDiv = document.getElementById(month).querySelector('.days');
    for (let i = 1; i <= days; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.textContent = i;
        daysDiv.appendChild(dayDiv);
    }
}

function showMonth(index) {
    document.querySelectorAll('.month').forEach((month, i) => {
        month.style.display = i === index ? 'block' : 'none';
    });
}

function nextMonth() {
    currentMonthIndex = (currentMonthIndex + 1) % 12;
    showMonth(currentMonthIndex);
}

function prevMonth() {
    currentMonthIndex = (currentMonthIndex - 1 + 12) % 12;
    showMonth(currentMonthIndex);
}

months.forEach(month => createCalendar(month.name, month.days));
showMonth(currentMonthIndex);