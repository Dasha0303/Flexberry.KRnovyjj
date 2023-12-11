import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-rnovyjj-т-н', 'Unit | Model | i-i-s-k-rnovyjj-т-н', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-k-rnovyjj-акт-приемки',
    'model:i-i-s-k-rnovyjj-заказ',
    'model:i-i-s-k-rnovyjj-отпуск-материала',
    'model:i-i-s-k-rnovyjj-склад',
    'model:i-i-s-k-rnovyjj-сотрудники',
    'model:i-i-s-k-rnovyjj-т-н',
    'model:i-i-s-k-rnovyjj-т-ч-акта-приемки',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
