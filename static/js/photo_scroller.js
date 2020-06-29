const blurryImageLoad = new BlurryImageLoad();
var photos = []

function add_photos(data){
    for (var idx = 0; idx < data.length; idx++) {
        var card = document.createElement("div");
        var img  = document.createElement("img");
        img.className = "card-img blurry-load";
        img.loading = "lazy";
        img.setAttribute("data_large", data[idx]);
        img.src = data[idx];
        img.style = "width:100%"
        card.append(img)
        document.getElementById("1").append(card);
    }
    blurryImageLoad.load();
}

fetch('/',
    {
      headers: {
               'Accept':'application/json'
              }})
        .then(
        function(request){
            if(request.status >= 200 && request.status < 400){
                request.json().then(function(data) {
                    photos = data
                    add_photos(data.splice(0,20))
                }
               )
            }
            }
            );

window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop + window.innerHeight == (document.documentElement.scrollHeight)){
        var to_add = photos.splice(0,10)
        console.log(to_add)
        add_photos(to_add)
    }
});




