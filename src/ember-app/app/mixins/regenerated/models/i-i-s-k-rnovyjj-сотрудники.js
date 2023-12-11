import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кладовщик: DS.attr('string'),
  табель: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  кладовщик: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-сотрудники.validations.кладовщик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табель: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-сотрудники.validations.табель.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-k-rnovyjj-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    кладовщик: attr('Кладовщик', { index: 1 }),
    табель: attr('Табель', { index: 2 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-k-rnovyjj-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    кладовщик: attr('Кладовщик', { index: 1 }),
    табель: attr('Табель', { index: 2 })
  });
};
