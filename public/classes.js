class Carrer{
  constructor(pcarrername, pcarrercode, pcarrerdegree, pcarrerstate){
    this.carrerName = pcarrername;
    this.carrerCode = pcarrercode;
    this.carrerDegree = pcarrerdegree;
    this.carrerState = pcarrerstate;
  }
  
  // Getter
  getCarrerName(){
    return this.carrerName;
  }

  getCarrerCode(){
    return this.carrerCode
  }

  getCarrerDegree(){
    return this.carrerDegree;
  }

  getCarrerState(){
    return this.carrerState;
  }

  // Setter
  setCarrerName(pnewcarrername){
    this.carrerName = pnewcarrername;
  }

  setCarrerDegree(pnewcarrerdegree){
    this.carrerDegree = pnewcarrerdegree;
  }

  setCarrerState(pnewcarrerstate){
    this.carrerState = pnewcarrerstate;
  }
}

class Project {
  constructor(pid, pprojectstate, pprojectname, pobjetive, pimages, pmoney, pprojectmanager, pclient){
    this._id = pid;
    this.projectState = pprojectstate;
    this.projectName = pprojectname;
    this.projectObjetive = pobjetive;
    this.projectImages = pimages;
    this.projectMoney = pmoney;
    this.projectManager = pprojectmanager;
    this.client = pclient;
    this.students = [];
    this.professor = '';
  };

  setTeacher(pobjprofesor){
    this.professor = pobjprofesor;
  }

  setStudents(pobjstudent){
    this.students.push(pobjstudent);
  }
  // TODO Hacer los metodos del Proyecto
}

class ProjectManager {
  constructor(pfirstname, psecondname, pfirstsurname, psecondsurname, pemail){
    this.pmFirstName = pfirstname;
    this.pmSecondName = psecondname;
    this.pmFirstSurname = pfirstsurname;
    this.pmSecondSurname = psecondsurname;
    this.pmEmail = pemail;
  }
  // TODO Hacer los metodos del PM
}

class Client {
  constructor(penterprisename, penterpriseid, penterpriseidustry){
    this.enterpriseName = penterprisename;
    this.enterpriseId = penterpriseid;
    this.enterpriseIndustry = penterpriseidustry;
  };
  // TODO Hacer los metodos del Cliente
}

class User {
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate){
    this.role = prole;
    this.firstName = pfirstname;
    this.secondName = psecondname;
    this.firstSurname = pfirstsurname;
    this.secondSurname = psecondsurname;
    this.id = pid;
    this.email = pemail;
    this.password = ppassword;
    this.photo = pphoto;
    this.phone = pphone;
    this.state = pstate;
  };

  // Getters
  getRole(){
    return this.role;
  }

  getFirstName(){
    return this.firstName;
  }

  getSecondName(){
    return this.secondName;
  }

  getFirstSurname(){
    return this.firstName;
  }

  getSecondSurname(){
    return this.secondSurname;
  }

  getId(){
    return this.id;
  }

  getEmail(){
    return this.email;
  }

  getPassword(){
    return this.password;
  }

  getPhono(){
    return this.photo;
  }

  getPhone(){
    return this.phone;
  }

  getState(){
    return this.state;
  }

  // Setter
  setRole(pnewrole){
    this.role = pnewrole;
  }

  setFirstName(pnewfirstname){
    this.firstName = pnewfirstname;
  }

  setSecondName(pnewsecondname){
    this.secondName = pnewsecondname;
  }

  setFirstSurname(pnewfirstsurname){
    this.firstName = pnewfirstsurname;
  }

  setSecondSurname(pnewsecondsurname){
    this.secondSurname = pnewsecondsurname;
  }

  setId(pnewid){
    this.id = pnewid;
  }

  setPassword(pnewpassword){
    this.password = pnewpassword;
  }

  setPhono(pnewphoto){
    this.photo = pnewphoto;
  }

  setPhone(pnewphone){
    this.phone = pnewphone;
  }

  setState(pnewstate){
    this.state = pnewstate;
  }
}

class Admin extends User{
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pjob){
    super(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate);
    this.jobPosition = pjob;
  };

  // Getters
  getJobPosition() {
    return this.jobPosition;
  }

  // Setters
  setJobPosition(pnewjobposition) {
    this.jobPosition = pnewjobposition;
  }
}

class Assistant extends User{
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pjob){
    super(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate);
    this.jobPosition = pjob;
  };

  // Getters
  getJobPosition() {
    return this.jobPosition;
  }

  // Setters
  setJobPosition(pnewjobposition) {
    this.jobPosition = pnewjobposition;
  }
}

class Professor extends User{
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pmember, pspecialty){
    super(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate);
    this.specialty = pspecialty;
    this.councilMember = pmember;
  };

  // Getters
  getSpecialty(){
    return this.specialty;
  }

  getCouncilMember(){
    return this.councilMember;
  }

  // TODO Hacer los sets del Profesor
}

class Student extends User{
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pbirthdate, pcurriculum, pcarrer, pgithubuser, pwebsite){
    super(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate);
    this.birthDate = pbirthdate;
    this.curriculum = pcurriculum;
    this.carrer = pcarrer;
    this.githubUser = pgithubuser;
    this.website = pwebsite;
    this.rejectReason = ''
  };

  // Getters
  getBirthDate(){
    return this.birthDate;
  }

  getCurriculum(){
    return this.curriculum;
  }

  getCarrer(){
    return this.carrer;
  }

  getGithubUser(){
    return this.githubUser;
  }

  getWebSite(){
    return this.website;
  }

  getRejecReason(){
    return this.rejectReason;
  }
  // TODO Hacer los sets del Estudiante
}


