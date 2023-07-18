import { Launch } from '../types/launch';

export const LaunchMocks: Launch[] = [
  {
    id: 1,
    missionPatch: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
    missionName: 'FalconSat',
    rocketName: 'Falcon 1',
    success: false,
    launchDate: '2006-03-24T22:30:00.000Z',
    launchSiteName: 'Kwajalein Atoll Omelek Island',
    details: 'Engine failure at 33 seconds and loss of vehicle',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
      presskitLink: null,
      articleLink:
        'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/DemoSat',
    },
  },
  {
    id: 2,
    missionPatch: 'https://images2.imgbox.com/f9/4a/ZboXReNb_o.png',
    missionName: 'DemoSat',
    rocketName: 'Falcon 1',
    success: false,
    launchDate: '2007-03-21T01:10:00.000Z',
    launchSiteName: 'Kwajalein Atoll Omelek Island',
    details:
      'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Lk4zQ2wP-Nc',
      presskitLink: null,
      articleLink:
        'https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/DemoSat',
    },
  },
  {
    id: 3,
    missionPatch: 'https://images2.imgbox.com/6c/cb/na1tzhHs_o.png',
    missionName: 'Trailblazer',
    rocketName: 'Falcon 1',
    success: false,
    launchDate: '2008-08-03T03:34:00.000Z',
    launchSiteName: 'Kwajalein Atoll Omelek Island',
    details:
      'Residual stage 1 thrust led to collision between stage 1 and stage 2',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=v0w9p3U8860',
      presskitLink: null,
      articleLink:
        'http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Trailblazer_(satellite)',
    },
  },
  {
    id: 4,
    missionPatch: 'https://images2.imgbox.com/95/39/sRqN7rsv_o.png',
    missionName: 'RatSat',
    rocketName: 'Falcon 1',
    success: true,
    launchDate: '2008-09-28T23:15:00.000Z',
    launchSiteName: 'Kwajalein Atoll Omelek Island',
    details:
      'Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=dLQ2tZEH6G0',
      presskitLink: null,
      articleLink: 'https://en.wikipedia.org/wiki/Ratsat',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Ratsat',
    },
  },
  {
    id: 5,
    missionPatch: 'https://images2.imgbox.com/ab/5a/Pequxd5d_o.png',
    missionName: 'RazakSat',
    rocketName: 'Falcon 1',
    success: true,
    launchDate: '2009-07-13T03:35:00.000Z',
    launchSiteName: 'Kwajalein Atoll Omelek Island',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=yTaIDooc8Og',
      presskitLink:
        'http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit',
      articleLink: 'http://www.spacex.com/news/2013/02/12/falcon-1-flight-5',
      wikipediaLink: 'https://en.wikipedia.org/wiki/RazakSAT',
    },
  },
  {
    id: 6,
    missionPatch: 'https://images2.imgbox.com/73/7f/u7BKqv2C_o.png',
    missionName: 'Falcon 9 Test Flight',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2010-06-04T18:45:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=nxSxgBKlYws',
      presskitLink:
        'http://forum.nasaspaceflight.com/index.php?action=dlattach;topic=21869.0;attach=230821',
      articleLink: 'http://www.spacex.com/news/2013/02/12/falcon-9-flight-1',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Dragon_Spacecraft_Qualification_Unit',
    },
  },
  {
    id: 7,
    missionPatch: 'https://images2.imgbox.com/fa/dc/FOUDQ0Sn_o.png',
    missionName: 'COTS 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2010-12-08T15:43:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=cdLITgWKe_0',
      presskitLink: 'http://www.spacex.com/files/downloads/cots1-20101206.pdf',
      articleLink: 'https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1',
    },
  },
  {
    id: 8,
    missionPatch: 'https://images2.imgbox.com/c5/f4/XfLVgbaO_o.png',
    missionName: 'COTS 2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2012-05-22T07:44:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Launch was scrubbed on first attempt, second launch attempt was successful',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=tpQzDbAY7yI',
      presskitLink:
        'https://www.nasa.gov/pdf/649910main_cots2_presskit_051412.pdf',
      articleLink: 'https://en.wikipedia.org/wiki/Dragon_C2%2B',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Dragon_C2%2B',
    },
  },
  {
    id: 9,
    missionPatch: 'https://images2.imgbox.com/3e/91/hlGiK49a_o.png',
    missionName: 'CRS-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2012-10-08T00:35:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=-Vk3hiV_zXU',
      presskitLink:
        'https://www.nasa.gov/pdf/694166main_SpaceXCRS-1PressKit.pdf',
      articleLink:
        'https://www.nasa.gov/mission_pages/station/main/spacex-crs1-target.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-1',
    },
  },
  {
    id: 10,
    missionPatch: 'https://images2.imgbox.com/bd/fe/lXUYKL28_o.png',
    missionName: 'CRS-2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2013-03-01T19:10:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: 'Last launch of the original Falcon 9 v1.0 launch vehicle',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ik0ElKl5kW4',
      presskitLink:
        'https://www.nasa.gov/sites/default/files/files/Orb2_PRESS_KIT.pdf',
      articleLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-2',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-2',
    },
  },
  {
    id: 11,
    missionPatch: 'https://images2.imgbox.com/f8/27/XwZPEhTJ_o.png',
    missionName: 'CASSIOPE',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2013-09-29T16:00:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      'Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=uFefasS6bhc',
      presskitLink:
        'https://spaceflightnow.com/falcon9/006/UpgradedF9DemoMission_PressKit.pdf',
      articleLink:
        'http://www.parabolicarc.com/2013/09/29/falcon-9-launch-payloads-orbit-vandenberg/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/CASSIOPE',
    },
  },
  {
    id: 12,
    missionPatch: 'https://images2.imgbox.com/4e/f8/rqu7XWMF_o.png',
    missionName: 'SES-8',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2013-12-03T22:41:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: 'First GTO launch for Falcon 9',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=aAj5xapImEs',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacex_ses-8launch_presskit.pdf',
      articleLink:
        'https://www.nasaspaceflight.com/2013/12/spacex-falcon-9-v1-1-milestone-ses-8-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SES-8',
    },
  },
  {
    id: 13,
    missionPatch: 'https://images2.imgbox.com/5c/20/AsqTXJDC_o.png',
    missionName: 'Thaicom 6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-01-06T18:06:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had "unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff"',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=AnSNRzMEmCU',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacex_thaicom6_presskit.pdf',
      articleLink:
        'http://spacenews.com/38959spacex-delivers-thaicom-6-satellite-to-orbit/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Thaicom_6',
    },
  },
  {
    id: 14,
    missionPatch: 'https://images2.imgbox.com/ae/3c/yVvE2vVh_o.png',
    missionName: 'CRS-3',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-04-18T19:25:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Following second-stage separation, SpaceX conducted a second controlled-descent test of the discarded booster vehicle and achieved the first successful controlled ocean touchdown of a liquid-rocket-engine orbital booster. Following touchdown the first stage tipped over as expected and was destroyed. This was the first Falcon 9 booster to fly with extensible landing legs and the first Dragon mission with the Falcon 9 v1.1 launch vehicle.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Od-lON4bTyQ',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacexcrs-3_presskit_042014.pdf',
      articleLink: 'https://newatlas.com/crs-3-launch-spacex/31671/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-3',
    },
  },
  {
    id: 15,
    missionPatch: 'https://images2.imgbox.com/a4/44/YWAUBkOe_o.png',
    missionName: 'OG-2 Mission 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-07-14T15:15:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Total payload mass was 1,316 kg (2,901 lb) : 6 satellites weighing 172 kg each, plus two 142-kg mass simulators. This was the second Falcon 9 booster equipped with landing legs. Following second-stage separation, SpaceX conducted a controlled-descent test of the first stage, which successfully decelerated from hypersonic velocity in the upper atmosphere, made reentry and landing burns, deployed its legs and touched down on the ocean surface. As with the previous mission, the first stage then tipped over as expected and was not recovered.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=lbHnSu-DLR4',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacex_orbcomm_presskit_final.pdf',
      articleLink: 'https://www.orbcomm.com/en/networks/satellite/orbcomm-og2',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Falcon_9_flight_10',
    },
  },
  {
    id: 16,
    missionPatch: 'https://images2.imgbox.com/dd/4d/szidadu8_o.png',
    missionName: 'AsiaSat 8',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-08-05T08:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=essrkMGlw5s',
      presskitLink: 'https://spaceflightnow.com/falcon9/011/presskit.pdf',
      articleLink:
        'http://spacenews.com/41497spacex-launches-first-of-two-satellites-for-asiasat/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/AsiaSat_8',
    },
  },
  {
    id: 17,
    missionPatch: 'https://images2.imgbox.com/d4/ea/jdJqr6He_o.png',
    missionName: 'AsiaSat 6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-09-07T05:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=39ninsyTRk8',
      presskitLink: 'https://www.spaceflightnow.com/falcon9/012/presskit.pdf',
      articleLink:
        'https://www.space.com/27052-spacex-launches-asiasat6-satellite.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/AsiaSat_6',
    },
  },
  {
    id: 18,
    missionPatch: 'https://images2.imgbox.com/7b/fb/Mm0LdwGY_o.png',
    missionName: 'CRS-4',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2014-09-21T05:52:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=7YkCh7uOw1Y',
      presskitLink:
        'https://www.nasa.gov/sites/default/files/files/SpaceX_NASA_CRS-4_PressKit.pdf',
      articleLink:
        'https://www.nasa.gov/press/2014/september/nasa-cargo-launches-to-space-station-aboard-spacex-resupply-mission-0',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-4',
    },
  },
  {
    id: 19,
    missionPatch: 'https://images2.imgbox.com/df/53/3Ik1KR2O_o.png',
    missionName: 'CRS-5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-01-10T09:47:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "Following second stage separation, SpaceX performed a test flight which attempted to return the first stage of the Falcon 9 through the atmosphere and land it on an approximately 90-by-50-meter (300 ft x 160 ft) floating platform-called the autonomous spaceport drone ship. Many of the test objectives were achieved, including precision control of the rocket's descent to land on the platform at a specific point in the Atlantic ocean, and a large amount of test data was obtained from the first use of grid fin control surfaces used for more precise reentry positioning. The grid fin control system ran out of hydraulic fluid a minute before landing and the landing itself resulted in a crash.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=p7x-SumbynI',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacex_nasa_crs-5_presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2015/01/10/dragon-successfully-launched-rocket-recovery-demo-crash-lands/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-5',
    },
  },
  {
    id: 20,
    missionPatch: 'https://images2.imgbox.com/bc/a6/uDYvXvql_o.png',
    missionName: 'DSCOVR',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-02-11T23:03:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "First launch under USAF's OSP 3 launch contract. First SpaceX launch to put a satellite to an orbit with an orbital altitude many times the distance to the Moon: Sun-Earth libration point L1. The first stage made a test flight descent to an over-ocean landing within 10 m (33 ft) of its intended target.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=OvHJSIKP0Hg',
      presskitLink:
        'http://www.spacex.com/press/2015/02/11/dscovr-launch-update',
      articleLink:
        'https://spaceflightnow.com/2015/02/12/space-weather-observatory-blasts-off-after-17-year-wait/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Deep_Space_Climate_Observatory',
    },
  },
  {
    id: 21,
    missionPatch: 'https://images2.imgbox.com/2b/65/8Hd65fHz_o.png',
    missionName: 'ABS-3A / Eutelsat 115W B',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-03-02T03:50:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "The launch was Boeing's first-ever conjoined launch of a lighter-weight dual-commsat stack that was specifically designed to take advantage of the lower-cost SpaceX Falcon 9 launch vehicle. Per satellite, launch costs were less than $30 million. The ABS satellite reached its final destination ahead of schedule and started operations on September 10.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=mN7lyaCBzT8',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/abs-eutelsatfactsheet.pdf',
      articleLink:
        'https://www.space.com/28702-spacex-rocket-launches-satellites-video.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/ABS-3A',
    },
  },
  {
    id: 22,
    missionPatch: 'https://images2.imgbox.com/75/39/TJU6xWM5_o.png',
    missionName: 'CRS-6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-04-14T20:10:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Following the first-stage boost, SpaceX attempted a controlled-descent test of the first stage. The first stage contacted the ship, but soon tipped over due to excess lateral velocity caused by a stuck throttle valve resulting in a later-than-intended downthrottle.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=csVpa25iqH0',
      presskitLink:
        'https://www.nasa.gov/sites/default/files/files/SpaceX_NASA_CRS-6_PressKit.pdf',
      articleLink:
        'https://spaceflightnow.com/2015/04/14/falcon-9-successfully-launches-descends-to-off-balance-landing/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-6',
    },
  },
  {
    id: 23,
    missionPatch: 'https://images2.imgbox.com/a6/9b/IzWT1pYC_o.png',
    missionName: 'TürkmenÄlem 52°E / MonacoSAT',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-04-27T23:03:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://www.youtube.com/watch?v=nBwAYT_ogj4',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacexthalesfactsheet_final.pdf',
      articleLink:
        'https://spaceflightnow.com/2015/04/28/falcon-9-rocket-powers-into-space-with-satellite-for-turkmenistan/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/T%C3%BCrkmen%C3%84lem_52%C2%B0E_/_MonacoSAT',
    },
  },
  {
    id: 24,
    missionPatch: 'https://images2.imgbox.com/53/12/gFtcOQuX_o.png',
    missionName: 'CRS-7',
    rocketName: 'Falcon 9',
    success: false,
    launchDate: '2015-06-28T14:21:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Launch performance was nominal until an overpressure incident in the second-stage LOX tank, leading to vehicle breakup at T+150 seconds. The Dragon capsule survived the explosion but was lost upon splashdown because its software did not contain provisions for parachute deployment on launch vehicle failure.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=PuNymhcTtSQ',
      presskitLink:
        'https://www.nasa.gov/sites/default/files/atoms/files/spacex_nasa_crs-7_presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2015/06/28/falcon-9-rocket-destroyed-in-launch-mishap/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-7',
    },
  },
  {
    id: 25,
    missionPatch: 'https://images2.imgbox.com/6a/7e/J7IQfBqg_o.png',
    missionName: 'OG-2 Mission 2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2015-12-22T01:29:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Total payload mass was 2,034 kg (4,484 lb) : 11 satellites weighing 172 kg each, plus a 142-kg mass simulator. This was the first launch of the upgraded v1.1 variant (later called Falcon 9 Full Thrust), with a 30 percent power increase. Orbcomm had originally agreed to be the third flight of the enhanced-thrust rocket, but the change to the maiden flight position was announced in October 2015. SpaceX received a permit from the FAA to land the booster on solid ground at Cape Canaveral, and succeeded.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=O5bTbVbe4e4',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacex_orbcomm_press_kit_final2.pdf',
      articleLink:
        'https://spaceflightnow.com/2015/12/22/round-trip-rocket-flight-gives-spacex-a-trifecta-of-successes/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Falcon_9_flight_20',
    },
  },
  {
    id: 26,
    missionPatch: 'https://images2.imgbox.com/8a/44/PSksEBjD_o.png',
    missionName: 'Jason 3',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-01-17T15:42:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      'First launch of NASA and NOAA joint science mission under the NLS II launch contract (not related to NASA CRS or USAF OSP3 contracts). Last launch of the original Falcon 9 v1.1 launch vehicle. The Jason-3 satellite was successfully deployed to target orbit. SpaceX again attempted a recovery of the first stage booster by landing on an autonomous drone ship; this time located in the Pacific Ocean. The first stage did achieve a soft-landing on the ship, but a lockout on one of the landing legs failed to latch, so that the booster fell over and exploded.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ivdKRJzl6y0',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacex_jason3_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2016/01/18/satellite-launched-to-measure-motions-of-the-oceans/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Jason-3',
    },
  },
  {
    id: 27,
    missionPatch: 'https://images2.imgbox.com/7f/15/rjv54Es5_o.png',
    missionName: 'SES-9',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-03-04T23:35:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Second launch of the enhanced Falcon 9 Full Thrust launch vehicle. Following the launch, SpaceX attempted an experimental landing test to a drone ship, although a successful landing was not expected because launch mass exceeded previously indicated limit for a GTO there was little fuel left. As predicted, booster recovery failed: the spent first stage "landed hard", but the controlled-descent, atmospheric re-entry and navigation to the drone ship were successful and returned significant test data on bringing back high-energy Falcon 9s.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=muDPSyO7-A0',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacex_ses9_press_kit_final.pdf',
      articleLink:
        'https://spaceflightnow.com/2016/03/05/tv-broadcasting-satellite-finally-launched-on-falcon-9/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SES-9',
    },
  },
  {
    id: 28,
    missionPatch: 'https://images2.imgbox.com/72/1e/mA23xHqe_o.png',
    missionName: 'CRS-8',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-04-08T20:43:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "Dragon carried over 1500 kg of supplies and delivered (stowed in its trunk) the inflatable Bigelow Expandable Activity Module (BEAM) to the ISS for two years of in-orbit tests. The rocket's first stage landed smoothly on SpaceX's autonomous spaceport drone ship 9 minutes after liftoff, making this the first ever successful landing of a rocket booster on a ship at sea as part of an orbital launch. The first stage B1021 was later also the first orbital booster to be used again, when launching SES-10 on March 30, 2017.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=7pUAydjne5M',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacex_crs8_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2016/04/08/spacex-lands-rocket-on-floating-platform-after-station-resupply-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-8',
    },
  },
  {
    id: 29,
    missionPatch: 'https://images2.imgbox.com/7a/90/Zdo2mijx_o.png',
    missionName: 'JCSAT-2B',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-05-06T05:21:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Launched the JCSAT 14 communications satellite for Tokyo-based SKY Perfect JSAT Corp. JCSAT 14 will support data networks, television broadcasters and mobile communications users in Japan, East Asia, Russia, Oceania, Hawaii and other Pacific islands. This was the first time a booster successfully landed after a GTO mission.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=L0bMeDj76ig',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacex_jcsat_press_kit_final.pdf',
      articleLink:
        'https://spaceflightnow.com/2016/05/06/falcon-9-succeeds-in-middle-of-the-night-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/JCSAT-2B',
    },
  },
  {
    id: 30,
    missionPatch: 'https://images2.imgbox.com/fa/f2/iR1eKXrX_o.png',
    missionName: 'Thaicom 8',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-05-27T21:39:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Manufactured by Orbital ATK, the 3,100-kilogram (6,800 lb) Thaicom 8 communications satellite will serve Thailand, India and Africa from the 78.5° East geostationary location. It is equipped with 24 active Ku-band transponders.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=zBYC4f79iXc',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/spacex_thaicom_8_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2016/05/27/spacex-logs-successful-late-afternoon-launch-for-thaicom/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Thaicom_8',
    },
  },
  {
    id: 31,
    missionPatch: 'https://images2.imgbox.com/36/a4/J5gJWxuC_o.png',
    missionName: 'ABS-2A / Eutelsat 117W B',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-06-15T14:29:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'One year after pioneering this technique on flight 16, Falcon again launched two Boeing 702SP gridded ion thruster satellites in a dual-stack configuration, with the two customers sharing the rocket and mission costs. First stage landing attempt on drone ship failed on landing due to low thrust on one of the three landing engines.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=gLNmtUEvI5A',
      presskitLink:
        'https://drive.google.com/open?id=0BwA3a65ef1OvMGpJSlpDNHhjelU',
      articleLink:
        'https://spaceflightnow.com/2016/06/15/spacex-successfully-fires-satellites-into-orbit-but-loses-booster-on-landing/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/ABS_(satellite_operator)',
    },
  },
  {
    id: 32,
    missionPatch: 'https://images2.imgbox.com/bb/0d/aLsm9QDC_o.png',
    missionName: 'CRS-9',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-07-18T04:45:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Among other cargo, an International Docking Adapter (IDA-2) was carried to the ISS. This mission had a successful first-stage landing at Cape Canaveral.*Including the reusable Dragon Capsule, total payload to orbit was 6457 kg.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ThIdCuSsJh8',
      presskitLink:
        'https://drive.google.com/open?id=0BwA3a65ef1OvM0JpSXdDUUJMRVk',
      articleLink:
        'https://spaceflightnow.com/2016/07/18/spacex-sends-supplies-to-space-station-lands-another-falcon-rocket/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-9',
    },
  },
  {
    id: 33,
    missionPatch: 'https://images2.imgbox.com/22/cc/DjPcsMhb_o.png',
    missionName: 'JCSAT-16',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2016-08-14T05:26:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'First attempt to touch down from a ballistic trajectory using a single-engine landing burn. All previous landings from a ballistic trajectory had fired three engines on the landing-burn, which provided more braking force, but subjected the vehicle to greater structural stresses. The single-engine landing burn takes more time and fuel, but puts less stress on the vehicle.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=QZTCEO0gvLo',
      presskitLink:
        'https://drive.google.com/open?id=0BwA3a65ef1Ovb0FkYnE5dElZRlU',
      articleLink:
        'https://spaceflightnow.com/2016/08/14/falcon-9-rocket-launches-japanese-satellite-then-nails-bullseye-landing/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/JCSAT-16',
    },
  },
  {
    id: 34,
    missionPatch: 'https://images2.imgbox.com/0d/5b/8X01C3ov_o.png',
    missionName: 'Amos-6',
    rocketName: 'Falcon 9',
    success: false,
    launchDate: '2016-09-01T13:07:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'The rocket and Amos-6 payload were lost in a launch pad explosion on September 1, 2016 during propellant fill prior to a static fire test. The pad was clear of personnel and there were no injuries.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=_BgJEXQkjNQ',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2016/09/01/spacex-rocket-and-israeli-satellite-destroyed-in-launch-pad-explosion/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Amos-6',
    },
  },
  {
    id: 35,
    missionPatch: 'https://images2.imgbox.com/89/2a/bkI6LN0R_o.png',
    missionName: 'Iridium NEXT Mission 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-01-14T17:54:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      'Return-to-flight mission after the loss of Amos-6 in September 2016. Iridium NEXT will replace the original Iridium constellation, launched in the late 1990s. Each Falcon mission will carry 10 satellites, with a goal to complete deployment of the 66 plus 9 spare satellite constellation by mid 2018. The first two Iridium qualification units were supposed to ride a Dnepr rocket in April 2016 but were delayed, so Iridium decided to qualify the first batch of 10 satellites instead.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=7WimRhydggo',
      presskitLink:
        'https://drive.google.com/open?id=0BwA3a65ef1OvZC1aU3FuMlQzalE',
      articleLink:
        'https://spaceflightnow.com/2017/01/14/spacex-resumes-flights-with-on-target-launch-for-iridium/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation',
    },
  },
  {
    id: 36,
    missionPatch: 'https://images2.imgbox.com/11/eb/qqrhHFhv_o.png',
    missionName: 'CRS-10',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-02-19T14:39:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'First Falcon 9 flight from the historic LC-39A launchpad at Kennedy Space Center, carrying supplies and materials to support dozens of science and research investigations scheduled during ISS Expeditions 50 and 51. The first stage returned to launch site and landed at LZ-1.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=giNhaEzv_PI',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/crs10presskitfinal.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/02/19/historic-launch-pad-back-in-service-with-thundering-blastoff-by-spacex/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-10',
    },
  },
  {
    id: 37,
    missionPatch: 'https://images2.imgbox.com/56/9d/gvzAqLFg_o.png',
    missionName: 'EchoStar 23',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-03-16T06:00:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'Communications satellite for EchoStar Corp. EchoStar XXIII, based on a spare platform from the cancelled CMBStar 1 satellite program, will provide direct-to-home television broadcast services over Brazil. There was no attempt at a first-stage recovery so this rocket did not have landing legs or grid fins.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=lZmqbL-hz7U',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/echostarxxiiifinal.pdf',
      articleLink: 'http://spacenews.com/spacex-launches-echostar-23/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/EchoStar#Satellite_fleet',
    },
  },
  {
    id: 38,
    missionPatch: 'https://images2.imgbox.com/d0/c4/DFQ5TdPz_o.png',
    missionName: 'SES-10',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-03-30T22:27:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'First payload to fly on a reused first stage, B1021, previously launched with CRS-8, which also landed a second time. In what is also a first, the payload fairing remained intact after a successful splashdown achieved with thrusters and a steerable parachute.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=xsZSXav4wI8',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/finalses10presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/03/31/spacex-flies-rocket-for-second-time-in-historic-test-of-cost-cutting-technology/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SES-10',
    },
  },
  {
    id: 39,
    missionPatch: 'https://images2.imgbox.com/e5/2d/IZB4g6Ra_o.png',
    missionName: 'NROL-76',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-05-01T11:15:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "First launch under SpaceX's certification for national security space missions, which allows SpaceX to contract launch services for classified payloads. Second-stage speed and altitude telemetry were omitted from the launch webcast, which displayed first-stage telemetry instead, with continuous tracking of the booster from liftoff to landing for the first time.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=EzQpkQ1etdA',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/nrol76presskit.pdf',
      articleLink:
        'https://techcrunch.com/2017/05/01/spacex-successfully-launches-nrol-76-u-s-military-satellite/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/List_of_NRO_launches',
    },
  },
  {
    id: 40,
    missionPatch: 'https://images2.imgbox.com/ab/8d/fUpriAbI_o.png',
    missionName: 'Inmarsat-5 F4',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-05-15T23:21:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'At 6,070 kg this was the heaviest payload launched to GTO by a Falcon 9 rocket. The launch was originally scheduled for the Falcon Heavy, but performance improvements allowed the mission to be carried out by an expendable Falcon 9 instead.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ynMYE64IEKs',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/inmarsat5f4presskit_final.pdf',
      articleLink:
        'https://www.space.com/36852-spacex-launches-inmarsat-5-f4-satellite.html',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Inmarsat#Satellites',
    },
  },
  {
    id: 41,
    missionPatch: 'https://images2.imgbox.com/54/45/VoihQAY3_o.png',
    missionName: 'CRS-11',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-06-03T21:07:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'This mission delivered the Neutron Star Interior Composition Explorer (NICER) to the ISS, along with the MUSES Earth imaging platform and ROSA solar array. For the first time, this mission launched a refurbished Dragon capsule, serial number C106 which first flew in September 2014 on the CRS-4 mission. Originally scheduled to launch on June 1, but was scrubbed due to inclement weather.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=JuZBOUMsYws',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/crs11presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/06/03/reused-dragon-cargo-capsule-launched-on-journey-to-space-station/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-11',
    },
  },
  {
    id: 42,
    missionPatch: 'https://images2.imgbox.com/fa/1b/3vvXwAf9_o.png',
    missionName: 'BulgariaSat-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-06-23T19:10:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'Second time a booster will be reused: Second flight of B1029 after the Iridium mission of January 2017. The satellite will be the first commercial Bulgarian-owned communications satellite and it will provide television broadcasts and other communications services over southeast Europe.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Y8mLi-rRTh8',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/bulgariasat1presskit.pdf',
      articleLink: 'https://en.wikipedia.org/wiki/BulgariaSat-1',
      wikipediaLink: 'https://en.wikipedia.org/wiki/BulgariaSat-1',
    },
  },
  {
    id: 43,
    missionPatch: 'https://images2.imgbox.com/dc/51/LrdAbm5y_o.png',
    missionName: 'Iridium NEXT Mission 2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-06-25T20:25:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      'First flight with titanium grid fins to improve control authority and better cope with heat during re-entry.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=7tIwZg8F9b8',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/iridium2presskit.pdf',
      articleLink:
        'https://www.space.com/37304-liftoff-spacex-second-launch-three-days.html',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation',
    },
  },
  {
    id: 44,
    missionPatch: 'https://images2.imgbox.com/8f/a2/46UURVaD_o.png',
    missionName: 'Intelsat 35e',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-07-05T23:35:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'Due to the constraints of sending a heavy satellite (~6,000 kg) to GTO, the rocket will fly in its expendable configuration and the first-stage booster will not be recovered.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=MIHVPCj25Z0',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/intelsat35epresskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/07/06/spacex-delivers-for-intelsat-on-heavyweight-falcon-9-mission/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Intelsat_35e',
    },
  },
  {
    id: 45,
    missionPatch: 'https://images2.imgbox.com/ee/85/dtsbOs0E_o.png',
    missionName: 'CRS-12',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-08-14T16:31:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'Dragon is expected to carry 2,349 kg (5,179 lb) of pressurized mass and 961 kg (2,119 lb) unpressurized. The external payload manifested for this flight is the CREAM cosmic-ray detector. First flight of the Falcon 9 Block 4 upgrade. Last flight of a newly-built Dragon capsule; further missions will use refurbished spacecraft.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=vLxWsYx8dbo',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/crs12presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/08/17/photos-falcon-9-rocket-soars-into-space-lands-back-at-cape-canaveral/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-12',
    },
  },
  {
    id: 46,
    missionPatch: 'https://images2.imgbox.com/fd/09/Z1wlUv4U_o.png',
    missionName: 'FormoSat-5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-08-24T18:50:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      'Formosat-5 is an Earth observation satellite of the Taiwanese space agency. The SHERPA space tug by Spaceflight Industries was removed from the cargo manifest of this mission. The satellite has a mass of only 475 kg.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=J4u3ZN2g_MI',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/formosat5presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/08/25/taiwanese-satellite-rides-spacex-rocket-into-orbit/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Formosat-5',
    },
  },
  {
    id: 47,
    missionPatch: 'https://images2.imgbox.com/12/7c/p8btH0CD_o.png',
    missionName: 'Boeing X-37B OTV-5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-09-07T13:50:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'Notable because Boeing is the primary contractor of the X-37B, which has until now been launched by ULA, a SpaceX competitor and Boeing partnership. Second flight of the Falcon 9 Block 4 upgrade.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=9M6Zvi-fFv4',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/otv5_presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/09/07/spacex-beats-hurricane-with-smooth-launch-of-militarys-x-37b-spaceplane/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Boeing_X-37',
    },
  },
  {
    id: 48,
    missionPatch: 'https://images2.imgbox.com/fb/5b/LNVLRITr_o.png',
    missionName: 'Iridium NEXT Mission 3',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-10-09T12:37:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      "Third of eight missions to launch Iridium's second generation constellation from VAFB",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=SB4N4xF2B2w&feature=youtu.be',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/iridium3presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/10/09/spacex-launch-adds-another-10-satellites-to-iridium-next-fleet/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation',
    },
  },
  {
    id: 49,
    missionPatch: 'https://images2.imgbox.com/bc/d3/Yd5qpPd9_o.png',
    missionName: 'SES-11 / Echostar 105',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-10-11T22:53:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'Nineteenth comsat to GTO, also the fourth satellite launched for SES and second for Echostar. Third time a first stage booster will be reused.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=iv1zeGSvhIw',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/echostar105ses11presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/10/12/video-falcon-9-rocket-lifts-off-with-joint-satellite-for-ses-echostar/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/List_of_SES_satellites',
    },
  },
  {
    id: 50,
    missionPatch: 'https://images2.imgbox.com/bb/fa/vNIBtlSn_o.png',
    missionName: 'KoreaSat 5A',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-10-30T19:34:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'KoreaSat 5A is a Ku-band satellite capable of providing communication services from East Africa and Central Asia to southern India, Southeast Asia, the Philippines, Guam, Korea, and Japan. The satellite will be placed in GEO at 113Â° East Longitude, and will provide services ranging from broadband internet to broadcasting services and maritime communications.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=RUjH14vhLxA',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/koreasat5apresskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/10/30/spacex-launches-and-lands-third-rocket-in-three-weeks/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Koreasat_5A',
    },
  },
  {
    id: 51,
    missionPatch: 'https://images2.imgbox.com/84/42/Ejb9KhGR_o.png',
    missionName: 'CRS-13',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-12-15T15:36:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Will reuse the Dragon capsule previously flown on CRS-6 and will reuse the booster from CRS-11.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=OPHbqY9LHCs',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/crs13presskit12_11.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/12/15/spacexs-50th-falcon-rocket-launch-kicks-off-station-resupply-mission/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-13',
    },
  },
  {
    id: 52,
    missionPatch: 'https://images2.imgbox.com/85/43/6VSgldkO_o.png',
    missionName: 'Iridium NEXT Mission 4',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2017-12-23T01:27:23.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      'Reusing the booster first used on Iridium-2, but will be flying expendable.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=wtdjCwo6d3Q',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/iridium4presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2017/12/23/spacex-launch-dazzles-delivering-10-more-satellites-for-iridium/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation',
    },
  },
  {
    id: 53,
    missionPatch: 'https://images2.imgbox.com/dc/7b/8HuZoJQU_o.png',
    missionName: 'ZUMA',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-01-08T01:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Originally planned for mid-November 2017, the mission was delayed due to test results from the fairing of another customer. First-stage booster will attempt landing at LZ-1',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=0PWu3BRxn60',
      presskitLink: 'http://www.spacex.com/sites/spacex/files/zumapresskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/01/08/spacex-kicks-off-ambitious-2018-schedule-with-launch-for-u-s-government/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Zuma_(satellite)',
    },
  },
  {
    id: 54,
    missionPatch: 'https://images2.imgbox.com/e0/b5/G8QLLURl_o.png',
    missionName: 'SES-16 / GovSat-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-01-31T21:25:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Reused booster from the classified NROL-76 mission in May 2017. Following a successful experimental ocean landing that used three engines, the booster unexpectedly remained intact; Elon Musk stated in a tweet that SpaceX will attempt to tow the booster to shore.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ScYUA51-POQ',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/govsat1presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/01/31/spacex-rocket-flies-on-60th-anniversary-of-first-u-s-satellite-launch/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/List_of_SES_satellites#SES_Fleet',
    },
  },
  {
    id: 55,
    missionPatch: 'https://images2.imgbox.com/cd/48/NVrODg2G_o.png',
    missionName: 'Falcon Heavy Test Flight',
    rocketName: 'Falcon Heavy',
    success: true,
    launchDate: '2018-02-06T20:45:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'The launch was a success, and the side boosters landed simultaneously at adjacent ground pads. Drone ship landing of the central core failed. Final burn to heliocentric mars-earth orbit was successful after the second stage and payload passed through the Van Allen belts.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=wbSwFU6tY1c',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/falconheavypresskit_v1.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/02/07/spacex-debuts-worlds-most-powerful-rocket-sends-tesla-toward-the-asteroid-belt/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster',
    },
  },
  {
    id: 56,
    missionPatch: 'https://images2.imgbox.com/a4/ac/cC7w8EJz_o.png',
    missionName: 'Paz / Starlink Demo',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-02-22T14:17:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      'First flight with fairing 2.0. Will also carry two SpaceX test satellites for the upcoming Starlink constellation.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=-p-PToD2URA',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/paz_press_kit_2.21.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/02/22/recycled-spacex-rocket-boosts-paz-radar-satellite-first-starlink-testbeds-into-orbit/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Paz_(satellite)',
    },
  },
  {
    id: 57,
    missionPatch: 'https://images2.imgbox.com/53/b7/HHAy8Wkp_o.png',
    missionName: 'Hispasat 30W-6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-03-06T05:33:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "Launched with landing legs and titanium grid fins. Did not attempt a landing due to 'unfavorable weather conditions in the recovery area'.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Kpfrp-GMKKM',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/hispasat30w6_presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/03/06/hefty-hispasat-satellite-rides-spacex-rocket-into-orbit/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Hispasat_30W-6',
    },
  },
  {
    id: 58,
    missionPatch: 'https://images2.imgbox.com/55/c6/8sNQh2b6_o.png',
    missionName: 'Iridium NEXT Mission 5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-03-30T14:13:51.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      "Fifth Iridium NEXT mission to deploy ten Iridium NEXT satellites. Reused booster from third Iridium flight, and although controlled descent was performed, the booster was expended into the ocean. SpaceX planned a second recovery attempt of one half of the fairing using the specially modified boat Mr. Steven. However, the fairing's parafoil twisted during the recovery, which led to water impact at high speed",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=mp0TW8vkCLg',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/iridium-5_press_kit_2018.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/03/30/iridium-messaging-network-gets-another-boost-from-spacex/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation',
    },
  },
  {
    id: 59,
    missionPatch: 'https://images2.imgbox.com/49/e8/6Tmdhwlq_o.png',
    missionName: 'CRS-14',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-04-02T20:30:41.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'The launch used a refurbished booster (from CRS-12) for the 11th time, and a refurbished capsule (C110 from CRS-8) for the third time. External payloads include a materials research platform MISSE-FF phase 3 of the Robotic Refueling Mission TSIS, heliophysics sensor several crystallization experiments, and the RemoveDebris spacecraft aimed at space junk removal. The booster was expended in order to test a new landing profile.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=BPQHG-LevZM',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/crs-14presskit2018.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/04/02/spacex-supply-ship-departs-cape-canaveral-for-space-station/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-14',
    },
  },
  {
    id: 60,
    missionPatch: 'https://images2.imgbox.com/4d/55/TQjhUrc7_o.png',
    missionName: 'TESS',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-04-18T22:51:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "Part of the Explorers program, this space telescope is intended for wide-field search of exoplanets transiting nearby stars. It is the first NASA high priority science mission launched by SpaceX. It was the first time SpaceX launched a scientific satellite not primarily intended for Earth observations. The second stage placed it into a high-Earth elliptical orbit, after which the satellite's own booster will perform complex maneuvers including a lunar flyby, and over the course of two months, reach a stable, 2:1 resonant orbit with the Moon. In January 2018, SpaceX received NASA's Launch Services Program Category 2 certification of its Falcon 9 'Full Thrust', certification which is required for launching medium risk missions like TESS. It was the last launch of a new Block 4 booster, and marked the 24th successful recovery of the booster. An experimental water landing was performed in order to attempt fairing recovery.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=aY-0uBIYYKk',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/tesspresskitfinal417.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/04/19/all-sky-surveyor-launched-from-cape-canaveral-on-the-hunt-for-exoplanets/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Transiting_Exoplanet_Survey_Satellite',
    },
  },
  {
    id: 61,
    missionPatch: 'https://images2.imgbox.com/97/bf/G9sPBnrg_o.png',
    missionName: 'Bangabandhu-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-05-11T20:14:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: 'First launch of a Block V first stage.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=rQEqKZ7CJlk',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/bangabandhupresskit51118.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/05/11/spacex-debuts-an-improved-human-rated-model-of-the-falcon-9-rocket/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Bangabandhu-1',
    },
  },
  {
    id: 62,
    missionPatch: 'https://images2.imgbox.com/c8/01/ijWT6oSs_o.png',
    missionName: 'Iridium NEXT Mission 6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-05-22T19:47:58.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      'GFZ arranged a rideshare of GRACE-FO on a Falcon 9 with Iridium following the cancellation of their Dnepr launch contract in 2015. Iridium CEO Matt Desch disclosed in September 2017 that GRACE-FO would be launched on the sixth Iridium NEXT mission. The booster reuse turnaround was a record 4.5 months between flights.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=I_0GgKfwCSk',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/iridium6presskit2018521.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/05/22/rideshare-launch-by-spacex-serves-commercial-and-scientific-customers/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Gravity_Recovery_and_Climate_Experiment',
    },
  },
  {
    id: 63,
    missionPatch: 'https://images2.imgbox.com/fa/c4/37mkd4wY_o.png',
    missionName: 'SES-12',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-06-04T04:45:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SES-12, the replacement satellite for NSS-6, was successfully launched and deployed on June 4th, completing SpaceX's eleventh flight of 2018. According to SES Luxembourg, The SES-12 satellite will expand SES’s capabilities to provide direct-to-home (DTH) broadcasting, VSAT, Mobility and High Throughput Satellite (HTS) data connectivity services in the Middle East and the Asia-Pacific region, including rapidly growing markets such as India and Indonesia. [SES-12] will be co-located with SES-8",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=2hcM5hqQ45s',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/ses-12missionpress_kit_6.2.18.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/06/04/multi-mission-telecom-craft-launched-by-spacex-for-ses/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SES-12',
    },
  },
  {
    id: 64,
    missionPatch: 'https://images2.imgbox.com/b3/12/t63UKas5_o.png',
    missionName: 'CRS-15',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-06-29T09:42:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Payload included MISSE-FF 2, ECOSTRESS, and a Latching End Effector. The refurbished booster featured a record 2.5 months period turnaround from its original launch of the TESS satellite — the fastest previous was 4.5 months. This was the last commercial flight of a Block 4 booster, which was expended into the Atlantic without landing legs and grid fins.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=ycMagB1s8XM',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/crs15presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/06/29/spacex-launches-ai-enabled-robot-companion-vegetation-monitor-to-space-station/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-15',
    },
  },
  {
    id: 65,
    missionPatch: 'https://images2.imgbox.com/2b/de/2CF8Q4Bq_o.png',
    missionName: 'Telstar 19V',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-07-22T05:50:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'SSL-manufactured communications satellite intended to be placed at 63° West over the Americas. At 7,075 kg, it became the heaviest commercial communications satellite ever launched.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=xybp6zLaGx4',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/telstar19vantagepresskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/07/22/spacex-delivers-for-telesat-with-successful-early-morning-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Telstar_19V',
    },
  },
  {
    id: 66,
    missionPatch: 'https://images2.imgbox.com/b4/96/LRfRepkO_o.png',
    missionName: 'Iridium NEXT Mission 7',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-07-25T11:39:26.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      "SpaceX's fourteenth flight of 2018 and seventh of eight launches in a half-a-billion-dollar contract with Iridium. Will use a Block 5 first stage, to be recovered in the Pacific Ocean. Only one mission will be left for Iridium, with 10 more satellites. First attempt to recover a Fairing with the upgraded net. Fairing recovery was not successful.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=vsDknmK30C0',
      presskitLink:
        'http://www.spacex.com/sites/spacex/files/iridium7_press_kit_7_24.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/07/25/spacexs-second-launch-in-three-days-lofts-10-more-iridium-satellites/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation',
    },
  },
  {
    id: 67,
    missionPatch: 'https://images2.imgbox.com/46/b2/NUQmyHR4_o.png',
    missionName: 'Merah Putih',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-08-07T05:18:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX's fifteenth flight of 2018 launched the Merah Putih (also known as Telkom-4) geostationary communications satellite for Telkom Indonesia. It marked the first reuse of any Block 5 first stage; the booster B1046 had previously launched Bangabandhu-1. The stage was recovered and is expected to become the first Falcon 9 booster to fly three missions.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=FjfQNBYv2IY',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/merahputihpresskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/08/07/indonesian-communications-satellite-deployed-in-orbit-by-spacex/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Telkom_Indonesia',
    },
  },
  {
    id: 68,
    missionPatch: 'https://images2.imgbox.com/55/54/73EXeMfo_o.png',
    missionName: 'Telstar 18V',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-09-10T04:45:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX's sixteenth flight of 2018 launched the Telstar 18v GEO communication satellite for Telesat, the second launch for the canadian company in a few months. The first stage was a new Falcon 9 V1.2 Block 5 which was successfully recovered on OCISLY.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Apw3xqwsG1U',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/telstar18vantagepresskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/09/10/spacex-telesat-achieve-repeat-success-with-midnight-hour-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Telstar_18V',
    },
  },
  {
    id: 69,
    missionPatch: 'https://images2.imgbox.com/cb/41/RQIY0BjQ_o.png',
    missionName: 'SAOCOM 1A',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-10-08T02:22:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      "SpaceX's seventeenth flight of 2018 was the first launch of the Saocom Earth observation satellite constellation of the Argentine Space Agency CONAE. The second launch of Saocom 1B will happen in 2019. This flight marked the first RTLS launch out of Vandenberg, with a landing on the concrete pad at SLC-4W, very close to the launch pad.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=vr_C6LQ7mHc',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/saocom1apresskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/10/08/spacex-aces-first-rocket-landing-in-california-after-launching-argentine-satellite/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SAOCOM',
    },
  },
  {
    id: 70,
    missionPatch: 'https://images2.imgbox.com/ad/40/oCtCFYfl_o.png',
    missionName: 'Es’hail 2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-11-15T20:46:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "SpaceX's eighteenth flight of 2018 was its first for Es'hailSat. Es'hail-2 is a communications satellite delivering television and internet to Qatar and the surrounding region. It was launched into a geostationary transfer orbit from LC-39A at Kennedy Space Center. The booster landed on OCISLY.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=PhTbzc-BqKs&feature=youtu.be',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/eshail-2_mission_press_kit_11_14_2018.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/11/15/spacex-launches-qatars-eshail-2-communications-satellite/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Es%27hailSat',
    },
  },
  {
    id: 71,
    missionPatch: 'https://images2.imgbox.com/48/3b/Lg1Qc4uX_o.png',
    missionName: 'SSO-A',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-12-03T18:34:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      "SpaceX's nineteenth flight of 2018 will fly SSO-A: SmallSat Express out of Vandenberg SLC-4E for Spaceflight. SSO-A is a rideshare to sun synchronus low earth orbit consisting of 64 individual microsatellites and cubesats. It is also likely to be the third flight of core B1046 which previously flew Bangabandhu-1 and Merah Putih. If this happens it will be the first time a Falcon 9 has flown more than two missions. ",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Wq8kS6UoOrQ',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/ssoa_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/12/03/spacex-launches-swarm-of-satellites-re-flies-rocket-for-third-time/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Spaceflight_Industries',
    },
  },
  {
    id: 72,
    missionPatch: 'https://images2.imgbox.com/f0/a6/oNKZP5Hu_o.png',
    missionName: 'CRS-16',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-12-05T18:16:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX's 16th Crew Resupply Mission on behalf of NASA, with a total of 20 contracted flights. This will bring essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. The Falcon 9 will launch from SLC-40 at Cape Canaveral Air Force Station. During the landing of the first stage, a grid fin hydraulic pump stalled, causing the core to enter an uncontrolled roll, and resulting in a (succesful) water landing.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=Esh1jHT9oTA',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/crs16_press_kit_12_4.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/12/05/spacex-falcon-9-boosts-dragon-cargo-ship-to-orbit-first-stage-misses-landing-target/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-16',
    },
  },
  {
    id: 73,
    missionPatch: 'https://images2.imgbox.com/3c/2f/tL7xDUD6_o.png',
    missionName: 'GPS III SV01',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2018-12-23T13:51:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX's twenty-first flight of 2018 launched the first of the new GPS III satellites (Block IIIA) for the United States Air Force and was SpaceX's first EELV mission. The spacecraft was delivered to a MEO transfer orbit from SLC-40 at Cape Canaveral Air Force Station. This mission was the first to fly with the redesigned COPV on the first stage (B1054) as well as the second. The booster was expended.",
    links: {
      videoLink: 'https://youtu.be/yRiLPoy_Mzc',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/gps_iii_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2018/12/23/spacex-closes-out-year-with-successful-gps-satellite-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/GPS_Block_IIIA',
    },
  },
  {
    id: 74,
    missionPatch: 'https://images2.imgbox.com/75/cb/DMVc5j8b_o.png',
    missionName: 'Iridium NEXT Mission 8',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-01-11T15:31:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      "SpaceX's first flight of 2019 will be the eighth and final launch of its planned Iridium flights. Delivering 10 satellites to low earth orbit, this brings the total up to 75 and completes the Iridium NEXT constellation. This mission launches from SLC-4E at Vandenberg AFB. The booster is expected to land on JRTI.",
    links: {
      videoLink: 'https://youtu.be/VshdafZvwrg',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/iridium8presskit.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/01/11/spacex-begins-2019-with-eighth-and-final-for-upgraded-iridium-network/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation',
    },
  },
  {
    id: 75,
    missionPatch: 'https://images2.imgbox.com/06/bc/5KvLN0mH_o.png',
    missionName: 'Nusantara Satu (PSN-6) / S5 / Beresheet',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-02-22T01:45:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX will launch this rideshare to GTO for Space Systems Loral (SSL). The primary payload for this mission is Nusantara Satu, a communications satellite built by SSL for the private Indonesian company PT Pasifik Satelit Nusantara (PSN). Spaceflight Industries' GTO-1 mission consists of two secondary payloads. One of those is Beresheet, the lunar lander built by the Israeli non-profit organization, SpaceIL. Beresheet will make its own way to the moon from GTO. The other secondary is Air Force Research Lab's (Space Situational Awareness) S5 mission, which hitches a ride to GEO aboard Nusantara Satu. This mission launches from SLC-40 at Cape Canaveral AFS. The booster is expected to land on OCISLY.",
    links: {
      videoLink: 'https://www.youtube.com/watch?v=XS0E35aYJcU',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/nusantara_satu_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/02/22/israeli-moon-lander-hitches-ride-on-spacex-launch-with-indonesian-comsat/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/PT_Pasifik_Satelit_Nusantara',
    },
  },
  {
    id: 76,
    missionPatch: 'https://images2.imgbox.com/59/a8/q5IEqsOJ_o.png',
    missionName: 'CCtCap Demo Mission 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-03-02T07:45:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "Demonstration Mission 1 (DM-1) will launch Dragon 2 as part of NASA's Commercial Crew Transportation Capability program. This mission will demonstrate Dragon 2, and Falcon 9 in its configuration for crewed missions. DM-1 will launch from LC-39A at Kennedy Space Center, likely carrying some cargo to the International Space Station. The booster is expected to land on OCISLY.",
    links: {
      videoLink: 'https://youtu.be/2ZL0tbOZYhE',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/crew_demo-1_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/03/02/spacex-launches-first-crew-dragon-ferry-ship/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpX-DM1',
    },
  },
  {
    id: 77,
    missionPatch: 'https://images2.imgbox.com/14/18/JxCyAHXk_o.png',
    missionName: 'ArabSat 6A',
    rocketName: 'Falcon Heavy',
    success: true,
    launchDate: '2019-04-11T22:35:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'SpaceX will launch Arabsat 6A to a geostationary transfer orbit from SLC-39A, KSC. The satellite is a geostationary telecommunications satellite built by Lockheed Martin for the Saudi Arabian company Arabsat. This will be the first operational flight of Falcon Heavy, and also the first Block 5 Falcon Heavy. All three cores will be new Block 5 cores. The side cores are expected to land at LZ-1 and LZ-2, and the center core is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/TXMGu2d8c8g',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/arabsat-6a_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/04/11/spacexs-falcon-heavy-successful-in-commercial-debut/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Arabsat-6A',
    },
  },
  {
    id: 78,
    missionPatch: 'https://images2.imgbox.com/97/8e/YbVKIUZB_o.png',
    missionName: 'CRS-17',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-05-04T06:48:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX's 17th Commercial Resupply Services mission for NASA out of a total of 20 contracted flights, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon 1 spacecraft. The external payloads for this mission include Orbital Carbon Observatory 3 and Space Test Program-Houston 6. The Falcon 9 launches from SLC-40 at Cape Canaveral AFS. The booster was expected to land at LZ-1, however, due to the ongoing investigation and clean-up following the Crew Dragon testing incident, it is likely to land on OCISLY instead.\n" +
      '    ',
    links: {
      videoLink: 'https://youtu.be/AQFhX5TvP0M',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/crs-17_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/05/04/spacex-launches-space-station-resupply-mission-lands-rocket-on-drone-ship/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-17',
    },
  },
  {
    id: 79,
    missionPatch: 'https://images2.imgbox.com/79/ec/TOE2PBJq_o.png',
    missionName: 'Starlink v0.9',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-05-24T02:30:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'SpaceX will launch dozens of Starlink demonstration satellites from SLC-40, Cape Canaveral AFS. Starlink is a low Earth orbit broadband internet constellation developed and owned by SpaceX which will eventually consist of nearly 12 000 satellites and will provide low latency internet service to ground terminals around the world. Two prototype satellites, Microsats 2a and 2b, were launched from Vandenberg AFB in February 2018. The booster for this mission will land on OCISLY.',
    links: {
      videoLink: 'https://www.youtube.com/watch?v=riBaVeDTEWI',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/starlink_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/05/24/spacexs-first-60-starlink-broadband-satellites-deployed-in-orbit',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Starlink_(satellite_constellation)',
    },
  },
  {
    id: 80,
    missionPatch: 'https://images2.imgbox.com/39/af/ygmjLYhv_o.png',
    missionName: 'RADARSAT Constellation',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-06-12T14:17:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      'SpaceX is launching the three satellite RADARSAT Constellation Mission into Sun Synchronous orbit from SLC-4E, VAFB. The RCM spacecraft are synthetic aperture radar (SAR) Earth observation satellites built by the Canadian space company, MDA, for the Canadian Space Agency. This mission was delayed when the originally slated booster failed to land after CRS-16. The booster is expected to return to LZ-4.',
    links: {
      videoLink: 'https://youtu.be/8A2nJd9Urk8',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/radarsat_constellation_mission_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/06/12/three-canadian-radar-surveillance-satellites-ride-spacex-rocket-into-orbit/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/RADARSAT_Constellation',
    },
  },
  {
    id: 81,
    missionPatch: 'https://images2.imgbox.com/b0/90/fA4QaCAi_o.png',
    missionName: 'STP-2',
    rocketName: 'Falcon Heavy',
    success: true,
    launchDate: '2019-06-25T03:30:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "Space Test Program 2 is a rideshare managed by the U.S. Air Force Space and Missile Systems Center (SMC), launching from LC-39A, KSC. Most of the spacecraft will be delivered into low Earth orbit (LEO) in two deployment sequences separated by a second stage burn. These LEO payloads include the six Taiwan and United States owned COSMIC-2 microsatellites, the Planetary Society's LightSail-B demonstrator cubesat, and others. The third and final deployment will be the Air Force Research Lab's DSX spacecraft, which will be delivered to a medium Earth orbit (MEO). This mission will reuse the side cores from Arabsat 6A, which will return to LZ-1, and LZ-2. The new center core will boost back to land on OCISLY less than 40 km from the launch site.",
    links: {
      videoLink: 'https://youtu.be/WxH4CAlhtiQ',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/stp-2_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/06/25/falcon-heavy-launches-on-military-led-rideshare-mission-boat-catches-fairing',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Space_Test_Program',
    },
  },
  {
    id: 82,
    missionPatch: 'https://images2.imgbox.com/f1/70/USGBp3Dy_o.png',
    missionName: 'CRS-18',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-07-25T22:01:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX's 18th Commercial Resupply Services mission out of a total of 20 such contracted flights for NASA, this launch will deliver essential supplies to the International Space Station using the reusable Dragon 1 cargo spacecraft. The external payload for this mission is International Docking Adapter 3, replacing IDA-1 lost in SpaceX's CRS-7 launch failure. This mission will launch from SLC-40 at Cape Canaveral AFS on a Falcon 9, and the first-stage booster is expected to land back at CCAFS LZ-1.",
    links: {
      videoLink: 'https://youtu.be/SlgrxVuP5jk',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/crs-18_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/07/25/new-docking-port-spacesuit-and-supplies-en-route-to-space-station/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-18',
    },
  },
  {
    id: 83,
    missionPatch: 'https://images2.imgbox.com/65/c2/MMGkhdcA_o.png',
    missionName: 'Amos-17',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-08-06T22:52:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'SpaceX will launch Boeing built Amos-17, a geostationary communications satellite for Israeli company Spacecom. The satellite will be delivered to GTO from KSC LC-39A or possibly CCAFS SLC-40, and will replace the defunct Amos-5 at 17° E. Amos-17 carries multi-band high throughput and regional beams servicing Africa, Europe and the Middle East. The cost of this launch is covered for Spacecom by SpaceX credit following the Amos-6 incident. A recovery of the booster for this mission is not expected.',
    links: {
      videoLink: 'https://youtu.be/fZh82-WcCuo',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/amos-17_mission_press_kit_8_6_2019.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/08/07/spacex-launches-israeli-owned-telecom-satellite/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Spacecom',
    },
  },
  {
    id: 84,
    missionPatch: 'https://images2.imgbox.com/61/a6/1MnnbXIF_o.png',
    missionName: 'Starlink-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-11-11T14:56:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission will launch the first batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. They are expected to contribute to the 550 km x 53° shell. It is the second Starlink launch overall. Starlink is a low Earth orbit broadband internet constellation developed and owned by SpaceX which will eventually consist of nearly 12 000 satellites and will provide low latency internet service to ground terminals around the world. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/pIDuv0Ta0XQ',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/starlink_press_kit_nov2019.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/11/11/successful-launch-continues-deployment-of-spacexs-starlink-network',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Starlink_(satellite_constellation)',
    },
  },
  {
    id: 85,
    missionPatch: 'https://images2.imgbox.com/5d/26/ZP75Il1j_o.png',
    missionName: 'CRS-19',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-12-05T17:29:23.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX's 19th Crew Resupply Mission on behalf of NASA with a total of 20 contracted flights, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. The external payloads for this mission include the Hyperspectral Imager Suite and a lithium-ion battery. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral AFS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    links: {
      videoLink: 'https://youtu.be/-aoAGdYXp_4',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/crs-19_mission_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/12/05/dragon-soars-on-research-and-resupply-flight-to-international-space-station',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-19',
    },
  },
  {
    id: 86,
    missionPatch: 'https://images2.imgbox.com/2c/03/fMLdgNQ4_o.png',
    missionName: 'JCSat 18 / Kacific 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2019-12-17T00:10:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'SpaceX will launch the Boeing built dual payload satellite to geostationary transfer orbit from XXXX. JCSat 18 is a mobile broadband communications payload built for Sky Perfect JSAT Corporation of Japan and will service Asia Pacific. Kacific 1 is a high throughput broadband internet payload built for Kacific Broadband Satellites and will service certain high demand areas of Southeast Asia and the Pacific. Both payloads share a single chassis. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/sbXgZg9JmkI',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/jcsat18kacific1_mission_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2019/12/17/startup-launches-broadband-satellite-on-spacex-rocket-to-connect-pacific-islands',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/JSAT_(satellite_constellation)',
    },
  },
  {
    id: 87,
    missionPatch: 'https://images2.imgbox.com/36/f5/B08U2KHW_o.png',
    missionName: 'Starlink-2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-01-07T02:19:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission will launch the second batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. They are expected to contribute to the 550 km x 53° shell. It is the third Starlink launch overall. Starlink is a low Earth orbit broadband internet constellation developed and owned by SpaceX which will eventually consist of nearly 12 000 satellites and will provide low latency internet service to ground terminals around the world. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/HwyXo6T7jC4',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/starlink_press_kit_jan2020.pdf',
      articleLink:
        'https://spaceflightnow.com/2020/01/07/spacex-launches-more-starlink-satellites-tests-design-change-for-astronomers',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Starlink_(satellite_constellation)',
    },
  },
  {
    id: 88,
    missionPatch: 'https://images2.imgbox.com/c0/9d/SJYvC4hT_o.png',
    missionName: 'Crew Dragon In Flight Abort Test',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-01-19T14:00:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "SpaceX will launch a Crew Dragon capsule from LC-39A, KSC on a fully fueled Falcon 9 rocket and then trigger the launch escape system during the period of maximum dynamic pressure. As part of NASA'a Commercial Crew Integrated Capability program (CCiCap) this test will contribute valuable data to help validate Crew Dragon and its launch abort system. The Crew Dragon will be recovered by GO Searcher after splashdown in the Atlantic Ocean. This flight does not go to orbit. The booster and upper stage are expected to break up following capsule separation and there will be no landing attempt.",
    links: {
      videoLink: 'https://youtu.be/mhrkdHshb3E',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/in-flight_abort_test_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2020/01/19/spacex-aces-final-major-test-before-first-crew-mission',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Commercial_Crew_Development',
    },
  },
  {
    id: 89,
    missionPatch: 'https://images2.imgbox.com/3a/c6/ueu9Acdh_o.png',
    missionName: 'Starlink-3',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-01-29T14:06:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission will launch the third batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. It is the fourth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/1KmBDCiL7MU',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/starlink_press_kit_jan272020.pdf',
      articleLink:
        'https://spaceflightnow.com/2020/01/29/spacex-boosts-60-more-starlink-satellites-into-orbit-after-weather-delays/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_Starlink',
    },
  },
  {
    id: 90,
    missionPatch: 'https://images2.imgbox.com/4f/07/GJWgTmKM_o.png',
    missionName: 'Starlink-4',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-02-17T15:05:55.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission will launch the fourth batch of Starlink version 1.0 satellites, from SLC-40, Cape Canaveral AFS. It is the fifth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/8xeX62mLcf8',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/fifth_starlink_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2020/02/17/spacex-delivers-more-starlink-satellites-to-orbit-booster-misses-drone-ship-landing/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_Starlink',
    },
  },
  {
    id: 91,
    missionPatch: 'https://images2.imgbox.com/9b/93/k1hCBIG8_o.png',
    missionName: 'CRS-20',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-03-07T04:50:31.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX's 20th and final Crew Resupply Mission under the original NASA CRS contract, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. It is the last scheduled flight of a Dragon 1 capsule. (CRS-21 and up under the new Commercial Resupply Services 2 contract will use Dragon 2.) The external payload for this mission is the Bartolomeo ISS external payload hosting platform. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral Air Force Station and the booster will land at LZ-1. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    links: {
      videoLink: 'https://youtu.be/1MkcWK2PnsU',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/crs-20_mission_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2020/03/07/late-night-launch-of-spacex-cargo-ship-marks-end-of-an-era/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-20',
    },
  },
  {
    id: 92,
    missionPatch: 'https://images2.imgbox.com/dc/14/DLlaYbmf_o.png',
    missionName: 'Starlink-5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-03-18T12:16:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'The sixth Starlink launch overall and the fifth operational batch of Starlink satellites will launch into orbit aboard a Falcon 9 rocket. This mission is expected to deploy all sixty satellites into an elliptical orbit about fifteen minutes into flight. In the weeks following launch the satellites are expected to utilize their onboard ion thrusters to raise their orbits to 550 km in three groups of 20, making use of precession rates to separate themselves into three planes. The booster will land on a drone ship approximately 628 km downrange.',
    links: {
      videoLink: 'https://youtu.be/I4sMhHbHYXM',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/sixth_starlink_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2020/03/18/falcon-9-rocket-overcomes-engine-failure-to-deploy-starlink-satellites/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 93,
    missionPatch: 'https://images2.imgbox.com/ef/36/h10Ds3kT_o.png',
    missionName: 'Starlink-6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-04-22T19:30:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'This mission will launch the sixth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the seventh Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/wSge0I7pwFI',
      presskitLink:
        'https://www.spacex.com/sites/spacex/files/seventh_starlink_mission_overview.pdf',
      articleLink:
        'https://spaceflightnow.com/2020/04/22/spacexs-starlink-network-surpasses-400-satellite-mark-after-successful-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 94,
    missionPatch: 'https://images2.imgbox.com/14/8a/x2EqeeM4_o.png',
    missionName: 'Starlink-7',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-06-04T01:25:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission will launch the seventh batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the eighth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on JRTI on its first mission since arriving at Port Canaveral.',
    links: {
      videoLink: 'https://youtu.be/y4xBFHjkUvw',
      presskitLink: 'https://spacextimemachine.com/assets/press_kits/185.pdf',
      articleLink:
        'https://spaceflightnow.com/2020/06/04/spacex-sets-new-mark-in-rocket-reuse-10-years-after-first-falcon-9-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 95,
    missionPatch: 'https://images2.imgbox.com/48/a8/LTqq8OrE_o.png',
    missionName: 'CCtCap Demo Mission 2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-05-30T19:22:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "SpaceX will launch the second demonstration mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying two NASA astronauts to the International Space Station. Barring unexpected developments, this mission will be the first crewed flight to launch from the United States since the end of the Space Shuttle program in 2011. DM-2 demonstrates the Falcon 9 and Crew Dragon's ability to safely transport crew to the space station and back to Earth and it is the last major milestone for certification of Crew Dragon. Initially the mission duration was planned to be no longer than two weeks, however NASA has been considering an extension to as much as six weeks or three months. The astronauts have been undergoing additional training for the possible longer mission.",
    links: {
      videoLink: 'https://youtu.be/xY96v0OIcK4',
      presskitLink:
        'https://www.nasa.gov/sites/default/files/atoms/files/commercialcrew_press_kit.pdf',
      articleLink:
        'https://spaceflightnow.com/2020/05/30/nasa-astronauts-launch-from-us-soil-for-first-time-in-nine-years/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Crew_Dragon_Demo-2',
    },
  },
  {
    id: 96,
    missionPatch: 'https://images2.imgbox.com/f2/ab/jxHngBd5_o.png',
    missionName: 'Starlink-8 & SkySat 16-18',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-06-13T09:21:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission will launch the eighth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral AFS. It is the ninth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes rideshare payloads, SkySats 16-18, on top of the Starlink stack. The booster for this mission is expected to land an ASDS.',
    links: {
      videoLink: 'https://youtu.be/8riKQXChPGg',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/06/13/starlink-satellite-deployments-continue-with-successful-falcon-9-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 97,
    missionPatch: 'https://images2.imgbox.com/ff/20/EcENG8MX_o.png',
    missionName: 'SAOCOM 1B, GNOMES-1, Tyvak-0172',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-08-30T23:18:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX's Falcon 9 will launch the second of the two satellite SAOCOM 1 satellites into a sun-synchronous polar orbit from SLC-40, Cape Canaveral AFS. SAOCOM 1B is a synthetic aperture radar Earth observation satellite to support disaster management. The SAOCOM spacecraft are operated by CONAE, the Argentinian National Space Activities Commission, and are built by INVAP. This mission is also expected to include rideshare payloads Sequoia, and GNOMES-1. This will be the first polar launch from the Space Coast in 60 years. The launch azimuth will be southward and the booster will land at LZ-1.",
    links: {
      videoLink: 'https://youtu.be/P-gLOsDjE3E',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/08/31/spacex-launches-first-polar-orbit-mission-from-florida-in-decades/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SAOCOM',
    },
  },
  {
    id: 98,
    missionPatch: 'https://images2.imgbox.com/1f/83/TEXnegNL_o.png',
    missionName: 'GPS III SV03 (Columbus)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-06-30T19:55:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'SpaceX will launch GPS Block III Space Vehicle 03 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This is the third GPS III satellite and the second launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/6zr0nfG3Xy4',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/06/30/spacex-launches-its-first-mission-for-u-s-space-force/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/GPS_Block_III',
    },
  },
  {
    id: 99,
    missionPatch: 'https://images2.imgbox.com/a9/be/43FhrPoq_o.png',
    missionName: 'SXM-7',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-12-13T17:30:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'SpaceX will launch the first of two next generation high power S-band broadcast satellites for SiriusXM. The spacecraft will be delivered into a geostationary transfer orbit and the booster will be recovered downrange. The spacecraft is built by Space Systems Loral (SSL) on the SSL 1300 platform and includes two solar arrays producing 20kW, and an unfurlable antenna dish. SXM-7 will replace XM-3 in geostationary orbit.',
    links: {
      videoLink: 'https://youtu.be/COraGXFb1lo',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/12/13/siriusxm-satellite-rides-spacex-rocket-into-orbit/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Sirius_XM#Satellites',
    },
  },
  {
    id: 100,
    missionPatch: 'https://images2.imgbox.com/5e/b7/Kn4Vn6nM_o.png',
    missionName: 'GPS III SV04 (Sacagawea)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-11-05T23:24:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'SpaceX will launch GPS Block III Space Vehicle 04 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This will be the fourth GPS III satellite launched and the third launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission will land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/wufXF5YKR1M',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/11/06/spacex-launches-gps-navigation-satellite-from-cape-canaveral/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/GPS_Block_III',
    },
  },
  {
    id: 101,
    missionPatch: 'https://images2.imgbox.com/98/cc/UJd0SS73_o.png',
    missionName: 'Crew-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-11-16T00:27:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "SpaceX will launch the first operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying 3 NASA astronauts and 1 JAXA astronaut to the International Space Station. This mission will be the second crewed flight to launch from the United States since the end of the Space Shuttle program in 2011.",
    links: {
      videoLink: 'https://youtu.be/bnChQbxLkkI',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/11/16/astronauts-ride-spacex-crew-capsule-in-landmark-launch-for-commercial-spaceflight/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_Crew-1',
    },
  },
  {
    id: 102,
    missionPatch: 'https://images2.imgbox.com/d0/66/bCRsHNSZ_o.png',
    missionName: 'GPS III SV05',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-06-17T16:09:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX's fourth GPS III launch will use the first stage from the previous GPS mission. This will be the first time a National Security Space Launch has flown on a flight proven booster. Falcon 9 will launch from SLC-40, Cape Canaveral and the booster will land downrange on a drone ship. GPS III is the third generation of the U.S. Space Force's NAVSTAR Global Positioning System satellites, developed by Lockheed Martin. The GPS III constellation will feature a cross-linked command and control architecture, allowing the entire GPS constellation to be updated simultaneously from a single ground station. A new spot beam capability for enhanced military coverage and increased resistance to hostile jamming will be incorporated.",
    links: {
      videoLink: 'https://youtu.be/QJXxVtp3KqI',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/GPS_Block_III',
    },
  },
  {
    id: 103,
    missionPatch: 'https://images2.imgbox.com/a2/a0/cHJWyFCo_o.png',
    missionName: 'CRS-21',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-12-06T16:17:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    links: {
      videoLink: 'https://youtu.be/4xJAGFR_N-c',
      presskitLink:
        'https://www.nasa.gov/sites/default/files/atoms/files/spacex_crs-21_mision_overview_high_res.pdf',
      articleLink:
        'https://spaceflightnow.com/2020/12/06/spacex-launches-first-in-new-line-of-upgraded-space-station-cargo-ships/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-21',
    },
  },
  {
    id: 104,
    missionPatch: 'https://images2.imgbox.com/a4/9a/8KhFejXx_o.png',
    missionName: 'Turksat 5A',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-01-08T02:15:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'SpaceX will launch the first of two next generation satellites on contract for Türksat. Türksat 5A is a Ku-band broadcast satellite built by Airbus Defense and Space and based on the Electric Orbit Raising version of the Eurostar E3000 platform. This spacecraft will be delivered into a transfer orbit and will then raise itself to its operational 31° East geostationary orbit to serve Turkey, the Middle East, Europe, North Africa and South Africa. The booster for this mission will be recovered downrange via ASDS.',
    links: {
      videoLink: 'https://youtu.be/9I0UYXVqIn8',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/01/08/spacex-deploys-turkish-satellite-in-first-launch-of-2021/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/T%C3%BCrksat_5A',
    },
  },
  {
    id: 105,
    missionPatch: 'https://images2.imgbox.com/c3/19/YmxxZMLw_o.png',
    missionName: 'ANASIS-II',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-07-20T21:30:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "SpaceX will launch ANASIS-II, a South Korean geostationary military communication satellite from LC-39A, Kennedy Space Center. It will be South Korea's first dedicated military communications satellite. Falcon 9 will deliver the satellite to a geostationary transfer orbit. The booster is expected to land downrange on an ASDS.",
    links: {
      videoLink: 'https://youtu.be/TshvZlQ7le8',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/07/20/spacex-delivers-south-koreas-first-military-satellite-into-on-target-orbit/',
      wikipediaLink: null,
    },
  },
  {
    id: 106,
    missionPatch: 'https://images2.imgbox.com/ac/ad/FhIfqkTq_o.png',
    missionName: 'Starlink-9 (v1.0) & BlackSky Global 5-6',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-08-07T05:12:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'This mission will launch the ninth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the tenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes a rideshare of two BlackSky satellites on top of the Starlink stack. The booster for this mission is expected to land an ASDS.',
    links: {
      videoLink: 'https://youtu.be/KU6KogxG5BE',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/08/07/spacex-closes-out-busy-week-with-launch-of-more-starlink-satellites/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 107,
    missionPatch: 'https://images2.imgbox.com/64/b3/CIqV9XMZ_o.png',
    missionName: 'Starlink-10 (v1.0) & SkySat 19-21',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-08-18T14:31:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission will launch the tenth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the eleventh Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes rideshare payloads, SkySats 19-21, on top of the Starlink stack. The booster for this mission is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/jTMJK7wb0rM',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/08/18/spacex-adds-more-satellites-to-ever-growing-starlink-network/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 108,
    missionPatch: 'https://images2.imgbox.com/96/40/667HXq7w_o.png',
    missionName: 'Sentinel-6 Michael Freilich',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-11-21T17:17:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      'SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4.',
    links: {
      videoLink: 'https://youtu.be/aVFPzTDCihQ',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Copernicus_Sentinel-6',
    },
  },
  {
    id: 109,
    missionPatch: 'https://images2.imgbox.com/38/09/yStzn5Er_o.png',
    missionName: 'Starlink-11 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-09-03T12:46:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'This mission will launch the eleventh batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral Air Force Station. It is the twelfth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/_j4xR7LMCGY',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 110,
    missionPatch: 'https://images2.imgbox.com/3b/c3/kd7H9FTQ_o.png',
    missionName: 'Starlink-12 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-10-06T11:29:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'This mission will launch the twelfth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Cape Canaveral Air Force Station. It is the thirteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/UZkaE_9zwQQ',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 111,
    missionPatch: 'https://images2.imgbox.com/1d/5c/Eg5XilXY_o.png',
    missionName: 'Starlink-13 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-10-18T12:25:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'This mission will launch the thirteenth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the fourteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/UM8CDDAmp98',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/10/18/spacex-launches-another-batch-of-starlink-satellites/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 112,
    missionPatch: 'https://images2.imgbox.com/65/e5/GS6w5gPI_o.png',
    missionName: 'Starlink-14 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-10-24T15:31:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission will launch the fourteenth batch of operational Starlink satellites, which are expected to be version 1.0, from SLC-40, Kennedy Space Center. It is the fifteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on JRTI.',
    links: {
      videoLink: 'https://youtu.be/2gbVgTxLgN0',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/10/24/spacex-adds-another-60-satellites-to-starlink-network/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 113,
    missionPatch: 'https://images2.imgbox.com/25/01/sBErNO7T_o.jpg',
    missionName: 'NROL-108',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-12-19T14:00:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'SpaceX will launch NROL-108 for the National Reconnaissance Office aboard a Falcon 9 from SLC-40, Cape Canaveral Air Force Station. The booster for this mission is expected to land at LZ-1.',
    links: {
      videoLink: 'https://youtu.be/9OeVwaFBkfE',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/12/19/spacex-closes-out-record-year-of-launches-from-floridas-space-coast/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/National_Reconnaissance_Office',
    },
  },
  {
    id: 114,
    missionPatch: 'https://images2.imgbox.com/54/00/2OgoVFlS_o.png',
    missionName: 'Starlink-15 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2020-11-25T02:13:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission will launch the fifteenth batch of operational Starlink satellites, which are version 1.0, from SLC-40, Cape Canaveral Air Force Station. It will be the sixteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. The booster for this mission is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/J442-ti-Dhg',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2020/11/25/spacex-launches-60-more-starlink-satellites-on-100th-falcon-9-flight/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 115,
    missionPatch: 'https://images2.imgbox.com/a6/d3/bPczm8gQ_o.png',
    missionName: 'Starlink-16 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-01-20T13:02:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'This mission launches the sixteenth batch of operational Starlink satellites, which are version 1.0, from SLC-40 or LC-39A. It is the seventeenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/84Nct_Q9Lqw',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/01/20/spacex-sets-new-rocket-reuse-records-with-successful-starlink-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 116,
    missionPatch: 'https://images2.imgbox.com/ba/a9/Q6APoE8C_o.png',
    missionName: 'Starlink-17 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-03-04T08:24:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'This mission launches the sixteenth batch of operational Starlink satellites, which are version 1.0, from LC-39A. It is the eighteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/d5DzoKuhdNk',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/03/04/spacex-sticks-75th-falcon-rocket-landing-after-launching-60-more-starlink-satellites/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 117,
    missionPatch: 'https://images2.imgbox.com/58/70/eapAog9v_o.png',
    missionName: 'Transporter-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-01-24T15:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'SpaceX will launch a dedicated rideshare mission from SLC-40 or LC-39A. The spacecraft will be delivered into a sun-synchronous orbit. The booster for this mission is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/ScHI1cbkUv4',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/01/24/spacex-launches-record-setting-rideshare-mission-with-143-small-satellites/',
      wikipediaLink: null,
    },
  },
  {
    id: 118,
    missionPatch: 'https://images2.imgbox.com/c4/49/D1B0f2cg_o.png',
    missionName: 'SARah 1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-06-18T14:19:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: 'https://youtu.be/lCX-KUCn4A4',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 119,
    missionPatch: 'https://images2.imgbox.com/c4/ee/2m9k8HLW_o.png',
    missionName: 'Crew-2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-04-23T09:49:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "SpaceX launches the second operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Program, carrying NASA astronauts Shane Kimbrough, Megan McArthur, Thomas Pesquet, and Akihiko Hoshide to the International Space Station. The Falcon 9 and Crew Dragon lift off from LC-39A, Kennedy Space Center. Both the booster and the capsule have flown previously, each a first for a commercial crew flight. The booster for this mission is expected to land on an ASDS. The mission will be complete with the safe return of the astronauts to Earth.",
    links: {
      videoLink: 'https://youtu.be/lW07SN3YoLI',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/04/23/spacex-launches-astronauts-on-refurbished-capsule-and-flight-proven-rocket/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_Crew-2',
    },
  },
  {
    id: 120,
    missionPatch: 'https://images2.imgbox.com/9a/f0/UVl6cZ6e_o.png',
    missionName: 'SXM-8',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-06-06T04:26:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'SpaceX launches the second of two next generation satellites for SiriusXM from SLC-40, Cape Canaveral Space Force Station. The spacecraft will be delivered into a sub-synchronous geostationary transfer orbit and will replace XM-4 in geostationary orbit. The booster for this mission will land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/bgtDRR2F2wA',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Sirius_XM#Satellites',
    },
  },
  {
    id: 121,
    missionPatch: 'https://images2.imgbox.com/aa/a8/HhwYIXoB_o.png',
    missionName: 'CRS-22 & IROSA',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-06-03T17:29:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "SpaceX's 22nd ISS resupply mission on behalf of NASA, this mission sends essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the first pair of ISS Roll Out Solar Arrays. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with splashdown and recovery of the capsule and down cargo.",
    links: {
      videoLink: 'https://youtu.be/QXf9mRWbXDM',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/06/03/spacex-supply-ship-launches-on-mission-to-begin-upgrading-space-station-electrical-grid/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-22',
    },
  },
  {
    id: 122,
    missionPatch: 'https://images2.imgbox.com/9d/c9/rmVWqnDr_o.png',
    missionName: 'Türksat 5B',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-12-19T03:58:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "The Türksat 5B communication satellite, which its construction work continues at Airbus Defense and Space's facilities in Toulouse, France, will soon be sent to the Cape Canaveral Space Launch Station located in Florida, United States. The satellite will be launched into space onboard the Falcon 9 rocket following pre-launch preparations. With an estimated in-orbit lifetime of 30 years and the aim of securing Turkey’s orbital and frequency rights, Türksat 5B will be launched into an orbital slot at 42 degrees East. With 12 kW power, Türksat 5B will provide TV broadcasting and data communication services over a wide coverage area that reaches the entire Middle East, the Persian Gulf, the Red Sea, the Mediterranean, North Africa, East Africa, South Africa and Nigeria. Apart from that, the satellite will also provide customized services for airlines and commercial ship operators around the world thanks to the fact that it operates in Ka-Band.",
    links: {
      videoLink: 'https://youtu.be/JBGjE9_aosc',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/12/19/spacex-two-for-two-in-companys-first-falcon-9-launch-doubleheader/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/T%C3%BCrksat_5B',
    },
  },
  {
    id: 123,
    missionPatch: 'https://images2.imgbox.com/5a/fa/fhZj1ebN_o.png',
    missionName: 'DART',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-11-24T06:20:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      "NASA's Double Asteroid Redirect Test (DART) will demonstrate the use of a kinetic impactor to alter an asteroid's trajectory, an intervention that could be used in the future to prevent devastating Earth impacts. The target system consists of Didymos, 780 meters in diameter, and its moonlet Dimorphos, 160 meters. The DART spacecraft will intercept the double asteroid, using autonomous guidance to crash into the smaller one. Moving at about 6 km/s, the transferred momentum should alter Dimorphos's 12 hour orbital period around its companion by several minutes. The mission tests several technologies, including the Small-body Maneuvering Autonomous Real-Time Navigation (SMART Nav) used to differentiate and steer toward the target body and Roll-Out Solar Arrays (ROSA) with Transformational Solar Array concentrators. NASA’s Evolutionary Xenon Thruster — Commercial (NEXT–C) ion engine will also be demonstrated, although the spacecraft's primary propulsion is hydrazine thrusters. DART should arrive at Didymos in late September 2022, when it is about 11 million kilometers from Earth. Ten days before impact, the Italian Space Agency's cubesat LICIACube will be deployed to observe the collision and ejecta with its two cameras. Earth-based telescopes will be used to measure the altered orbit.",
    links: {
      videoLink: 'https://youtu.be/XKRf6-NcMqI',
      presskitLink: null,
      articleLink: null,
      wikipediaLink:
        'https://en.wikipedia.org/wiki/Double_Asteroid_Redirection_Test',
    },
  },
  {
    id: 124,
    missionPatch: 'https://images2.imgbox.com/23/8a/eyj3lHJk_o.png',
    missionName: 'CRS-23',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-08-29T07:14:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "SpaceX's 23rd ISS resupply mission on behalf of NASA, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. Cargo includes several science experiments. The booster for this mission is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    links: {
      videoLink: 'https://youtu.be/x-KiDqxAMU0',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_CRS-23',
    },
  },
  {
    id: 125,
    missionPatch: 'https://images2.imgbox.com/5a/2f/w3woVyro_o.png',
    missionName: 'Crew-3',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-11-11T02:03:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "SpaceX will launch the third operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Program, carrying four astronauts to the International Space Station, including 1 international partner This mission will fly on a new capsule and a once used booster. The booster will land downrange on a drone ship. The Crew-2 mission returns from the space station in November.",
    links: {
      videoLink: 'https://youtu.be/WZvtrnFItNs',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/11/11/spacex-debuts-new-dragon-capsule-in-launch-to-the-international-space-station/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_Crew-3',
    },
  },
  {
    id: 126,
    missionPatch: 'https://images2.imgbox.com/81/af/UT6KOE53_o.png',
    missionName: 'Starlink-18 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-02-04T06:19:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission launches the eighteenth batch of operational Starlink satellites, which are version 1.0, from SLC-40. It is the nineteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/fe6HBw1y6bA',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 127,
    missionPatch: 'https://images2.imgbox.com/fa/01/EAdaKWgq_o.png',
    missionName: 'Starlink-19 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-02-16T03:59:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission launches the eighteenth batch of operational Starlink satellites, which are version 1.0, from SLC-40. It is the nineteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/L0dkyV09Zso',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/02/16/spacex-successfully-deploys-60-more-starlink-satellites-but-loses-booster-on-descent/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 128,
    missionPatch: 'https://images2.imgbox.com/df/ea/lre39tFr_o.png',
    missionName: 'Starlink-20 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-03-11T08:13:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission launches the 20th batch of operational Starlink satellites, which are version 1.0, from LC-39A or SLC-40. It is the 21st Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/U4sWbTfrzj8',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/03/11/spacex-adds-more-satellites-to-starlink-internet-fleet/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 129,
    missionPatch: 'https://images2.imgbox.com/a0/1a/BLRGLyNe_o.png',
    missionName: 'Starlink-21 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-03-14T10:01:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'This mission launches the 21st batch of operational Starlink satellites, which are version 1.0, from LC-39A or SLC-40. It is the 22nd Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/JKf45ATgATc',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/03/14/spacex-extends-its-own-rocket-reuse-record-on-starlink-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 130,
    missionPatch: 'https://images2.imgbox.com/a9/3e/L2EqHznO_o.png',
    missionName: 'Transporter-2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-06-30T19:31:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      "Falcon 9 launches to sun-synchronous polar orbit from Florida as part of SpaceX's Rideshare program dedicated to smallsat customers. The mission lifts off from SLC-40, Cape Canaveral on a southward azimuth and performs a dogleg maneuver. The booster for this mission is expected to return to LZ-1 based on FCC communications filings. This rideshare takes approximately 90 satellites and hosted payloads into orbit on a variety of deployers including three free-flying spacecraft which dispense their customers' satellites after separation from the SpaceX stack.",
    links: {
      videoLink: 'https://youtu.be/sSiuW1HcGjA',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 131,
    missionPatch: 'https://images2.imgbox.com/f3/0d/E2I1NJs2_o.png',
    missionName: 'Starlink-22 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-03-24T08:28:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission launches the 22nd batch of operational Starlink satellites, which are version 1.0, from or SLC-40. It is the 23rd Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/a15czI9B91c',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/03/24/spacex-launches-25th-mission-to-build-out-starlink-internet-network/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 132,
    missionPatch: 'https://images2.imgbox.com/b7/ca/KRGYs6pm_o.png',
    missionName: 'Starlink-23 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-04-07T16:34:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission launches the 23rd batch of operational Starlink satellites, which are version 1.0, from or SLC-40 or LC-39A. It is the 24th Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/Uy9Jn-3vuPs',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/04/07/spacex-launches-its-100th-mission-from-floridas-space-coast/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 133,
    missionPatch: 'https://images2.imgbox.com/cd/30/UYfjAmuT_o.png',
    missionName: 'Starlink-24 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-04-29T03:44:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission launches the 24th batch of operational Starlink satellites, which are version 1.0, from LC-39A or SLC-40. It is the 25th Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/RBxkRKZ34yo',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/04/29/spacex-launches-60-more-starlink-spacecraft-fcc-clears-spacex-to-fly-satellites-at-lower-altitudes/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 134,
    missionPatch: 'https://images2.imgbox.com/33/03/aHKx9cu1_o.png',
    missionName: 'Starlink-25 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-05-04T19:01:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'This mission launches the 25th batch of operational Starlink satellites, which are version 1.0, from LC-39A. It is the 26th Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on OCISLY.',
    links: {
      videoLink: 'https://youtu.be/xpl_JnG7rcg',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 135,
    missionPatch: 'https://images2.imgbox.com/b5/8a/KeiGEz4f_o.png',
    missionName: 'Starlink-26 (v1.0) + Capella-6 + Tyvak-0130',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-05-15T22:54:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'This mission launches the 27th batch of operational Starlink satellites, which are version 1.0, from LC-39A or SLC-40. It is the 28th Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/tdgg_qwj-hI',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 136,
    missionPatch: 'https://images2.imgbox.com/ad/eb/pq1vQuoW_o.png',
    missionName: 'Starlink-27 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-05-09T06:42:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission launches the 26th batch of operational Starlink satellites, which are version 1.0, from SLC-40. It is the 27th Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.',
    links: {
      videoLink: 'https://youtu.be/J71s2KmkSrc',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 137,
    missionPatch: 'https://images2.imgbox.com/28/ee/Bchywpgu_o.png',
    missionName: 'Starlink-28 (v1.0)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-05-26T18:59:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'This mission launches the 28th batch of operational Starlink satellites, which were version 1.0, from SLC-40. It was the 29th Starlink launch overall. The satellites plan to be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on ASDS JRTI.',
    links: {
      videoLink: 'https://youtu.be/xRu-ekesDyY',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/05/26/first-phase-of-spacexs-starlink-network-nears-completion-with-falcon-9-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 138,
    missionPatch: 'https://images2.imgbox.com/a8/17/lVuBZTIF_o.png',
    missionName: 'NROL-87',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-02-02T20:18:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: 'https://youtu.be/bVk8XyjhTKo',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/02/02/spacex-launches-classified-nro-satellite-from-vandenberg-space-force-base/',
      wikipediaLink: null,
    },
  },
  {
    id: 139,
    missionPatch: 'https://images2.imgbox.com/bb/2f/jMnSSQHM_o.png',
    missionName: 'Inspiration4',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-09-16T00:02:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'Inspiration4 is the world’s first all-civilian mission to space. The mission will be commanded by Jared Isaacman, the 37-year-old founder and Chief Executive Officer of Shift4 Payments and an accomplished pilot and adventurer. Inspiration4 will leave Earth from Kennedy Space Center’s historic Launch Complex 39A, the embarkation point for Apollo and Space Shuttle missions, and travel across a low earth orbit on a multi-day journey that will continually eclipse more than 90% of the earth’s population. Named in recognition of the four-person crew that will raise awareness and funds for St. Jude Children’s Research Hospital, this milestone represents a new era for human spaceflight and exploration.',
    links: {
      videoLink: 'https://youtu.be/3pv01sSq44w',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Inspiration4',
    },
  },
  {
    id: 140,
    missionPatch: 'https://images2.imgbox.com/cb/ef/u7GOlbj4_o.png',
    missionName: 'Starlink 2-1 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-09-14T03:55:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: 'https://youtu.be/4372QYiPZB4',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/09/14/spacex-launches-first-full-batch-of-laser-equipped-starlink-satellites/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 141,
    missionPatch: 'https://images2.imgbox.com/75/ac/qogMzpf1_o.png',
    missionName: 'IXPE',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-12-09T06:00:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/CpmHsN5GUn8',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/IXPE',
    },
  },
  {
    id: 142,
    missionPatch: 'https://images2.imgbox.com/fc/e7/esvHlHwA_o.png',
    missionName: 'Starlink 4-3 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-12-01T23:20:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/594TbXriaAk',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 143,
    missionPatch: 'https://images2.imgbox.com/fe/c3/yV1LnAUT_o.png',
    missionName: 'CRS-24',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-12-21T10:06:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      "SpaceX's 24th ISS resupply mission on behalf of NASA, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. Cargo includes several science experiments. The booster for this mission is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    links: {
      videoLink: 'https://youtu.be/gEv6HLHYhWo',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/12/21/spacex-cargo-flight-sets-record-for-most-orbital-launches-from-space-coast-in-a-year/',
      wikipediaLink: null,
    },
  },
  {
    id: 144,
    missionPatch: 'https://images2.imgbox.com/69/be/Y0sIjJ6f_o.png',
    missionName: 'CSG-2',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-01-31T23:11:12.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details:
      'Falcon 9 launches to sun-synchronous polar orbit from Florida as part of CSG-2 Mission. The mission lifts off from SLC-40, Cape Canaveral on a southward azimuth and performs a dogleg maneuver. The booster for this mission is expected to return to LZ-1 based on FCC communications filings',
    links: {
      videoLink: 'https://youtu.be/AbFoi68L-GQ',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/02/01/italian-radar-satellite-rides-spacex-rocket-into-polar-orbit/',
      wikipediaLink: null,
    },
  },
  {
    id: 145,
    missionPatch: 'https://images2.imgbox.com/f1/38/HYBzPrio_o.png',
    missionName: 'Starlink 4-1 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-11-13T12:40:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/AtmtP4vouSY',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/11/13/spacex-launch-starts-deployment-of-new-starlink-orbital-shell/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 146,
    missionPatch: 'https://images2.imgbox.com/1d/2f/Z0V6iIoM_o.png',
    missionName: 'Starlink 4-4 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2021-12-18T12:41:40.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details:
      'The mission consists in launching 52 Starlink v1.5 satellites to Shell number 4 at 53.2°. This is unusual as the mission is launching from Vandenberg as these missions usually launch from the East Coast.',
    links: {
      videoLink: 'https://youtu.be/q4Ed3EBx90s',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2021/12/18/spacex-launches-starlink-satellites-from-california-on-unusual-coast-hugging-trajectory/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 147,
    missionPatch: 'https://images2.imgbox.com/d4/7b/iDjUz9US_o.png',
    missionName: 'Transporter-3',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-01-13T15:25:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/mFBeuSAvhUQ',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/01/13/spacex-launches-105-customer-satellites-on-third-transporter-rideshare-mission/',
      wikipediaLink: null,
    },
  },
  {
    id: 148,
    missionPatch: 'https://images2.imgbox.com/8e/e9/MJG9yylu_o.png',
    missionName: 'Starlink 4-5 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-01-06T21:49:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/4_ePBpwMhns',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/01/06/spacex-deploys-49-more-starlink-satellites-in-first-launch-of-2022/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 149,
    missionPatch: 'https://images2.imgbox.com/5f/23/CAkj0nIZ_o.png',
    missionName: 'Starlink 4-6 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-01-19T00:04:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/Yov854ZT1lg',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/01/19/spacex-launches-2000th-starlink-satellite/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 150,
    missionPatch: 'https://images2.imgbox.com/1c/c9/KfwNHab1_o.png',
    missionName: 'Starlink 4-7 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-02-03T18:13:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/UY3fZ6PwuUY',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/02/03/spacex-launches-third-falcon-9-rocket-mission-in-three-days/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 151,
    missionPatch: 'https://images2.imgbox.com/16/33/EAmegdSP_o.png',
    missionName: 'Ax-1',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-04-08T15:17:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details:
      'Axiom Mission 1 (or Ax-1) is a planned SpaceX Crew Dragon mission to the International Space Station (ISS), operated by SpaceX on behalf of Axiom Space. The flight will launch no earlier than 31 March 2022 and send four people to the ISS for an eight-day stay',
    links: {
      videoLink: 'https://youtu.be/5nLk_Vqp7nw',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Axiom_Mission_1',
    },
  },
  {
    id: 152,
    missionPatch: 'https://images2.imgbox.com/97/24/8byKYtz1_o.png',
    missionName: 'Starlink 4-8 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-02-21T14:44:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/eiKOMCRymsw',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/02/21/spacex-adds-46-more-satellites-to-starlink-fleet/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 153,
    missionPatch: 'https://images2.imgbox.com/4d/6a/Oh3QT4JI_o.png',
    missionName: 'Starlink 4-11 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-02-25T17:12:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: 'https://youtu.be/nnVOfKOzXHE',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/02/25/spacex-deploys-another-batch-of-starlink-satellites/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 154,
    missionPatch: 'https://images2.imgbox.com/cd/cf/dbAM1D7F_o.png',
    missionName: 'Starlink 4-9 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-03-03T14:35:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/ypb2sDdUkRo',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/03/03/after-another-starlink-mission-spacex-on-pace-for-one-launch-per-week-this-year/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 155,
    missionPatch: 'https://images2.imgbox.com/82/8f/qKGTi0s6_o.png',
    missionName: 'Starlink 4-10 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-03-09T13:45:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/uqAppamdGyo',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/03/09/spacex-broomstick-launches-40th-starlink-mission/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 156,
    missionPatch: 'https://images2.imgbox.com/d6/34/IPIyyiUF_o.png',
    missionName: 'Starlink 4-12 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-03-19T03:24:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/0giA6VZOICs',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/03/19/spacex-stretches-rocket-reuse-record-with-another-starlink-launch/',
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 157,
    missionPatch: 'https://images2.imgbox.com/6f/96/DdGNFAIf_o.png',
    missionName: 'Transporter-4',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-04-01T16:24:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/4NqSoHnkKEM',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/04/01/forty-payloads-ride-into-orbit-on-spacex-falcon-9-rocket/',
      wikipediaLink: null,
    },
  },
  {
    id: 158,
    missionPatch: 'https://images2.imgbox.com/60/36/ReA4NxNK_o.png',
    missionName: 'Starlink 4-14 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-04-21T15:16:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/s6yBwQSrtFY',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 159,
    missionPatch: 'https://images2.imgbox.com/2b/af/npQ6NwKM_o.png',
    missionName: 'NROL-85',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-04-17T13:13:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: 'https://youtu.be/mMcmf1g4qSA',
      presskitLink: null,
      articleLink:
        'https://spaceflightnow.com/2022/04/17/spacex-launches-and-lands-rocket-on-mission-for-national-reconnaissance-office/',
      wikipediaLink:
        'https://en.wikipedia.org/wiki/National_Reconnaissance_Office',
    },
  },
  {
    id: 160,
    missionPatch: 'https://images2.imgbox.com/22/94/l0GVrzr2_o.png',
    missionName: 'Crew-4',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-04-27T07:52:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/orN0PaqQECs',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_Crew-4',
    },
  },
  {
    id: 161,
    missionPatch: 'https://images2.imgbox.com/6d/f7/ZJKXRNzL_o.png',
    missionName: 'Nilesat-301',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-06-08T21:04:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/UpCZu89zb5Y',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Nilesat',
    },
  },
  {
    id: 162,
    missionPatch: 'https://images2.imgbox.com/fc/73/QpGKqpvV_o.png',
    missionName: 'Transporter-5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-05-25T18:27:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/KHt3MyimuqU',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 163,
    missionPatch: 'https://images2.imgbox.com/4a/8a/XVjJ2BKD_o.png',
    missionName: 'CRS-25',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-07-15T00:44:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/mnowEqqMiFs',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 164,
    missionPatch: null,
    missionName: 'WorldView Legion 1 & 2',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-12-01T00:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 165,
    missionPatch: null,
    missionName: 'O3b mPower 3.4',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-12-01T00:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 166,
    missionPatch: 'https://images2.imgbox.com/32/84/oJzvzmvd_o.jpg',
    missionName: 'SES-22',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-06-29T21:04:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/ZjUvXWg2_fE',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 167,
    missionPatch: null,
    missionName: 'USSF-44',
    rocketName: 'Falcon Heavy',
    success: null,
    launchDate: '2022-11-01T13:41:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/pY628jRd6gM',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 168,
    missionPatch: null,
    missionName: 'O3b mPower 1,2',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-11-01T00:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 169,
    missionPatch: 'https://images2.imgbox.com/45/9f/Na8zs6V4_o.png',
    missionName: 'Starlink 4-15 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-05-14T20:40:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/nFDkWL2Hmh8',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 170,
    missionPatch: 'https://images2.imgbox.com/46/a4/j5tV5LLx_o.png',
    missionName: 'Starlink 4-13 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-05-13T22:07:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: 'https://youtu.be/bG6AwvGPd-E',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 171,
    missionPatch: 'https://images2.imgbox.com/f2/ba/8LUO26uP_o.png',
    missionName: 'Starlink 4-16 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-04-29T21:27:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/skNrXnubpwA',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Starlink',
    },
  },
  {
    id: 172,
    missionPatch: 'https://images2.imgbox.com/1c/64/JbkoahWh_o.png',
    missionName: 'Starlink 4-17 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-05-06T09:42:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/KzpVUXxdc68',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 173,
    missionPatch: 'https://images2.imgbox.com/b8/49/OVeV3xJg_o.png',
    missionName: 'Starlink 4-18 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-05-18T10:40:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/dQTgX40R-IQ',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 174,
    missionPatch: 'https://images2.imgbox.com/ea/40/slQKbK6Y_o.png',
    missionName: 'Starlink 4-19 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-06-01T17:08:50.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/oCN-BMU9-hM',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 175,
    missionPatch: 'https://images2.imgbox.com/8b/bd/1cZPPs46_o.png',
    missionName: 'Globalstar FM15',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-06-19T04:27:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/94cClvOFWH4',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/Globalstar',
    },
  },
  {
    id: 176,
    missionPatch: 'https://images2.imgbox.com/b4/ad/i3KVeFRA_o.png',
    missionName: 'Starlink 4-21 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-07-07T13:11:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/u_A7xdnVllM',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 177,
    missionPatch: 'https://images2.imgbox.com/8a/bc/C3bBWOQN_o.png',
    missionName: 'Starlink 3-1 (v1.5)',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-07-11T01:39:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: 'https://youtu.be/_c738Z_zQR0',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 178,
    missionPatch: 'https://images2.imgbox.com/ba/9b/INF3SG3k_o.png',
    missionName: 'Starlink 4-22 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-07-17T14:50:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/7VWcjgYfJ9U',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 179,
    missionPatch: 'https://images2.imgbox.com/74/7b/F8vvXC49_o.png',
    missionName: 'Starlink 3-2 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-07-21T17:13:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: 'https://youtu.be/BuXdtORWrpg',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 180,
    missionPatch: 'https://images2.imgbox.com/8b/5a/zJ1W8QIE_o.png',
    missionName: 'Starlink 4-25 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-07-24T00:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 181,
    missionPatch: 'https://images2.imgbox.com/9a/11/gjRM9dTi_o.png',
    missionName: 'KPLO',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-08-04T23:08:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/rTrkHZjiO_8',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 182,
    missionPatch: 'https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png',
    missionName: 'Starlink 4-2 (v1.5) & Blue Walker 3',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-09-11T01:10:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 183,
    missionPatch: 'https://images2.imgbox.com/db/0c/Qrfi4lgd_o.png',
    missionName: 'Starlink 4-26 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-08-09T22:57:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/ck5z0uMGz8s',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 184,
    missionPatch: 'https://images2.imgbox.com/eb/d8/D1Yywp0w_o.png',
    missionName: 'Crew-5',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-10-05T16:00:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/5EwW8ZkArL4',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: 'https://en.wikipedia.org/wiki/SpaceX_Crew-5',
    },
  },
  {
    id: 185,
    missionPatch: 'https://images2.imgbox.com/d0/90/pKNXVgeG_o.png',
    missionName: 'Starlink 3-3 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-08-12T21:30:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: 'https://youtu.be/SU5FbiCbjic',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 186,
    missionPatch: 'https://images2.imgbox.com/ba/c7/O1spe4aF_o.png',
    missionName: 'Starlink 4-27 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-08-19T19:24:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/M018DAaNd_E',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 187,
    missionPatch: 'https://images2.imgbox.com/12/42/5T8I9wZL_o.png',
    missionName: 'Starlink 4-23 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-08-28T02:22:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: 'https://youtu.be/07RGJ04HRns',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 188,
    missionPatch: 'https://images2.imgbox.com/dc/a0/erKL6HGq_o.png',
    missionName: 'Starlink 4-20 (v1.5) & Sherpa LTC-2/Varuna-TDM',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-09-05T02:09:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/NONM-xsKMSs',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 189,
    missionPatch: 'https://images2.imgbox.com/72/07/PtgYfiFT_o.png',
    missionName: 'Starlink 3-4 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-08-31T05:40:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: 'https://youtu.be/zSJWK_pmXVw',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 190,
    missionPatch: 'https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png',
    missionName: 'Starlink 4-34 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-09-17T01:05:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/ZlQHF_yBkMQ',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 191,
    missionPatch: 'https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png',
    missionName: 'Starlink 4-35 (v1.5)',
    rocketName: 'Falcon 9',
    success: true,
    launchDate: '2022-09-24T23:30:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/VVu2bSJJhgI',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 192,
    missionPatch: 'https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png',
    missionName: 'Starlink 4-36 (v1.5)',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-10-20T14:50:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/iYtH2khNIgU',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 193,
    missionPatch: null,
    missionName: 'TTL-1',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-12-01T00:00:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 194,
    missionPatch: null,
    missionName: 'Galaxy 33 (15R) & 34 (12R)',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-10-08T23:05:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 195,
    missionPatch: null,
    missionName: 'Hotbird 13F',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-10-15T05:22:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 196,
    missionPatch: 'https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png',
    missionName: 'Starlink 4-37 (v1.5)',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-11-01T00:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: 'https://youtu.be/wcq7xiTOPRg',
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 197,
    missionPatch: null,
    missionName: 'Galaxy 31 (23R) & 32 (17R)',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-11-08T00:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 198,
    missionPatch: null,
    missionName: 'Eutelsat 10B',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-11-15T00:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 199,
    missionPatch: null,
    missionName: 'CRS-26',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-11-18T22:00:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 200,
    missionPatch: null,
    missionName: 'Hotbird 13G',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-11-03T03:24:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 201,
    missionPatch: null,
    missionName: 'SES-18 & SES-19',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-11-01T00:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 202,
    missionPatch: null,
    missionName: 'Viasat-3 & Arcturus',
    rocketName: 'Falcon Heavy',
    success: null,
    launchDate: '2022-12-01T00:00:00.000Z',
    launchSiteName: 'Kennedy Space Center Historic Launch Complex 39A',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 203,
    missionPatch: null,
    missionName: 'ispace Mission 1 & Rashid',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-11-22T00:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 204,
    missionPatch: null,
    missionName: 'SWOT',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-12-05T00:00:00.000Z',
    launchSiteName: 'Vandenberg Space Force Base Space Launch Complex 4E',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
  {
    id: 205,
    missionPatch: null,
    missionName: 'Transporter-6',
    rocketName: 'Falcon 9',
    success: null,
    launchDate: '2022-12-01T00:00:00.000Z',
    launchSiteName:
      'Cape Canaveral Space Force Station Space Launch Complex 40',
    details: null,
    links: {
      videoLink: null,
      presskitLink: null,
      articleLink: null,
      wikipediaLink: null,
    },
  },
];
