import {Pipe, PipeTransform} from '@angular/core';
import {Skill} from '../model/Skill';

@Pipe({
  name: 'filterSkills',
  standalone: true,
})
export class FilterSkillsPipe implements PipeTransform {

  transform(skills: Skill[], type: string): Skill[] {
    if (type === 'all') {
      return skills;
    }
    return skills.filter(skill => skill.type === type);
  }

}
