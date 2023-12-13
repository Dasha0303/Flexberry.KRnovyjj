import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.основные-справочники.caption'),
          title: i18n.t('forms.application.sitemap.основные-справочники.title'),
          children: [{
            link: 'i-i-s-k-rnovyjj-акт-приемки-l',
            caption: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-rnovyjj-акт-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-rnovyjj-акт-приемки-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-k-rnovyjj-отпуск-материала-l',
            caption: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-rnovyjj-отпуск-материала-l.caption'),
            title: i18n.t('forms.application.sitemap.основные-справочники.i-i-s-k-rnovyjj-отпуск-материала-l.title'),
            icon: 'folder open',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.второстепенные-спрвочники.caption'),
          title: i18n.t('forms.application.sitemap.второстепенные-спрвочники.title'),
          children: [{
            link: 'i-i-s-k-rnovyjj-склад-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-спрвочники.i-i-s-k-rnovyjj-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-спрвочники.i-i-s-k-rnovyjj-склад-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-k-rnovyjj-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-спрвочники.i-i-s-k-rnovyjj-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-спрвочники.i-i-s-k-rnovyjj-сотрудники-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-k-rnovyjj-т-н-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-спрвочники.i-i-s-k-rnovyjj-т-н-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-спрвочники.i-i-s-k-rnovyjj-т-н-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-k-rnovyjj-т-ч-акта-приемки-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-спрвочники.i-i-s-k-rnovyjj-т-ч-акта-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-спрвочники.i-i-s-k-rnovyjj-т-ч-акта-приемки-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-k-rnovyjj-заказ-l',
            caption: i18n.t('forms.application.sitemap.второстепенные-спрвочники.i-i-s-k-rnovyjj-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.второстепенные-спрвочники.i-i-s-k-rnovyjj-заказ-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})