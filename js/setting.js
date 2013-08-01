/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'sakaide_city_2013_yosan';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* yokohama cofog */
  '20130100': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' },
  '20130101': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' },
  '20130102': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130103': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130200': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#0AB971' },
  '20130201': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20130202': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20130203': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20130204': { icon: 'icons/admin-order-safety.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20130205': { icon: 'icons/vote.svg', color: '#C75746', bcolor: '#D33673' },
  '20130206': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#D33673' },
  '20130207': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#D33673' },
  '20130208': { icon: 'icons/worldmap.svg', color: '#C75746', bcolor: '#D33673' },
  '20130300': { icon: 'icons/c_kenkou_fukushi.svg', color: '#C75746', bcolor: '#D33673' },
  '20130301': { icon: 'icons/c_kenkou.svg', color: '#C75746', bcolor: '#D33673' },
  '20130302': { icon: 'icons/c_fukushi.svg', color: '#C75746', bcolor: '#D33673' },
  '20130303': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#D33673' },
  '20130304': { icon: 'icons/aid-developing-countries.svg', color: '#C75746', bcolor: '#D33673' },
  '20130400': { icon: 'icons/c_kosodate_shien.svg', color: '#C75746', bcolor: '#D33673' },
  '20130401': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#D33673' },
  '20130402': { icon: 'icons/child.svg', color: '#C75746', bcolor: '#D33673' },
  '20130403': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#D33673' },
  '20130404': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#D33673' },
  '20130405': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#D33673' },
  '20130406': { icon: 'icons/c_bunnka.svg', color: '#C75746', bcolor: '#D33673' },
  '20130407': { icon: 'icons/books.svg', color: '#C75746', bcolor: '#D33673' },
  '20130408': { icon: 'icons/hospital-specialized.svg', color: '#C75746', bcolor: '#D33673' },
  '20130409': { icon: 'icons/culture.svg', color: '#C75746', bcolor: '#D33673' },
  '20130500': { icon: 'icons/c_sankaku_ikusei.svg', color: '#C75746', bcolor: '#D33673' },
  '20130501': { icon: 'icons/c_sankaku_ikusei.svg', color: '#C75746', bcolor: '#D33673' },
  '20130502': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#D33673' },
  '20130503': { icon: 'icons/restoration.svg', color: '#C75746', bcolor: '#D33673' },
  '20130600': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#D33673' },
  '20130601': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#D33673' },
  '20130602': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#D33673' },
  '20130603': { icon: 'icons/car.svg', color: '#C75746', bcolor: '#D33673' },
  '20130604': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#D33673' },
  '20130605': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#D33673' },
  '20130606': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#D33673' },
  '20130700': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#D33673' },
  '20130701': { icon: 'icons/c_syoukougyou.svg', color: '#C75746', bcolor: '#D33673' },
  '20130702': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#D33673' },
  '20130800': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#D33673' },
  '20130801': { icon: 'icons/transport.svg', color: '#C75746', bcolor: '#D33673' },
  '20130802': { icon: 'icons/railways.svg', color: '#C75746', bcolor: '#D33673' },
  '20130900': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#D33673' },
  '20130901': { icon: 'icons/pollution.svg', color: '#C75746', bcolor: '#D33673' },
  '20130902': { icon: 'icons/waste.svg', color: '#C75746', bcolor: '#D33673' },
  '20130903': { icon: 'icons/toilet.svg', color: '#C75746', bcolor: '#D33673' },
  '20131000': { icon: 'icons/anchor.svg', color: '#C75746', bcolor: '#D33673' },
  '20131001': { icon: 'icons/anchor.svg', color: '#C75746', bcolor: '#D33673' },
  '20131002': { icon: 'icons/harbor.svg', color: '#C75746', bcolor: '#D33673' },
  '20131100': { icon: 'icons/c_syoubou_bousai.svg', color: '#C75746', bcolor: '#D33673' },
  '20131101': { icon: 'icons/ambulance.svg', color: '#C75746', bcolor: '#D33673' },
  '20131102': { icon: 'icons/c_bousai.svg', color: '#C75746', bcolor: '#D33673' },
};


