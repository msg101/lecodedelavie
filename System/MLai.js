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
         document.write("<br>" + MLai1.MemoryArray[i] + "&nbsp;&nbsp;" + MLai1.MemoryArraylogicsAssign[i]);
     } 

    Do.prototype.changeTransformationOOP = function (index, semantics2){
        var i = index;
        Do1.Learnt[i] = semantics2;
        Do1.LearntlogicsAssign[i] = new Boolean(true);
        document.write("<br>" + Do1.Learnt[i] + "&nbsp;&nbsp;" + Do1.LearntlogicsAssign[i]);
      
   }  

   MLai.prototype.derivedLearns = function (semantics1, semantics2){
      if(semantics1 && semantics2){
          document.write("<br>" + "need to be analyzed further");
      }
    
  } 

   MLai1 = new MLai();
   Do1 = new Do();
   MLai1.Learn(0, "People are azzholes");
   Do1.changeTransformationOOP(0, "stay away from peoples");
   MLai1.Learn(1, "event of Earth MateE Material Engineering year 2008");
   MLai1.derivedLearns(MLai1.MemoryArraylogicsAssign[0], MLai1.MemoryArraylogicsAssign[1]);