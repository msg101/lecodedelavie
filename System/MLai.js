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
      
     MLai.prototype.Learn = function (index){
         var i = index;
         MLai1.MemoryArray[i] = "People are azzholes";
         MLai1.MemoryArraylogicsAssign[i] = new Boolean(true);
         document.write("<br>" + MLai1.MemoryArray[i] + "&nbsp;&nbsp;" + MLai1.MemoryArraylogicsAssign[i]);
     } 

    Do.prototype.changeTransformationOOP = function (index){
        var i = index;
        Do1.Learnt[i] = "stay away from people";
        Do1.LearntlogicsAssign[i] = new Boolean(true);
        document.write("<br>" + Do1.Learnt[i] + "&nbsp;&nbsp;" + Do1.LearntlogicsAssign[i]);
      
   }  
   MLai1 = new MLai();
   Do1 = new Do();
   MLai1.Learn(0);
   Do1.changeTransformationOOP(0);