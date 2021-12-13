document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

  let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.toggle('active')
    }
  document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove('active')
  })
})

$(document).ready(function(){

	$("nav a").on("click", function(event){
		event.preventDefault();
		$("nav").addClass("fixed");
		id = ($(this).attr("href"));
		scrollVertical = $(id).offset().top;

		$("body, html").animate({scrollTop: scrollVertical});
	});

	$(document).on("scroll", function(){
		secondPage = $("nav li:nth-child(2) a").attr("href");

		if ( $("body").scrollTop() >= $("nav").height() )
		{
			$("nav").addClass("fixed");
		} else {
			$("nav").removeClass("fixed");
		}
	});

});