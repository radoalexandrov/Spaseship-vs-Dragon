document.addEventListener("DOMContentLoaded" ,function () {
   var enemyPosition = {
      top: 0,
      left: 0
   }
   var over = false;
   var shipPosition = {
      top: 580,
      left:500,
   }
   var speed = 5;
   var isMovingRight = false;

   var isShipMovingRight = false;
	var isShipMovingLeft = false;

   var ship = document.getElementById('ship');

   function enemyMove() {
      if(enemyPosition.left == 1000){
         isMovingRight = false;
      }

      if(enemyPosition.left == 0){
         isMovingRight = true;
      }

      if (isMovingRight) {
			enemyPosition.left += speed;
		}else{
         enemyPosition.left -= speed;
      }

      var enemy = document.getElementById("enemy");
      enemy.style.left = enemyPosition.left + 'px';
   }

   function shipMove() {
      if (isShipMovingRight && shipPosition.left < 1007) {
			shipPosition.left += speed
		}

		if (isShipMovingLeft && shipPosition.left > 0) {
			shipPosition.left -= speed
		}


		ship.style.left = shipPosition.left + 'px';
   }

   

   function checkForWin() {
      var bulCount = parseInt(document.getElementById("bulletsDigits").innerHTML);
      var divCount = document.getElementsByClassName('bul').length;

      if(bulCount == 0 && divCount == 0){
         over = true;
         var points = parseInt(document.getElementById("points").innerHTML);
         if(points > 5){
            alert("You win !");
         }else{
            alert("HAHA you lose !");
         }
      }
   }

   function gameLoop() {


      enemyMove();
      shipMove();
      booletMove();

      checkForWin();
      if(!over){
      requestAnimationFrame(gameLoop);
      }
   }

   if(!over){
   requestAnimationFrame(gameLoop);
   }

   document.addEventListener('keydown', function(e) {

		if (e.keyCode == 32) {
			shoot();
		}


	}, false);


   document.addEventListener('keydown', function(e) {

		if (e.keyCode == 39 && (shipPosition.left < 550)) {
			isShipMovingRight = true;
		}

		if (e.keyCode == 37) {
			isShipMovingLeft = true;
		}
	}, false);

	document.addEventListener('keyup', function(e) {
		if (e.keyCode == 39) {
			isShipMovingRight = false;
		}

		if (e.keyCode == 37) {
			isShipMovingLeft = false;
		}
	}, false);
},false);
