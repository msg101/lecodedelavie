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
//will also have Array here instead
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
         var i = 0;     
         for(i=0; i<= 999999999999999;i++){
            MLai1.MemoryArray[i] = "blank";
            MLai1.MemoryArraylogicsAssign[i] = new Boolean(true);
            for(j=0; j<=999999999999999;j++){
               MLai1.MemoryArray[i][j] = "blank";
               MLai1.MemoryArraylogicsAssign[i][j] = new Boolean(true);
            }

         }
         MLai1.MemoryArray[0] = "People are azzholes";
         document.write("<br>" + MLai1.MemoryArray[0] + MLai1.MemoryArraylogicsAssign[0]);
     } 

    Do.prototype.changeTransformationOOP = function (){
      var i = 0;     
      for(i=0; i<= 999999999999999;i++){
         Do1.Learnt[i] = "blank";
         Do1.LearntlogicsAssign[i] = new Boolean(true);
       
         
         for(j=0; j<=999999999999999;j++){
            Do1.Learnt[i][j] = "blank";
            Do1.LearntlogicsAssign[i][j] = new Boolean(true);
         }

        Do1.Learnt[0] = "stay away from people";
        document.write("<br>" + Do1.Learnt[0] + Do1.LearntlogicsAssign);
      }
   }  
            
      
