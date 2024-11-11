let softSkill = document.querySelector(".soft-skills");
let hardSkill = document.querySelector(".hard-skills");
let langue = document.querySelector(".section-langue");
let loisirs = document.querySelector(".loisirs");
let coursus = document.querySelector(".btn-coursus");
let countentCertifications = document.querySelector(".countent-certifications");
let btnProchaine = document.querySelector(".btn-prochaine");

let informationPersonnel = document.querySelector(".information-personnel");
let detailsProfessionnels = document.querySelector(".details-professionnels");
let competencesTechniques = document.querySelector(".competences-techniques");
let sectionLangue = document.querySelector(".section-langue");
let loisiesEtInterests = document.querySelector(".loisies-et-interests");
let cursusUniversitaire = document.querySelector(".cursus-universitaire");
let experiencesProfessionnelles = document.querySelector(
  ".experiences-professionnelles"
);
let certifications = document.querySelector(".certifications");

let icon1 = document.querySelector(".icon-1");
let icon11 = document.querySelector(".icon-11");
let icon2 = document.querySelector(".icon-2");
let icon22 = document.querySelector(".icon-22");
let icon3 = document.querySelector(".icon-3");
let icon33 = document.querySelector(".icon-33");
let icon4 = document.querySelector(".icon-4");
let icon44 = document.querySelector(".icon-44");
let icon5 = document.querySelector(".icon-5");
let icon55 = document.querySelector(".icon-55");
let icon6 = document.querySelector(".icon-6");
let icon66 = document.querySelector(".icon-66");
let icon7 = document.querySelector(".icon-7");
let icon77 = document.querySelector(".icon-77");
let icon8 = document.querySelector(".icon-8");
let icon88 = document.querySelector(".icon-88");
let title1 = document.querySelector(".title-1");
let title2 = document.querySelector(".title-2");
let title3 = document.querySelector(".title-3");
let title4 = document.querySelector(".title-4");
let title5 = document.querySelector(".title-5");
let title6 = document.querySelector(".title-6");
let title7 = document.querySelector(".title-7");
let title8 = document.querySelector(".title-8");

detailsProfessionnels.style.display = "none";
competencesTechniques.style.display = "none";
sectionLangue.style.display = "none";
loisiesEtInterests.style.display = "none";
cursusUniversitaire.style.display = "none";
experiencesProfessionnelles.style.display = "none";
certifications.style.display = "none";
btnProchaine.addEventListener("click", () => {
  changeStyle();
});
let inputNomEtPrenom;
let inputAge;
let inputPhoto;
let inputEmail;
let inputLinkedin;
let inputGithube;
let inputTitreDePoste;
let inputResumeDeProfil;
let inputHardSkills = [];
let inputSoftSkills = [];
let inputsLangues = [];
let inputsLoisir = [];
let inputsCursusUniversitaire = [];
let inputsExperiencesProfessionnelles = [];
let inputsCertifications = [];

function changeStyle() {
  if (informationPersonnel.style.display === "block") {
    informationPersonnel.style.display = "none";
    detailsProfessionnels.style.display = "block";
    icon1.style.display = "none";
    icon11.style.display = "block";
    title1.style.display = "none";
    title2.style.display = "block";
    inputNomEtPrenom = document.querySelector(".nom-et-prenom").value;
    inputAge = document.querySelector(".age").value;
    inputPhoto = document.querySelector(".photo").value;
    inputEmail = document.querySelector(".email").value;
    inputLinkedin = document.querySelector(".linkedin").value;
    inputGithube = document.querySelector(".githube").value;
  } else if (detailsProfessionnels.style.display === "block") {
    detailsProfessionnels.style.display = "none";
    competencesTechniques.style.display = "block";
    icon2.style.display = "none";
    icon22.style.display = "block";
    title2.style.display = "none";
    title3.style.display = "block";
    inputTitreDePoste = document.querySelector(".titre-du-poste").value;
    inputResumeDeProfil = document.querySelector(".resume-de-profil").value;
  } else if (competencesTechniques.style.display === "block") {
    competencesTechniques.style.display = "none";
    sectionLangue.style.display = "block";
    icon3.style.display = "none";
    icon33.style.display = "block";
    title3.style.display = "none";
    title4.style.display = "block";
    selectAllValuesOfInputsHardSkills();
    selectAllValuesOfInputsSoftSkills();
  } else if (sectionLangue.style.display === "block") {
    sectionLangue.style.display = "none";
    loisiesEtInterests.style.display = "block";
    icon4.style.display = "none";
    icon44.style.display = "block";
    title4.style.display = "none";
    title5.style.display = "block";
    langueFunction();
  } else if (loisiesEtInterests.style.display === "block") {
    loisiesEtInterests.style.display = "none";
    cursusUniversitaire.style.display = "block";
    icon5.style.display = "none";
    icon55.style.display = "block";
    title5.style.display = "none";
    title6.style.display = "block";
    loisirsFunction();
  } else if (cursusUniversitaire.style.display === "block") {
    cursusUniversitaire.style.display = "none";
    experiencesProfessionnelles.style.display = "block";
    icon6.style.display = "none";
    icon66.style.display = "block";
    title6.style.display = "none";
    title7.style.display = "block";
    cursusUniversitaireFunction();
  } else if (experiencesProfessionnelles.style.display === "block") {
    experiencesProfessionnelles.style.display = "none";
    certifications.style.display = "block";
    icon7.style.display = "none";
    icon77.style.display = "block";
    title7.style.display = "none";
    title8.style.display = "block";
    experiencesProfessionnellesFunction();
  } else if (certifications.style.display === "block") {
    certifications.style.display = "none";
    icon8.style.display = "none";
    icon88.style.display = "block";
    title8.style.display = "none";
    countentCertificationsFunction();
  }
}
function countentCertificationsFunction() {
  let nomCertifacationVar = document.querySelectorAll(
    ".inputs-nom-certification"
  );
  let dateObtCertifacationVar = document.querySelectorAll(
    ".inputs-date-obtention"
  );
  let organisationDelevCertifacationVar = document.querySelectorAll(
    ".inputs-organisme-delivrance"
  );
  let lienCertifacationVar = document.querySelectorAll(
    ".inputs-lien-certification"
  );
  let descriptionCertifacationVar = document.querySelectorAll(
    ".inputs-descriptin-certification"
  );
  let objetCertification = {};
  for (let i = 0; i < nomCertifacationVar.length; i++) {
    objetCertification = {
      nomCertifacation: nomCertifacationVar[i].value,
      dateObtCertifacation: dateObtCertifacationVar[i].value,
      organisationDelevCertifacation:
        organisationDelevCertifacationVar[i].value,
      lienCertifacationVar: lienCertifacationVar[i].vlue,
      descriptionCertifacation: descriptionCertifacationVar[i].value,
    };
    inputsCertifications.push(objetCertification);
  }
}
function experiencesProfessionnellesFunction() {
  let entreprisePosteVar = document.querySelectorAll(
    ".inputs-entreprise-poste"
  );
  let dateDubutEntrepriseVar = document.querySelectorAll(
    ".inputs-date-dubut-entreprise"
  );
  let dateFinEntrepriseVar = document.querySelectorAll(
    ".inputs-date-fin-entreprise"
  );
  let missionRealisationVar = document.querySelectorAll(
    ".inputs-missinon-realisation"
  );
  let experiencesObject = {};
  for (let i = 0; i < entreprisePosteVar.length; i++) {
    experiencesObject = {
      entreprisePoste: entreprisePosteVar[i].value,
      dateDubutEntreprise: dateDubutEntrepriseVar[i].value,
      dateFinEntreprise: dateFinEntrepriseVar[i].value,
      missionRealisation: missionRealisationVar[i].value,
    };
    inputsExperiencesProfessionnelles.push(experiencesObject);
  }
}
function cursusUniversitaireFunction() {
  let etablissementEtDiplomeVar = document.querySelectorAll(
    ".inputs-etablissement-et-diplome"
  );
  let dateDebutVar = document.querySelector(".inputs-date-de-debut");
  let dateFinVar = document.querySelector(".inputs-date-de-fin");
  let descriptionRealisationsVar = document.querySelector(
    ".inputs-description-realisations"
  );
  let ursusUniversitaireObje = {};
  for (let i = 0; i < etablissementEtDiplomeVar.length; i++) {
    ursusUniversitaireObje = {
      cetablissement: etablissementEtDiplomeVar[i].value,
      dateDebut: dateDebutVar[i].value,
      dateFin: dateFinVar[i].value,
      description: descriptionRealisationsVar[i].value,
    };
    inputsCursusUniversitaire.push(ursusUniversitaireObje);
  }
}
function loisirsFunction() {
  let loisirsVar = document.querySelectorAll(".inputs-loisirs");
  for (let i = 0; i < loisirsVar.length; i++) {
    inputsLoisir.push(loisirsVar[i].value);
  }
}
function langueFunction() {
  let litstDesLanguesVar = document.querySelectorAll(".input-language");
  let leNiveauxVar = document.querySelectorAll(".select-niveau-langue");
  for (let i = 0; i < litstDesLanguesVar.length; i++) {
    langueObject = {
      listeDesLangues: litstDesLanguesVar[i].value,
      leNiveaux: leNiveauxVar[i].value,
    };
    inputsLangues.push(langueObject);
  }
}
function selectAllValuesOfInputsHardSkills() {
  let allValuesHardSkills = document.querySelectorAll(".inputs-hard-skils");
  for (let i = 0; i < allValuesHardSkills.length; i++) {
    inputHardSkills.push(allValuesHardSkills[i].value);
  }
}
function selectAllValuesOfInputsSoftSkills() {
  let allValuesSoftSkills = document.querySelectorAll(".inputs-soft-skill");
  for (let i = 0; i < allValuesSoftSkills.length; i++) {
    inputSoftSkills.push(allValuesSoftSkills[i].value);
  }
}

function btnAddHardSkill() {
  hardSkill.innerHTML += `
      <div class=" flex flex-col text-2xl w-[100%]">
                  <input
                    type="text"
                    class="inputs-hard-skils px-3 mt-4 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[95%]"
                  />
                </div>

    `;
}
function btnAddSoftSkill() {
  softSkill.innerHTML += `
    <div class=" flex flex-col text-2xl w-[100%]">
                <input
                  type="text"
                  class="inputs-soft-skill px-3 mt-4 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[95%]"
                />
              </div>

  `;
}

function addLangue() {
  langue.innerHTML += `
        <div class="flex text-2xl gap-20 w-[50%] ">
                  <input
                    type="text"
                    class="input-language px-3 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[62%]"
                  />
                  <select  class="select-niveau-langue w-[38%] rounded-md border-none fucus-border-none py-2 mb-3 input-title focus:outline-[#ffff] ">
                    <option selected>choiser un niveaux</option>
                    <option value="maternelle">maternelle</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="C2">C2</option>
                    <option value="C2">C2</option>
                  </select>
                </div>
                </div>
    `;
}

function btnAddLoisir() {
  loisirs.innerHTML += `
      <div class=" text-2xl w-[100%]">
                <input
                  type="text"
                  class="inputs-loisirs px-3 mt-4 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[70%]"
                />
              </div>
    `;
}
function coursusUniversitaire() {
  coursus.innerHTML += `
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
                    class="inputs-etablissement-et-diplome px-3 mt-4 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[40%]"
                  />
                  <input
                    class="inputs-date-de-debut input-date p-2 bg-white text-[1.2em] font-semibold rounded-md ml-16 mr-[5rem]"
                    type="date"
                  />
                  <input
                    class="inputs-date-de-fin input-date p-2 bg-white text-[1.2em] font-semibold rounded-md"
                    type="date"
                  />
                </div>
                <h2 class="text-2xl font-bold text-[#fff]">DESCRIPTION / REALISATIONS</h2>
                <textarea
                id="message"
                rows="4"
                class="inputs-description-realisations block p-2.5 w-[80%] mt-2 text-2xl text-gray-900 bg-gray-50 rounded-lg border-none fucus-border-none input-title focus:outline-[#ffff]"
                placeholder="Write your thoughts here..."
              ></textarea>
              </div>
  `;
}
function experiences() {
  experiencesProfessionnelles.innerHTML += `
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
                    class="inputs-entreprise-poste px-3 mt-4 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[40%]"
                  />
                  <input
                    class="inputs-date-dubut-entreprise input-date p-2 bg-white text-[1.2em] font-semibold rounded-md ml-16 mr-[5rem]"
                    type="date"
                  />
                  <input
                    class="inputs-date-fin-entreprise input-date p-2 bg-white text-[1.2em] font-semibold rounded-md"
                    type="date"
                  />
                </div>
                <h2 class="text-2xl font-bold text-[#fff]">
                  Missions et Réalisation
                </h2>
                <textarea
                  id="message"
                  rows="4"
                  class="inputs-missinon-realisation block p-2.5 w-[80%] mt-2 text-2xl text-gray-900 bg-gray-50 rounded-lg border-none fucus-border-none input-title focus:outline-[#ffff]"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
    `;
}
function certificationsFunction() {
  countentCertifications.innerHTML += `
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
              class="inputs-nom-certification px-3 mt-2 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[50%]"
            />
            <input
              class="inputs-date-obtention input-date p-2 bg-white text-[1.2em] font-semibold rounded-md ml-16 mr-[5rem]"
              type="date"
            />
          </div>
          <div>
            <h2 class="text-2xl font-bold text-[#fff]">
              Organisme de Délivrance
            </h2>
            <input
              type="text"
              class="inputs-organisme-delivrance px-3 mt-2 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[50%]"
            />
            <h2 class="text-2xl font-bold text-[#fff]">
              Lien vers la Certification
            </h2>
            <input
              type="text"
              class="inputs-lien-certification px-3 mt-2 border-none fucus-border-none py-2 mb-3 rounded-md input-title focus:outline-[#ffff] w-[50%]"
            />
            <h2 class="text-2xl font-bold text-[#fff]">
              Description de la Certification
            </h2>
            <textarea
              id="message"
              rows="4"
              class="inputs-descriptin-certification block p-2.5 w-[80%] mt-2 text-2xl text-gray-900 bg-gray-50 rounded-lg border-none fucus-border-none input-title focus:outline-[#ffff]"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          </div>
    `;
}
