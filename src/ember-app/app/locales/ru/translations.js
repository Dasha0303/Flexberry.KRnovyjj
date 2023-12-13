import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
import IISKRnovyjjСотpудникиModel from './models/i-i-s-k-rnovyjj-сотpудники';
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
    'i-i-s-k-rnovyjj-сотpудники': IISKRnovyjjСотpудникиModel,
    'i-i-s-k-rnovyjj-сотрудники': IISKRnovyjjСотрудникиModel,
    'i-i-s-k-rnovyjj-т-н': IISKRnovyjjТНModel,
    'i-i-s-k-rnovyjj-т-ч-акта-приемки': IISKRnovyjjТЧАктаПриемкиModel
  },

  'application-name': 'K rnovyjj',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'K rnovyjj',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'K rnovyjj',
          title: 'K rnovyjj'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
