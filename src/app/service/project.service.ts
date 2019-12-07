import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectList: Project[];

  constructor() {
    this.projectList = [
      new Project(
        'Runlogr',
        'Inspired by Flotrackr, Runlogr allows runners to track their mileage, blog about their training, and create social interactions with other users. Built on Rails using JavaScript and Backbone.js.',
        'runlogr_preview.png',
        'https://github.com/ultrapabs/runlogr',
        'http://runlogr-backbonejs.herokuapp.com/',
        null
      ),
      new Project(
        'Last Dinosaur',
        'As the Last Dinosaur on earth, you must survive as long as possible. Will you make it on the list of the best dinosaurs of all time? Built using JavaScript and jQuery.',
        'dino_preview.png',
        'https://github.com/ultrapabs/lastDinosaur',
        'http://ultrapabs.github.io/lastDinosaur/html/dino.html',
        null
      ),
      new Project(
        'Chess',
        'Download the Chess repository from GitHub and start playing your friends in a few quick steps. Built with Ruby using class inheritance for DRY code.',
        'chess_preview.png',
        'https://github.com/ultrapabs/ruby_chess',
        null,
        null
      ),
      new Project(
        'RFID Check-In',
        'Created to collect data on the number of children who walk and bike to school, the RFID Check-in System integrates passive RFID hardware and an Arduino microcontroller.',
        'rfid_preview.png',
        null,
        null,
        'http://digitalcommons.calpoly.edu/eesp/146/'
      )
    ];
  }

  getProjects() {
    return this.projectList;
  }
}
