$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber id in the html doc
    //
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    // 
    var user= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring variables for tallies
  $('#wins').text(wins);
  $('#losses').text(losses);
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        user= 0;
        $('#final').text(user);
        } 
  //adds the wins to the userTotal
  function winner(){
  alert("YOU ROCK!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function loser(){
  alert ("YOU SUCK!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  //sets up click for jewels
    $('#blue').on ('click', function(){
      user = user + num1;
      console.log("New userTotal= " + user);
      $('#final').text(user); 
            //sets win/lose conditions
          if (user == Random){
            winner();
          }
          else if ( user > Random){
            loser();
          }   
    })  
    $('#green').on ('click', function(){
      user = user + num2;
      console.log("New userTotal= " + user);
      $('#final').text(user); 
          if (user == Random){
            winner();
          }
          else if ( user > Random){
            loser();
          } 
    })  
    $('#pink').on ('click', function(){
      user = user + num3;
      console.log("New userTotal= " + user);
      $('#final').text(user);
  //sets win/lose conditions
            if (user == Random){
            winner();
          }
          else if ( user > Random){
            loser();
          } 
    })  
    $('#yellow').on ('click', function(){
      user = user + num4;
      console.log("New userTotal= " + user);
      $('#final').text(user); 
        
            if (user == Random){
            winner();
          }
          else if ( user > Random){
            loser();
          }
    });   
  }); 