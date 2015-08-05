var alt = require('../../../alt');

var FormActions = require('../actions/form-actions');


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
