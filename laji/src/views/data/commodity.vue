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

        commodity.set('name', '曼陀罗')
        commodity.set('price', 6357)

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
        query.get('58ae88308fd9c50063c2200f').then(function (commodity) {
          mapCommodity = commodity
          query.get('58ac59ee8fd9c50067fcf9f8').then(function (material) {
            mapMaterial = material

            var CommodityMaterialMap = AV.Object.extend('CommodityMaterialMap')
            var commodityMaterialMap = new CommodityMaterialMap()

            commodityMaterialMap.set('commodity', mapCommodity)
            commodityMaterialMap.set('material', mapMaterial)
            commodityMaterialMap.set('quantity', 6)

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
