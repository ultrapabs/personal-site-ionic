import { Project } from './project';

describe('Project', () => {
  it('should create an instance', () => {
    expect(new Project('some name', 'some description', 'some.img', 'http://some.url', 'http://some.url', 'http://some.url')).toBeTruthy();
  });

  it('knows when it has a github url', () => {
    let testProject = new Project('some name', 'some description', 'some.img', null, 'http://some.url', 'http://some.url');

    expect(testProject.hasGithub()).toBe(false);

    testProject.githubUrl = 'http://some.url';
    expect(testProject.hasGithub()).toBe(true);
  });

  it('knows when it has a live url', () => {
    let testProject = new Project('some name', 'some description', 'some.img', 'http://some.url', null, 'http://some.url');

    expect(testProject.hasLive()).toBe(false);

    testProject.liveUrl = 'http://some.url';
    expect(testProject.hasLive()).toBe(true);
  });

  it('knows when it has an other url', () => {
    let testProject = new Project('some name', 'some description', 'some.img', 'http://some.url', 'http://some.url', null);

    expect(testProject.hasOther()).toBe(false);

    testProject.otherUrl = 'http://some.url';
    expect(testProject.hasOther()).toBe(true);
  });
});
