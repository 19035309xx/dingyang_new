<template>
 <div >
        <Stockk></Stockk>
  <Investigation></Investigation>

     <Stock></Stock>
     
 
    

 </div>
</template>

<script>

import Stock from '../components/stock.vue'
import Report from '../components/report.vue'
import Investment from '../components/investment.vue'
import Forecast1 from '../components/forecast1.vue'
import Investigation from '../components/Investigation.vue'
import Other from '../components/other.vue'
import Stockk from '../components/stock2.vue'


export default {
 components:{

Stock,
Report,
 Investment,
  Investigation,
   Other,
    Forecast1 ,
     Stockk

  
 
 }
}
</script>