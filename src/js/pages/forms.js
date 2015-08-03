import React from 'react';
import Styleguide from '../styleguide';
import Select from 'react-select';
import DateField from '../components/forms/fields/date';
import NumberField from '../components/forms/fields/number';
import TextField from '../components/forms/fields/text';
import TextArea from '../components/forms/fields/textarea';
import Checkbox from '../components/forms/fields/checkbox';
import Radio from '../components/forms/fields/radio';
import SimpleSelect from '../components/forms/fields/simple-select';
import EditLabel from '../components/edit-label';
import FileInput from '../components/forms/file-input';

import Form from '../components/forms/form';

let D = React.DOM;

var options = [
    { value: 'london', label: 'London' },
    { value: 'newyork', label: 'New York' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'san_francisco', label: 'San Francisco' }
];

function _onChange(val) {
  console.log("Selected: " + val);
}

function _onFocus() {
  console.log("Focus");
}

export default React.createClass({
  displayName: "FormsPage",

  getInitialState() {
    return {
      editLabel: "Label"
    };
  },


  _onChange(e, name, data, change) {
    console.log(change)
    this.setState({lastOnChange: {name, data, change}})
  },

  _onSubmit(e, data) {
    this.setState({lastOnSubmit: {data}})
    e.preventDefault()
  },

  _onSave(value) {
    this.setState({ editLabel: value });
  },

  _onDelete() {
    console.log("Not able to delete right now.");
  },

  _validate(val) {
    return val.length;
  },

  render() {
    return <Styleguide title="Forms Styles">
        <div title="Form">
          <Form onSubmit={this._onSubmit} onChange={this._onChange} endpoint="http://www.cnn.com">
            <div><div><div><div>
              <TextField name="sample-textfield" label="Text" fieldColor='light' placeholder="Placeholder" extraClasses={['py2']} />
            </div></div></div></div>
            <div><div><div><div>
              <TextArea label="Textarea" fieldColor='light'  extraClasses={['py2']} />
              <TextArea label="Textarea Expandable" fieldColor='light' expandable={true} extraClasses={['py2']} />
            </div></div></div></div>
          </Form>
        </div>
        <div title="Forms">
          <form className="clearfix">
            <hr />

            <p>Default fields</p>
            <TextField label="Text" fieldColor='light' placeholder="Placeholder" extraClasses={['py2']} />
            <NumberField label="Number" fieldColor='light' extraClasses={['py2']} units="Units"  />
            <DateField label="Date" fieldColor='light' extraClasses={['py2']} />
            <SimpleSelect label="Simple Select" fieldColor='light' options={options} promptText="- Select -" extraClasses={['py2']}/>
            <TextArea label="Textarea" fieldColor='light'  extraClasses={['py2']} />
            <TextArea label="Textarea Expandable" fieldColor='light' expandable={true} extraClasses={['py2']} />
            <Checkbox label="Checkbox" fieldColor='light' extraClasses={['py2']}/>
            <Checkbox label="Checked read-only" fieldColor='light' readOnly={true} checked={true} extraClasses={['py2']}/>
            <Radio name="radios1" fieldColor='light' label="Radio 1" extraClasses={['py2']}/>
            <Radio name="radios1" fieldColor='light' label="Radio 2" extraClasses={['py2']}/>

            <p className="mt4">Disabled fields</p>
            <TextField label="Text" fieldColor='light' placeholder="Placeholder" disabled={true} extraClasses={['py2']} />
            <NumberField label="Number" fieldColor='light' disabled={true} extraClasses={['py2']} />
            <DateField label="Date" fieldColor='light' disabled={true} />
            <SimpleSelect label="Simple Select" fieldColor='light' options={options} disabled={true} extraClasses={['py2']}/>
            <TextArea label="Textarea" fieldColor='light'  disabled={true} extraClasses={['py2']} />
            <Checkbox label="Checkbox" fieldColor='light' disabled={true} extraClasses={['py2']}/>
            <Radio name="radios2" fieldColor='light' label="Radio" disabled={true} extraClasses={['py2']} />

            <p className="mt4">Fields within grey block</p>
            <div className="bg-grey-10 p3 rounded-3">
              <p>Default fields</p>
              <TextField label="Text" fieldColor='dark' placeholder="Placeholder" extraClasses={['py2']}/>
              <NumberField label="Number" fieldColor='dark' extraClasses={['py2']} units="Units" />
              <DateField label="Date" fieldColor='dark' extraClasses={['py2']}/>
              <SimpleSelect label="Simple Select" fieldColor='dark' options={options} promptText="- Select -" extraClasses={['py2']}/>
              <TextArea label="Textarea" fieldColor='dark' extraClasses={['py2']}/>
              <Checkbox label="Checkbox" fieldColor='dark' extraClasses={['py2']}/>
              <Checkbox label="Checked read-only" fieldColor='dark' readOnly={true} checked={true} extraClasses={['py2']}/>
              <Radio name="radios3" fieldColor='dark' label="Radio 1" extraClasses={['py2']}/>
              <Radio name="radios3" fieldColor='dark' label="Radio 2" extraClasses={['py2']}/>
              <hr className="bc-white"/>
              <p>Disabled fields</p>
              <TextField label="Text" fieldColor='dark' placeholder="Placeholder" disabled={true} extraClasses={['py2']} />
              <NumberField label="Number" fieldColor='dark' disabled={true} extraClasses={['py2']} />
              <DateField label="Date" fieldColor='dark' disabled={true} extraClasses={['py2']}/>
              <SimpleSelect label="Simple Select" fieldColor='dark' options={options} disabled={true} extraClasses={['py2']}/>
              <TextArea label="Textarea" fieldColor='dark' disabled={true} extraClasses={['py2']} />
              <Checkbox label="Checkbox" fieldColor='dark' disabled={true} extraClasses={['py2']}/>
              <Checkbox label="Checked read-only" fieldColor='dark' readOnly={true} checked={true} extraClasses={['py2']}/>
              <Radio name="radios2" fieldColor='dark' label="Radio" disabled={true} extraClasses={['py2']} />
            </div>

            <hr />

            <h3>React Select</h3>
            <p><a href="https://github.com/JedWatson/react-select">https://github.com/JedWatson/react-select</a></p>
            <div className="col-3 left mr2">
              <label className="px2 mb1">Default</label>
              <Select
                searchable={false}
                name="form-field-nameczXCzx"
                options={options}
                onChange={_onChange}
                placeholder="- Select Office -"
              />
            </div>
            <div className="col-3 left mr2">
              <label className="px2 mb1">Multi</label>
              <Select
                searchable={false}
                multi={true}
                name="form-field-nameczXCzx"
                options={options}
                onChange={_onChange}
                placeholder="- Select Office -"
              />
            </div>
            <div className="col-3 left mr2">
              <label className="px2 mb1">Searchable (like Chosen)</label>
              <Select
                name="form-field-nameczXCzx"
                options={options}
                onChange={_onChange}
                placeholder="- Select Office -"
                onFocus={_onFocus}
              />
            </div>
          </form>
          <hr />
        </div>
        <div title="Actionable Forms">
          <hr />
          <h3>EditLabel</h3>
          <p>An interactive component for changing the text of a label, i.e. Folder Names.</p>
          <EditLabel 
            label={this.state.editLabel}
            placeholder="Folder Name"
            onSave={this._onSave}
            onDelete={this._onDelete}
            isValid={this._validate}
            errorMessage="Folder Name Already In Use"
          >
            <p className="clearfix small">Do you want to delete "{this.state.editLabel}"?</p>
          </EditLabel>
          
          <pre><code className="language-javascript mt3">
          {'<EditLabel label={this.state.editLabel} placeholder="Folder Name" onSave={this._onSave} onDelete={this._onDelete} isValid={this._validate} errorMessage="Folder Name Already In Use" >\n'}
          {'\t<p className="clearfix small">Do you want to delete "{this.state.editLabel}"?</p>\n'}
          {'</EditLabel>'}
          </code></pre>
          
          <h3 className="mt4">File Input</h3>
          <p className="small">An interactive file component with file name preview.</p>
          <FileInput labelTitle="Upload File" labelStyles={["button-secondary", "white", "rounded-2", "p1"]} icon="upload" />
        </div>
      </Styleguide>
  }
});



