
document.addEventListener('DOMContentLoaded', function() {
    var sub = document.getElementById('sub');
    if(sub){
        sub.addEventListener('click', function() {

            var news = document.getElementById('news').value;

            var request = new XMLHttpRequest();
            var url = 'https://fakenews1.azurewebsites.net/api/News?name=' + news
            request.open('GET', url, true)
            request.onload = function() {
                alert(this.response)
                document.getElementById("finalAns").innerHTML = "<h2>"+this.response+"</h2>"

            }

            request.send()

            var i = 0;
            
            if (i == 0) {
                i = 1;
                var elem = document.getElementById("myBar");
                var width = 0;
                var id = setInterval(frame, 150);
                function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                    elem.innerHTML = width  + "%";
                }
                }
            }
            

          
    
    });
}
});
