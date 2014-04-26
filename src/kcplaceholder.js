/*!
 * kcPlaceholder 1.0
 *
 * http://www.kevinacrider.com/code/kcplaceholder/
 *
 * Copyright 2013 Kevin A Crider
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

 $(function(){

  // Remove placeholder when the element is brought into focus
  $('[placeholder]').focus(function() {
    var element = $(this), value = element.val(), placeholder = element.attr('placeholder');
    if (value == placeholder) {element.val('');}

  // Put the placeholder text back into the element if it's empty
  }).blur(function() {
    var element = $(this), value = element.val(), placeholder = element.attr('placeholder');
    if (value == '' || value == placeholder) {element.val(placeholder);}

  // Before the form is submitted, we need to remove all our placeholder text so it does not get submitted with the form
  }).blur().parents('form').submit(function() {
    var element = $(this), value = element.val(), placeholder = element.attr('placeholder');
    element.find('[placeholder]').each(function() {
      if (value == placeholder) {element.val('');}
    })
  });

});