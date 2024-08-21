var string = "Yuvasri";
let count = 0; 
for (let i = 0; i < string.length; i++) 
{
if (string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase()) 
{
    count++;
    }
}
console.log(count); 
