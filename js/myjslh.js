document.addEventListener("DOMContentLoaded",function(){
    var khoi = document.getElementById('login');
    var nut = document.getElementById('btn-login');
    var back = document.getElementById('click');
        nut.onclick = function (e) {
            khoi.classList.toggle('move');
            e.stopPropagation();
            document.body.style.overflowY = "hidden"
        }
        back.onclick = function () {
            khoi.classList.remove('move');
            document.body.style.overflowY = "auto"
        }
    //     var tableRow = document.getElementById("login");
    //     var tableRowClone = tableRow.cloneNode(true);
    // // Clear the `id` from the clone
    //     tableRowClone.id = ""; // To clear it, or include something to give it its own
    //     tableRow.parentNode.insertBefore(tableRowClone, tableRow.nextSibling);
        
},false)
