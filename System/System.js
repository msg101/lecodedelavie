/*
 *        set up System Object
 *
 *  
 * 
 * 
 * 
 * 
 */
 
 class System{
     constructor(){
         this.moduleNumber;
     }

 }



 /*System.Modules.init();
 */

//System.prototype.attributesExample = "yes";
 
/*System.prototype.methodExample = function (){
//}
 */


System1 = new System();

System.prototype.bootRqst = function (){
    
    document.write("booting/rebooting");
    document.write("<br>" + Core1.serial);
}