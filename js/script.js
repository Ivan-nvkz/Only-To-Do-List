'use strict';
document.addEventListener('DOMContentLoaded', () => {

   let toDoInner = document.querySelector('.to-do__inner');
   let headerTitle = document.querySelector('.header__title');
   let taskListEmpty = document.querySelector('.task-list-empty');
   let btnOpen = document.querySelector('.btn__open');
   let mainContent = document.querySelector('.content');
   let btnEdit = document.createElement('div');
   let mainBox = document.createElement('div');
   let inputEnter = document.createElement('input');
   let btnClose = document.createElement('button');
   let btnAdd = document.createElement('button');
   let ulList = document.querySelector('.list');
   let inputValue = inputEnter.value;
   let newTask = inputValue;
   let li = document.createElement('li');
   let liBtn = document.createElement('button');

   // создаем модальное окно
   btnOpen.addEventListener('click', function () {
      taskListEmpty.style.display = 'none';
      btnOpen.style.display = 'none';
      // let btnEdit = document.createElement('div');
      btnEdit.textContent = 'Править';
      btnEdit.classList.add('edit');
      headerTitle.append(btnEdit);
      // let mainBox = document.createElement('div');
      mainBox.classList.add('main-box');
      mainContent.append(mainBox);
      // let inputEnter = document.createElement('input');
      inputEnter.type = "text";
      inputEnter.placeholder = "Введите текст задачи";
      inputEnter.classList.add('input-enter');
      mainBox.append(inputEnter);
      // let btnClose = document.createElement('button');
      btnClose.textContent = 'Закрыть';
      btnClose.classList.add('close-btn');
      mainBox.insertAdjacentElement('beforeend', btnClose);
      // let btnAdd = document.createElement('button');
      btnAdd.textContent = 'Добавить';
      btnAdd.classList.add('add-btn');
      mainBox.insertAdjacentElement('beforeend', btnAdd);
   });

   // по клику на кнопку "Добавить" получаем из input value и закрываем модальное окно
   btnAdd.addEventListener('click', function () {
      let inputValue = inputEnter.value;
      if (inputValue == false) {
         mainBox.style.display = 'block';
         alert('Создайте задачу и нажмите кнопку "Добавить"');
      } else {
         mainBox.remove();
         toDoInner.style.display = 'block';
         btnOpen.style.display = 'block';
         btnOpen.style.marginTop = '190px';
         let li = document.createElement('li');
         li.classList.add('item');
         let liBtn = document.createElement('button');
         liBtn.classList.add('circle');
         let newTask = inputValue;
         li.innerHTML = newTask;
         ulList.insertBefore(li, ulList.childNodes[0]);
         li.append(liBtn);
         inputEnter.value = '';
      }
   });

   // Кнопка 'Закрыть'
   btnClose.addEventListener('click', function () {
      mainBox.remove();
      btnOpen.style.display = 'block';
      inputEnter.value = '';
   });

   // --------------------------------------------------
   let liItems = document.querySelectorAll('.list');
   let btnBgColor = document.querySelectorAll('.circle , .circle--active ');

   liItems.forEach((elem, i) => {
      elem.addEventListener('click', function (e) {
         btnBgColor = e.target.childNodes[1];
         btnBgColor.classList.remove('circle');
         btnBgColor.classList.add('circle--active');

         btnBgColor.addEventListener('click', function () {
            btnBgColor.style.display = 'none';
            e.target.childNodes[0].remove();
            taskListEmpty.style.display = 'block';

         });

      });

   });

});

