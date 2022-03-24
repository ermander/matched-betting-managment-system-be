const competitionIds = [
  {
    competitionId: '10680392',
    nation: 'Italia',
    tournament: 'Serie A'
  }
  //   {
  //     competitionId: '10680121',
  //     nation: 'Italia',
  //     tournament: 'Serie B'
  //   },
  //   {
  //     competitionId: '12982440',
  //     nation: 'Italia',
  //     tournament: 'Serie C,  Girone A'
  //   },
  //   {
  //     competitionId: '13934474',
  //     nation: 'Italia',
  //     tournament: 'Serie C, Girone B'
  //   },
  //   {
  //     competitionId: '13986647',
  //     nation: 'Italia',
  //     tournament: "'Serie C, Girone C"
  //   },
  //   {
  //     competitionId: '10680537',
  //     nation: 'Argentina',
  //     tournament: 'Primera B National'
  //   },
  //   {
  //     competitionId: '11523237',
  //     nation: 'Australia',
  //     tournament: 'A-League'
  //   },
  //   {
  //     competitionId: '10680021',
  //     nation: 'Cile',
  //     tournament: 'Primera Division'
  //   },
  //   {
  //     competitionId: '15751013',
  //     nation: 'Colombia',
  //     tournament: 'Primera A'
  //   },
  //   {
  //     competitionId: '10680006',
  //     nation: 'Colombia',
  //     tournament: 'Primera B'
  //   },
  //   {
  //     competitionId: '13315771',
  //     nation: 'Corea del Sud',
  //     tournament: 'k-League 2'
  //   },
  //   {
  //     competitionId: '12735553',
  //     nation: 'Francia',
  //     tournament: 'Ligue 1'
  //   },
  //   {
  //     competitionId: '10679909',
  //     nation: 'Germania',
  //     tournament: 'Bundesliga'
  //   },
  //   {
  //     competitionId: '12735501',
  //     nation: 'Inghilterra',
  //     tournament: 'Premier Ligue'
  //   },
  //   {
  //     competitionId: '10679903',
  //     nation: 'Inghilterra',
  //     tournament: 'League One'
  //   },
  //   {
  //     competitionId: '10679933',
  //     nation: 'Inghilterra',
  //     tournament: 'League Two'
  //   },
  //   {
  //     competitionId: '15342603',
  //     nation: 'Irlanda del Nord',
  //     tournament: 'Premiership'
  //   },
  //   {
  //     competitionId: '11523272',
  //     nation: 'Olanda',
  //     tournament: 'Eredivisie'
  //   },
  //   {
  //     competitionId: '10680049',
  //     nation: 'Olanda',
  //     tournament: 'Eerste Divisie'
  //   },
  //   {
  //     competitionId: '10680192',
  //     nation: 'Paraguay',
  //     tournament: 'Primera Division'
  //   },
  //   {
  //     competitionId: '11526480',
  //     nation: 'Portogallo',
  //     tournament: 'Primeira Liga'
  //   },
  //   {
  //     competitionId: '11021740',
  //     nation: 'Scozia',
  //     tournament: 'Championship'
  //   },
  //   {
  //     competitionId: '11021702',
  //     nation: 'Scozia',
  //     tournament: 'League One'
  //   },
  //   {
  //     competitionId: '10975703',
  //     nation: 'Scozia',
  //     tournament: 'League Two'
  //   },
  //   {
  //     competitionId: '10679937',
  //     nation: 'Spagna',
  //     tournament: 'La Liga'
  //   },
  //   {
  //     competitionId: '11523240',
  //     nation: 'Spagna',
  //     tournament: 'Segunda Division'
  //   },
  //   {
  //     competitionId: '10680135',
  //     nation: 'Turchia',
  //     tournament: 'Super Lig'
  //   },
  //   {
  //     competitionId: '10679978',
  //     nation: 'USA',
  //     tournament: 'MLS'
  //   }
]

const marketCodes = [
  // 1X2
  '3AAXB%2CMRES',
  // U/O
  '3AOU%2COVUN',
  // GG/NG
  '3ABTS%2CBTSC',
  // DC
  '3ADC%2CDBLC'
]

const marketNames = {
  'Under 0.5': 'under0_5',
  'Under 1.5': 'under1_5',
  'Under 2.5': 'under2_5',
  'Under 3.5': 'under3_5',
  'Under 4.5': 'under4_5',
  'Under 5.5': 'under5_5',
  'Under 6.5': 'under6_5',
  'Under 7.5': 'under7_5',
  'Under 8.5': 'under8_5',
  'Over 0.5': 'over0_5',
  'Over 1.5': 'over1_5',
  'Over 2.5': 'over2_5',
  'Over 3.5': 'over3_5',
  'Over 4.5': 'over4_5',
  'Over 5.5': 'over5_5',
  'Over 6.5': 'over6_5',
  'Over 7.5': 'over7_5',
  'Over 8.5': 'over8_5',
  Sì: 'GG',
  No: 'NG'
}

const baseUrl = [
  'https://sports.pokerstarssports.it/sportsbook/v1/api/getCompetitionEvents?competitionId=',
  '&marketTypes=SOCCER%3AFT%',
  '&includeOutrights=false&channelId=3&locale=it-it&siteId=16'
]

module.exports = { competitionIds, marketCodes, baseUrl, marketNames }
