
let allapps=document.getElementById("all-apps");
let icons=document.getElementById("icons");
let slideupp=document.getElementById("slide-up");
function slideup(){
	allapps.style.top="-10%";
	icons.style.top="100%";
	slideupp.style.opacity="0";
}
let appcontent=document.getElementById("app-content");
let iframe=document.querySelector('iframe');
//--------------------
//iframe.src='pages/gallery.html';appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";
document.querySelector('#icons>div:nth-child(1)').addEventListener('click', ()=>{alert("music");});
document.querySelector('#icons>div:nth-child(2)').addEventListener('click', ()=>{alert("tictac");});
document.querySelector('#icons>div:nth-child(3)').addEventListener('click', ()=>{iframe.src='https://www.youtube.com/embed/wTQ2N2P3Cr4';appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";});
document.querySelector('#icons>div:nth-child(4)').addEventListener('click', ()=>{iframe.src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.6154730903845!2d78.33670579373499!3d12.745733834723021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badb9cb581ecd03%3A0xabaa84238a40b01!2sKuppam!5e0!3m2!1sen!2sin!4v1650787545583!5m2!1sen!2sin';appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";});
document.querySelector('#icons>div:nth-child(5)').addEventListener('click', ()=>{iframe.src='pages/gallery.html';appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";});
document.querySelector('#icons>div:nth-child(6)').addEventListener('click', ()=>{alert("todo");});
document.querySelector('#icons>div:nth-child(7)').addEventListener('click', ()=>{iframe.src='pages/Clock.html';appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";});
document.querySelector('#icons>div:nth-child(8)').addEventListener('click', ()=>{iframe.src='https://instagram.com';appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";v});

//----------------------

document.querySelector('#all-apps>div:nth-child(1)').addEventListener('click', ()=>{alert("admin");});
document.querySelector('#all-apps>div:nth-child(2)').addEventListener('click', ()=>{alert("camera");});
document.querySelector('#all-apps>div:nth-child(3)').addEventListener('click', ()=>{alert("calculator");});
document.querySelector('#all-apps>div:nth-child(4)').addEventListener('click', ()=>{iframe.src='https://google.com/?igu=1';appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";});
document.querySelector('#all-apps>div:nth-child(5)').addEventListener('click', ()=>{alert("clock");});
document.querySelector('#all-apps>div:nth-child(6)').addEventListener('click', ()=>{alert("gallery");});
document.querySelector('#all-apps>div:nth-child(7)').addEventListener('click', ()=>{var link = document.createElement('a');
link.href = 'mailto:test@test.com';
document.body.appendChild(link);
link.click();appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";});
document.querySelector('#all-apps>div:nth-child(8)').addEventListener('click', ()=>{iframe.src='https://instagram.com';appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";});
document.querySelector('#all-apps>div:nth-child(9)').addEventListener('click', ()=>{iframe.src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.6154730903845!2d78.33670579373499!3d12.745733834723021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badb9cb581ecd03%3A0xabaa84238a40b01!2sKuppam!5e0!3m2!1sen!2sin!4v1650787545583!5m2!1sen!2sin';appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";});
document.querySelector('#all-apps>div:nth-child(10)').addEventListener('click', ()=>{alert("tictac");});
document.querySelector('#all-apps>div:nth-child(11)').addEventListener('click', ()=>{alert("music");});
document.querySelector('#all-apps>div:nth-child(12)').addEventListener('click', ()=>{alert("settings");});
document.querySelector('#all-apps>div:nth-child(13)').addEventListener('click', ()=>{alert("poweroff");});
document.querySelector('#all-apps>div:nth-child(14)').addEventListener('click', ()=>{alert("todo");});
document.querySelector('#all-apps>div:nth-child(15)').addEventListener('click', ()=>{iframe.src='https://web.whatsapp.com';appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";});
document.querySelector('#all-apps>div:nth-child(16)').addEventListener('click', ()=>{iframe.src='https://www.youtube.com/embed/wTQ2N2P3Cr4';appcontent.style.top="0%";icons.style.top="100%";slideupp.style.opacity="0";});





// nav buttons
document.querySelector('#back').addEventListener('click', ()=>{appcontent.style.top="100%";icons.style.top="0%";allapps.style.top="100%";});
document.querySelector('#home').addEventListener('click', ()=>{appcontent.style.top="100%";icons.style.top="0%";slideupp.style.opacity="1";allapps.style.top="100%";});
document.querySelector('#recent').addEventListener('click', ()=>{alert("recent");});



// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.6154730903845!2d78.33670579373499!3d12.745733834723021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badb9cb581ecd03%3A0xabaa84238a40b01!2sKuppam!5e0!3m2!1sen!2sin!4v1650787545583!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// <iframe width="727" height="409" src="https://www.youtube.com/embed/wTQ2N2P3Cr4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>