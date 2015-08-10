import alt from '../../../alt';
import FormActions from '../actions/form-actions';

import 'node-fetch';

import getFormData from 'get-form-data';
const getElementData = getFormData.getNamedFormElementData;

let queueChangeTimer = {};
let updateTimer;

class FormStore {
  constructor() {
    this.get = '';
    this.post = '';
    this.trim = false;
    this.saving = false;
    this.autosave = false;
    this.data = {
      original: {},
      updated: {},
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

  onQueueChange(obj) {

    let {
      original,
      updated
    } = this.data;

    for (let key in obj) {

      if (typeof queueChangeTimer[key] !== "undefined") {
        clearTimeout(queueChangeTimer[key]);
      }

      queueChangeTimer[key] = setTimeout( () => {

        updated[key] = obj[key];
        FormActions.update.defer();
      }, 5000);

    }
  }

  onSaving(bool) {
    this.saving = bool;
  }

  onSetEndpoint(string) {
    this.get = string;
    this.post = string;
    this.autosave = true;
  }

  onUpdate() {
    if (typeof updateTimer !== "undefined") {
      clearTimeout(updateTimer);
    }

    updateTimer = setTimeout( () => {

      let payload = JSON.stringify(this.data.updated);

      fetch(this.post, { method: 'PATCH', headers: {contentType: "application/json"}, body: payload })
        .then(function(res) {
          return res.json();
        }).then(function(json) {
          console.log(json);
        });

    }, 5000);

  }
}

export default alt.createStore(FormStore, 'FormStore');
