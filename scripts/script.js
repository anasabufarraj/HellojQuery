// © Anas Abu Farraj
// Learning jQuery
// November 7, 2018

jQuery(document).ready(() => {
  // change the footer message at the bottom of the page
  $('#message').append('Ready to Manipulate!');

  // animate div width on hover
  jQuery('#rect')
    // animate width to 200px on mouseover
    .on('mouseover', () => {
      jQuery('#rect').animate({ width: 200 }, 300);
    })

    // animate width to 100px on mouseout
    .on('mouseout', () => {
      jQuery('#rect').animate({ width: 100 }, 300);
    })

    // increase height by 100px on click
    .on('click', () => {
      jQuery('#rect').animate({ height: '+=100' }, 'slow');
    });
});
// --- end of code
