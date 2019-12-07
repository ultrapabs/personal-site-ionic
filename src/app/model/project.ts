export class Project {
  displayName: string;
  description: string;
  imageName: string;
  githubUrl: string;
  liveUrl: string;
  otherUrl: string;

  constructor(name: string, desc: string, img: string,  github: string, live: string, other: string) {
    this.displayName = name;
    this.description = desc;
    this.imageName = img;
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
    this.otherUrl != null;
  }
}
