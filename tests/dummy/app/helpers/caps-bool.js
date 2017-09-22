import Ember from 'ember'; const helper = Ember.HTMLBars.makeBoundHelper;

export function capsBool([bool]/*, hash*/) {
  return bool ? "YES" : "no";
}

export default helper(capsBool);

