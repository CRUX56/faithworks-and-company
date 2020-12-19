<script>
    import {
        ArrowLeftCircleIcon,
        ArrowRightCircleIcon
    } from "vue-feather-icons";
    import VueTinySlider from 'vue-tiny-slider';
    export default {
        components: {
            ArrowLeftCircleIcon,
            ArrowRightCircleIcon,
            'tiny-slider' : VueTinySlider
        }
    }
    
</script>
<template>
    <!-- Testimonials start -->
    <section class="section bg-light" id="testimonials">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="text-center mb-5">
                        <h3 class="title mb-3">
                            Testimonials
                        </h3>
                        <p class="text-muted font-size-15">
                            Lorem ipsum dolor sit amet, consectetuer nemo enim. Vestibulum molestie in odio rhoncus molestie.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <!--Testimonials goes here-->
                    <tiny-slider :mouse-drag="true" :loop="true" items="1" gutter="20">
                        <div>
                            <p>Recently, I had the pleasure of being a guest at a Women’s Conference (Mt Moriah Primitive Baptist church) facilitated by Dr. Annie Wright-Bell, Faith Works &amp; Company, LLC. Let me say it was totally amazing. Dr. Bell was energetic, informative, transparent and most of all encouraging. Her ability to empower and reach women was commendable. So excited to implement the strategies shared during the conference. This was an amazing event! I will be using Dr. Annie Wright-Bell (Faith Works &amp; Company, LLC) for future events to empower and inspire women!<br/> - <strong>Chandra Scott Charlotte, North Carolina</strong></p>
                        </div>
                        <div>Testimonials item #2</div>
                        <div>Testimonials item #3</div>
                        <div>Testimonials item #4</div>
                        <div>Testimonials item #5</div>
                        <div>Testimonials item #6</div>
                    </tiny-slider>
                </div>
            </div>
        </div>
    </section>
</template>