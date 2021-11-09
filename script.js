document.querySelectorAll(".down-list").forEach(function (downList) {
   const downListSelect = downList.querySelector(".down-list__select");
   const downListItems = downList.querySelector(".down-list__items");
   const downListItem = downListItems.querySelectorAll(".down-list__item");
   const dowListInput = downList.querySelector(".down-list__input");
   const dowListArrow = downList.querySelector(".down-list__arrow");

   // клик по кнопке открь/закрыть селект

   downListSelect.addEventListener("click", function (event) {
      event.stopPropagation();
      downListItems.classList.toggle("down-list__items--active");
      downListSelect.classList.toggle("down-list__select--active");
      document.querySelector(".down-list__arrow").classList.toggle("down-list__arrow--active");
   })

   // выбор элемента из спика/ запомнить выбранное значение/ закрыть селект

   downListItem.forEach(function (listItem) {
      listItem.addEventListener("click", function (event) {
         event.stopPropagation();
         downListSelect.textContent = this.textContent;
         downListSelect.focus();
         downListSelect.classList.remove("down-list__select--active");
         downListItems.classList.remove("down-list__items--active");
         dowListInput.value = this.dataset.value;
         dowListArrow.classList.remove("down-list__arrow--active");
      })
   })

   // клик снаружи селекта - закрытие селекта

   document.addEventListener("click", function () {

      downListItems.classList.remove("down-list__items--active");
      downListSelect.classList.remove("down-list__select--active");
      dowListArrow.classList.remove("down-list__arrow--active");

   })

   // закрытие селекта по Esc и Tab  

   document.addEventListener("keydown", function (event) {
      if (event.key === "Tab" || event.key === "Escape") {
         downListItems.classList.remove("down-list__items--active");
         downListSelect.classList.remove("down-list__select--active");
         dowListArrow.classList.remove("down-list__arrow--active");
      }
   })
})