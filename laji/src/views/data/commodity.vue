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

        commodity.set('name', '柔毛')
        commodity.set('price', 200)
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
        query.get('58afd1532f301e0068f76b8f').then(function (commodity) {
          mapCommodity = commodity
          query.get('58afd1732f301e006cfb052c').then(function (material) {
            mapMaterial = material

            var CommodityMaterialMap = AV.Object.extend('CommodityMaterialMap')
            var commodityMaterialMap = new CommodityMaterialMap()

            commodityMaterialMap.set('commodity', mapCommodity)
            commodityMaterialMap.set('material', mapMaterial)
            commodityMaterialMap.set('quantity', 200)

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
