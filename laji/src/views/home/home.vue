<template>
  <section class="home page">

    <div class="card-commodity" v-for="commodity in sorted_commodities">
      <h2 class="commodity-name">{{ commodity.name }}
        <small> - {{ commodity.source }}</small>
      </h2>
      <div class="commodity-info">
        <div>售价: <em>{{ commodity.price }}</em></div>
        <div>利润: <em>{{ (commodity.price - commodity.material_cost - (commodity.price * 0.1) -
          commodity.making_cost).toFixed(0) }}</em></div>
        <div>利率: <em>{{ ((commodity.price - commodity.material_cost - (commodity.price * 0.1) - commodity.making_cost) /
          commodity.price * 100).toFixed(1) }}</em>%
        </div>
      </div>
    </div>

  </section>
</template>

<style>
  .card-commodity { padding: 20px 15px; box-shadow: 0 1px 3px -3px rgba(0, 0, 0, .8); }
  .card-commodity .commodity-name { font-weight: 100; font-size: 30px; color: #111; line-height: 1.1; }
  .card-commodity .commodity-name > small { font-size: 10px; }
  .card-commodity .commodity-info { display: flex; color: #999; font-size: 10px; margin-top: 5px; }
  .card-commodity .commodity-info > div { flex: 1; }
  .card-commodity .commodity-info > div:not(:first-child) { text-align: right; }
  .card-commodity .commodity-info > div > em { color: #666; font-size: 14px; }
</style>

<script>
  /* global AV:true */
  export default {
    data () {
      return {
        commodities: []
      }
    },
    computed: {
      sorted_commodities: function () {
        return this.commodities.sort((c1, c2) => {
          var c1_value = (c1.price - c1.material_cost - (c1.price * 0.1) - c1.making_cost) / c1.price;
          var c2_value = (c2.price - c2.material_cost - (c2.price * 0.1) - c2.making_cost) / c2.price;
          return c2_value - c1_value;
        });
      }
    },
    mounted () {
      this.queryManual();
    },
    methods: {
      queryManual: function () {
        var query = new AV.Query('CommodityMaterialMap');
        query.include('commodity');
        query.include('material');
        query.find().then(res_manuals => {
          res_manuals.map(res_manual => {
            var manual = res_manual.toJSON();
            manual.commodity = res_manual.get('commodity').toJSON();
            manual.material = res_manual.get('material').toJSON();
            if (!ifExistId(this.commodities, 'objectId', manual.commodity.objectId)) {
              var commodity = manual.commodity;
              commodity.materials = [manual.material];
              commodity.material_cost = manual.material.price * manual.quantity;
              this.commodities.push(commodity);
            } else {
              var cur_commodity = this.commodities[this.commodities.length - 1];
              cur_commodity.material_cost += manual.material.price * manual.quantity;
              cur_commodity.materials.push(manual.material);
            }
          });
        });
      }
    }
  }

  function ifExistId(arr, field, id) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][field] === id) return true;
    }
    return false;
  }
</script>
