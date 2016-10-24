(function($) {

  function aniListener($this, $event, $callback, $transition, $delay) {
    if ( $transition === false ){
      // All transitions
      // console.log(event.originalEvent.propertyName + ' transition has finished.');
      return $callback.apply($this, [$event.originalEvent.propertyName, $event]);
    } else if ( $transition.indexOf($event.originalEvent.propertyName) > -1)  {
      // Delay callback
      // console.log(event.originalEvent.propertyName + ' transition has finished.');
      if ( $delay && $delay !== 0 ) {
        setTimeout(function() {
          return $callback.apply($this, [$event.originalEvent.propertyName, $event]);
        }, $delay);
      } else {
        return $callback.apply($this, [$event.originalEvent.propertyName, $event]);
      }
    }
  }

  function setListener($this, $arguments, $listener, _checkerTransition) {
    var args       = Array.prototype.slice.call($arguments);
    var options    = args.length > 1 ? args.slice(0,-1) : args;
    var callback   = args.pop();
    var transition = false;
    var delay      = false;
    var onOrOne    = 'on';

    // OPTIONS
    if ( options.length ) {
      for (var i in options) {
        var option = options[i];
        if ( typeof(option) === 'string' ) {
          if (option == 'on' || option == 'one') {
            onOrOne = option;
          } else {
            transition = option.split(' ');
          }
        } else if ( typeof(option) === 'array' ) {
          transition = option;
        } else if ( typeof(option) === 'number' ) {
          delay = option;
        }
      }
    }

    // Animation listeners can not check for specific transition types.
    transition = _checkerTransition === false ? false : transition;

    // ON
    if (onOrOne == 'on') {
      $this.on($listener, function(event) {
        return aniListener($this, event, callback, transition, delay)
      });
    } else {
    // ONE
      $this.one($listener, function(event) {
        return aniListener($this, event, callback, transition, delay)
      });
    }
  };

  $.fn.animationend = function() {
    return setListener(this, arguments, 'webkitAnimationEnd oanimationend msAnimationEnd animationend', false);
  }

  $.fn.animationstart = function() {
    return setListener(this, arguments, 'webkitAnimationStart oanimationStart msAnimationStart animationstart', false);
  }

  $.fn.animationiteration = function() {
    return setListener(this, arguments, 'webkitAnimationIteration oanimationIteration msAnimationIteration animationiteration', false);
  }

  $.fn.transitionend = function() {
    return setListener(this, arguments, 'webkitTransitionEnd oTransitionEnd msTransitionEnd transitionend', true);
  }

}( jQuery ));
