import { Injectable } from '@angular/core';
import { Race } from '../model/race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  raceList: Race[];

  constructor() {
    this.raceList = [
      new Race('2020-06-06', 'High Line Canal Trail FKT Attempt', '', '/hlct-fkt'),
      new Race('2020-02-21', 'Akron Campbell Invitational - Mile', '4:58.6', '/assets/results/ac2020.pdf'),
      new Race('2020-02-15', 'Black Canyon 100K', '12:03:26', 'https://ultrasignup.com/results_event.aspx?did=67039'),
      new Race('2019-12-08', 'California International Marathon', 'DNF', 'https://runsra.org/california-international-marathon/'),
      new Race('2019-11-09', 'Mountain View Trail Half Marathon', '1:25:58', 'https://ultrasignup.com/results_event.aspx?did=68598'),
      new Race('2019-10-12', 'Antelope Island 5K', '17:40', 'https://www.webscorer.com/racedetails?raceid=199355&did=221435'),
      new Race('2019-10-05', 'Castle Rock Trail Festival 10K', '45:05', '/assets/results/2019_USATF_CO_Championship_Trail10K_Results.tif'),
      new Race('2019-05-11', 'Carbon Valley 5K', '18:10', 'http://racingunderground.racetecresults.com/results.aspx?CId=16436&RId=334'),
      new Race('2019-04-20', 'Prospect Park 5K', '16:55', 'https://nycruns.com/race-results/?race=nycruns-prospect-park-5k-10k-benefiting-camba'),
      new Race('2019-03-16', 'Jerry Quiller Classic - 1500m', '4:32.8', 'http://results.tfmeetpro.com/University_of_Colorado/Jerry_Quiller_Classic_2019/results_5.html'),
      new Race('2019-01-05', 'Bandera 100K', '13:22:37', 'http://edsresults.com/bandera19/index.php?search_type=race_results&event=100K&gender=Overall&results_per_page=400'),
      new Race('2018-11-25', 'Seattle Half Marathon', '1:20:19', 'https://results.chronotrack.com/event/results/event/event-38948'),
      new Race('2018-09-09', '5th Avenue Mile', '4:53', 'https://results.nyrr.org/event/185THAVE/finishers?_ga=2.29688511.1462602053.1536616119-752687976.1534871546'),
      new Race('2018-08-18', 'Leadville Trail 100mi', '29:30:35', 'https://www.athlinks.com/event/33913/results/Event/754080/Course/1274553/Results'),
      new Race('2018-06-16', 'Leadville Trail Marathon', '5:44:46', 'https://www.athlinks.com/event/32707/results/Event/618379/Results'),
      new Race('2018-04-07', 'Colorado Invitational - 1500m', '4:33.7', '/assets/results/CU_Invitational_Results_2018.pdf'),
      new Race('2017-07-20', 'BRR Track Meet - Mile', '4:53.2', 'http://boulderroadrunners.org/results/BRRTrack4-2017.html'),
      new Race('2017-07-20', 'BRR Track Meet - 5K', '19:02', 'http://boulderroadrunners.org/results/BRRTrack4-2017.html'),
      new Race('2017-07-06', 'BRR Track Meet - 1500m', '4:28.6', 'http://boulderroadrunners.org/results/BRRTrack3-2017.html'),
      new Race('2017-07-04', 'Avery Brewing 4K', '13:53', 'https://www.athlinks.com/event/41642/results/Event/653119/Results'),
      new Race('2017-06-15', 'BRR Track Meet - Mile', '5:01.4', 'http://boulderroadrunners.org/results/BRRTrack2-2017.html'),
      new Race('2017-05-29', 'BolderBOULDER 10K', '38:03', 'http://bolderboulder2017.onlineraceresults.com/search.php'),
      new Race('2017-02-19', 'Austin Half Marathon', '2:07:24', 'https://www.athlinks.com/event/127196/results/Event/618861/Course/945266/Results'),
      new Race('2016-12-03', 'TNFECS CA 50mi', '10:00:18', 'https://results.chronotrack.com/event/results/event/event-24511'),
      new Race('2016-11-24', 'Tacoma City Turkey Trot 5K', '17:45', 'https://runsignup.com/race/results/?raceId=30728#resultSetId-29823'),
      new Race('2016-09-24', 'TNFECS UT 50mi', 'DNS', 'https://www.thenorthface.com/get-outdoors/endurance-challenge/utah.html'),
      new Race('2016-09-17', 'TNFECS WI 50mi', 'DNS', 'https://www.thenorthface.com/get-outdoors/endurance-challenge/wisconsin.html'),
      new Race('2016-08-13', 'Eastern States 100mi', 'DNF', 'http://www.easternstates100.com/'),
      new Race('2016-07-17', 'TNFECS ON 5K', '29:27', 'https://www.sportstats.ca/display-results.xhtml?raceid=40156'),
      new Race('2016-07-16', 'TNFECS ON 50mi', '8:42:30', 'https://www.sportstats.ca/display-results.xhtml?raceid=40031'),
      new Race('2016-06-02', 'JP Morgan Corporate Challenge', '18:23', 'https://www.jpmorganchasecc.com/results.php?city_id=6'),
      new Race('2016-05-30', 'BolderBOULDER 10K', '39:12', 'http://bolderboulder2016.onlineraceresults.com/results/bb16_awave.txt'),
      new Race('2016-05-21', 'Airbnb Brooklyn Half', '1:26:54', 'http://web2.nyrrc.org/cgi-bin/start.cgi/aes-programs/results/startup.html?result.id=b60521&result.year=2016'),
      new Race('2016-04-30', 'TNFECS NY 50mi', '11:29:34', 'https://results.chronotrack.com/event/results/event/event-20552'),
      new Race('2016-04-09', 'TNFECS DC 50mi', '8:30:44', 'https://results.chronotrack.com/event/results/event/event-18954'),
      new Race('2016-03-06', 'Caumsett State Park 50K', '4:03:23', 'http://justfinish.net/full-results/2016-results/'),
      new Race('2016-02-14', 'PPTC Cherry Tree 10mi', '1:01:31', 'https://www.nycruns.com/race-results/?race=pptc-cherry-tree-10-miler-relay-brooklyn-ny-3'),
      new Race('2016-01-10', 'NYCRUNS Central Park 10mi', '1:06:16', 'https://nycruns.com/race-results/?race=NYCRUNS-cocoa-classic-central-park-5-10-miler-new-york-ny'),
      new Race('2015-12-13', 'BUS Fat Ass Trail Mix-Up 50K', '4:05:26', 'http://ultrasignup.com/register.aspx?did=35228'),
      new Race('2015-11-22', 'Philadelphia Marathon', '3:26:48', 'http://live.xacte.com/templates/philadelphiamarathon.com/for-runners/race-results'),
      new Race('2015-10-04', 'Paine to Pain Trail Half', '1:28:35', 'http://www.painetopain.com/past-results/2015-results/'),
      new Race('2015-09-09', 'Hoka One One Long Island Mile', '4:56.80', 'http://hoka-one-one-long-island-mile.runnerspace.com/eprofile.php?do=info&event_id=11220'),
      new Race('2015-07-18', 'Vermont 100mi', '28:05:13', 'http://www.coolrunning.com/results/15/vt/Jul19_VT100E_set1.shtml'),
      new Race('2015-06-17', 'Al Goldstein Speed Series 5K', '18:09', 'http://nycruns.com/race-results/?race=pptc-al-goldstein-speed-series-brooklyn-ny-19'),
      new Race('2015-06-13', 'Harry O\'Neill Memorial 5K', '18:14', 'http://www.herricks.org/webpages/aboosters/harryoneill.cfm'),
      new Race('2015-06-03', 'Al Goldstein Speed Series 5K', '17:19', 'http://nycruns.com/race-results/?race=pptc-al-goldstein-speed-series-brooklyn-ny-18'),
      new Race('2015-05-16', 'Airbnb Brooklyn Half', '1:19:38', 'http://web2.nyrrc.org/cgi-bin/htmlos.cgi/aes-programs/results/startup.html?result.id=b50516&result.year=2015'),
      new Race('2015-05-02', 'TNFECS NY 50mi', '13:08:55', 'http://results.chronotrack.com/event/results/event/event-13807?lc=en'),
      new Race('2015-03-10', 'NYRR Night at the Races - Mile', '4:59.38', 'http://www.armorytrack.com/gprofile.php?do=view_event&event_id=9282&mgroup_id=45586&year=2015'),
      new Race('2015-01-11', 'NYCRUNS Central Park 10mi', '1:01:01', 'https://nycruns.com/race-results/?race=NYCRUNS-central-park-5-10-miler-new-york-new-york'),
      new Race('2014-12-21', 'NYCRUNS Roosevelt Island 10K', '37:55', 'https://nycruns.com/race-results/?race=NYCRUNS-winter-series-roosevelt-island-5k-10k-roosevelt-island-ny'),
      new Race('2014-12-21', 'NYCRUNS Roosevelt Island 5K', '17:37', 'https://nycruns.com/race-results/?race=NYCRUNS-winter-series-roosevelt-island-5k-10k-roosevelt-island-ny'),
      new Race('2014-12-06', 'NYC Trail Festival 50K', '4:39:15', 'http://my3.raceresult.com/details/results.php?lang=en&page=6&eventid=33382&contest=5&name=Result%20Lists%7CResults%20-%20Overall&format=view'),
      new Race('2014-09-21', 'Paine to Pain Trail Half', '1:35:13', 'http://www.painetopain.com/past-results/2014-results/'),
      new Race('2014-08-30', 'Farmingdale Main Street Mile', '4:59', 'http://results.active.com/events/farmingdale-main-street-mile/1-mile-run?gender=male'),
      new Race('2014-07-19', 'Vermont 100mi', 'DNF', '/assets/results/vt100_2014.pdf'),
      new Race('2014-06-07', 'TNFECS DC 50mi', '7:51:07', 'http://results.chronotrack.com/event/results/event/event-8916?lc=en'),
      new Race('2014-04-05', 'Eileen C. Dugan Memorial 5K', '19:36', 'https://nycruns.com/race-results/?race=eileen-c-dugan-memorial-5k-brooklyn-ny-2'),
      new Race('2014-03-29', 'Red Hook Crit 5K', '19:13', 'http://redhookcrit5k.com/results/'),
      new Race('2014-03-22', 'NYCRUNS Spring Fling 10K', '39:56', 'https://nycruns.com/race-results/?race=NYCRUNS-spring-fling-5k-10k-roosevelt-island-ny'),
      new Race('2014-02-16', 'PPTC Cherry Tree 10mi', '1:06:36', 'https://nycruns.com/race-results/?race=pptc-cherry-tree-10-miler-relay-brooklyn-ny-2'),
      new Race('2014-01-12', 'NYCRUNS Central Park 10mi', '1:03:43', 'https://nycruns.com/race-results/?race=NYCRUNS-central-park-5-10-miler-new-york-ny'),
      new Race('2013-10-20', 'Brooklyn Greenway Half', '1:20:10', 'https://nycruns.com/race-results/?race=brooklyn-greenway-half-marathon-brooklyn-ny'),
      new Race('2013-10-06', 'Paine to Pain Trail Half', '1:29:48', 'http://www.painetopain.com/past-results/2013-results/'),
      new Race('2013-09-02', 'New Haven 20K', '1:23:03', 'http://www.newhavenroadrace.org/?page_id=251'),
      new Race('2013-08-25', 'NYCRUNS Shore Road 5K', '18:08', 'https://nycruns.com/race-results/?race=nycruns-shore-road-summer-mini-series-5k-10k-brooklyn-ny-3'),
      new Race('2013-07-25', 'White River 50mi', '9:47:24', 'http://www.whiteriver50.com/'),
      new Race('2013-05-04', 'TNFECS NY 50mi', '10:40:51', 'http://results.chronotrack.com/event/results/event/event-3781?lc=en'),
      new Race('2013-06-08', 'Red Hook Crit 5K', '18:02', 'http://redhookcrit5k.com/results/'),
      new Race('2013-03-30', 'Red Hook Crit 5K', '17:48', 'http://redhookcrit5k.com/results/'),
      new Race('2013-01-13', 'NYCRUNS Central Park 10mi', '1:03:40', 'https://nycruns.com/race-results/?race=nycruns-central-park-10-miler-new-york-ny'),
      new Race('2012-09-16', 'Yonkers Half', '1:40:15', 'https://nycruns.com/race-results/?race=yonkers-marathon-and-half-marathon-yonkers-ny-3'),
      new Race('2012-08-22', 'Al Goldstein Speed Series 5K', '19:25', 'https://nycruns.com/race-results/?race=pptc-al-goldstein-speed-series-brooklyn-ny-27')
    ];
  }

  getRaces() {
    return this.raceList;
  }
}
