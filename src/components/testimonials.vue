<script>
    import {
        ArrowLeftCircleIcon,
        ArrowRightCircleIcon
    } from "vue-feather-icons";
    import VueTinySlider from 'vue-tiny-slider';
    export default {
        data(){
            return {
                tinySliderTestimonials: {
                    autoplay: true,
                    loop: true,
                    navPosition: "bottom",
                    controls: false,
                    autoplayButtonOutput: false
                }
            }
        },
        components: {
            ArrowLeftCircleIcon,
            ArrowRightCircleIcon,
            'tiny-slider' : VueTinySlider
        },
        methods: {
            getInfo: function(event){
                this.$refs.tinySlider.slider.getInfo();
            }
        }
    }
</script>
<template>
    <!-- Testimonials start -->
    <section class="section bg-light feather-bg-img" :style="{'background-image': 'url(' + require('@/assets/images/so-white.png') + ')'}" id="testimonials">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="text-center mb-5">
                        <h3 class="title mb-3">
                            Testimonials
                        </h3>
                        <!--
                        <p class="text-muted font-size-15">
                            Lorem ipsum dolor sit amet, consectetuer nemo enim. Vestibulum molestie in odio rhoncus molestie.
                        </p>-->
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <!--Testimonials goes here-->
                    <tiny-slider v-bind="tinySliderTestimonials" :mouse-drag="true" :loop="true" items="1" gutter="20">
                        <div>
                            <p>Recently, I had the pleasure of being a guest at a Women’s Conference facilitated by Dr. Annie Wright-Bell, of <em>Faith Works &amp; Company, LLC.</em> Let me say it was totally amazing! Dr. Bell was energetic, informative, transparent and most of all encouraging. Her ability to empower and reach women was commendable. So excited to implement the strategies shared during the conference. This was an amazing event! I will be using Dr. Bell and Faith Works &amp; Company, for future events to empower and inspire women.<br/><br/> - <strong>Chandra Scott, <em>Workshop Participant</em></strong></p>
                        </div>
                        <div>
                            <p>Earlier in 2020 my grandmother passed away after a brief illness. Although it’s still difficult to deal with, my family and I are coping. One of my sons who is eight years old started grieving about losing his grandmother. I wasn’t sure what to do so I spoke with Dr. Bell about counseling. Since those counseling sessions, my son is able to understand the process and cope with his feelings. He can also use the strategies to help with other situations in his life. Dr. Bell is amazing when working with children and her sympathy and empathy toward others is contagious. She came highly recommended to me, so I highly recommend her to you!<br/><br/> - <strong>Sharae Hill, <em>Youth Counseling</em></strong></p>
                        </div>
                        <div>
                            <p>Elder Bell is a no none-sense, amazing Woman of God, who has a phenomenal hunger and thirst after the Lord’s Righteousness. As she prepares herself to listen to what the Spirit of the Lord is saying to her, while sharing the Word of God with others, she’s transformed with transparency through her passion for preaching and teaching. Many times, I have found myself calling her for Holy Spirit led advice. Her influence, integrity, encouragement, and spiritual guidance has changed my life forever. I am honored that she entrusted me to be her Armor Bearer, but most importantly honored that I was chosen by God. <br/><br/> - <strong>Angela Reid, <em>Armor Bearer</em></strong></p>
                        </div>
                        <div>
                            <p>Dr. Bell’s skills have proven to be an unbelievable gift for our family. She always provided a safe and secure environment where we could freely explore obstacles. She has given us so many tools that have helped us build a marriage of trust, honesty, and love. We chose Dr. Bell for our Premarital Counseling and 9 years later, we are stronger than ever! Thank you, Dr. Bell, for being our angel!<br/><br/> - <strong>The Benjamins, ,<em>Premarital Counseling</em></strong></p>
                        </div>
                        <div>
                            <p>Dr. Bell facilitated a Single’s Conference at my church. The Conference Title was: “Living a Single Life-Mind, Body, and Soul.” Her emphasis was on the “Soul.” Dr. Bell’s presentation was interactive and filled with Scriptural context. We left the conference feeling very enlightened. Dr. Bell did a phenomenal job!<br/><br/> - <strong>Taleah Hill, <em>Conference Coordinator</em></strong></p>
                        </div>
                        <div>
                            <p>Dr. A. W. Bell was invited to conduct our Singles Ministry Seminar. She led lively, relevant discussions with the participants. Ann’s use of technology made the presentation come alive as she used Scriptural slides, hands-on material and group participation to engage everyone. There were questions and answers that were Biblically based. Dr. Bell was well prepared and as such, the Singles Ministry requested her back to do a Part 2. Wonderful! I have known Ann for many years, and I am proud of the work she’s doing for the Kingdom of God.<br/><br/> - <strong>Brenda Richmond, <em>Seminar Participant</em></strong></p>
                        </div>
                        <div>
                            <p>My wife and I met Dr. Bell a few years ago while attending Partners to the Promise School of Christian Education. She was the Instructor for Biblical Counseling 1 &amp; 2, and I must say, it was a complete JOY to be students in her class. Dr. Bell used her masterful skills and ability to capture the imagination of every student. The visual aids coupled with various strategies were outstanding. Dr. Bell’s teaching style promotes confidence and the willingness to work hard. Her impression on us was so vivid that we asked her to be a part of our mentoring program, TeamUpConnections. Of all the instructors that have crossed our path, Dr. Bell is among the top!<br/><br/> - <strong>The Sturdivants, <em>President/CEO TeamUpConnections</em></strong></p>
                        </div>
                    </tiny-slider>
                </div>
            </div>
        </div>
    </section>
</template>