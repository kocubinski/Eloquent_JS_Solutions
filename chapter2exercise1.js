/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### /*

var myString = "#######";
var mutatedString = "";

for (var i = 0; i<myString.length; i++){
  mutatedString += myString[i];
  console.log(mutatedString);
}
