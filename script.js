/* --- NAVIGATION --- */
document.getElementById("navlink").innerHTML = "Home";
document.getElementById("navlink2").innerHTML = "Models";
document.getElementById("navlink3").innerHTML = "Explore";
document.getElementById("navlink4").innerHTML = "Technology";


/* --- HERO SECTION --- */
document.getElementById("herotitle").innerHTML = "Volvo XC-60";
document.getElementById("herodesc").innerHTML = "The mid-size SUV that delivers smart performance with a sculpted design.";
document.getElementById("herobtn1").innerHTML = "Buy Now";
document.getElementById("herobtn2").innerHTML = "Test Drive";

document.getElementById("statlabel1").innerHTML = "Acceleration";
document.getElementById("statval1").innerHTML = "6.2s";

document.getElementById("statlabel2").innerHTML = "Top Speed";
document.getElementById("statval2").innerHTML = "230km/h";

document.getElementById("statlabel3").innerHTML = "Braking";
document.getElementById("statval3").innerHTML = "80%";


/* --- SAFETY SECTION --- */
/* --- SAFETY SECTION --- */
// Panel 1
/* --- SAFETY SECTION --- */
// Panel 1
document.getElementById("safetytitle").innerHTML = "Safety.";
document.getElementById("safetytitle2").innerHTML = "It's in our DNA.";
document.getElementById("safetydesc").innerHTML = "Every Volvo is engineered with the most advanced driver-assist systems to keep you and your loved ones safe.";

// Panel 2
document.getElementById("safetytitle3").innerHTML = "Driver Assistance";
document.getElementById("safetytitle4").innerHTML = "Peace of mind.";
document.getElementById("safetydesc2").innerHTML = "Adaptive cruise control and lane keeping assist help you drive safely.";

// Panel 3
document.getElementById("safetytitle5").innerHTML = "Crash Safety";
document.getElementById("safetytitle6").innerHTML = "Built to protect.";
document.getElementById("safetydesc3").innerHTML = "Innovative safety cage and airbags designed for maximum protection.";

// Panel 4
document.getElementById("safetytitle7").innerHTML = "Advanced Sensors";
document.getElementById("safetytitle8").innerHTML = "Always alert.";
document.getElementById("safetydesc4").innerHTML = "Radar and camera systems monitor your surroundings for maximum safety.";





/* --- SAFETY SECTION --- */
gsap.registerPlugin(ScrollTrigger);

let safetySection = document.querySelector(".safetysection");
let safetyWrapper = document.querySelector(".safety-wrapper");
let panels = gsap.utils.toArray(".safety-wrapper > div");

function getScrollAmount() {
  return -(safetyWrapper.scrollWidth - window.innerWidth);
}

const tween = gsap.to(safetyWrapper, {
  x: getScrollAmount,
  ease: "none",
  scrollTrigger: {
    trigger: ".safetysection",
    pin: true,
    scrub: 1,
    // SPEED CONTROL: Dividing by 2 makes the scroll 2x faster.
    // (You scroll 100px down, the content moves 200px sideways)
    end: () => "+=" + (safetyWrapper.scrollWidth - window.innerWidth) / 3,
    invalidateOnRefresh: true,
    snap: {
      snapTo: 1 / (panels.length - 1),
      // SNAP SPEED:
      duration: { min: 0.1, max: 0.1 }, // Snapping animation is very quick
      delay: 0.0, // Start snapping immediately (no waiting)
      ease: "power1.inOut"
    }
  }
});




/* --- FUTURE SECTION --- */
document.getElementById("futuretitle").innerHTML = "Driving towards an all-electric future";
document.getElementById("futuredesc").innerHTML = "Volvo is reinventing mobility with cleaner energy, reduced emissions, and a fully electric lineup by 2030. Volvo is reinventing mobility with cleaner energy.";
document.getElementById("futurebtn1").innerHTML = "Buy Now";
document.getElementById("futurebtn2").innerHTML = "Test Drive";

document.getElementById("featuretitle1").innerHTML = "Cleaner Production";
document.getElementById("featuredesc1").innerHTML = "Volvo's factories use renewable energy and advanced efficiency standards.";

document.getElementById("featuretitle2").innerHTML = "Responsible Materials";
document.getElementById("featuredesc2").innerHTML = "Our cars use recycled plastics, textiles, and sustainably sourced materials.";

document.getElementById("featuretitle3").innerHTML = "Zero Emission Vision";
document.getElementById("featuredesc3").innerHTML = "We are committed to be fully electric by 2030 and climate-neutral by 2040.";


/* --- MODEL SECTION --- */
/* Big Card XC90 */
document.getElementById("bigcardtitle").innerHTML = "Volvo XC90";
document.getElementById("bigcarddesc").innerHTML = "Our flagship SUV continues to define new luxury with exceptional safety.";
document.getElementById("metriclabel1").innerHTML = "Acceleration";
document.getElementById("metricval1").innerHTML = "5.5S";
document.getElementById("metriclabel2").innerHTML = "Top Speed";
document.getElementById("metricval2").innerHTML = "180KM/H";
document.getElementById("metriclabel3").innerHTML = "Range";
document.getElementById("metricval3").innerHTML = "480KM";
document.getElementById("cardbtn1").innerHTML = "Buy Now";
document.getElementById("cardbtn2").innerHTML = "Test Drive";

/* Small Card XC40 */
document.getElementById("modeltitle1").innerHTML = "Volvo XC40";
document.getElementById("modeldesc1").innerHTML = "Our compact SUV reimagines city life with smart storage.";
document.getElementById("mslabel1_1").innerHTML = "Acceleration";
document.getElementById("msval1_1").innerHTML = "4.9s";
document.getElementById("mslabel1_2").innerHTML = "Top Speed";
document.getElementById("msval1_2").innerHTML = "180km/h";
document.getElementById("mslabel1_3").innerHTML = "Range";
document.getElementById("msval1_3").innerHTML = "418km";
document.getElementById("smallbtn1_1").innerHTML = "Buy Now";
document.getElementById("smallbtn1_2").innerHTML = "Test Drive";

/* Small Card XC60 */
document.getElementById("modeltitle2").innerHTML = "Volvo XC60";
document.getElementById("modeldesc2").innerHTML = "The dynamic mid-size SUV with refreshed design and built-in Google.";
document.getElementById("mslabel2_1").innerHTML = "Acceleration";
document.getElementById("msval2_1").innerHTML = "5.2s";
document.getElementById("mslabel2_2").innerHTML = "Top Speed";
document.getElementById("msval2_2").innerHTML = "210km/h";
document.getElementById("mslabel2_3").innerHTML = "Range";
document.getElementById("msval2_3").innerHTML = "High";
document.getElementById("smallbtn2_1").innerHTML = "Buy Now";
document.getElementById("smallbtn2_2").innerHTML = "Test Drive";


/* --- FOOTER --- */
document.getElementById("footertitle1").innerHTML = "Media";
document.getElementById("footerlink1").innerHTML = "Media Relations";
document.getElementById("footerlink2").innerHTML = "Investor Relations";
document.getElementById("footerlink3").innerHTML = "Careers";

document.getElementById("footertitle2").innerHTML = "Cars";
document.getElementById("footerlink4").innerHTML = "XC90";
document.getElementById("footerlink5").innerHTML = "XC60";
document.getElementById("footerlink6").innerHTML = "XC40";

document.getElementById("footertitle3").innerHTML = "Support";
document.getElementById("footerlink7").innerHTML = "Contact Us";
document.getElementById("footerlink8").innerHTML = "Find a Dealer";
document.getElementById("footerlink9").innerHTML = "Book Service";

/* Navigation Scroll Logic (Mimicking your style) */
document.querySelector('.navlink2').onclick = function () {
  document.querySelector('.modelsection').scrollIntoView({ behavior: 'smooth' });
};

document.querySelector('.navlink3').onclick = function () {
  document.querySelector('.futuresection').scrollIntoView({ behavior: 'smooth' });
};






gsap.registerPlugin(ScrollTrigger);

gsap.to(".bannerimage", {
  yPercent: -40,
  ease: "none",
  scrollTrigger: {
    trigger: ".bannersection",
    start: "top bottom",
    end: "bottom top",
    scrub: 1.2
  }
});


gsap.to(".bannerimage", {
  yPercent: -40,
  scale: 1.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".bannersection",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});




/* --- GLASSY NAVBAR WITH SMOOTH HOVER (GSAP) --- */

const navbar = document.querySelector(".navmenu");
const navLinks = document.querySelectorAll(".navmenu h1");

// Apply glassy base styling to the navbar with smooth transitions
Object.assign(navbar.style, {
  background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 50%, rgba(100,180,255,0.1) 100%)",
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.25)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)",
  transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.5s ease, background 0.5s ease, border 0.5s ease",
  transformOrigin: "center center"
});

navbar.style.position = "relative";

// Entrance animation
const navTimeline = gsap.timeline({ defaults: { ease: "power2.out" } });
navTimeline
  .from(navbar, {
    y: -60,
    opacity: 0,
    duration: 1,
    delay: 0.2
  })
  .from(navLinks, {
    y: 10,
    opacity: 0,
    duration: 0.5,
    stagger: 0.06
  }, "-=0.5");

// Smooth hover effect on the entire navbar
navbar.addEventListener("mouseenter", () => {
  navbar.style.transform = "scale(1.03)";
  navbar.style.background = "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 50%, rgba(100,180,255,0.15) 100%)";
  navbar.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 0 30px rgba(100, 180, 255, 0.15)";
  navbar.style.border = "1px solid rgba(255, 255, 255, 0.35)";
});

navbar.addEventListener("mouseleave", () => {
  navbar.style.transform = "scale(1)";
  navbar.style.background = "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 50%, rgba(100,180,255,0.1) 100%)";
  navbar.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)";
  navbar.style.border = "1px solid rgba(255, 255, 255, 0.25)";
});

// Keep nav links styled but without individual hover effects
navLinks.forEach((link) => {
  link.style.display = "inline-block";
  link.style.cursor = "pointer";
});

/* --- NEW MODELS --- */

/* Card 3: Volvo S90 */
document.getElementById("modeltitle3").innerHTML = "Volvo S90";
document.getElementById("modeldesc3").innerHTML = "The luxury sedan that redefines elegance and comfort.";
document.getElementById("mslabel3_1").innerHTML = "Acceleration";
document.getElementById("msval3_1").innerHTML = "6.2s";
document.getElementById("mslabel3_2").innerHTML = "Top Speed";
document.getElementById("msval3_2").innerHTML = "180km/h";
document.getElementById("mslabel3_3").innerHTML = "Consumption";
document.getElementById("msval3_3").innerHTML = "6.7L/100km";
document.getElementById("smallbtn3_1").innerHTML = "Buy Now";
document.getElementById("smallbtn3_2").innerHTML = "Test Drive";

/* Card 4: Volvo S60 */
document.getElementById("modeltitle4").innerHTML = "Volvo S60";
document.getElementById("modeldesc4").innerHTML = "The dynamic sedan designed for the pure joy of driving.";
document.getElementById("mslabel4_1").innerHTML = "Acceleration";
document.getElementById("msval4_1").innerHTML = "5.8s";
document.getElementById("mslabel4_2").innerHTML = "Top Speed";
document.getElementById("msval4_2").innerHTML = "180km/h";
document.getElementById("mslabel4_3").innerHTML = "Consumption";
document.getElementById("msval4_3").innerHTML = "6.8L/100km";
document.getElementById("smallbtn4_1").innerHTML = "Buy Now";
document.getElementById("smallbtn4_2").innerHTML = "Test Drive";

/* Card 5: Volvo EX90 */
document.getElementById("modeltitle5").innerHTML = "Volvo EX90";
document.getElementById("modeldesc5").innerHTML = "Our new fully electric flagship SUV for the new era.";
document.getElementById("mslabel5_1").innerHTML = "Acceleration";
document.getElementById("msval5_1").innerHTML = "4.9s";
document.getElementById("mslabel5_2").innerHTML = "Top Speed";
document.getElementById("msval5_2").innerHTML = "180km/h";
document.getElementById("mslabel5_3").innerHTML = "Range";
document.getElementById("msval5_3").innerHTML = "600km";
document.getElementById("smallbtn5_1").innerHTML = "Buy Now";
document.getElementById("smallbtn5_2").innerHTML = "Test Drive";

/* Card 6: Volvo EX40 */
document.getElementById("modeltitle6").innerHTML = "Volvo EX40";
document.getElementById("modeldesc6").innerHTML = "The fully electric compact SUV for urban adventures.";
document.getElementById("mslabel6_1").innerHTML = "Acceleration";
document.getElementById("msval6_1").innerHTML = "4.7s";
document.getElementById("mslabel6_2").innerHTML = "Top Speed";
document.getElementById("msval6_2").innerHTML = "180km/h";
document.getElementById("mslabel6_3").innerHTML = "Range";
document.getElementById("msval6_3").innerHTML = "500km";
document.getElementById("smallbtn6_1").innerHTML = "Buy Now";
document.getElementById("smallbtn6_2").innerHTML = "Test Drive";

/* Card 7: Volvo EX30 */
document.getElementById("modeltitle7").innerHTML = "Volvo EX30";
document.getElementById("modeldesc7").innerHTML = "Our smallest ever electric SUV with big electric performance.";
document.getElementById("mslabel7_1").innerHTML = "Acceleration";
document.getElementById("msval7_1").innerHTML = "3.6s";
document.getElementById("mslabel7_2").innerHTML = "Top Speed";
document.getElementById("msval7_2").innerHTML = "180km/h";
document.getElementById("mslabel7_3").innerHTML = "Range";
document.getElementById("msval7_3").innerHTML = "480km";
document.getElementById("smallbtn7_1").innerHTML = "Buy Now";
document.getElementById("smallbtn7_2").innerHTML = "Test Drive";

/* Card 8: Volvo V60 */
document.getElementById("modeltitle8").innerHTML = "Volvo V60";
document.getElementById("modeldesc8").innerHTML = "The versatile estate designed for all your life's adventures.";
document.getElementById("mslabel8_1").innerHTML = "Acceleration";
document.getElementById("msval8_1").innerHTML = "6.4s";
document.getElementById("mslabel8_2").innerHTML = "Top Speed";
document.getElementById("msval8_2").innerHTML = "180km/h";
document.getElementById("mslabel8_3").innerHTML = "Consumption";
document.getElementById("msval8_3").innerHTML = "6.5L/100km";
document.getElementById("smallbtn8_1").innerHTML = "Buy Now";
document.getElementById("smallbtn8_2").innerHTML = "Test Drive";


/* --- GLOBAL ANIMATIONS --- */
// Ensure elements are initially visible or handled by GSAP
gsap.from(".herocontent", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0.5
});

gsap.from(".herovisual", {
  x: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.5
});

// Model Cards Stagger
ScrollTrigger.batch(".modelcard", {
  onEnter: batch => gsap.from(batch, {
    autoAlpha: 0,
    y: 60,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
    overwrite: true
  })
});

// Future Section
gsap.from(".futurecontent", {
  scrollTrigger: {
    trigger: ".futuresection",
    start: "top 70%"
  },
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.from(".futurecar", {
  scrollTrigger: {
    trigger: ".futuresection",
    start: "top 70%"
  },
  x: 100,
  opacity: 0,
  duration: 1.2
});

gsap.from(".futurefeature", {
  scrollTrigger: {
    trigger: ".futurerow",
    start: "top 85%"
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});

// Generic Section Animation
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});
