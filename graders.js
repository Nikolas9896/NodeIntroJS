function average(param)
{
    var lengthParam = param.length;
    var sum=0;
    for(var i = 0; i<lengthParam; i++)
    {
        sum+=param[i];
        
    }
    console.log(sum/lengthParam);
    return (sum/lengthParam);
}

var score = [90, 98, 89, 100, 100, 86, 94];
average(score);

var score2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(score2);
