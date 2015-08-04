var alt = require('../../../alt');

var FormActions = require('../actions/form-actions');


class FormStore {
  constructor() {
    this.get = '';
    this.post = '';
    this.autosave = false;
    this.data = {
      original: [],
      updated: [],
    };

    this.bindActions(FormActions);
  }

  onSetEndpoint(string) {
    console.log('in form store endpoint')
    this.get = string;
    this.post = string;
    this.autosave = true;
  }
}

export default alt.createStore(FormStore, 'FormStore');
