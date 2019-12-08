export class Project {
  displayName: string;
  description: string;
  imagePath: string;
  githubUrl: string;
  liveUrl: string;
  otherUrl: string;

  constructor(name: string, desc: string, img: string,  github: string, live: string, other: string) {
    this.displayName = name;
    this.description = desc;
    this.imagePath = img;
    this.githubUrl = github;
    this.liveUrl = live;
    this.otherUrl = other;
  }

  hasGithub() {
    return this.githubUrl != null;
  }

  hasLive() {
    return this.liveUrl != null;
  }

  hasOther() {
    return this.otherUrl != null;
  }
}
