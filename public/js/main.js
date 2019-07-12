console.log('js is linked, yo!')

Vue.component('main-nav', {
  template: `
  <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
      <a class="navbar-brand" href="/" id="brand"> 40northography </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/about"> about <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/gear"> my gear <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/otherSites"> other sites <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/socialMedia"> social media <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/theSkippyProject" target="_blank"> the skippy project </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              european expedition
            </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/europeanExpedition">trip overview</a>
            <a class="dropdown-item" href="/walkingMap" target="_blank"> walking map </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/oslo">oslo, norway</a>
            <a class="dropdown-item" href="/stockholm">stockholm, sweden</a>
            <a class="dropdown-item" href="/copenhagen">copenhagen, denmark</a>
            <a class="dropdown-item" href="/munich">munich, germany</a>
            <a class="dropdown-item" href="/innsbruck">innsbruck, austria</a>
            <a class="dropdown-item" href="/verona">verona, italy</a>
            <a class="dropdown-item" href="/florence">florence, italy</a>
            <a class="dropdown-item" href="/rome">rome, italy</a>
            <a class="dropdown-item" href="/vatican">vatican, italy</a>
            <a class="dropdown-item" href="/amsterdam">amsterdam, netherlands</a>
            <a class="dropdown-item" href="/brussels">brussels, belgium</a>
            <a class="dropdown-item" href="/london">london, england</a>
            <a class="dropdown-item" href="/reykjavik">reykjavik, iceland</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/europeanExpedition">back to the start of the trip</a>
          </div>
          </li>
        </ul>
      </div>
    </nav>
  `,
}) /* z main-nav */

Vue.component('accordion5', {
  template: `
  <div id="accordion" role="tablist">
    <div class="card" id="day1">
      <div class="card-header" role="tab" id="headingOne">
        <h5 class="mb-0">
          <div data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            day {{day1}}: {{date1}} - {{location1}}
          </div>
        </h5>
      </div>
      <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description1}}</p>
        </div>
      </div>
    </div>
    <div class="card" id="day2">
      <div class="card-header" role="tab" id="headingTwo">
        <h5 class="mb-0">
          <div class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            day {{day2}}: {{date2}} - {{location2}}
          </div>
        </h5>
      </div>
      <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description2}}</p>
        </div>
      </div>
    </div>
    <div class="card" id="day3">
      <div class="card-header" role="tab" id="headingThree">
        <h5 class="mb-0">
          <div class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            day {{day3}}: {{date3}} - {{location3}}
          </div>
        </h5>
      </div>
      <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description3}}</p>
        </div>
      </div>
    </div>
    <div class="card" id="day4">
      <div class="card-header" role="tab" id="headingFour">
        <h5 class="mb-0">
          <div class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
            day {{day4}}: {{date4}} - {{location4}}
          </div>
        </h5>
      </div>
      <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description4}}</p>
        </div>
      </div>
    </div>
    <div class="card" id="day5">
      <div class="card-header" role="tab" id="headingFive">
        <h5 class="mb-0">
          <div class="collapsed" data-toggle="collapse" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
            day {{day5}}: {{date5}} - {{location5}}
          </div>
        </h5>
      </div>
      <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description5}}</p>
        </div>
      </div>
    </div>
  </div>
  `,
  props: [
    'day1', 'date1', 'location1', 'description1',
    'day2', 'date2', 'location2', 'description2',
    'day3', 'date3', 'location3', 'description3',
    'day4', 'date4', 'location4', 'description4',
    'day5', 'date5', 'location5', 'description5',
  ],
}) /* z accordion */

Vue.component('accordion4', {
  template: `
  <div id="accordion" role="tablist">
    <div class="card" id="day1">
      <div class="card-header" role="tab" id="headingOne">
        <h5 class="mb-0">
          <div data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            day {{day1}}: {{date1}} - {{location1}}
          </div>
        </h5>
      </div>
      <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description1}}</p>
        </div>
      </div>
    </div>
    <div class="card" id="day2">
      <div class="card-header" role="tab" id="headingTwo">
        <h5 class="mb-0">
          <div class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            day {{day2}}: {{date2}} - {{location2}}
          </div>
        </h5>
      </div>
      <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description2}}</p>
        </div>
      </div>
    </div>
    <div class="card" id="day3">
      <div class="card-header" role="tab" id="headingThree">
        <h5 class="mb-0">
          <div class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            day {{day3}}: {{date3}} - {{location3}}
          </div>
        </h5>
      </div>
      <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description3}}</p>
        </div>
      </div>
    </div>
    <div class="card" id="day4">
      <div class="card-header" role="tab" id="headingFour">
        <h5 class="mb-0">
          <div class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
            day {{day4}}: {{date4}} - {{location4}}
          </div>
        </h5>
      </div>
      <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description4}}</p>
        </div>
      </div>
    </div>
  </div>
  `,
  props: [
    'day1', 'date1', 'location1', 'description1',
    'day2', 'date2', 'location2', 'description2',
    'day3', 'date3', 'location3', 'description3',
    'day4', 'date4', 'location4', 'description4',
  ],
}) /* z accordion */

Vue.component('accordion3', {
  template: `
  <div id="accordion" role="tablist">
    <div class="card" id="day1">
      <div class="card-header" role="tab" id="headingOne">
        <h5 class="mb-0">
          <div data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            day {{day1}}: {{date1}} - {{location1}}
          </div>
        </h5>
      </div>
      <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description1}}</p>
        </div>
      </div>
    </div>
    <div class="card" id="day2">
      <div class="card-header" role="tab" id="headingTwo">
        <h5 class="mb-0">
          <div class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            day {{day2}}: {{date2}} - {{location2}}
          </div>
        </h5>
      </div>
      <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description2}}</p>
        </div>
      </div>
    </div>
    <div class="card" id="day3">
      <div class="card-header" role="tab" id="headingThree">
        <h5 class="mb-0">
          <div class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            day {{day3}}: {{date3}} - {{location3}}
          </div>
        </h5>
      </div>
      <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description3}}</p>
        </div>
      </div>
    </div>
  </div>
  `,
  props: [
    'day1', 'date1', 'location1', 'description1',
    'day2', 'date2', 'location2', 'description2',
    'day3', 'date3', 'location3', 'description3',
  ],
}) /* z accordion */

Vue.component('accordion2', {
  template: `
  <div id="accordion" role="tablist">
    <div class="card" id="day1">
      <div class="card-header" role="tab" id="headingOne">
        <h5 class="mb-0">
          <div data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            day {{day1}}: {{date1}} - {{location1}}
          </div>
        </h5>
      </div>
      <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description1}}</p>
        </div>
      </div>
    </div>
    <div class="card" id="day2">
      <div class="card-header" role="tab" id="headingTwo">
        <h5 class="mb-0">
          <div class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            day {{day2}}: {{date2}} - {{location2}}
          </div>
        </h5>
      </div>
      <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description2}}</p>
        </div>
      </div>
    </div>
  </div>
  `,
  props: [
    'day1', 'date1', 'location1', 'description1',
    'day2', 'date2', 'location2', 'description2',
  ],
}) /* z accordion */

Vue.component('accordion1', {
  template: `
  <div id="accordion" role="tablist">
    <div class="card">
      <div class="card-header" role="tab" id="headingOne">
        <h5 class="mb-0">
          <div data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            day {{day1}}: {{date1}} - {{location1}}
          </div>
        </h5>
      </div>
      <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          <p class="detailText">{{description1}}</p>
        </div>
      </div>
    </div>
  </div>
  `,
  props: [
    'day1', 'date1', 'location1', 'description1',
  ],
}) /* z accordion */

Vue.component('long-carousel-img', {
  template: `
  <div class="carousel-item">
    <img v-bind:src="url" v-bind:alt="altDesc">
    <div class="carousel-caption d-none d-md-block">
      <h3>{{imgHead}}</h3>
      <p>{{imgDesc}}</p>
    </div>
  </div>
  `,
  props: ['url', 'altDesc', 'imgHead', 'imgDesc'],
})

Vue.component('carousel-img', {
  template:`
  <div class="carousel-item">
    <img class="d-block w-100" v-bind:src="url" v-bind:alt="altDesc"/>
    </div>
  </div>
  `,
  props: ['url', 'altDesc'],
})



var mainVM = new Vue({
  el: '#app',
  data: {

  },

  methods: {

  },
})  // z mainVM
