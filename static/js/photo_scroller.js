const blurryImageLoad = new BlurryImageLoad();
var photos = []
var ids = 0;
// var bricklayer = new Bricklayer(document.querySelector('.bricklayer'))

function add_photos(data){
    for (var idx = 0; idx < data.length; idx++) {
        var holder = document.createElement("div");
        var img  = document.createElement("img");
        img.className = "blurry-load img-fluid img-responsive";
        img.loading = "lazy";
        img.setAttribute("data_large", data[idx]);
        img.src = data[idx];
        img.style = "width:auto;max-height:400px;"
        img.id = ids;
        ids++;
        holder.append(img);
        document.getElementById("bricklayer").append(holder);
        // bricklayer.append(holder);
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




