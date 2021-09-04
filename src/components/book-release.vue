<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default {
    components: {
        Navbar,
        Footer
    }
}
</script>
<template>
  <div>
      <Navbar />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section
        class="hero-1-bg"
        :style="{'background-image': 'url(' + require('@/assets/images/so-white.png') + ')'}"
        id="book-release"
      >
        <div class="container">
          <div class="row align-items-center centered">
           <div class="col-lg-6">
               <div class="mb-5">
                    <h3 class="title mb-3 centered">
                        Have you ever felt like you are seen but just not heard? <br/><br/>My book is finally here and it’s what your heart needs, a peace that you didn’t even know you had. You don’t have to wait any longer D.I.V.A.
                    </h3>
                    <p class="content text-muted">
                        In the storm of life, we need an anchor that grips the solid rock. Sometimes it’s necessary to know the reason or underlying purpose for why we face certain situations in life. If you need to ‘fill your cup,’ your navigation system is in the walls of my book. You don’t have time to waste in life to become equal or better. It’s time for some inspirational luggage for this once in a lifetime trip. Here’s an opportunity to tap into your true self as a woman in the world while <em><strong>Embracing Singleness In God’s Way</strong></em>. This book is a living testimony to the power of God’s peace as you’re transformed from a life of loneliness to a legacy of love.
                    </p>
                    <p class="content text-muted">
                        Each chapter gives an opportunity to write reflections as you read, remember, respond, and meditate on the Word of God through Scripture and prayer. You will be introduced to the why’s, how’s, when’s, what’s, and where’s of life, strategies and techniques, along with life’s situations, and best practices for how to respond. You will find words of wisdom that will inspire, enrich, enlightened, and encourage your heart, mind, body, soul, and spirit as you prepare for the next dimension in life. It may seem a little practical at times, but it will keep you rooted and grounded in what works. Expect to be changed; so, go, grow, and glow in God as my book maximizes and magnetizes your life for a lifetime then we can talk. Enjoy!
                    </p>
                    
                </div>
           </div>
           <div class="col-lg-6">
               <!--Amazon book picture-->
               <img src="../assets/images/Embracing-Singleness-Book-Flyer-Release.jpg" alt="Embracing Singleness Book Flyer Release" width="100%">
           </div>
          </div>
          <div class="row align-items-center text-center">
              <div class="col-lg-12">
                  <h3 class="content">
                        If you’re interested in purchasing, the buying choices are:
                  </h3>
              </div>
          </div>
          <div class="row align-items-center text-center" id="payment-logos">
              <div class="col-lg-6">
                  <a href="http://www.faithworksandcompany.com" target="_blank">
                      <img src="../assets/images/globe-color.png" alt="Faithworks and Company" width="50%">
                  </a>
                  <h4>
                      Faithworks website
                  </h4>
              </div>
              <div class="col-lg-6">
                  <a href="https://www.amazon.com/Embracing-Singleness-Gods-Annie-Bell/dp/B09CKFV5K1/ref=sr_1_1?dchild=1&keywords=embracing+singleness+in+god%27s+way&qid=1629420271&sr=8-1" target="_blank">
                      <img src="../assets/images/amazon-logo-transparent.png" alt="Amazon" width="50%">
                  </a>
                  <h4>
                      Amazon
                  </h4>
              </div>
          </div>
          <div class="row align-items-center text-center" id="payment-links">
              <div class="col-lg-6">
                  <a href="javascript: void(0);" class="btn btn-primary mr-2">Zelle</a>
              </div>
              <div class="col-lg-6">
                  <a href="javascript: void(0);" class="btn btn-primary mr-2">CashApp</a>
              </div>
          </div>
        </div>
      </section>
      <!-- Hero End -->
      <Footer />
    </div>
  </div>
</template>