const form = document.getElementById("write-form");

const handleSubmitForm = async (event) => {
  await event.preventDefault();
  const body = new FormData(form);
  // 세계시간 기준
  body.append("insertAt", new Date().getTime());
  try {
    const res = fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/";
  } catch (e) {
    console.error("이미지 업도르에 실패했습니다.");
  }
};

form.addEventListener("submit");
