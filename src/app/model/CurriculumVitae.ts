import {Skill} from './Skill';
import {Education} from './Education';
import {Work} from './Work';
import {Publication} from './Publication';
import {Project} from './Project';
import {Contact} from './Contact';
import {Certification} from './Certification';
import {Award} from './Award';

export interface CurriculumVitae {
  intro: string;
  roles: Array<string>;

  skills: Array<Skill>;
  experiences: Array<Work>;

  certifications: Array<Certification>;
  awards: Array<Award>;

  educations: Array<Education>;

  projects: Array<Project>;
  publications: Array<Publication>;

  contact: Contact;
}
