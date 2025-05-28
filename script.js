
 
 

 
 // use a script tag or an external JS file



 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)




  // gsap code here



const slideEase = "cubic-bezier(0.65,0.05,0.36,1)";


gsap.utils.toArray(".split").forEach((el) => {
let split = SplitText.create(el, {

  type: "words",
  
  autoSplit: true,

  onSplit: (self) => {
    return gsap.from(self.words, {
      y: 70,
      opacity: 0,
      rotate:15,
      stagger: 0.06,
      ease: slideEase,
      

        scrollTrigger: {
         scrub:1,
        trigger: el,
        start: "top 70%",
        end: "top 40%", // Quand le haut de l'élément atteint 80% de la fenêtre
        toggleActions: "play none none reverse", // jouer à l'entrée, rien à la sortie
         markers: true
      }

    });
  }
});
});





let split2 = SplitText.create(".split2", {

 type: "words, lines", // only split into words and lines (not characters)
 type: "words, lines", // only split into words and lines (not characters)
  mask: "lines", // adds extra wrapper element around lines with overflow: clip (v3.13.0+) // adds extra wrapper element around lines with overflow: clip (v3.13.0+)
  
  autoSplit: true,
  onSplit: (self) => {
    return gsap.from(self.words, {
      y: 30,
      rotate:5,
      opacity: 0,
      stagger: 0.01,
       ease: slideEase,


               scrollTrigger: {
         scrub: 1,
        trigger: ".split2",
         // Quand le haut de l'élément atteint 80% de la fenêtre
        start: "top 70%",
        end: "top 40%",
        toggleActions: "play none none reverse", // jouer à l'entrée, rien à la sortie
         markers: true
      }

        });
  }
});
});

 
