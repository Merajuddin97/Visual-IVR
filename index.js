// ------------------------------------------- Alert Box Code Starts------------------------------------------- //

$("select").change(function () {
    if ($(this).children(":selected").text() == "Registration") {
      swal({
        title: "Your Selections",
        text: "You have selected Registration",
        icon: "success",
        button: " Done!",
      });
    }
  });
  
  $("select").change(function () {
    if ($(this).children(":selected").text() == "Activation") {
      swal({
        title: "Your Selections",
        text: "You have selected Activation",
        icon: "success",
        button: "Done",
      });
    }
  });
  
  // ------------------------------------------- Alert Box Code Ends------------------------------------------- //
  
  // ------------------------------------------- Items Alert Code Start------------------------------------------- //
  document.getElementById("items").onchange = function () {
  document.getElementById("btnid").style.display = "block";
  };
  // ------------------------------------------- Items Alert Code Ends------------------------------------------- //
  
  // ------------------------------------------- Intents Select Code Start------------------------------------------- //
  
  document.getElementById("intents").onchange = function () {
    var optionSelected = this.options[this.selectedIndex];
    if (
      optionSelected.dataset.val === "file" ||
      optionSelected.dataset.val === "claim" ||
      optionSelected.dataset.val === "follow"
    ) {
      document.getElementById("intents").value = this.value;
      document.getElementById("retailers").style.display = "block";
    } else if (optionSelected.dataset.val === "anything") {
      intents.value = "Anything Else";
      document.getElementById("anythingelse").style.display = "block";
      document.getElementById("btnanythingelse").style.display="block"
    }
  };
  // ------------------------------------------- Intents Select Code Ends------------------------------------------- //
  
  
  
  
  
  // --------------------------------- Retailer With Catagorey & TC Number Code Starts--------------------------------- //
  
  document.getElementById("retailers").onchange = function () {
    var optionSelected = this.options[this.selectedIndex];
    console.log("selected");
    if (
      optionSelected.dataset.val === "walmart" ||
      optionSelected.dataset.val === "costco" ||
      optionSelected.dataset.val === "samsclub"
    ) {
      document.getElementById("inputnum").style.display = "block";
      document.getElementById("items").style.display = "block";
      document.getElementById("retailers").value = this.value;
    }
  
    // --------------------------- Retailer With Catagorey & TC Number Code Ends----------------------- //
  
  
  
  
    
    // ------------------------------------------- Retailer With Catagorey Code Starts------------------------------------------- //
    else if (
      optionSelected.dataset.val === "Amazon" ||
      optionSelected.dataset.val === "Target" ||
      optionSelected.dataset.val === "West Elm" ||
      optionSelected.dataset.val === "Texas Appliance" ||
      optionSelected.dataset.val === "Sonic Electronix" ||
      optionSelected.dataset.val === "Telrite" ||
      optionSelected.dataset.val === "ShopHQ" ||
      optionSelected.dataset.val === "Ring" ||
      optionSelected.dataset.val === "Ring" ||
      optionSelected.dataset.val === "PureTalk" ||
      optionSelected.dataset.val === "Orville" ||
      optionSelected.dataset.val === "NewEgg" ||
      optionSelected.dataset.val === "Michaels" ||
      optionSelected.dataset.val === "H20" ||
      optionSelected.dataset.val === "Grand Appliance" ||
      optionSelected.dataset.val === "Grand Appliance" ||
      optionSelected.dataset.val === "Famous Tates" ||
      optionSelected.dataset.val === "East Coast Appliance" ||
      optionSelected.dataset.val === "Crutchfield" ||
      optionSelected.dataset.val === "Cornerstone" ||
      optionSelected.dataset.val === "CompSource" ||
      optionSelected.dataset.val === "BuyDig" ||
      optionSelected.dataset.val === "Brandsource" ||
      optionSelected.dataset.val === "Brandsource" ||
      optionSelected.dataset.val === "Blink" ||
      optionSelected.dataset.val === "Big Lots" ||
      optionSelected.dataset.val === "Beach Camera" ||
      optionSelected.dataset.val === "American Home Shield" ||
      optionSelected.dataset.val === "AJ Madison" ||
      optionSelected.dataset.val === "ABT Electronics" ||
      optionSelected.dataset.val === "JB Hifi" ||
      optionSelected.dataset.val === "Allstate" ||
      optionSelected.dataset.val === "Cellcom" ||
      optionSelected.dataset.val === "Menards" ||
      optionSelected.dataset.val === "SquareTrade" ||
      optionSelected.dataset.val === "Staples" ||
      optionSelected.dataset.val === "Purchasing Power" ||
      optionSelected.dataset.val === "B and H" ||
      optionSelected.dataset.val === "HomeDepot" ||
      optionSelected.dataset.val === "Toys R us" ||
      optionSelected.dataset.val === "Fitbit" ||
      optionSelected.dataset.val === "Office Depot" ||
      optionSelected.dataset.val === "Bose" ||
      optionSelected.dataset.val === "NFM" ||
      optionSelected.dataset.val === "Wayfair" ||
      optionSelected.dataset.val === "eBay" ||
      optionSelected.dataset.val === "Consumer Cellular" ||
      optionSelected.dataset.val === "Office Max" ||
      optionSelected.dataset.val === "HSN" ||
      optionSelected.dataset.val === "QVC"
    ) {
      document.getElementById("items").style.display = "block";
      document.getElementById("retailers").value = this.value;
    } else {
      console.log("Invalid Selections");
    }
  };
  
  // ------------------------------------------- Retailer With Catagorey Code Starts------------------------------------------- //
  
  function getOption() {
    selectIntent = document.querySelector("#intents");
    intent = selectIntent.value;
  
    selectRetailer = document.querySelector("#retailers");
    retailer = selectRetailer.value;
  
    selectItem = document.querySelector("#items");
    item = selectItem.value;
  
    var selection_info = "Intent Name: " + intent + "\n";
    selection_info += "Retailer Name: " + retailer + "\n";
  
    if(selectRetailer.value == 'Walmart' || selectRetailer.value == 'Costco' || selectRetailer.value == 'Samsclub' ) {
      inputField = document.getElementById("valinput").value;
      selection_info += "Input Number: " + inputField + "\n";
    }
  
    selection_info += "Item Name: " + item;
    // swal(selection_info);
    swal({
      title: "Your Selection",
      text: selection_info,
      icon: "success",
    }).then(function() {
      window.open("/call");
    });
  }
  
  
  function getOptionanything(){
  
    selectElement = document.querySelector('#anythingelse');
    anythingelse = selectElement.value;
  
    var selection_anthing = "AnyThing Else: " + anythingelse + "\n";
    swal(selection_anthing);
  }



  function submit() {
    window.open('/number')
    }

  
  
  function submitNum() {
    var callbackNumber = document.getElementById("valinput1").value;
    var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (pattern.test(callbackNumber)) {
      swal({
        title: "Recived",
        text: "Your callback number is: " + callbackNumber,
        icon: "success",
      })
    } 
    else {
        swal("Oh no", "Please enter a valid integer value!", "error");

    }
}
