/*
 *     this is UX, it should be a later add to bot_a
 *
 * 
 * 
 * 
 * 
 * 
 * 
 */
class Search{
    constructor(){
        this.searchqry = "search on something";
    }

}



/*System.Modules.init();
*/

//System.prototype.attributesExample = "yes";

/*System.prototype.methodExample = function (){
//}
*/



/*System.Modules.init();
*/

//System.prototype.attributesExample = "yes";

/*System.prototype.methodExample = function (){
//}
*/




Search.prototype.actualSearch = function (searchqry){
    var iMax = MLai1.MemoryArray.length -1;
    var i = 0;
    var positionfound = "blank";
    var numberoffound = 0;
    for(i=0; i<=iMax;i++){
        positionfound = MLai1.MemoryArray[i].search(searchqry);
        if(positionfound >= 0 && positionfound <=iMax){
           numberoffound++;
           document.write("<br>" + "found " + numberoffound + "&nbsp;&nbsp;results");
           document.write("<br>" + MLai1.MemoryArray[positionfound] + "&nbsp;&nbsp;" + MLai1.MemoryArraylogicsAssign[positionfound]);
        }
    }

}


Search1 = new Search();
Search1.actualSearch("People");