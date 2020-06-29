fetch('/',
    {
      headers: {
               'Accept':'application/json'
              }})
        .then(
        function(request){
            if(request.status >= 200 && request.status < 400){
                request.json().then(function(data) {
                    for (var idx = 0; idx < data.length; idx++) {
                        var card = document.createElement("div")
                        card.class = "card"
                        var img  = document.createElement("img");
                        img.class = "card-img"
                        img.src = data[idx];
                        img.style = "width:100%"
                        card.append(img)
                        document.getElementById("1").append(card);

                    }
                }
               )
            }
            }
            );
