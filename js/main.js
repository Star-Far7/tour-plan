// Слайдер
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button--next",
    prevEl: ".swiper-button--prev",
  },

  // Эффект перелистывания слайда
  effect: "coverflow",

  // Прелистывания слайдера с помощью стрелок влево и вправо
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

ymaps.ready(init);

function init() {
  // Карта
  var myMap = new ymaps.Map("map", {
    center: [51.09070163, 71.41060952], //Широта долгота гео точки
    zoom: 17, // Зум где 0 это вес мир
  });
  // Создаем геообъект с типом геометрии "Точка".
  (myGeoObject = new ymaps.GeoObject(
    {
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [51.09070163, 71.41060952],
      },
      // Свойства.
      properties: {
        // Контент метки.
        iconContent: "Hotel Hilton Astana",
        hintContent: "Ну давай уже тащи",
      },
    },
    {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: "islands#blackStretchyIcon",
      // Метку можно перемещать.
      draggable: true,
    }
  )),
    (myPieChart = new ymaps.Placemark([51.09070163, 71.41060952]));
  myMap.geoObjects
    .add(myGeoObject)
    .add(myPieChart)
    .add(
      new ymaps.Placemark(
        [55.790139, 37.814052],
        {
          balloonContent: "цвет <strong>голубой</strong>",
          iconCaption: "Hotel Hilton Astana",
        },
        {
          preset: "islands#blueCircleDotIconWithCaption",
          iconCaptionMaxWidth: "50",
        }
      )
    );
}
