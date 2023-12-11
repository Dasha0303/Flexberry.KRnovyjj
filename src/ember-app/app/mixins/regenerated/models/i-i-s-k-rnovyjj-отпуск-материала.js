import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПроводки: DS.attr('string'),
  сотрудники: DS.belongsTo('i-i-s-k-rnovyjj-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПроводки: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-отпуск-материала.validations.датаПроводки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-отпуск-материала.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтпускМатериалаE', 'i-i-s-k-rnovyjj-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-k-rnovyjj-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОтпускМатериалаL', 'i-i-s-k-rnovyjj-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-k-rnovyjj-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
