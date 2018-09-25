import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() skills: any[];
  constructor() { }

  ngOnInit() {
    this.animateProgressBar();
  }

  animateProgressBar() {
    const content = this.skills.content;
    content.forEach(function(element) {
      const percentage = element.percentage;
      element.percentage = 0;
      setTimeout(function () {
        element.percentage = percentage;
      }, 500);
    });
  }

}
