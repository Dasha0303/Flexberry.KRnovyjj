import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресЗаказа: DS.attr('string'),
  колво: DS.attr('string'),
  материал: DS.attr('string'),
  номерЗаказа: DS.attr('number'),
  способДоставки: DS.attr('string'),
  фИОЗакзачика: DS.attr('string'),
  отпускМатериала: DS.belongsTo('i-i-s-k-rnovyjj-отпуск-материала', { inverse: null, async: false })
});

export let ValidationRules = {
  адресЗаказа: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-заказ.validations.адресЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колво: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-заказ.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-заказ.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  способДоставки: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-заказ.validations.способДоставки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОЗакзачика: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-заказ.validations.фИОЗакзачика.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отпускМатериала: {
    descriptionKey: 'models.i-i-s-k-rnovyjj-заказ.validations.отпускМатериала.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-k-rnovyjj-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фИОЗакзачика: attr('Ф и о закзачика', { index: 1 }),
    адресЗаказа: attr('Адрес заказа', { index: 2 }),
    способДоставки: attr('Способ доставки', { index: 3 }),
    материал: attr('Материал', { index: 4 }),
    колво: attr('Колво', { index: 5 }),
    отпускМатериала: belongsTo('i-i-s-k-rnovyjj-отпуск-материала', 'Отпуск материала', {
      датаПроводки: attr('Дата проводки', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'датаПроводки' })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-k-rnovyjj-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    фИОЗакзачика: attr('Ф и о закзачика', { index: 1 }),
    адресЗаказа: attr('Адрес заказа', { index: 2 }),
    способДоставки: attr('Способ доставки', { index: 3 }),
    материал: attr('Материал', { index: 4 }),
    колво: attr('Колво', { index: 5 }),
    отпускМатериала: belongsTo('i-i-s-k-rnovyjj-отпуск-материала', 'Дата проводки', {
      датаПроводки: attr('Дата проводки', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
