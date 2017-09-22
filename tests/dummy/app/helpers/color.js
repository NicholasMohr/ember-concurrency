import Ember from 'ember'; const helper = Ember.HTMLBars.makeBoundHelper;
import { htmlSafe } from '@ember/string';

export function colorString([color]/*, hash*/) {
  return new htmlSafe(`color: ${color};`);
}

export default helper(colorString);

