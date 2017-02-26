<template>
  <section class="commidity">
    <button @click="addCommodity">Add commodity</button>
    <br>
    <button @click="addCommodityMaterialMap">Add commodity material map</button>
  </section>
</template>

<script>
  /* global AV:true */
  export default {
    methods: {
      addCommodity: function () {
        var Commodity = AV.Object.extend('Commodity')
        var commodity = new Commodity()

        commodity.set('name', '亡者遗物')
        commodity.set('price', 309)
        commodity.set('making_cost', 0)

        commodity.save().then(function (res) {
          console.log(res)
        }, function (error) {
          console.error(error)
        })
      },
      addCommodityMaterialMap: function () {
        var mapCommodity = {}
        var mapMaterial = {}

        var query = new AV.Query('Commodity')
        query.get('58b237b88d6d810057ec2862').then(function (commodity) {
          mapCommodity = commodity
          query.get('58b233a0b123db0052c97a90').then(function (material) {
            mapMaterial = material

            var CommodityMaterialMap = AV.Object.extend('CommodityMaterialMap')
            var commodityMaterialMap = new CommodityMaterialMap()

            commodityMaterialMap.set('commodity', mapCommodity)
            commodityMaterialMap.set('material', mapMaterial)
            commodityMaterialMap.set('quantity', 19)

            commodityMaterialMap.save().then(function (res) {
              console.log(res)
            }, function (error) {
              console.error(error)
            })
          })
        })
      }
    }
  }
</script>
