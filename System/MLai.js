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
     
      MLai1 = new MLai();
      Do1 = new Do();
      MLai1.Learn();
      Do1.changeTransformationOOP();
      
     //MLai.prototype.attributesExample = "yes";
      
     MLai.prototype.Learn = function (){
   
         MLai1.MemoryArray[0] = "People are azzholes";
         MLai1.MemoryArraylogicsAssign[0] = new Boolean(true);
         document.write("<br>" + MLai1.MemoryArray[0] + MLai1.MemoryArraylogicsAssign[0]);
     } 

    Do.prototype.changeTransformationOOP = function (){

        Do1.Learnt[0] = "stay away from people";
        Do1.LearntlogicsAssign = new Boolean(true);
        document.write("<br>" + Do1.Learnt[0] + Do1.LearntlogicsAssign[0]);
      
   }  
            
      
