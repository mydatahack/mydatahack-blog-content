# How to Support Internet Explorer

```javascript
document.addEventListener('DOMContentLoaded', () => {
  if (isIE) {
    window.location.replace("https://www.google.com.au/chrome/");
  }
});
function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie; 
}
```
