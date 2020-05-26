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
    
    var iMax = 13 - 1;
    var i = 0;
    var positionfound = -2;
    var numberoffound = 0;
    var strtoSearch = "blank";


    Search1.ObjArryMain = Do1.Learnt.concat(MLai1.MemoryArray);
    Search1.ObjArrayMainlogics = Do1.LearntlogicsAssign.concat(MLai1.MemoryArraylogicsAssign);

     
   //document.write("<br><br> " + Search1.ObjArryMain.length);
   //document.write("<br><br> " + iMax);

   for(i=0; i<=iMax;i++){
        strtoSearch = Search1.ObjArryMain[i];
        positionfound = strtoSearch.search(searchqry);

        if(positionfound != -1){
            document.write("<br><br> " + Search1.ObjArryMain[i] + "&nbsp;&nbsp; " + Search1.ObjArrayMainlogics[i]);
            numberoffound++;
            
             //document.write("<br><br> " + positionfound);
        }
        //document.write("<br><br> " + positionfound);
    //document.write("<br><br> " + Search1.ObjArryMain[i] + "&nbsp;&nbsp; " + Search1.ObjArrayMainlogics[i]);


   }
      document.write("<br><br> " + "SEARCH on " + searchqry + "&nbsp;&nbsp; " + ",yield " + numberoffound + " Results.");


    
    

}    


Search1 = new Search();
