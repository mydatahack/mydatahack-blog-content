mysite.events.on('widget:opened', function() { 
  // Whatever the analytics function provided by the vendor
  whatever.function.sendData('widget:opened');
});


//
import { EventEmitter } from 'events';
mysite.events = new EventEmitter();

document.targetElem.addEventListener('click', () => {
  mysite.events.emit('widget:opened');
});

//

const widgetOpenEvent = new CustomEvent('widget:opened')
document.targetElem.addEventListener('click', () => {
  document.dispatchEvent(widgetOpenEvent);
});

// then 

document.addEventListener('widget:open', () => {
  // send analytics event
})