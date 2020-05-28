class libModule{
    constructor(){
        this.info = "this is a libModule";
        
    }

}



/*System.Modules.init();
*/

//System.prototype.attributesExample = "yes";

/*System.prototype.methodExample = function (){
//}
*/
libModule.prototype.mergeAry = function(ary1, ary2, ary3, ary4){
    var ary1_ = [];
    var ary2_ = [];
    var ary3_ = [];
    var ary4_ = [];
    ary1_ = ary1;
    ary2_ = ary2; 
    ary3_ = ary3;
    ary4_ = ary4;

    var iMax = ary1_.length - 1;
    var iMax2 = ary2_.length;
   
    var iMax3 = iMax + iMax2;
    var i = 0;
    var i2 = 0;
    
    //document.write("<br><br> " + ary1_.length + " " + ary2_.length);
  
    for(i=0;i<=iMax;i++){

        Search1.ObjArryMain[i] = ary1_[i];
        Search1.ObjArrayMainlogics[i] = ary3_[i];
        
    }  
    i = 0;  
    for(i2=iMax + 1;i2<=iMax3;i2++){
            
            Search1.ObjArryMain[i2] = ary2_[i];
            Search1.ObjArrayMainlogics[i2] = ary4_[i];
            i++;
    }
    /*
    for(i=0;i<=iMax3;i++){
        //document.write("<br><br> " + Search1.ObjArryMain.length + " " + iMax3);    
         document.write("<br><br> " + Search1.ObjArryMain[i] + "&nbsp;&nbsp; " + Search1.ObjArrayMainlogics[i]);
    }
    */
    
    
}

libModule1 = new libModule();