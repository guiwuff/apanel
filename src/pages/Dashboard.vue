<template>
  <div>
    <b-card-group deck
      class="mb-4">
      <b-card bg-variant="success" class="card-summary">
        <h6 class="card-title">New Users <small>Current Month</small></h6>
        <p class="card-text text-center card-focus mb-0">435</p>
        <p slot="footer" class="text-muted mb-0">Updated <small><i class="ti-check"></i></small></p>
      </b-card>
      <b-card bg-variant="primary" class="text-white card-summary">
        <h6 class="card-title">Total Payments <small>Current Month</small></h6>
        <p class="card-text text-center card-focus mb-0">1305</p>
        <p slot="footer" class="text-muted mb-0">Updated 5 mnts ago <small><i class="ti-pulse"></i></small></p>
      </b-card>
      <b-card bg-variant="warning" class="card-summary">
        <h6 class="card-title">Total Bets <small>Current Month</small></h6>
        <p class="card-text text-center card-focus mb-0">2303</p>
        <p slot="footer" class="text-muted mb-0">Updated 15 mnts ago <small><i class="ti-pulse"></i></small></p>
      </b-card>
      <b-card bg-variant="info" class="text-white card-summary">
        <h6 class="card-title">New Groups <small>Current Month</small></h6>
        <p class="card-text text-center card-focus mb-0">5</p>
        <p slot="footer" class="text-muted mb-0">Updated 5 mnts ago <small><i class="ti-pulse"></i></small></p>
      </b-card>
    </b-card-group>
    <b-card
      bg-variant="faded">
      <line-chart :chart-data="totalBets" :options="{maintainAspectRatio: false}"/>
      <h5 class="card-title">Total of Bets <small>Last 7 Days</small></h5>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      totalBets: null
    }
  },
  mounted () {
    this.drawTotalBets()
  },
  methods: {
    drawTotalBets () {
      this.totalBets = {
        labels: ['1','2','3','4','5','6','7'],
        datasets: [
          {
            label: 'Total Bets Daily',
            backgroundColor: '#9400ff',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * ( 500 - 50 + 10)) + 50
    }
  }
}
</script>
