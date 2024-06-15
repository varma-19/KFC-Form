function SummaryClick()
{
    document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
    document.getElementById("lblMobile").innerHTML = document.getElementById("txtMobile").value;

    var mealName = "";
    var adonName = "";

    var mealCost = 0;
    var adonCost = 0;
    var total = 0;

    var imgMeal = document.getElementById("imgMeal");


    var burgerRadio  = document.getElementById("optBurger");
    var rollerRadio  = document.getElementById("optRoller");

    if(burgerRadio.checked)
    {
        mealName = burgerRadio.value;
        mealCost = 120;
        imgMeal.src = "../public/images/OMG1.png";
    }

    if(rollerRadio.checked)
    {
        mealName = rollerRadio.value;
        mealCost = 100;
        imgMeal.src = "../public/images/OMG2.png";
    }

    var krusherCheckbox = document.getElementById("optKrusher");
    var wingsCheckbox = document.getElementById("optWings");

    if(krusherCheckbox.checked)
    {
         adonName += krusherCheckbox.value + "<br>";
         adonCost = 40;
         mealCost += adonCost;
    }

    if(wingsCheckbox.checked)
    {
        adonName += wingsCheckbox.value + "<br>";
        adonCost = 80;
        mealCost += adonCost;
    }

    total = mealCost;

    document.getElementById("lblMeal").innerHTML = mealName;
    document.getElementById("lblAdon").innerHTML = adonName;
    document.getElementById("lblTotal").innerHTML = total;

}
