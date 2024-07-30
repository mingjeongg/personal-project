const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDNhMGFmMzkxOWRhYTFiODRmZTAxMDdlOWRiZjY1MyIsIm5iZiI6MTcyMjMyMjE3OC4wNDI4NzUsInN1YiI6IjY2YTc1OTk1NzIxOTE5MWRiNmFiYWQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1CQUZDk7pIj3Z6pWjDEfbza2ztQ6njTAZbtxfirtzqw",
  },
};

fetch(
  "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response.results);
    let topMovies = response.results;
    // console.log(topMovies);
    // let card = document.createElement("li");
    // card.className = "card-item";
    // card.textContent = "제목";
    // let cardList = document.querySelector(".movie-list");
    // cardList.appendChild(card);
    topMovies.forEach((movie) => {
      //컨테이너 만듬
      //li:리스트, p:문장
      let card = document.createElement("li");
      const movieImage = document.createElement("img");
      const movieName = document.createElement("p");
      const movieOverview = document.createElement("p");
      const movieScore = document.createElement("p");

      // 이미지는 textcontent 아니고 src 사용
      // 또 이미지 소스 변수로 지정하고, 앞에 붙여줘야함
      // p 아니고 img로 만들기
      const base = "https://image.tmdb.org/t/p/w500";

      //컨테이너에 내용 채움
      card.className = "card-item";
      movieImage.src = base + movie.poster_path;
      movieName.textContent = movie.name;
      movieOverview.textContent = movie.overview;
      movieScore.textContent = movie.vote_average;

      // eventhandler에 alert 함수 추가하기
      card.addEventListener("click", function () {
        alert(`영화 id: ${movie.id}`);
      });

      //그걸 card에 넣어줌
      card.appendChild(movieImage);
      card.appendChild(movieName);
      card.appendChild(movieOverview);
      card.appendChild(movieScore);

      //정리
      let cardList = document.querySelector(".movie-list");
      cardList.appendChild(card);
    });
    console.log(topMovies);
  });

// card????????????????????????????????????????????????????????
//   .forEach(function (x) {
//     if (x.movieName.includes(searchKeyword)) {
//       card.style.display;
//     }
//   })

const movieCards = document.querySelectorAll(".movie-list");
movieCards
  .forEach(function (card) {
    const title = card.querySelector(",movieName").textContent.toLowerCase;
    if (title.includes(searchKeyword)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  })

  // string.toLowerCase() - string을 소문자로 해서 반환

  //array.includes(특정값) - 배열의 항목에 특정 값이 포함되어 있는지를 판단하여 true 또는 flase 반환

  //display: none: 요소를 숨김처리, visibility: hidden과 달리 공간을 차지 하지 않고 숨김처리
  //display-inline: 새 라인에서 시작하지 않고, 내용만큼 너비를 차지
  //display: block: 새 라인에서 시작, 사용가능한 전체 너비(상위요소의 전체 너비) 차지
  //display: inline-block: 새 라인에서 시작하지 않고 내용만큼 너비 차지, 근데 높이와 너비 설정 가능

  //visible:  볼 수 있음 - 보일지 말지 결정

  .catch((err) => console.error(err));
