

function myFunction() {
   var dots = document.getElementById("dots");
   var moreText = document.getElementById("more");
   var btnText = document.getElementById("myBtn");

   if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
   } else {
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      dots.style.display = "none";
   }
}





(() => {
   console.log('The team described in this page is totally real and not at all invented for this assignment');

   let sigils = document.querySelectorAll('.iconContainer'),
      houseImages = document.querySelector('#profileImages'),
      houseBio = document.querySelector('.teamMemberInfo'),
      houseName = document.querySelector('.teamMemberName');

   const houseInfo = [
      ["Cathy Lam (Chau Lin)", `I have 7 years of Graphic Design experience, including social media advertising visuals, printing, magazine, and I also with Web Design and Products Design.<br>I like Japanese animation and comics very much, so my hobby has been drawing since childhood. Thus, I discovered the joy of design, and I want to be a designer, so my current career is to be a designer. I love my job =)
      `],
      ["Sahar Mahmoudimotlagh", `I have a BA and MA in Fine Art. More than 5 years experience as a designer. During this time, I worked to develop customers need in branding, digital design and motion design, also participated in several exhibitions and festivals as well.
      `],
      ["Sherine McEween", `I completed BE in Computer Engineering and I am currently studying Interactive Media Design at Fanshawe College to upgrade my web design and development skills. I like making artworks like paintings, sketches & sand art using various mediums. In my 4 years of Bachelor's and current study, I have done various projects involving front-end development using HTML, CSS, JavaScript & Python. I am looking forward to getting more experience in Adobe design softwares & Motion Design.
      `],
      ["Hyeongtae Kim (Eugene)", `Visual Design in BA and Brand Communication in MA. I have a career not only as a designer but also as a marketing communication manager for over a decade in Korea. I came to Canada in order to horn up-to-date technology relating to Web Development and 3D Motion Graphics so that I can fulfill my true creative passion and resume my career in the tech field.
      Rather than staying in a stable place, I enjoy learning new things and never stop challenging myself to grow further. Especially interested in a new wave of technology such as Virtual Reality, 3D Motion Graphics, VFX, Web Development, and NFT.
      `]
   ];

   function animatePicture() {
      houseImages.style.right = `${this.dataset.offset * 600}px`;
      houseName.textContent = `${houseInfo[this.dataset.offset][0]}`;
      houseBio.textContent = `${houseInfo[this.dataset.offset][1]}`;
   }

   sigils.forEach(sigil => sigil.addEventListener('click', animatePicture));
})();