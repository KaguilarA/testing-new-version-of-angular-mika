class Carrer {
  constructor(pcarrername, pcarrercode, pcarrerdegree, pcarrerstate) {
    this._name = pcarrername;
    this._code = pcarrercode;
    this._degree = pcarrerdegree;
    this._state = pcarrerstate;
  }

  // Getters

  get code() {
    return this._code;
  }

  get degree() {
    return this._degree;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get state() {
    return this._state;
  }

  // Setters

  set code(pNewCode) {
    this._code = pNewCode;
  }

  set degree(pNewDegree) {
    this._degree = pNewId;
  }

  set id(pNewId) {
    this._id = pNewId;
  }

  set name(pNewName) {
    this._name = pNewName;
  }

  set state(pNewState) {
    this._state = pNewState;
  }
}

class User {
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate) {
    this._role = prole;
    this._name1 = pfirstname;
    this._name2 = psecondname;
    this._surname1 = pfirstsurname;
    this._surname2 = psecondsurname;
    this._userId = pid;
    this._email = pemail;
    this._password = ppassword;
    this._photo = pphoto;
    this._phone = pphone;
    this._state = pstate;
  }

  // Getters

  get email() {
    return this._email;
  }

  get firstName() {
    return this._name1;
  }

  get firstSurname() {
    return this._surname1;
  }

  get fullName() {
    let fullName;
    switch (true) {
      case this.secondName == ``:
        fullName = `${this.firstName} ${this.firstSurname} ${this.secondSurname}`;
        break;

      case this.secondSurname == ``:
        fullName = `${this.firstName} ${this.secondName} ${this.firstSurname}`;
        break;

      default:
        fullName = `${this.firstName} ${this.secondName} ${this.firstSurname} ${this.secondSurname}`;
        break;
    }
    return fullName;
  }

  get mId() {
    return this._id;
  }

  get password() {
    return this._password;
  }

  get phone() {
    return this._phone;
  }

  get photo() {
    return this._photo;
  }

  get role() {
    return this._role;
  }

  get secondName() {
    return this._name2;
  }

  get secondSurname() {
    return this._surname2;
  }

  get state() {
    return this._state;
  }

  get id() {
    return this._userId;
  }

  // Setters

  set firstName(pNewFirstName) {
    this._name1 = pNewFirstName;
  }

  set firstSurname(pNewFirstSurname) {
    this._surname1 = pNewFirstSurname;
  }

  set password(pNewPassWord) {
    this._password = pNewPassWord;
  }

  set phone(pNewPhone) {
    this._phone = pNewPhone;
  }

  set photo(pNewPhoto) {
    this._photo = pNewPhoto;
  }

  set role(pNewRole) {
    this._role = pNewRole;
  }

  set secondName(pNewSecondName) {
    this._name2 = pNewSecondName;
  }

  set secondSurname(pNewSecondSurname) {
    this._surname2 = pNewSecondSurname;
  }

  set state(pNewState) {
    this._state = pNewState;
  }

  set id(pNewId) {
    this._userId = pNewId;
  }
}

class Admin extends User {
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pjob) {
    super(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate);
    this._jobPosition = pjob;
  };

  // Getters
  get jobPosition() {
    return this._jobPosition;
  }

  // Setters
  set jobPosition(pnewjobposition) {
    this._jobPosition = pnewjobposition;
  }
}

class Project {
  constructor(pid, pprojectstate, pprojectname, pobjetive, pimages, pmoney, pprojectmanager, pclient) {
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

  setTeacher(pobjprofesor) {
    this.professor = pobjprofesor;
  }

  setStudents(pobjstudent) {
    this.students.push(pobjstudent);
  }
  // TODO Hacer los metodos del Proyecto
}

class ProjectManager {
  constructor(pfirstname, psecondname, pfirstsurname, psecondsurname, pemail) {
    this.pmFirstName = pfirstname;
    this.pmSecondName = psecondname;
    this.pmFirstSurname = pfirstsurname;
    this.pmSecondSurname = psecondsurname;
    this.pmEmail = pemail;
  }
  // TODO Hacer los metodos del PM
}

class Client {
  constructor(penterprisename, penterpriseid, penterpriseidustry) {
    this.enterpriseName = penterprisename;
    this.enterpriseId = penterpriseid;
    this.enterpriseIndustry = penterpriseidustry;
  };
  // TODO Hacer los metodos del Cliente
}

class Assistant extends User {
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pjob) {
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

class Professor extends User {
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pmember, pspecialty) {
    super(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate);
    this.specialty = pspecialty;
    this.councilMember = pmember;
  };

  // Getters
  getSpecialty() {
    return this.specialty;
  }

  getCouncilMember() {
    return this.councilMember;
  }

  // TODO Hacer los sets del Profesor
}

class Student extends User {
  constructor(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate, pbirthdate, pcurriculum, pcarrer, pgithubuser, pwebsite) {
    super(prole, pfirstname, psecondname, pfirstsurname, psecondsurname, pid, pemail, ppassword, pphoto, pphone, pstate);
    this.birthDate = pbirthdate;
    this.curriculum = pcurriculum;
    this.carrer = pcarrer;
    this.githubUser = pgithubuser;
    this.website = pwebsite;
    this.rejectReason = ''
  };

  // Getters
  getBirthDate() {
    return this.birthDate;
  }

  getCurriculum() {
    return this.curriculum;
  }

  getCarrer() {
    return this.carrer;
  }

  getGithubUser() {
    return this.githubUser;
  }

  getWebSite() {
    return this.website;
  }

  getRejecReason() {
    return this.rejectReason;
  }
  // TODO Hacer los sets del Estudiante
}
