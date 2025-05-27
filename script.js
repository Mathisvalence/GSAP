
 
 
 
 
 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)
  // gsap code here!


let split = SplitText.create(".split", {

  type: "words",
  
  autoSplit: true,
  onSplit: (self) => {
    return gsap.from(self.words, {
      y: 50,
      opacity: 0,
      stagger: 0.05
    });
  }
});
let split2 = SplitText.create(".split2", {

  type: "words",
  
  autoSplit: true,
  onSplit: (self) => {
    return gsap.from(self.words, {
      y: 30,
      opacity: 0,
      stagger: 0.003,
      
    });
  }
});



 });

 
