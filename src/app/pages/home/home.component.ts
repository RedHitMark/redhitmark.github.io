import {Component, HostListener, OnInit} from '@angular/core';
import {EducationComponent} from '../../components/education/education.component';
import {ProjectComponent} from '../../components/project/project.component';
import {NgForOf, NgOptimizedImage, SlicePipe} from '@angular/common';
import {PublicationComponent} from '../../components/publication/publication.component';
import {WorkComponent} from '../../components/work/work.component';
import {SkillComponent} from '../../components/skill/skill.component';
import {FilterComponent} from '../../components/filter/filter.component';
import {TyperComponent} from '../../components/typer/typer.component';
import {RouterLink} from '@angular/router';
import all from '../../../assets/all.json';
import {CurriculumVitae} from '../../model/CurriculumVitae';
import {FilterSkillsPipe} from '../../pipes/filter-skills.pipe';
import {AwardComponent} from '../../components/award/award.component';
import {CertificationComponent} from '../../components/certification/certification.component';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    EducationComponent,
    ProjectComponent,
    PublicationComponent,
    WorkComponent,
    SlicePipe,
    SkillComponent,
    FilterComponent,
    TyperComponent,
    RouterLink,
    FilterSkillsPipe,
    NgOptimizedImage,
    AwardComponent,
    CertificationComponent
  ]
})
export class HomeComponent implements OnInit{

  public cv: CurriculumVitae;

  public skillCategories: string[];

  public selectedProjectCategories: string;
  public selectedSkillCategories: string;
  // public numberWorksToShow: number;

  constructor() {
    this.cv = all;

    this.skillCategories = this.cv.skills.map(skill => skill.type).filter((value, index, self) => self.indexOf(value) === index);

    this.selectedProjectCategories = 'all';
    this.selectedSkillCategories = 'all';
    // this.numberWorksToShow = 3;
  }

  public ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  public onScroll(event: Event) : void {
  }

  public changeSkillCategories(category: string): void {
    this.selectedSkillCategories = category;
  }

  public loadMoreWorks(): void {
    // if (this.numberWorksToShow + 3 > this.cv.experiences.length) {
    //   this.numberWorksToShow = this.cv.experiences.length;
    // } else {
    //   this.numberWorksToShow += 3;
    // }
  }

  public loadLessWorks(): void {
  }
}
