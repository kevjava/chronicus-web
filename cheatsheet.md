## Cheatsheet

### JQuery targeting
 * You use the `$()` function to do a JQuery search.
 * To target all elements of a class, use `$(".`*classname*`")`.
 * To target the element with a particular id, use `$("#`*id*`")`.
 * To target all elements of a particular HTML element type, use `$("`*element*`")`.
 * For example, `$("button")` targets all buttons.  `$("#username")` targets the HTML element with the id of `username`.
 
### JQuery functions
 * Once you have targeted the elements you want, you use functions to manipulate them.
 * You can use the `.addClass("`*classname*`")` function to add a CSS class.
 * You can use the `.val()` function to retrieve an element's value (text).
 * For example, use `$("#firstname").val()` to get the value of the field with the id of `firstname`.
 * For example, use `$("button").addClass("danger")` to add the `danger` class to all buttons.`
