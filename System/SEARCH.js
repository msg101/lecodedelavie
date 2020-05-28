/*
 *    
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

Search.prototype.MainSearch = function(searchqry){
    
    var searchqry_ = searchqry;
    var i = 0;
    var positionfound = -2;
    var numberoffound = 0;
    var strtoSearch = "blank";
    var iMax = Search1.ObjArryMain.length - 1;

   for(i=0; i<=iMax;i++){
        strtoSearch = Search1.ObjArryMain[i];
        positionfound = strtoSearch.search(searchqry_);

        if(positionfound != -1){
            document.write("<br><br> " + Search1.ObjArryMain[i] + "&nbsp;&nbsp; " + Search1.ObjArrayMainlogics[i]);
            numberoffound++;
            
            //document.write("<br><br> " + positionfound);
        }
        //document.write("<br><br> " + positionfound);
    //document.write("<br><br> " + Search1.ObjArryMain[i] + "&nbsp;&nbsp; " + Search1.ObjArrayMainlogics[i]);


   }
   
     document.write("<br><br> " + "SEARCH on " + searchqry_ + "&nbsp;&nbsp; " + ",yield " + numberoffound + " Results.");


    
    

} 


Search1 = new Search();
libModule1.mergeAry(MLai1.MemoryArray, Do1.Learnt, MLai1.MemoryArraylogicsAssign, Do1.LearntlogicsAssign);