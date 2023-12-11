import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKRnovyjjАктПриемкиLForm from './forms/i-i-s-k-rnovyjj-акт-приемки-l';
import IISKRnovyjjЗаказLForm from './forms/i-i-s-k-rnovyjj-заказ-l';
import IISKRnovyjjОтпускМатериалаLForm from './forms/i-i-s-k-rnovyjj-отпуск-материала-l';
import IISKRnovyjjСкладLForm from './forms/i-i-s-k-rnovyjj-склад-l';
import IISKRnovyjjСотрудникиLForm from './forms/i-i-s-k-rnovyjj-сотрудники-l';
import IISKRnovyjjТНLForm from './forms/i-i-s-k-rnovyjj-т-н-l';
import IISKRnovyjjТЧАктаПриемкиLForm from './forms/i-i-s-k-rnovyjj-т-ч-акта-приемки-l';
import IISKRnovyjjАктПриемкиEForm from './forms/i-i-s-k-rnovyjj-акт-приемки-e';
import IISKRnovyjjЗаказEForm from './forms/i-i-s-k-rnovyjj-заказ-e';
import IISKRnovyjjОтпускМатериалаEForm from './forms/i-i-s-k-rnovyjj-отпуск-материала-e';
import IISKRnovyjjСкладEForm from './forms/i-i-s-k-rnovyjj-склад-e';
import IISKRnovyjjСотрудникиEForm from './forms/i-i-s-k-rnovyjj-сотрудники-e';
import IISKRnovyjjТНEForm from './forms/i-i-s-k-rnovyjj-т-н-e';
import IISKRnovyjjТЧАктаПриемкиEForm from './forms/i-i-s-k-rnovyjj-т-ч-акта-приемки-e';
import IISKRnovyjjАктПриемкиModel from './models/i-i-s-k-rnovyjj-акт-приемки';
import IISKRnovyjjЗаказModel from './models/i-i-s-k-rnovyjj-заказ';
import IISKRnovyjjОтпускМатериалаModel from './models/i-i-s-k-rnovyjj-отпуск-материала';
import IISKRnovyjjСкладModel from './models/i-i-s-k-rnovyjj-склад';
import IISKRnovyjjСотрудникиModel from './models/i-i-s-k-rnovyjj-сотрудники';
import IISKRnovyjjТНModel from './models/i-i-s-k-rnovyjj-т-н';
import IISKRnovyjjТЧАктаПриемкиModel from './models/i-i-s-k-rnovyjj-т-ч-акта-приемки';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-k-rnovyjj-акт-приемки': IISKRnovyjjАктПриемкиModel,
    'i-i-s-k-rnovyjj-заказ': IISKRnovyjjЗаказModel,
    'i-i-s-k-rnovyjj-отпуск-материала': IISKRnovyjjОтпускМатериалаModel,
    'i-i-s-k-rnovyjj-склад': IISKRnovyjjСкладModel,
    'i-i-s-k-rnovyjj-сотрудники': IISKRnovyjjСотрудникиModel,
    'i-i-s-k-rnovyjj-т-н': IISKRnovyjjТНModel,
    'i-i-s-k-rnovyjj-т-ч-акта-приемки': IISKRnovyjjТЧАктаПриемкиModel
  },

  'application-name': 'K rnovyjj',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'K rnovyjj',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'K rnovyjj',
          title: 'K rnovyjj'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'основные-справочники': {
          caption: 'Основные справочники',
          title: 'Основные справочники',
          'i-i-s-k-rnovyjj-акт-приемки-l': {
            caption: 'Акт приемки',
            title: ''
          },
          'i-i-s-k-rnovyjj-отпуск-материала-l': {
            caption: 'Отпуск материала',
            title: ''
          }
        },
        'второстепенные-спрвочники': {
          caption: 'Второстепенные спрвочники',
          title: 'Второстепенные спрвочники',
          'i-i-s-k-rnovyjj-склад-l': {
            caption: 'Склад',
            title: ''
          },
          'i-i-s-k-rnovyjj-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-k-rnovyjj-т-н-l': {
            caption: 'ТН',
            title: ''
          },
          'i-i-s-k-rnovyjj-т-ч-акта-приемки-l': {
            caption: 'Т ч акта приемки',
            title: ''
          },
          'i-i-s-k-rnovyjj-заказ-l': {
            caption: 'Заказ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-k-rnovyjj-акт-приемки-l': IISKRnovyjjАктПриемкиLForm,
    'i-i-s-k-rnovyjj-заказ-l': IISKRnovyjjЗаказLForm,
    'i-i-s-k-rnovyjj-отпуск-материала-l': IISKRnovyjjОтпускМатериалаLForm,
    'i-i-s-k-rnovyjj-склад-l': IISKRnovyjjСкладLForm,
    'i-i-s-k-rnovyjj-сотрудники-l': IISKRnovyjjСотрудникиLForm,
    'i-i-s-k-rnovyjj-т-н-l': IISKRnovyjjТНLForm,
    'i-i-s-k-rnovyjj-т-ч-акта-приемки-l': IISKRnovyjjТЧАктаПриемкиLForm,
    'i-i-s-k-rnovyjj-акт-приемки-e': IISKRnovyjjАктПриемкиEForm,
    'i-i-s-k-rnovyjj-заказ-e': IISKRnovyjjЗаказEForm,
    'i-i-s-k-rnovyjj-отпуск-материала-e': IISKRnovyjjОтпускМатериалаEForm,
    'i-i-s-k-rnovyjj-склад-e': IISKRnovyjjСкладEForm,
    'i-i-s-k-rnovyjj-сотрудники-e': IISKRnovyjjСотрудникиEForm,
    'i-i-s-k-rnovyjj-т-н-e': IISKRnovyjjТНEForm,
    'i-i-s-k-rnovyjj-т-ч-акта-приемки-e': IISKRnovyjjТЧАктаПриемкиEForm
  },

});

export default translations;
