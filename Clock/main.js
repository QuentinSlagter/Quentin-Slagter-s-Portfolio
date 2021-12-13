/**
 * SVG Circle Clock.
 *
 * Working with SVG stroke dasharray: 
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
 *
 * Working with JS Date class: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 *
 * ❤ if you like it!
 */

(function() {
  const txtDay    = document.querySelector( '.clock-wrap .clock-day .day' );
  const txtDate   = document.querySelector( '.clock-wrap .clock-date .date' );
  const timeHours = document.querySelector( '.clock-wrap .clock-time .hours' );
  const timeMins  = document.querySelector( '.clock-wrap .clock-time .minutes' );
  const timeSecs  = document.querySelector( '.clock-wrap .clock-time .seconds' );
  const timeAmPm  = document.querySelector( '.clock-wrap .clock-time .ampm' );
  const pathSecs  = document.querySelector( '.clock-wrap .clock-seconds .path' );
  const pathMins  = document.querySelector( '.clock-wrap .clock-minutes .path' );
  const pathHours = document.querySelector( '.clock-wrap .clock-hours .path' );
  const markDots  = document.querySelector( '.clock-wrap .clock-markers .dots' );
  
  // add zero on left 
  const pad = ( num ) => {
    return ( num < 10 ) ? '0'+ num : ''+ num; 
  };
  
  // calculate dash offset for a path 
  const updatePath = ( path, cur, max ) => {
    const len = Math.floor( path.getTotalLength() );
    const offset = Math.floor( len - ( cur * len / max ) );
    path.style.strokeDasharray = len + ' ' + len;
    path.style.strokeDashoffset = offset;
  };
  
  // update clock text display 
  const updateClock = ( elm, num ) => {
    elm.textContent = pad( num ); 
  };
  
  // update day of the week 
  const updateDay = ( date ) => {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    txtDay.textContent = days[ date.getDay() ];
  };
  
  // update full date 
  const updateDate = ( date ) => {
    let month = pad( date.getMonth() + 1 ); 
    let day   = pad( date.getDate() ); 
    let year  = pad( date.getFullYear() ); 
    txtDate.textContent = [ month, day, year ].join( '/' );
  };
  
  // add clock marks 
  const addMarks = () => {
    const len = Math.floor( markDots.getTotalLength() );
    markDots.style.strokeDasharray = 1 +' '+ Math.floor( len / 12 );
  }; 
  
  // get time and update stuff
  const updateTime = () => {
    let date   = new Date(); 
    let secs   = date.getSeconds(); 
    let mins   = date.getMinutes(); 
    let fhours = date.getHours(); 
    let hours  = ( fhours >= 12 ) ? ( fhours - 12 ) : fhours; 
    
    updatePath( pathSecs, secs, 60 ); 
    updatePath( pathMins, mins, 60 ); 
    updatePath( pathHours, hours, 12 ); 
    updateClock( timeHours, hours ? hours : 12 ); 
    updateClock( timeMins, mins ); 
    updateClock( timeSecs, secs ); 
    updateClock( timeAmPm, ( fhours < 12 ) ? 'am' : 'pm' ); 
    updateDate( date );
    updateDay( date ); 
  };
  
  // update time on interval 
  setInterval( updateTime, 1000 );
  updateTime();
  addMarks(); 
})();