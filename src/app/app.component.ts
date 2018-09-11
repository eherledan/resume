import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  skills_left: any = {title: 'Front-end', icon: 'fa fa-code', content: [
      {label: 'HTML/CSS', percentage: 95}, {label: 'Javascript', percentage: 85}
      ]};

  skills_right: any = {title: 'Back-end', icon: 'fa fa-cogs', content: [
      {label: 'PHP', percentage: 95}, {label: 'MySQL', percentage: 90}
    ]};

  professionnal: any = {title: 'Expériences professionelles', icon: 'fa fa-suitcase',
    experiences: [{title: 'Acantic', link: 'https://www.acantic.com/', date: 'Octobre 2017 - Septembre 2018',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...'},
      {title: 'Groupama Supports & Services', link: 'http://www.groupama.com/fr/fiche/groupama-supports-et-services/', date: 'Janvier 2017 - Février 2017',
        description: 'Développement d\'un site web de gestion des exercices PSI (plan de secours informatique) en PHP/MySQL intégrant un suivi des exercices et la production des comptes rendus.'},
      {title: 'Lycée Professionnel Jean Jaurès', link: 'http://www.lycee-jean-jaures-rennes.fr/', date: 'Mai 2016 - Juin 2016',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...'},
    ]};

  education: any = {title: 'Formations', icon: 'fa fa-graduation-cap',
    experiences: [{title: 'Formation Concepteur Développeur Informatique', link: 'https://www.acantic.com/', date: ' 2017 - 2018',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...'},
      {title: 'Brevet de Technicien Supérieur Services Informatiques aux Organisations', link: 'http://www.groupama.com/fr/fiche/groupama-supports-et-services/', date: '2015 - 2017',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...'},
      {title: 'Baccalauréat Professionnel Systèmes Numériques et Electroniques', link: 'http://www.lycee-jean-jaures-rennes.fr/', date: '2013 - 2015',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula...'},
    ]};

    interests: any = [{label: 'Cinéma', image_filename: 'once_upon_a_time_in_america.jpg'}, 
    {label: 'Jeux-vidéo', image_filename: 'zelda_breath_of_the_wild.jpg'}, 
    {label: 'Musique', image_filename: 'led_zeppelin.jpg'}, 
    {label: 'Bande dessinée', image_filename: 'watchmen.jpg'}
  ];
}
