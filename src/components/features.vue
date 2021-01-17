<script>
import {
  LayoutIcon,
  LifeBuoyIcon,
  ServerIcon,
  RssIcon,
  EyeIcon,
  CrosshairIcon,
  MessageCircleIcon
} from "vue-feather-icons";
export default {
  components: { LayoutIcon, LifeBuoyIcon, ServerIcon, RssIcon, EyeIcon, CrosshairIcon, MessageCircleIcon }
};
</script>

<template>
  <div>
    <!-- Features Start -->
    <section
      class="section bg-light feather-bg-img"
      :style="{'background-image': 'url(' + require('@/assets/images/so-white.png') + ')'}"
      id="features"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mb-5">
              <h3 class="title mb-3">About Faith Works and Company</h3>
              <p class="text-muted font-size-15">
                <em>Faith Works and Company</em> is a faith-based, vision and mission driven organization that proclaims the will of God through services that teaches the importance of lifestyles based on Christ-centeredness for all.
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="mb-4 mb-lg-0">
              <img src="@/assets/images/about-image.jpg" alt class="img-fluid d-block mx-auto" />
            </div>
          </div>

          <div class="col-lg-5 offset-lg-1">
            <!--<p class="font-weight-medium text-uppercase mb-2">
              <i class="mdi mdi-chart-bubble h2 text-primary mr-1 align-middle"></i> Quisque accumsan nisi nec magna
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              Lorem <b>ipsum</b> & <b>dolor</b> sit amet, <b>consectetuer</b>
            </h3>-->
            <p class="text-muted font-size-15 mb-4">
              Not only does faith work; God works, love works, peace works, joy works, salvation works, prayer works, encouragement works, ministry works, and I can go on and on. We are here to assist God's people with their ministry needs.
            </p>
            <p class="text-muted mb-2">
              <eye-icon class="icon-xs mr-1"></eye-icon><strong>Vision:</strong> To assist all of mankind in their perspective and vantage-point faith journey through ministry.
            </p>
            <p class="text-muted">
              <crosshair-icon class="icon-xs mr-1"></crosshair-icon><strong>Mission:</strong> To keep the faith, my promises and alliances of duty, and services, as I honor God, my Creator, and God's people.
            </p>
            <p class="text-muted">
              <message-circle-icon class="icon-xs mr-1"></message-circle-icon><strong>Motto:</strong> Plant faith in God, everything else will grow.
            </p>
            <div class="mt-5">
              <a href="javascript: void(0);" v-scroll-to="{ el: '#contact' }" class="btn btn-primary mr-2">Contact Us</a>
              <!--<a href="javascript: void(0);" class="btn btn-soft-primary">Buy Now</a>-->
            </div>
          </div>
        </div>
      </div>
    </section>
  <!--
    <section
      class="section feather-bg-img"
      :style="{'background-image': 'url(' + require('@/assets/images/features-bg-img-1.png') + ')'}"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <p class="font-weight-medium text-uppercase mb-2">
              <i class="mdi mdi-chart-bubble h2 text-primary mr-1 align-middle"></i> Creative Features
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              We do the work you
              <b>stay focused</b> on
              <b>
                your
                customers
              </b>.
            </h3>
             <h3 class="font-weight-semibold line-height-1_4 mb-4">Build <b>community</b> & <b>conversion</b> with our suite of <b>social tool</b></h3> 
            <p class="text-muted font-size-15 mb-4">
              Temporibus autem quibusdam et aut officiis debitis aut rerum a
              necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae itaque.
            </p>
            <p class="text-muted mb-2">
              <server-icon class="icon-xs mr-1"></server-icon>Donec pede justo fringilla vel nec.
            </p>
            <p class="text-muted">
              <rss-icon class="icon-xs mr-1"></rss-icon>Cras ultricies mi eu turpis hendrerit fringilla.
            </p>
            <div class="mt-5">
              <a href="javascript: void(0);" class="btn btn-primary mr-2">Read More</a>
              <a href="javascript: void(0);" class="btn btn-soft-primary">Buy Now</a>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="mt-4 mt-lg-0">
              <img src="@/assets/images/features-img-1.png" alt class="img-fluid d-block mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
    -->
    <!-- Features End -->
  </div>
</template>