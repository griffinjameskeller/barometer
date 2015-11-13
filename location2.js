var city;

function preload() {

   var url = 'http://api.openweathermap.org/data/2.5/weather?q=Miami,FL'+
    '&APPID=f02124924447c73bc1d1626b1bee5f45&units=imperial';
  city = loadJSON(url);
  waterdrops = loadImage("images/water.png");
  theSun = loadImage("images/sun.png");
  theMoon = loadImage("images/moon.png");


  }

  function setup() {

  createCanvas(400,400);
  temp = city.main.temp;
  humid = city.main.humidity;
  sunset = new Date(city.sys.sunset*1000);
  sunrise = new Date(city.sys.sunrise*1000);
  time = Date.now();
  sea = (city.main.sea_level - 800);

  }

  function draw() {


  background(0,0,temp);


      if (time > sunrise) {
              if (time < sunset){
                image(theSun, 30, 30, 100, 100, 0, 0, 100, 100);
              } else {
                image(theMoon, 30, 30, 100, 100, 0, 0, 100, 100);
              }

          } else{
          image(theMoon, 30, 30, 100, 100, 0, 0, 100, 100);
          }

  noStroke();
  fill('rgba(0,50,255, 0.10)');
  rect(0, sea, 500, 500);

  tint(255, humid);
  image(waterdrops, 0, 0);




  }
