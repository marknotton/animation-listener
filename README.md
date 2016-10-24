# Animation Listener

Listen for css animation and transition events. You can delay callbacks and target specific transition types.

## Listener functions
- animationend() - [Official Documenation](https://developer.mozilla.org/en-US/docs/Web/Events/animationstart)
- animationstart() - [Official Documenation](https://developer.mozilla.org/en-US/docs/Web/Events/animationend)
- animationiteration() - [Official Documenation](https://developer.mozilla.org/en-US/docs/Web/Events/animationiteration)
- transitionend() - [Official Documenation](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend)
- ~~transitionstart()~~ This doesn't exist, sorry.
- ~~transitioniteration()~~ This doesn't exist, sorry.


Three parameters are returned to the function.

| Param | Type   | Description
| ----- | ------ | -----------
| 1     | string | The animation name or transition type.
| 2     | number | The iteration count.
| 3     | object | The full event object

### Animation Examples

Call a function when the 'jump' animation ends.
```
$('.box').animationend('jump', function(name, count, event) {
   console.log(name + ' has finished transitioning');
   console.log(event);
});
```

Call a function when any animation has started.
```
$('.box').animationstart(function(name) {
   console.log(name + 'animation has started');
});
```

You can also pass in a number to delay the callback. Add as a number, in the milisecond format.
```
$('.box').animationend(2000, function() {
  console.log('animation ended 2 seconds ago');
});
```

If an animation loops, you can call a functioon on each iteration
```
$('.box').animationiteration(function(type, count) {
  console.log('This animation has happened' + count + 'times');
});
```

### Transition Examples

Call a function when height and width transitions have ended (use space delimited string for multiple transition types or an array of strings).
The transition type will be returned as the first parameter. The event object is returned as the second parameter.
```
$('.box').transitionend('height width', function(type) {
   console.log(type + ' has finished transitioning');
});
```

Call a function when only the height transition ends.
```
$('.box').transitionend('height', function(type) {
   console.log(type + ' has finished transitioning');
});
```

Call a function when every transition has ended. The callback function will be called for each transition type.
```
$('.box').transitionend(function(type) {
  console.log(type + ' has finished transitioning');
});
```

You can also pass in a number to delay the callback. Add as a number, in the milisecond format.
```
$('.box').transitionend(2000, function() {
  console.log('transition ended 2 seconds ago');
});
```
----

### On or One
Passing in the string ```'one'``` or ```'on'``` will adjust the type of event handler you'd prefer to use. 'on' is used by default. What's the different? [one](http://api.jquery.com/one/) removes the event listener after being run once. [on](http://api.jquery.com/on/) will continue to listen for the transition/animation event.
```
$('.box').animationend('one', function(e) {
   console.log('hello world');
});
```
### Go nuts
If you really want go nuts, you're welcome to concatenate the functions together too.
```
$('.box').animationstart(function(name) {
  console.log(name + ' animation has started');
}).animationend(1000, function() {
  console.log('and now it has ended, 1 second ago');
}).animationiteration('jump', function(name, count) {
  console.log('and the iteration count is: ' + count);
}).transitionend(function() {
  console.log('Just for fun, the transition end has been listened too');
});
```


## Help is always appreciated

If anyone has the time and courtesy to fork out a vanilla (non-jQuery dependant) version of this plugin, that would be greatly appreciated.
