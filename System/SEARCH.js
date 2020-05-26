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
        this.ObjArryMain = [];
        this.ObjArrayMainlogics = [];
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
    var iMax = MLai1.MemoryArray.length - 1; 
    var i = 0;
    var positionfound = -2;
    var numberoffound = 0;
    var strtoSearch = "blank";


    for(i=0; i<=iMax;i++){
        strtoSearch = MLai1.MemoryArray[i];
        positionfound = strtoSearch.search(searchqry);
        if(positionfound != -1){
        
           document.write("<br><br> " + MLai1.MemoryArray[i] + " &nbsp; " + MLai1.MemoryArraylogicsAssign[i]);
           numberoffound++;
        }    
                
    }
    document.write("<br><br>your SEARCH on " + searchqry + " yield " + numberoffound + " Results");
   
}

Search.prototype.MainSearch = function (searchqry){
    var iMax = MLai1.MemoryArray.length - 1; 
    var iMax2 = Do1.Learnt.length - 1; 

    //document.write(iMax + " " + iMax2); 8, 3 index 8 index 3 the overall index 11

    var iMax3 = iMax + iMax2; //11

    var i = 0;
    var i2 = iMax;
    var positionfound = -2;
    var numberoffound = 0;
    var strtoSearch = "blank";
    var searchdone = new Boolean(false);

    for(i=0;i<= iMax3;i++){
        Search1.ObjArryMain[i] = Do1.Learnt[i];
        Search1.ObjArrayMainlogics[i] = Do1.LearntlogicsAssign[i];
                //document.write("<br>" + positionfound);
    
       for(i2=iMax+1;i2<=iMax3;i2++){

           Search1.ObjArryMain[i2] = MLai1.MemoryArray[i];
           Search1.ObjArrayMainlogics[i2] = MLai1.MemoryArraylogicsAssign[i];

       }
       strtoSearch = Search1.ObjArryMain[i];
       positionfound = strtoSearch.search(searchqry);


       if(positionfound != -1){
           document.write("<br><br> " + Search1.ObjArryMain[i] + " " + Search1.ObjArrayMainlogics[i]);
           numberoffound++;
       }


    document.write("<br><br> " + "SEARCH on " + searchqry + " " + "yield, " + numberoffound + " Results");
    
    }
}


Search1 = new Search();
