import Ember from 'ember'; const helper = Ember.HTMLBars.makeBoundHelper;

export function pickFrom([list, index]/*, hash*/) {
  return list[index % list.length];
}

export default helper(pickFrom);

