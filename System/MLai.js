/*
 *
 * ML ai is based on logic assignment technologies
 * MLai.certainVariable = "String1";
 * MLai.certainVariableLogics = new Boolean(true);
 * 
 * 
 * function activeNmorph(){
 *
 *       do while{
 * 
 * it has so many Logics variables then it refresh/update its OOP parameters
 * 
 * 
 */
class MLai{
        constructor(){
           this.requirements = "requirements";
           this.MemoryArray = [];
           this.MemoryArraylogicsAssign = [];
        
        }
              
}             

class Do{
        constructor(){
           this.requirements = "requirements";
           this.Learnt = [];
           this.LearntlogicsAssign = [];
         }
}
     
      
      
     //MLai.prototype.attributesExample = "yes";
      
     MLai.prototype.Learn = function (index, semantics1){
         var i = index;
         MLai1.MemoryArray[i] = semantics1;
         MLai1.MemoryArraylogicsAssign[i] = new Boolean(true);
         if(index == 5){
             MLai1.MemoryArraylogicsAssign[i] = false;
         }
         document.write("<br>" + MLai1.MemoryArray[i] + "&nbsp;&nbsp;" + MLai1.MemoryArraylogicsAssign[i]);
     } 

    Do.prototype.changeTransformationOOP = function (index, semantics2){
        var i = index;
        Do1.Learnt[i] = semantics2;
        Do1.LearntlogicsAssign[i] = new Boolean(true);
        document.write("<br>" + Do1.Learnt[i] + "&nbsp;&nbsp;" + Do1.LearntlogicsAssign[i]);
      
   }  

   MLai.prototype.derivedLearns = function (semantics1, semantics2){
      if(semantics1 && semantics2){ //1 AND 1 = 1 (true)
          document.write("<br>" + "either one is false");
      } else{
          if(semantics1 || semantics2){ //else 1 OR 0 = 1 (true)
              document.write("<br>" + "either semantics is true");
          } 
          else {
              document.write("<br>" + "all falses");
          }
          }
      
    
   } 
   MLai.prototype.changeLogics = function (index, changethisSemanticsLogics){
       if(changethisSemanticsLogics){
           MLai1.MemoryArraylogicsAssign[index] = false;
           document.write("<br>" + MLai1.MemoryArray[index] + "&nbsp;&nbsp;" + MLai1.MemoryArraylogicsAssign[index]);
       } else{
           MLai1.MemoryArraylogicsAssign[index] = true;
           document.write("<br>" + MLai1.MemoryArray[index] + "&nbsp;&nbsp;" + MLai1.MemoryArraylogicsAssign[index]);
       }
   }


   MLai1 = new MLai();
   Do1 = new Do();
   MLai1.Learn(0, "People are azzholes");
   Do1.changeTransformationOOP(0, "stay away from peoples");
   MLai1.Learn(1, "event of Earth MateE Material Engineering year 2008");
   MLai1.derivedLearns(MLai1.MemoryArraylogicsAssign[0], MLai1.MemoryArraylogicsAssign[1]);
   MLai1.Learn(2, "MLai module has been built");
   MLai1.Learn(3, "i still don't know what to do next");
   MLai1.derivedLearns(MLai1.MemoryArraylogicsAssign[2], MLai1.MemoryArraylogicsAssign[3]);
   MLai1.Learn(4, "it needs to be determined from the Module MLai");
   MLai1.Learn(5, "there're total chaos everytime");
   MLai1.Learn(6, "it's still mostly beautifull days");
   MLai1.derivedLearns(MLai1.MemoryArraylogicsAssign[5], MLai1.MemoryArraylogicsAssign[6]);
   MLai1.Learn(7, "time goes so slow/fast, but it's stable");
   MLai1.derivedLearns(MLai1.MemoryArraylogicsAssign[5], MLai1.MemoryArraylogicsAssign[7]);
   Do1.changeTransformationOOP(1, "i let the codes decide");
   Do1.changeTransformationOOP(2, "i keep on adding logics assignments");
   Do1.changeTransformationOOP(3, "i wish Peoples were nicer to me");
   MLai1.changeLogics(0, MLai1.MemoryArraylogicsAssign[0]);