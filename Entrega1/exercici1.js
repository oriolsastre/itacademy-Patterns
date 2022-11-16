const { readdir, readFile, writeFile }  = require ("fs/promises");
  
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
  
  const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");


(async function llegirCanviarEscriure(){
    try{
        const fitxers = await readdir(inbox);
        fitxers.forEach(async fitxer => {
            try{
                const contFixer = await readFile(join(inbox,fitxer),'utf8');
                await writeFile(join(outbox,fitxer),reverseText(contFixer));
            }
            catch(error){console.log(error.message)}
        })
    }catch(error){console.log(error.message)}
})();