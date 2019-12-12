import { Race } from './race';

describe('Race', () => {
  it('should create an instance', () => {
    expect(new Race('2019-12-01', 'Some Race', '1:23:45', 'http://some.url')).toBeTruthy();
  });

  it('knows when it has a result', () => {
    let testRaceOne = new Race('2019-12-01', 'Some Race', null, 'http://some.url');
    let testRaceTwo = new Race('2019-12-01', 'Some Race', '', 'http://some.url');
    let testRaceThree = new Race('2019-12-01', 'Some Race', '1:23:45', 'http://some.url');

    expect(testRaceOne.hasResult()).toBe(false);
    expect(testRaceTwo.hasResult()).toBe(false);
    expect(testRaceThree.hasResult()).toBe(true);
  });
});
