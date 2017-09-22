import Ember from 'ember';
const helper = Ember.HTMLBars.makeBoundHelper;

export function computeWidth([start, end, upper]/*, hash*/) {
  return (end === Infinity) ? upper - start : end - start;
}

export default helper(computeWidth);

