import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  skills_left: any = {title: 'Front-end', icon: 'fa fa-code', content: [
      {label: 'HTML/CSS', percentage: 95, color: 'html'}, {label: 'JavaScript', percentage: 85, color: 'js'}, {label: 'Angular', percentage: 80, color: 'angular'}, {label: 'Vue', percentage: 75, color: 'vue'}, {label: 'React', percentage: 60, color: 'react'}
      ]};

  skills_right: any = {title: 'Back-end', icon: 'fa fa-cogs', content: [
      {label: 'PHP', percentage: 95, color: 'php'}, {label: 'Laravel', percentage: 75, color: 'laravel'}, {label: 'Symfony', percentage: 65, color: 'symfony'}, {label: 'MySQL', percentage: 90, color: 'mysql'}
    ]};

  professionnal: any = {title: 'Expériences professionelles', icon: 'fa fa-suitcase',
    experiences: [{title: 'Acantic', link: 'https://www.acantic.com/', date: 'Octobre 2017 - Septembre 2018',
      description: 'Développement d\'un extranet pour l\'association Gîtes de France en Bretagne permettant de faciliter les communications entre les propriétaires labelisés (Base Wordpress, PHP/MySQL, JavaScript). Ajout de différents modules pour une solution de locations de salles pour la communauté de commune Le Mené (PHP/MySQL).'},
      {title: 'Groupama Supports & Services', link: 'http://www.groupama.com/fr/fiche/groupama-supports-et-services/', date: 'Janvier 2017 - Février 2017',
        description: 'Développement d\'un site web de gestion des exercices PSI (plan de secours informatique) en PHP/MySQL intégrant un suivi des exercices et la production des comptes rendus.'},
      {title: 'Lycée Professionnel Jean Jaurès', link: 'http://www.lycee-jean-jaures-rennes.fr/', date: 'Mai 2016 - Juin 2016',
        description: 'Refonte structurelle et graphique du site web du lycée basée sur le CMS Joomla. Formation aux utilisateurs à l\'outil.'},
    ]};

  education: any = {title: 'Formations', icon: 'fa fa-graduation-cap',
    experiences: [{title: 'Formation Concepteur Développeur Informatique (CDI)', link: 'https://numerique.imie.fr/formations/developpement/', school: 'IMIE - Institut de la filière numérique', date: ' 2017 - 2018',
      description: 'BAC+3 | Laravel, Symfony, Vue, Vuetify, Angular, React, Android, MySQL, SQL Server, NoSQL, DevOps, Docker, Git, Algorithmie, UML, Merise, Gestion de projet, Méthode agile.'},
      {title: 'Brevet de Technicien Supérieur Services Informatiques aux Organisations (SIO)', link: 'https://lycee-basch.fr/index.php/formations/le-superieur/sts-sio', school: 'Lycée Victor et Hélène Basch', date: '2015 - 2017',
        description: 'BAC+2 | HTML, CSS, JavaScript, PHP, CodeIgniter, C#, Android, Merise, UML, Git, Mise en place d\'un réseau local.'},
      {title: 'Baccalauréat Professionnel Systèmes Numériques et Electroniques (SEN)', link: 'http://www.lp-charles-tillon-rennes.fr/systemes-numeriques-option-b-audiovisuels-reseau-&-equipement-domestiques-bac-pro-rennes-b8.html', school: 'Lycée Professionnel Charles Tillon', date: '2013 - 2015',
        description: 'Baccalauréat Professionnel | Préparation, installation, réalisation et maintenance de systèmes audiovisuels.'},
    ]};

    interests: any = [{label: 'Cinéma', image_filename: 'once_upon_a_time_in_america.jpg'}, 
    {label: 'Jeux vidéo', image_filename: 'zelda_breath_of_the_wild.jpg'}, 
    {label: 'Musique', image_filename: 'led_zeppelin.jpg'}, 
    {label: 'Bande dessinée', image_filename: 'watchmen.jpg'}
  ];
}
