import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-k-rnovyjj-акт-приемки-l');
  this.route('i-i-s-k-rnovyjj-акт-приемки-e',
  { path: 'i-i-s-k-rnovyjj-акт-приемки-e/:id' });
  this.route('i-i-s-k-rnovyjj-акт-приемки-e.new',
  { path: 'i-i-s-k-rnovyjj-акт-приемки-e/new' });
  this.route('i-i-s-k-rnovyjj-заказ-l');
  this.route('i-i-s-k-rnovyjj-заказ-e',
  { path: 'i-i-s-k-rnovyjj-заказ-e/:id' });
  this.route('i-i-s-k-rnovyjj-заказ-e.new',
  { path: 'i-i-s-k-rnovyjj-заказ-e/new' });
  this.route('i-i-s-k-rnovyjj-отпуск-материала-l');
  this.route('i-i-s-k-rnovyjj-отпуск-материала-e',
  { path: 'i-i-s-k-rnovyjj-отпуск-материала-e/:id' });
  this.route('i-i-s-k-rnovyjj-отпуск-материала-e.new',
  { path: 'i-i-s-k-rnovyjj-отпуск-материала-e/new' });
  this.route('i-i-s-k-rnovyjj-склад-l');
  this.route('i-i-s-k-rnovyjj-склад-e',
  { path: 'i-i-s-k-rnovyjj-склад-e/:id' });
  this.route('i-i-s-k-rnovyjj-склад-e.new',
  { path: 'i-i-s-k-rnovyjj-склад-e/new' });
  this.route('i-i-s-k-rnovyjj-сотрудники-l');
  this.route('i-i-s-k-rnovyjj-сотрудники-e',
  { path: 'i-i-s-k-rnovyjj-сотрудники-e/:id' });
  this.route('i-i-s-k-rnovyjj-сотрудники-e.new',
  { path: 'i-i-s-k-rnovyjj-сотрудники-e/new' });
  this.route('i-i-s-k-rnovyjj-т-н-l');
  this.route('i-i-s-k-rnovyjj-т-н-e',
  { path: 'i-i-s-k-rnovyjj-т-н-e/:id' });
  this.route('i-i-s-k-rnovyjj-т-н-e.new',
  { path: 'i-i-s-k-rnovyjj-т-н-e/new' });
  this.route('i-i-s-k-rnovyjj-т-ч-акта-приемки-l');
  this.route('i-i-s-k-rnovyjj-т-ч-акта-приемки-e',
  { path: 'i-i-s-k-rnovyjj-т-ч-акта-приемки-e/:id' });
  this.route('i-i-s-k-rnovyjj-т-ч-акта-приемки-e.new',
  { path: 'i-i-s-k-rnovyjj-т-ч-акта-приемки-e/new' });
});

export default Router;
