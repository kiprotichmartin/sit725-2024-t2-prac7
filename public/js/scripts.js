const cardList = [
  {
    title: "Hurricanes",
    image: "images/hurricane.jpeg",
    link: "About hurricanes",
    desciption: "Demo desciption about hurricanes",
  },
  {
    title: "Tsunamis",
    image: "images/tsunami-wave.jpg",
    link: "About trusnamis",
    desciption: "Demo desciption about tsunamis",
  },
  {
    title: "Tornados",
    image: "images/tornado.webp",
    link: "About tornados",
    desciption: "Demo desciption about tornadoes",
  },
];

const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend = '<div class="col s4 center-align">'+
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
            '</div><div class="card-content">'+
            '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
            '<div class="card-reveal">'+
            '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
            '<p class="card-text grey-text text-darken-4">'+item.desciption+'</p>'+
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#clickMeButton").click(() => {
    clickMe();
  });
  addCards(cardList);
});
