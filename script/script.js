const shareButton = document.getElementById("shareButton");
const popUp = document.getElementById("sharePopUp");
const path = document.getElementById("pathButton");
const mobile = document.getElementById("mobile");

shareButton.addEventListener("click", event => {

    event.preventDefault();

    if (window.innerWidth >= 590){
        // DESKTOP
        if (popUp.style.display === "flex") {    
            // SHARE CLOSE
            shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
            shareButton.style.transition = "0.3s";
            path.style.fill = "hsl(214, 17%, 51%)";
            setTimeout(() => {
                popUp.style.display = "none";
            }, 300);
            popUp.style.animation = "hide 0.5s backwards";
            
        } else {
            // SHARE OPEN
            popUp.style.display = "flex";
            popUp.style.animation = "show 0.5s backwards";
            shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
            shareButton.style.transition = "0.3s";
            path.style.fill = "hsl(210, 46%, 95%)";
        }
    } else {
        // MOBILE

        if (mobile.style.display === "flex") {    
            // SHARE CLOSE

            shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
            shareButton.style.transition = "0.3s";

            path.style.fill = "hsl(214, 17%, 51%)";

            mobile.style.animation = "hide 0.5s";
            setTimeout(() => {
                mobile.style.display = "none";
            }, 400);
            
        } else {
            // SHARE OPEN
            mobile.style.display = "flex";
            mobile.style.animation = "show 0.5s";
            
            shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
            shareButton.style.transition = "0.3s";
            path.style.fill = "hsl(210, 46%, 95%)";
        }
    }

});