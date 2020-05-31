/*
 * pull up an array index and from left to right from 0 index to length -1
   this enable Search for content in all array index.

    

    
libModule.prototype.resequenceAry = function(){

    var testAry = ["clause1", "clause2", "clause3", "clause4", "clause5", "clause1"];
    var testArylogics = [true, false, true, true, true, true];
    var iMax = testArylogics.length -1;
    var iMax2 = 0;
    var delindexAry = [];
    var indexArysearch = [];
    var foundindexAry = [];
    var copiedoverAry = [];
    var copiedoverArylogics = [];
    var i = 0;
    var j = 0;
    var strtosearch = "blank";
    var positionfound = 0;
    var numberoffound = 0;
    var kMax = 0;
    var mMax = 0;
    var length1 = 0;
    var length2 = 0;
    var length3 = 0;
    
    var k = 0;
    var l = 0;
    var m = 0;
    
    while(j<=iMax){
        for(i=0;i<=iMax;i++){
           if(j != i){

             strtosearch = testAry[j];
             positionfound = testAry[i].search(testAry[j]);
             if(positionfound != -1){

                if(i > j){

                    testAry[j] = "blank";  //delete smaller index on search found
                    testArylogics[j] = null;
                         
                   // document.write("<br><br> " + testArylogics[j] + " " + testAry[j]);
                   // document.write("<br><br> " + j + " " + i);
                   numberoffound++;
                   kMax = numberoffound;
                 // copy over j to an indexAry to resequence the testAry 

                   for(k=0;k<kMax;k++){

                      foundindexAry[k] = j;

                     // document.write("<br><br> " + foundindexAry[k]);

                   }
                   
                

                }

                
                  
             }
             
           }
        }
    j++;
    }

    length1 = testAry.length - 1;
    length2 = foundindexAry.length - 1;
    length3 = length1 - length2;
    lMax = length3; 
    iMax = testAry.length - 1;              
    iMax2 = length2;
    mMax = length3;
    m=0;
    for(i=0;i<= iMax;i++){

      for(l=0;l<=iMax2;l++){
         if(i != foundindexAry[l]){
             //document.write("<br><br> " + "resequencing with the following index " + i);
             //now we have an array to be resequenced
             copiedoverAry[m] = testAry[i];
             m++;

         }

      }
    mMax = copiedoverAry.length - 1;
      
            
      

    } 
    for(m=0;m<=mMax;m++){

         
       document.write("<br><br> " + copiedoverAry[m] + " " + m);

    }






    

         
       
                
}

         
       
                

 
        
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */






class libModule{
    constructor(){
        this.info = "this is a libModule";
        this.dataAry1 = [];
        this.dataAry1logics = [];
        
    }

}



/*System.Modules.init();
*/

//System.prototype.attributesExample = "yes";

/*System.prototype.methodExample = function(){
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

 
/*
libModule.prototype.resequenceAry = function(ary1, ary2){

    var testAry = [];
    testAry = ary1;
    var testArylogics = [];
    testArylogics = ary2;
    var strtosearch = "blank";
    var positionfound = 0;
    var i = 0;
    var j = 0;    
    var iMax = 0;
    var numberoffound = 0;

    iMax = testAry.length - 1;
    jMax = iMax;

/* 
    for(i=0; i<= testAry.length - 1;i++){ //test arguments function ary1 ary2

      document.write("<br><br> " + testAry[i] + " " + testArylogics[i] + " " + i);


    }

 */

 /*

  while(j <= jMax){
     for(i=0;i<= iMax;i++){
            //j = 0;
         if(j == i){

          i++;
         }
      strtosearch = testAry[j];
      positionfound = testAry[i].search(strtosearch);
      if(positionfound != -1){

        numberoffound++;
        document.write("<br><br> " + "SEARCH on " + strtosearch + " index " + j + " on " + i + " is found");
      } else{
        document.write("<br><br> " + "SEARCH on " + strtosearch + " index " + j + " on " + i + " is not found");

      }
      
    
     }
     j++;
  }   
    
     
}
 */

/*
 * when you resequenceAry(); you must give an array which has duplicate
 *
 * 
 * 
 * 
 * 
 * 
 */

libModule.prototype.resequenceAry = function(ary1, ary2){

   var testAry = [];
   var testArylogics = [];

   testAry = ary1;
   testArylogics = ary2;




  //var testAry = ["clause1", "clause2", "clause3", "clause4", "clause5", "clause1"];
  //var testArylogics = [true, false, true, true, true, true];
  var iMax = testArylogics.length -1;
  var iMax2 = 0;
  var delindexAry = [];
  var indexArysearch = [];
  var foundindexAry = [];
  var copiedoverAry = [];
  var copiedoverArylogics = [];
  var i = 0;
  var j = 0;
  var strtosearch = "blank";
  var positionfound = 0;
  var numberoffound = 0;
  var kMax = 0;
  var mMax = 0;
  var length1 = 0;
  var length2 = 0;
  var length3 = 0;
  
  var k = 0;
  var l = 0;
  var m = 0;
  
  while(j<=iMax){
      for(i=0;i<=iMax;i++){
         if(j != i){

           strtosearch = testAry[j];
           positionfound = testAry[i].search(testAry[j]);
           if(positionfound != -1){

              if(i > j){

                  testAry[j] = "blank";  //delete smaller index on search found
                  testArylogics[j] = null;
                       
                 // document.write("<br><br> " + testArylogics[j] + " " + testAry[j]);
                 // document.write("<br><br> " + j + " " + i);
                 numberoffound++;
                 kMax = numberoffound;
               // copy over j to an indexAry to resequence the testAry 

                 for(k=0;k<kMax;k++){

                    foundindexAry[k] = j;

                   // document.write("<br><br> " + foundindexAry[k]);

                 }
                 
              

              }

              
                
           }
           else{
           //  document.write("<br><br> " + "nothing is duplicate");
           }
           
         }
      }
  j++;
  }

  length1 = testAry.length - 1;
  length2 = foundindexAry.length - 1;
  length3 = length1 - length2;
  lMax = length3; 
  iMax = testAry.length - 1;              
  iMax2 = length2;
  mMax = length3;
  m=0;
  for(i=0;i<= iMax;i++){

    for(l=0;l<=iMax2;l++){
       if(i != foundindexAry[l]){
           //document.write("<br><br> " + "resequencing with the following index " + i);
           //now we have an array to be resequenced
           copiedoverAry[m] = testAry[i];
           copiedoverArylogics[m] = testArylogics[i];
           m++;

       }

    }
  mMax = copiedoverAry.length - 1;
    
          
    

  } 
  for(m=0;m<=mMax;m++){

       
     //document.write("<br><br> " + copiedoverAry[m] + " " + m);
     libModule1.dataAry1[m] = copiedoverAry[m];
     libModule1.dataAry1logics[m] = copiedoverArylogics[m];

  }






  

       
     
              
}


libModule1 = new libModule();