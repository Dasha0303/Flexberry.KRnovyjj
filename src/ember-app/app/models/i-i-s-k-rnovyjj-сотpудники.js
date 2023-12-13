import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as СотpудникиMixin
} from '../mixins/regenerated/models/i-i-s-k-rnovyjj-сотpудники';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СотpудникиMixin, Validations, {
});

export default Model;
