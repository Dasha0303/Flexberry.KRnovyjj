import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  табель: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-сотpудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табель: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-сотpудники.validations.табель.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-сотpудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
