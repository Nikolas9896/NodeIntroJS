function average(param)
{
    var lengthParam = param.length;
    var sum=0;
    param.forEach( function(score) {
       sum+=score; 
    });
    console.log(Math.round(sum/lengthParam));
    return Math.round(sum/lengthParam);
}

var score = [90, 98, 89, 100, 100, 86, 94];
average(score);

var score2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(score2);
