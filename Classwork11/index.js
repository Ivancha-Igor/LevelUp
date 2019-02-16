1)
if (true) {
  console.log(1);
} else {
  console.log(0);
}

2)

var m = 60, n;
if(m > 50) {
  n = 'big';
} else {
  n = 'small';
}
console.log(n);

3)

var i = 2;
while( i < 9 ){
 console.log( i++ );
};

4)

var i = 45;
while( i <= 67 ){
 console.log( i++ );
};

5)

var i = 45;
while( i <= 670 ){
  if(i % 10 === 0) {
    console.log( i );

  }
  i++;
};

6)

for(var i = 45; i <= 67; i++) {
  console.log(i);
};

for(var i = 45; i <= 670; i++) {
  if (i % 10 === 0) console.log(i);
};

7)

var n = 15;
switch( n ) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  case 4:
    console.log('four');
    break;
  case 5:
    console.log('five');
    break;
  default:
    console.log('omg!');
    break;
};
