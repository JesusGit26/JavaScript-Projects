$("#mySlide > div:gt(0)").hide();

setInterval(function() {
  $('#mySlide > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#mySlide');
}, 3000);

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }