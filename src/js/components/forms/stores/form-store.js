import alt from '../../../alt';
import FormActions from '../actions/form-actions';

import getFormData from 'get-form-data';
const getElementData = getFormData.getNamedFormElementData;


class FormStore {
  constructor() {
    this.get = '';
    this.post = '';
    this.trim = false;
    this.saving = false;
    this.autosave = false;
    this.data = {
      original: [],
      updated: [],
    };

    this.bindActions(FormActions);
  }

  onChange(e) {
    let {form, name} = e[0].target;
    let data = getElementData(form, name, {trim: this.trim});
    let change = {};
    change[name] = data;
    FormActions.queueChange.defer(change)
  }

  onSaving(bool) {
    this.saving = bool;
  }

  onSetEndpoint(string) {
    this.get = string;
    this.post = string;
    this.autosave = true;
  }
}

export default alt.createStore(FormStore, 'FormStore');
