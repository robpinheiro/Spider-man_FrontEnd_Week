document.addEventListener('DOMContentLoaded', () =>{
   let tl = new TimelineMax() ;

   tl.fromTo('.bg-loader', 1/* Tempo de transição*/, 
   {width: '100%'}/* From inicio*/, 
   {width: '0%',delay: 5, ease: Expo.easeInOut}/* To Fim*/)

   .fromTo('.bg-video', 2/* Tempo de transição*/, 
   {width: '0%', opacity: 0}/* From inicio*/, 
   {width: '100%',opacity: 1, ease: Expo.easeInOut}, '-=1' /* To Fim*/)

   .fromTo('.logo', 0.7/* Tempo de transição*/, 
   {y: -50, opacity: 0}/* From inicio*/, 
   {y: 0,opacity: 1, ease: Expo.easeInOut}, '-=0.5' /* To Fim*/)

   .fromTo('.nav-list', 0.7/* Tempo de transição*/, 
   {y: -50, opacity: 0}/* From inicio*/, 
   {y: 0,opacity: 1, ease: Expo.easeInOut}, '-=0.5' /* To Fim*/)

   .fromTo('.nav-social', 0.7/* Tempo de transição*/, 
   {y: -50, opacity: 0}/* From inicio*/, 
   {y: 0,opacity: 1, ease: Expo.easeInOut}, '-=0.5' /* To Fim*/)

   .fromTo('.item-1', 0.7/* Tempo de transição*/, 
   {y: -50, opacity: 0}/* From inicio*/, 
   {y: 0,opacity: 1, ease: Expo.easeInOut}, '-=0.5' /* To Fim*/)

   .fromTo('.item-2', 0.7/* Tempo de transição*/, 
   {y: -50, opacity: 0}/* From inicio*/, 
   {y: 0,opacity: 1, ease: Expo.easeInOut}, '-=0.5' /* To Fim*/)

   .fromTo('.item-3', 0.7/* Tempo de transição*/, 
   {y: -50, opacity: 0}/* From inicio*/, 
   {y: 0,opacity: 1, ease: Expo.easeInOut}, '-=0.5' /* To Fim*/)

   .fromTo('.item-4', 0.7/* Tempo de transição*/, 
   {y: -50, opacity: 0}/* From inicio*/, 
   {y: 0,opacity: 1, ease: Expo.easeInOut}, '-=0.5' /* To Fim*/)

   .fromTo('.item-5', 0.7/* Tempo de transição*/, 
   {y: -50, opacity: 0}/* From inicio*/, 
   {y: 0,opacity: 1, ease: Expo.easeInOut}, '-=0.5' /* To Fim*/)

})