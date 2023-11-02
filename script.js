//Custom function
function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeople = document.getElementById("totalPeople").value;

    //Quick validation
    if(billAmount === "" || serviceQuality==0){
        window.alert("Please enter some values to get this baby up and running.");
        return;
    }
        
        //Check to see if this input is empty or less or equal to 1
        if(totalPeople=== "" || totalPeople <=1){
            totalPeople =1;

            document.getElementById("each").style.display="none";
            
        } else{
            document.getElementById("each").style.display="block";
        }

        //Do some math
        var total = (billAmount*serviceQuality)/totalPeople;
        total=Math.round(total*100)/100;
        total=total.toFixed(2);

        // Display the tip!
        document.getElementById("totalTip").style.display = "block";
        document.getElementById("tip").innerHTML=total;


    

      
}

// Hide the tip ammount on load 
document.getElementById("totalTip").style.display= "none";
document.getElementById("each").style.display= "none";


// Clicking the button calls our custom function
document.getElementById("calculate").onclick=function() { calculateTip();};


//Trial
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

