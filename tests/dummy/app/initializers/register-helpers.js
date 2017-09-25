
import Ember from 'ember';

import color from 'dummy/helpers/color';
import scale from 'dummy/helpers/scale';
import subtract from 'dummy/helpers/subtract';
import sum from 'dummy/helpers/sum';
import width from 'dummy/helpers/width';
import perform from 'dummy/helpers/perform';
import task from 'dummy/helpers/task';



function registerHelperIteration1(name, helperFunction) {
	//earlier versions of ember with htmlbars used this
	Ember.HTMLBars.helpers[name] = Ember.HTMLBars.makeBoundHelper(helperFunction);
}

function registerHelperIteration2(name, helperFunction) {
	//registerHelper has been made private as _registerHelper
	//this is kept here if anyone is using it
	Ember.HTMLBars.registerHelper(name, Ember.HTMLBars.makeBoundHelper(helperFunction));
}

function registerHelperIteration3(name, helperFunction) {
	//latest versin of ember uses this
	Ember.HTMLBars._registerHelper(name, Ember.HTMLBars.makeBoundHelper(helperFunction));
}

function registerHelper(name, helperFunction) {
	if (Ember.HTMLBars._registerHelper) {
		if (Ember.HTMLBars.helpers) {
			registerHelperIteration1(name, helperFunction);
		} else {
			registerHelperIteration3(name, helperFunction);
		}
	} else if (Ember.HTMLBars.registerHelper) {
		registerHelperIteration2(name, helperFunction);
	}
}

export function initialize() {
    registerHelper('color', color.helperFunction);
    registerHelper('scale', scale.helperFunction);
    registerHelper('subtract', subtract.helperFunction);
    registerHelper('sum', sum.helperFunction);
    registerHelper('width', width.helperFunction);
    registerHelper('perform', perform.helperFunction);
    registerHelper('task', task.helperFunction);
}

export default {
    name: 'register-helpers',
    initialize
}