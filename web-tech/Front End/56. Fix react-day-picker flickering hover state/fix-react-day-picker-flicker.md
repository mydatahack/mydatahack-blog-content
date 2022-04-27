# How to fix react-day-picker flickering hover state between mouseenter and mouseleave

I had an issue with <a href="https://www.npmjs.com/package/react-day-picker" target="_blank">react-day-picker</a> flickering hover state between <span class="code">mouseenter</span> and <span class="code">mouseleave</span> when the cursor was on the edge of the day I was trying to select. This is not a bug in the library. It was the custom style I added to the hover state that was causing the issue. In my case, I had to override <span class="code">border-radius</span> of the <span class="code">.DayPicker-Day</span> element.

This fixed my issue. The fix is so specific to the component I was working on because I overrode the default style. If you're stuck with this issue, it's worth a try.

<pre>
.DayPicker-wrapper .DayPicker-Body .DayPicker-Day {
  border-radius: 0px;
}
</pre>
