let softSkill = document.querySelector(".soft-skills")
let hardSkill = document.querySelector(".hard-skills")
let langue = document.querySelector(".section-langue")
let loisirs = document.querySelector(".loisirs")
let coursus = document.querySelector(".btn-coursus")
let experiencesProfessionnelles = document.querySelector(".experiences-professionnelles")
let countentCertifications = document.querySelector(".countent-certifications")

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
function coursusUniversitaire(){
coursus.innerHTML +=`
  <div
              class="w-[80%] flex justify-between items-start mt-6 pr-[5rem]"
            >
              <h2 class="text-2xl font-bold text-[#fff] w-[52%]">
                Établissement et Diplôme
              </h2>
              <h2 class="text-2xl font-bold text-[#fff]">DATE DE DEBUT</h2>
              <h2 class="text-2xl font-bold text-[#fff]">DATE DE FIN</h2>
          
          
            </div>
            <div>
              <div>
                <input
                  type="text"
                  class="px-3 mt-4 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[40%]"
                />
                <input
                  class="input-date p-2 bg-white text-[1.2em] font-semibold rounded-md ml-16 mr-[5rem]"
                  type="date"
                />
                <input
                  class="input-date p-2 bg-white text-[1.2em] font-semibold rounded-md"
                  type="date"
                />
              </div>
              <h2 class="text-2xl font-bold text-[#fff]">DESCRIPTION / REALISATIONS</h2>
              <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-[80%] mt-2 text-2xl text-gray-900 bg-gray-50 rounded-lg border-none fucus-border-none input-title focus:outline-[#ffff]"
              placeholder="Write your thoughts here..."
            ></textarea>
            </div>
`
}
function experiences(){
  experiencesProfessionnelles.innerHTML+=`
    <div
              class="w-[80%] flex justify-between items-start mt-6 pr-[5rem]"
            >
              <h2 class="text-2xl font-bold text-[#fff] w-[52%]">
                Nom de l'entreprise et Poste occupé
              </h2>
              <h2 class="text-2xl font-bold text-[#fff]">DATE DE DEBUT</h2>
              <h2 class="text-2xl font-bold text-[#fff]">DATE DE FIN</h2>
            </div>
            <div>
              <div>
                <input
                  type="text"
                  class="px-3 mt-4 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[40%]"
                />
                <input
                  class="input-date p-2 bg-white text-[1.2em] font-semibold rounded-md ml-16 mr-[5rem]"
                  type="date"
                />
                <input
                  class="input-date p-2 bg-white text-[1.2em] font-semibold rounded-md"
                  type="date"
                />
              </div>
              <h2 class="text-2xl font-bold text-[#fff]">
                Missions et Réalisation
              </h2>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-[80%] mt-2 text-2xl text-gray-900 bg-gray-50 rounded-lg border-none fucus-border-none input-title focus:outline-[#ffff]"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
  `
}
function certifications(){
  countentCertifications.innerHTML+=`
    <div>
          <div
          class="w-[74%] flex justify-between items-start mb-2 mt-6 pr-[5rem]"
        >
          <h2 class="text-2xl font-bold text-[#fff] w-[40%]">
            Nom de la Certification
          </h2>
          <h2 class="text-2xl font-bold text-[#fff]">Date d'Obtention</h2>

      
        </div>
        <div>
          <input
            type="text"
            class="px-3 mt-2 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[50%]"
          />
          <input
            class="input-date p-2 bg-white text-[1.2em] font-semibold rounded-md ml-16 mr-[5rem]"
            type="date"
          />
        </div>
        <div>
          <h2 class="text-2xl font-bold text-[#fff]">
            Organisme de Délivrance
          </h2>
          <input
            type="text"
            class="px-3 mt-2 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[50%]"
          />
          <h2 class="text-2xl font-bold text-[#fff]">
            Lien vers la Certification
          </h2>
          <input
            type="text"
            class="px-3 mt-2 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[50%]"
          />
          <h2 class="text-2xl font-bold text-[#fff]">
            Description de la Certification
          </h2>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-[80%] mt-2 text-2xl text-gray-900 bg-gray-50 rounded-lg border-none fucus-border-none input-title focus:outline-[#ffff]"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        </div>
  `
}