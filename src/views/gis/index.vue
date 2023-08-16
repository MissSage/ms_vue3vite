<template>
  <div id="arcmap-wrapper" class="map-wrapper">
    <div ref="refMapWrapper" class="mapbox"></div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue"
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
// import WFSLayer from "@arcgis/core/layers/WFSLayer"
import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
const refMapWrapper = ref<HTMLDivElement>()
const mapDom = document.createElement("div")
mapDom.id = "viewDiv"
mapDom.className = "viewDiv"
const map = new Map({
  // satellite", "hybrid", "terrain", "oceans", "osm", "dark-gray-vector", "gray-vector", "streets-vector", "topo-vector", "streets-night-vector", "streets-relief-vector", "streets-navigation-vector"
  basemap: "satellite"
})
const view: __esri.MapView = new MapView({
  container: mapDom,
  map,
  center: [117.09, 30.64],
  zoom: 11,
  highlightOptions: {
    fillOpacity: 0,
    haloOpacity: 0.7
  }
})
// 清除默认微件
view.ui.remove("attribution")
view.ui.remove("zoom")
view.ui.padding = {
  bottom: 15,
  left: 30,
  right: 30,
  top: 15
}
const imgLayer = new MapImageLayer({
  url: 'http://111.38.103.11:6080/arcgis/rest/services/ANQING/qingyang_23_08_11_01/MapServer'
})
map.add(imgLayer)
// const layer = new WFSLayer({
//   url: 'http://111.38.103.11:6080/arcgis/services/ANQING/qingyang_23_08_11_01/MapServer/WFSServer',
// })
// map.add(layer)
imgLayer.when().then(() => {
  view.goTo(imgLayer.fullExtent)
})
onMounted(() => {
  refMapWrapper.value?.appendChild(mapDom)
})
</script>
<style lang="scss" scoped>
.mapbox {
  width: 500px;
  height: 600px;
}

.map-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  :deep(.esri-ui-top-left) {
    flex-flow: row;
  }

  :deep(.esri-ui-bottom-right) {
    flex-flow: column;

    &.esri-widget--button,
    .esri-widget--button {
      border-top: solid 1px rgba(173, 173, 173, 0.3);
    }
  }
}
</style>
<style>
.viewDiv {
  width: 100%;
  height: 100%;
}
</style>
