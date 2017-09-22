import Ember from 'ember'; const helper = Ember.HTMLBars.makeBoundHelper;

export function subtract([a,b]/*, hash*/) {
  return a-b;
}

export default helper(subtract);

