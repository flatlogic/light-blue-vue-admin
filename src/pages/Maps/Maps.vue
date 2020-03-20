<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>Google Maps</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">
      Google <span class="fw-semi-bold">Maps</span>
    </h1>
    <b-row>
      <b-col xs="12" md="10">
        <Widget
                title="<h5>Vue Google Maps <small class='text-muted'>Default and customized</small></h5>"
                customHeader close collapse
        >
          <GmapMap
                  :center="{lat: -37.813179, lng: 144.950259}"
                  :zoom="12"
                  style="width: 100%; height: 60vh"
                  :options="options"
          >
            <GmapMarker
                    :position="{lat: -37.813179, lng: 144.950259}"
            />
          </GmapMap>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Widget from '@/components/Widget/Widget';

  export default {
    name: 'Maps',
    data() {
      return {
        options: {},
      }
    },
    created() {
      this.$gmapApiPromiseLazy().then(() => {
        this.options = {
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DEFAULT
          }
        }
      })
    },
    components: { Widget }
  };
</script>

<style src="./Maps.scss" lang="scss" scoped />
