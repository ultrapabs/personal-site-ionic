import { RaceFilterPipe } from './race-filter.pipe';
import { Race } from '../model/race';

describe('RaceFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new RaceFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('does attempt to filter if the raceList or filterText do not exist', () => {
    let testPipe = new RaceFilterPipe();
    let testRace = new Race('2019-12-01', 'Some Race', '1:23:45', 'http://some.url');
    let testRaceList = [testRace];

    expect(testPipe.transform(null, null)).toBe(null);

    expect(testPipe.transform(testRaceList, null).length).toBe(1);
    expect(testPipe.transform(testRaceList, null)[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, '').length).toBe(1);
    expect(testPipe.transform(testRaceList, '')[0]).toBe(testRace);
  });

  it('filters the race list on the date', () => {
    let testPipe = new RaceFilterPipe();
    let testRace = new Race('2019-12-01', 'Some Race', '1:23:45', 'http://some.url');
    let testRaceList = [testRace];

    expect(testPipe.transform(testRaceList, '20').length).toBe(1);
    expect(testPipe.transform(testRaceList, '20')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, '12').length).toBe(1);
    expect(testPipe.transform(testRaceList, '12')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, '2019').length).toBe(1);
    expect(testPipe.transform(testRaceList, '2019')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, '2019-12').length).toBe(1);
    expect(testPipe.transform(testRaceList, '2019-12')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, '2019-12-01').length).toBe(1);
    expect(testPipe.transform(testRaceList, '2019-12-01')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, '2018').length).toBe(0);
    expect(testPipe.transform(testRaceList, '2021').length).toBe(0);
  });

  it('filters the race list on the name', () => {
    let testPipe = new RaceFilterPipe();
    let testRace = new Race('2019-12-01', 'Some Race', '1:23:45', 'http://some.url');
    let testRaceList = [testRace];

    expect(testPipe.transform(testRaceList, 'S').length).toBe(1);
    expect(testPipe.transform(testRaceList, 'S')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, 'R').length).toBe(1);
    expect(testPipe.transform(testRaceList, 'R')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, 'Some').length).toBe(1);
    expect(testPipe.transform(testRaceList, 'Some')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, 'SOME').length).toBe(1);
    expect(testPipe.transform(testRaceList, 'SOME')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, 'some').length).toBe(1);
    expect(testPipe.transform(testRaceList, 'some')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, 'Race').length).toBe(1);
    expect(testPipe.transform(testRaceList, 'Race')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, 'Some Race').length).toBe(1);
    expect(testPipe.transform(testRaceList, 'Some Race')[0]).toBe(testRace);

    expect(testPipe.transform(testRaceList, 'Some Other Race').length).toBe(0);
  });
});
