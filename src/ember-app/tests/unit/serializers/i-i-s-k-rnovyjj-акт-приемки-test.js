import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-k-rnovyjj-акт-приемки', 'Unit | Serializer | i-i-s-k-rnovyjj-акт-приемки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-k-rnovyjj-акт-приемки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
