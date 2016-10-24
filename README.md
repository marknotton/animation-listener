# Animation Listener

Listen for css animation and transition events. You can delay callbacks and target specific transition types.

### Aniimation Examples

Call a function when height and width transitions end (use space delimited string for multiple transition types or an array of strings).
The transition type will be returned as the first parameter. The event object is returned as the second parameter.
```
$('.box').animationend('height width', function(type) {
   console.log(type + ' has finished transitioning');
});
```

Call a function when only the height transition ends; and show the event object.
```
$('.box').transitionend('height', function(type, e) {
   console.log('hello world', e);
});
```

Call a function when every transition has ended. The callback function will be called for each transition type.
```
$('.box').transitionend(function(e) {
   console.log('hello world');
});
```

You can also pass in a number to delay the callback. Add as a number, in the milisecond format.
```
$('.box').transitionend(2000, function(e) {
   console.log('hello world with 2 second delay');
});
```

Passing in the string ```'one'``` or ```'on'``` will adjust the type of event handler you'd prefer to use. 'on' is used by default. What's the different? [one](http://api.jquery.com/one/) removes the event listener after being run once. [on](http://api.jquery.com/on/) will continue to listen for the transition end.
```
$('.box').transitionend('on', function(e) {
   console.log('hello world');
});
```

### Transition Examples

Call a function when height and width transitions end (use space delimited string for multiple transition types or an array of strings).
The transition type will be returned as the first parameter. The event object is returned as the second parameter.
```
$('.box').transitionend('height width', function(type) {
   console.log(type + ' has finished transitioning');
});
```

Call a function when only the height transition ends; and show the event object.
```
$('.box').transitionend('height', function(type, e) {
   console.log('hello world', e);
});
```

Call a function when every transition has ended. The callback function will be called for each transition type.
```
$('.box').transitionend(function(e) {
   console.log('hello world');
});
```

You can also pass in a number to delay the callback. Add as a number, in the milisecond format.
```
$('.box').transitionend(2000, function(e) {
   console.log('hello world with 2 second delay');
});
```

Passing in the string ```'one'``` or ```'on'``` will adjust the type of event handler you'd prefer to use. 'on' is used by default. What's the different? [one](http://api.jquery.com/one/) removes the event listener after being run once. [on](http://api.jquery.com/on/) will continue to listen for the transition end.
```
$('.box').transitionend('on', function(e) {
   console.log('hello world');
});
```

## Help is always appreciated

If anyone has the time and courtesy to fork out a vanilla (non-jQuery dependant) version of this plugin, that would be greatly appreciated.
