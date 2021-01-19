<script>
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Service from "@/components/services";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import axios from "axios";
/**
 * Index-1
 */
export default {
  data(){
    return {
      SingleEmail: ''
    }
  },
  components: { 
    Navbar, 
    About, 
    Service, 
    Features,
    Testimonials, 
    Contact, 
    Footer
  },
  methods : {
    /*
    emailAddressForm() {
      console.log("Single email form clicked");
      axios.post('/api/contacts', {
        SingleEmail: this.SingleEmail
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }*/
  }
};
// Removed Pricing, Blog
</script>

<template>
  <div>
    <Navbar />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section
        class="hero-1-bg"
        :style="{'background-image': 'url(' + require('@/assets/images/so-white.png') + ')'}"
        id="home"
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6">
              <h1 class="hero-1-title text-primary font-weight-bold text-shadow mb-4">
                Greetings in the name of our Lord and Saviour, Jesus Christ.
              </h1>
              <div class="w-75 mb-5 mb-lg-0">
                <p class="text-muted mb-2 font-size-17">
                  It’s time to grow your faith. When you plant faith in God, everything else will grow. Maya Angelou once said, “Let Faith be the bridge you build to overcome evil and welcome good.” How strong is your faith? Do you have faith the size of a mustard seed? When the trials of life come, when the strong winds blow, are you strong enough to handle the aftermath and tribulations they bring? Do you believe your faith is strong enough to withstand the wilds of the enemy?
                </p>
                <p class="text-muted mb-3 pb-3 font-size-17">
                  In order to be deeply rooted in faith, you must be willing to be like a tree planted by the rivers of water with deep planted roots that will stand tall and withstand anything that comes your way. We hope you find these resources useful as you strengthen your faith-walk relationship with God.
                </p>
                <p class="mb-3">
                  <em>"But without faith it is impossible to please Him; for he that cometh to God must believe that He is, and that He is a rewarder of them that diligently seek Him."</em> ~Hebrews 11:6 (KJV)~
                </p>
                <div class="subscribe-form">
                  <form action="https://formspree.io/f/mrgorbno" method="POST" name="email-address-form" id="email-address-form">
                    <input type="text" v-model="SingleEmail" name="Email Address" placeholder="Email address" />
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-10">
              <div class="mt-5 mt-lg-0">
                <img src="@/assets/images/header-profile-shot.jpg" alt class="img-fluid d-block mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Hero End -->
      <About />
      <Features />
      <Service />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  </div>
</template>