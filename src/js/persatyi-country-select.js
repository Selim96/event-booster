const list = {
  US: 'United States Of America',
  AD: 'Andorra',
  AI: 'Anguilla',
  AR: 'Argentina',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BB: 'Barbados',
  BE: 'Belgium',
  BM: 'Bermuda',
  BR: 'Brazil',
  BG: 'Bulgaria',
  CA: 'Canada',
  CL: 'Chile',
  CN: 'China',
  CO: 'Colombia',
  CR: 'Costa Rica',
  HR: 'Croatia',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DK: 'Denmark',
  DO: 'Dominican Republic',
  EC: 'Ecuador',
  EE: 'Estonia',
  FO: 'Faroe Islands',
  FI: 'Finland',
  FR: 'France',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GB: 'Great Britain',
  GR: 'Greece',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  IE: 'Ireland',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  KR: 'Korea, Republic of',
  LV: 'Latvia',
  LB: 'Lebanon',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MY: 'Malaysia',
  MT: 'Malta',
  MX: 'Mexico',
  MC: 'Monaco',
  ME: 'Montenegro',
  MA: 'Morocco',
  NL: 'Netherlands',
  AN: 'Netherlands Antilles',
  NZ: 'New Zealand',
  ND: 'Northern Ireland',
  NO: 'Norway',
  PE: 'Peru',
  PL: 'Poland',
  PT: 'Portugal',
  RO: 'Romania',
  RU: 'Russian Federation',
  LC: 'Saint Lucia',
  SA: 'Saudi Arabia',
  RS: 'Serbia',
  SG: 'Singapore',
  SK: 'Slovakia',
  SI: 'Slovenia',
  ZA: 'South Africa',
  ES: 'Spain',
  SE: 'Sweden',
  CH: 'Switzerland',
  TW: 'Taiwan',
  TH: 'Thailand',
  TT: 'Trinidad and Tobago',
  TR: 'Turkey',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  UY: 'Uruguay',
  VE: 'Venezuela',
};

const dropdown = document.querySelector('.options-container');
const selected = document.querySelector('[data-selected-country]');
const searchBoxInput = document.querySelector('.search-box input');

let selectedCountry = '';

const keysOfCountries = Object.keys(list);
let markup = keysOfCountries
  .map(
    code => `<div class="option">
    <input type="radio" class="radio" id="${code}" name="category">
    <label for="${code}">${list[code]}</label>
    </div>`,
  )
  .join('');
dropdown.insertAdjacentHTML('beforeend', markup);

selected.addEventListener('click', () => {
  dropdown.classList.toggle('active');
  searchBoxInput.classList.toggle('active');

  searchBoxInput.value = '';
  filterList('');

  if (dropdown.classList.contains('active')) {
    searchBoxInput.focus();
  }
});

const optionsList = document.querySelectorAll('.option');

optionsList.forEach(o => {
  o.addEventListener('click', () => {
    selectedCountry = selected.textContent = o.querySelector('label').textContent;
    dropdown.classList.remove('active');
    searchBoxInput.classList.remove('active');
  });
});

searchBoxInput.addEventListener('keyup', function (e) {
  filterList(e.target.value);
});

function filterList(searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach(option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) !== -1) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
}

export { selectedCountry };