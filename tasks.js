
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text=== 'exit\n') {
    quit();
  }
  else if(text.trim().split(" ")[0]==="hello"){
    hello(text.trim().substring(5));
  }else if (text==='help\n'){
    Help();
  }else if (text==='list\n'){
    List();
  }else if(text.startsWith("add")){
    Add(text);
  }else if(text==="remove\n"){
    list.pop();
  }
    else if (text.startsWith('remove')){
    Remove(text.slice(6, text.length-1));
  }else if(text==='edit\n'){
    edit(text);
  }else if(text==='edit\n'){
   edit(text);
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
 function hello(text){
  console.log(`hello${text}!`);
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
*this function prints the comands with the description 
*@returns {void}  
*/
function Help (){
  console.log('hello YourName /saying hello name of user.\n quit or exit /to end the application.\n  help / to show the comands.\n  remove / to delet the last task. \n remove 1 /to delete the first task. \n remove 2 /to delete the second task. ')

}


var list=['[ ]get food','[ ]get a shawer','[✓]playing football','[ ]coding'];
function List(){
  console.log(
    list.map((tasks,key) => `${key+1} - ${tasks} `).join("\n")
  )
}

function Add (text){
  if(text=="add\n"){
    console.log(" error "); 
  }else{
    let x = text.trim().split(" ")[1];
  list.push(x);
}}

function Remove(number){
  number=number.trim()
  let index= parseInt(number);
  if (!index && number!='0'){
    list.pop()
  }else if(index>=1 && index<=list.length){
    list.splice(index-1, 1);
  }else if (index>list.length){
    console.log("dosen't exist");
  }
  else{
    console.log('error')
  }
}

function edit (ed)  {
  if (ed =="edit\n") {
    console.log("error")
}
else {
  let edi=ed.split(" ")[1]
  if(!parseInt(edi)){
    list[list.length-1]=ed.trim().replace("edit ","")
  }
  else{
    list[edi-1]=ed.trim().replace(edit `${edi}`,"")
  }
}}
// The following line starts the application
startApp("Yehia Masri")
