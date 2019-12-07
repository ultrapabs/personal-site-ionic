export class Race {

  date: string; // format YYYY-MM-DD
  name: string;
  time: string;
  url: string;

  constructor(date: string, name: string, time: string, url: string) {
    this.date = date;
    this.name = name;
    this.time = time;
    this.url = url;
  }

  hasResult() {
    return this.time !== '';
  }
}
