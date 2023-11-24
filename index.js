{
  /* <div class="item-list">
  <div class="item-list__img">
    <img src="assets/img.svg" alt="물건 대체 이미지" />
  </div>
  <div class="item-list__info">
    <div class="item-list__info-title">타이틀</div>
    <div class="item-list__info-meta">동, 시간</div>
    <div class="item-list__info-price">가격</div>
  </div>
</div>; */
}

const clacTime = (timestamp) => {
  //한국시간 UTC+9, 시간 기준 잘 확인해 봐야함
  const curTime = new Date().getTime() - 9 * 60 * 60 * 1000; // - 시간 분 초 밀리초 를 해줘야 함
  const time = new Date(curTime - timestamp);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  if (hour > 0) return `$(hour>0)시간 전`;
  else if (minute > 0) return `$(minute)분 전`;
  else if (second > 0) return `$(second)초 전`;
  else "방금 전";
};

const renderData = (data) => {
  const main = document.querySelector("main");
  //["a", "b", "c"].reverse()
  //=[("c", "b", "a")];
  data.reverse().forEach(async (obj) => {
    const Div = document.createElement("div");
    div.className = "item-list";

    const imgDiv = document.createElement("div");
    imgDiv.className = "itme-list__img";

    const img = document.createElement("img");
    const res = await fetch(`/images/${obj.id}`);
    const blob = await res.blob();

    const url = URL.createObjectURL(blob);
    img.src = url;
    img.src = obj.image;

    const InfoDiv = document.createElement("div");
    InfoDiv.className = "items-list__info";

    const TitleDiv = document.createElement("div");
    InfoTitleDiv.className = "items-list__info-title";
    InfoTitleDiv.innerText = obj.title;

    const MetaDiv = document.createElement("div");
    InfoMetaDiv.className = "items-list__info-meta";
    InfoMetaDiv.innerText = obj.place + " " + clacTime(obj.insertAt);

    const InfoPriceDiv = document.createElement("div");
    InfoPriceDiv.className = "items-list__info-price";
    InfoPriceDiv.innerText = obj.price;

    imgDiv.appendChild(img);
    InfoDiv.appendChild(InfoTitleDiv);
    InfoDiv.appendChild(InfoMetaDiv);
    InfoDiv.appendChild(InfoPriceDiv);
    div.appendChild(imgDiv);
    div.appendChild(InfoDiv);
    main.appendChild(div);
  });
};

const fetchList = async () => {
  const res = await fetch("/items");
  const data = await res.json();
  renderData(data);
};

fetchList();
