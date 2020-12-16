<script>
import {
  SendIcon,
  MailIcon,
  LinkIcon,
  PhoneCallIcon,
  ClockIcon,
  MapPinIcon
} from "vue-feather-icons";
import axios from "axios";
export default {
  name: "FooterContact",
  data(){
    return {
      name: '',
      email: '',
      comments: ''
    }
  },
  components: {
    SendIcon,
    MailIcon,
    LinkIcon,
    PhoneCallIcon,
    ClockIcon,
    MapPinIcon,
  },
  methods : {
    submitForm() {
      console.log("contact form clicked");
      axios.post('/api/contacts', {
        name: this.name,
        email: this.email,
        comments: this.comments
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })  
      /*axios({
        method: "post",
        url: "/",
        data: data,
      })
        .then((res) => {
          //Perform Success Action
        }).catch((error) => {
          // error.response.status Check status code
        }).finally(() => {  
          //Peform action in always
        });*/
    }
  }
};
</script>
<template>
  <!-- Contact Us Start -->
  <section class="section bg-light" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mb-5">
            <h3 class="title mb-3">Contact Us</h3>
            <p class="text-muted font-size-15">
              Let <em>Faith Works and Company, LLC</em> assist you in your faith journey. Please fill out the information below and we will respond within forty-eight hours. Thank you for contacting us!
            </p>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="custom-form mb-5 mb-lg-0">
            <div id="message"></div>
            <form @submit.prevent="submitForm" name="contact-form" id="contactForm">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Name*</label>
                    <input id="name" v-model="name" type="text" class="form-control" placeholder="Your name..." />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="email">Email Address*</label>
                    <input id="email" v-model="email" type="email" class="form-control" placeholder="Your email..." />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="comments">Message*</label>
                    <textarea
                      v-model="comments"
                      id="comments"
                      rows="4"
                      class="form-control"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <button type="submit" id="submitForm" class="btn btn-primary">
                    Send Message
                    <send-icon class="icon-size-15 ml-2 icon"></send-icon>
                  </button>
                  <div id="simple-msg"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="contact-detail text-muted ml-lg-5">
            <p class>
              <mail-icon class="icon-xs icon mr-1"></mail-icon>:
                <span><a href="mailto:faithworksandcompany@gmail.com" target="_blank">faithworksandcompany@gmail.com</a></span>
            </p>
            <p class>
              <LinkIcon class="icon-xs icon mr-1"></LinkIcon>:
              <span>www.faithworksandcompany.com</span>
            </p>
            <p class>
              <PhoneCallIcon class="icon-xs icon mr-1"></PhoneCallIcon>:
              <span>Business cell: <a href="tel:704-299-9746">(704) 299 9746</a></span>
            </p>
            <!--<p class>
              <ClockIcon class="icon-xs icon mr-1"></ClockIcon>:
              <span>9:00 AM - 6:00 PM</span>
            </p>-->
            <p class>
              <MapPinIcon class="icon-xs icon mr-1"></MapPinIcon>:
              <span>10522 Broken Branch Road, Charlotte, NC 28213</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact Us End -->
</template>