let softSkill = document.querySelector(".soft-skills")
let hardSkill = document.querySelector(".hard-skills")
let langue = document.querySelector(".section-langue")
let loisirs = document.querySelector(".loisirs")

function btnAddHardSkill(){
  hardSkill.innerHTML+=`
    <div class="flex flex-col text-2xl w-[100%]">
                <input
                  type="text"
                  class="px-3 mt-4 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[95%]"
                />
              </div>

  `
}
function btnAddSoftSkill(){

  softSkill.innerHTML+=`
  <div class="flex flex-col text-2xl w-[100%]">
              <input
                type="text"
                class="px-3 mt-4 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[95%]"
              />
            </div>

`
}

function addLangue(){

  
  langue.innerHTML+=`
      <div class="flex text-2xl gap-20 w-[50%] ">
                <input
                  type="text"
                  class="px-3 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[62%]"
                />
                <select  class="w-[38%] rounded-md border-none fucus-border-none py-2 mb-3 input-title focus:outline-[#ffff] ">
                  <option selected>choiser un niveaux</option>
                  <option value="US">maternelle</option>
                  <option value="US">A1</option>
                  <option value="CA">A2</option>
                  <option value="FR">B1</option>
                  <option value="DE">B2</option>
                  <option value="DE">C2</option>
                  <option value="DE">C2</option>
                </select>
              </div>
              </div>
  `
}

function btnAddLoisir(){
  loisirs.innerHTML+=`
    <div class=" text-2xl w-[100%]">
              <input
                type="text"
                class="px-3 mt-4 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[70%]"
              />
            </div>
  `
}
