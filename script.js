// клик по кнопке открь/закрыть селект

document.querySelector(".down-list__select").addEventListener("click", function (event) {
   event.stopPropagation();
   document.querySelector(".down-list__items").classList.toggle("down-list__items--active");
   document.querySelector(".down-list__select").classList.toggle("down-list__select--active");
})

// выбор элемента из спика/ запомнить выбранное значение/ закрыть селект

document.querySelectorAll(".down-list__item").forEach(function (listItem) {
   listItem.addEventListener("click", function (event) {
      event.stopPropagation();
      document.querySelector(".down-list__select").textContent = this.textContent;
      document.querySelector(".down-list__select").focus();
      document.querySelector(".down-list__select").classList.remove("down-list__select--active");
      document.querySelector(".down-list__items").classList.remove("down-list__items--active");
      document.querySelector(".down-list__input").value = this.dataset.value;
   })
})

// клик снаружи селекта - закрытие селекта

document.addEventListener("click", function () {
   console.log("click");
   document.querySelector(".down-list__items").classList.remove("down-list__items--active");
})