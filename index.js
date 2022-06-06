const toggleContent = () => {
  const $contentAreaList = document.querySelectorAll(".area");

  $contentAreaList.forEach((contentArea) => {
    const hasGroup = contentArea.dataset["group"];
    const $button = contentArea.querySelector(".title");

    $button.addEventListener("click", () => {
      if (hasGroup) {
        const includedContent = contentArea.querySelector(".content");

        if (includedContent.classList.contains("act")) {
          includedContent.classList.remove("act");
        } else {
          includedContent.classList.add("act");
        }
      }
    });
  });
};

toggleContent();
