import DatePicker from './date-picker';
import FieldErrors from '../../field-errors';
import Moment from 'moment';
import React from 'react';

const Type = React.PropTypes;

// Note: The value of date.month() for 1/1/2015 is 0, not 1

let validDateFormats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD', 'MMM D, YYYY'];

export default React.createClass({

  displayName: "DateField",

  // The rest of the child components all use Moment objects for dates.
  propTypes: {
    dateFormat: Type.oneOf(validDateFormats).isRequired,
    disabled: Type.bool,
    errors: Type.array,
    fieldColor: Type.oneOf(['light', 'dark']),
    includeMaxMinBounds: Type.bool,
    label: Type.string,
    maxDate: Type.oneOfType([Type.object, Type.string, Type.number]),
    minDate: Type.oneOfType([Type.object, Type.string, Type.number]),
    name: Type.string,
    onChange: Type.func,
    placeholder: Type.string,
    value: Type.oneOfType([Type.object, Type.string, Type.number])
  },

  getDefaultProps() {
    return {
      disabled: false,
      errors: [],
      fieldColor: 'light',
      includeMaxMinBounds: true,
      onChange: function() {}
    }
  },

  getInitialState() {
    return {
      value: this.momentDate(this.props.value),
      disabled: this.props.disabled || false,
      errors: this.props.errors || [],
      show: false
    };
  },

  componentDidMount() {
    if (!this.isFormatValid()) {
      this.setState({
        disabled: true,
        errors: ['Invalid date format']
      });
    } else {
      if (!this.isDateValid()) {
        this.setState({
          errors: this.state.errors.concat('Invalid date')
        });
      }
    }
  },

  baseZIndex() {
    return this.state.show ? 300 : 1;
  },

  boundedMaxDate() {
    if (!!this.props.maxDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.maxDate).add(1, 'day');
      } else {
        return this.momentDate(this.props.maxDate);
      }
    }
  },

  boundedMinDate() {
    if (!!this.props.minDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.minDate).subtract(1, 'day');
      } else {
        return this.momentDate(this.props.minDate);
      }
    }
  },

  // Accepts only moments
  changeDate(date) {
    this.setState({value: date});
    this.resetErrors();
    this.hideDatePicker();
    this.props.onChange(date);
  },

  containerClasses() {
    let classes = ['date-field', 'relative'];
    if (this.state.disabled) classes.push('disabled');
    if (this.props.label) classes.push('with-label');
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  datePicker() {
    if (this.state.show) {
      return (
        <div>
          <div className='modal-clear-bg'
               onClick={this.hideDatePicker}
               style={{zIndex: this.baseZIndex()-2}}>
          </div>
          <DatePicker date={this.state.value || Moment()}
                      maxDate={this.boundedMaxDate()}
                      minDate={this.boundedMinDate()}
                      onChangeDate={this.changeDate}
                      show={this.state.show}
                      zIndex={this.baseZIndex()-1} />
        </div>
      );
    }
  },



  hideDatePicker() {
    this.setState({show: false});
  },

  iconClasses() {
    let classes = ['icon-calendar', 'ml1', 'absolute'];
    this.state.disabled ? classes.push('grey-25') : classes.push('blue-70');
    return classes.join(' ');
  },

  inputClasses() {
    let classes = ['relative', 'fit', 'pr4'];
    classes.push( 'field-' + this.props.fieldColor );
    if (this.state.errors.length > 0) classes.push('bc-orange bw-2');
    return classes.join(' ');
  },

  isDateValid() {
    if (this.state && this.state.value) {
      return this.state.value.isValid();
    } else if (this.props.value) {
      return this.momentDate(this.props.value).isValid();
    } else {
      return true;
    }
  },

  isFormatValid() {
    return validDateFormats.indexOf(this.props.dateFormat) != -1;
  },

  label() {
    if (this.props.label) {
      return <label className="px2 mb1 relative"
                    onClick={this.showDatePicker}
                    style={{zIndex: this.baseZIndex()+2}} >
               {this.props.label}
             </label>;
    }
  },

  momentDate(date) {
    if (!!date) {
      switch (date.constructor.name) {
        case "Date":
        case "Number":
          return Moment(date);
        case "Moment":
          return date;
        case "String":
          return Moment(date, this.props.dateFormat);
        default:
          return null;
      }
    } else {
      return null;
    }
  },

  resetErrors() {
    let errors = [];
    if (!this.isDateValid()) errors.push('Invalid date');
    this.setState({errors: errors});
  },

  showDatePicker() {
    if (!this.state.disabled) this.setState({show: true});
  },

  value() {
    if (this.state.value) return this.state.value.format(this.props.dateFormat);
  },

  render() {
    return (
      <div className={this.containerClasses()}>
        {this.label()}
        {this.datePicker()}
        <div className='relative rounded-2 overflow-hidden no-select'
             style={{zIndex: this.baseZIndex()}}>
          <input className={this.inputClasses()}
                 disabled={this.state.disabled}
                 name={this.props.name}
                 onFocus={this.showDatePicker}
                 readOnly
                 type="text"
                 placeholder={this.props.placeholder}
                 value={this.value()} />
          <span className={this.iconClasses()}
                onClick={this.showDatePicker}
                style={{zIndex: this.baseZIndex()+2}}></span>
        </div>
        <div className="clearfix"></div>
        <FieldErrors errors={this.state.errors} />
      </div>
    );
  }
});
