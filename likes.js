listoflikes = {
    "Favs": [
      {
        "Name": "Monster Hunter",
        "Type": "Video Game",
        "Color":"darkred",
        "Fav": ["The monsters","Using a GreatSword","All the interesting Mechanics"],
        "photo": "http://images2.wikia.nocookie.net/__cb20110318210660/monsterhunter/images/2/2e/Akantor_Artwork_2.jpg"
      },
      { 
        "Name": "Pokemon",
        "Type": "Video Game",
        "Color":"green",
        "Fav": ["Tyranitar","Been playing it for too long","New Pokemon Designs (Yes I am the minority)"],
        "photo": "https://i.ytimg.com/vi/8H9eD1UPxeY/maxresdefault.jpg"
      },
      {  
        "Name": "Gundam",
        "Type": "Entertainment?",
        "Color":"darkblue",
        "Fav": ["Giant Robots","BUUUUURNING!! FIIINGAAAAAH!!!","Some of the characters and stories are actually really good","Did I forget to say Giant robots?"],
        "photo":"http://wallpoper.com/images/00/42/03/57/gundam-sazabi_00420357.jpg"
      }
    ],//End Favs
    "Hobbies": [
      {  
        "Name": "Traveling",
        "Type": "Outdoors",
        "Color":"lightblue",
        "Fav": ["Beautiful Scenery","Going new places","Experimenting with new food!"],
        "photo":"http://epic-travel.com/wp-content/uploads/2013/09/Spice-Hotel-SPA-Epic-Travel-2.jpg"
      },
      {  
        "Name": "Bass Guitar",
        "Type": "Anywhere",
        "Color":"Black",
        "Fav": "I just really enjoy to play!",
        "photo":"http://images.esellerpro.com/2906/I/28/ibanez-aeb8e-bk-electro-acoustic-guitar.jpg"
      }
    ]//End Hobbies
  }//End listoflikes


    function template(dat) {
     return `
        <div class="fav-container"><span>
            <h1 class="fav-name">${dat.Name}</h1>
            <img class="fav-photo" src="${dat.photo}" onclick="changePage(this)">
        </span></div>`;
  }//end template


document.getElementById("likes").innerHTML =`
<h2 class=fav-header>Here are ${listoflikes.Favs.length} of my Favorite things: </h2>
<div class="favs">
  ${listoflikes.Favs.map(template).join('')}
  </div>`;
  
  function changePage(img) 
  {
     //Get object data using Image
    listoflikes.Favs.forEach(function(index){
      if(index.photo === img.src)
      {
    document.getElementById("bod").style.backgroundImage = 'url(' + img.src + ')'; // Change Bakground image
    document.getElementById("bod").style.backgroundColor =  index.Color;
    document.getElementById("likes").innerHTML =`
    <h2 class=fav-header>${index.Name}<header>


    </div>`;
      }
    });
  };

  /*function setObject(image){
    for(let i = 0; i <= listoflikes.Favs.length; i++){
      if(listoflikes.Favs[i].photo === image)
    {
      
      return listoflikes.Favs[i];
    }
  } 
};*/