import Ember from 'ember'; const helper = Ember.HTMLBars.makeBoundHelper;

export function sum([a,b]/*, hash*/) {
  return a+b;
}

export default helper(sum);

