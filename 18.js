const string="I'm learning javascript basics";
var a=[];
var b='';
var i=0;
while(i<string.length)
    {
     b=b+string[i];
     if(string[i]==' ' || string[i]=='.')
        {
        a.push(b);
        b='';
        } 
     i++;  
    }
console.log(a);