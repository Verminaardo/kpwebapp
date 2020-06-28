import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import {isEmpty} from "lodash";

class SimpleSelect extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = { value: this.props.value };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({ value: event.target.value });
      this.props.onChange && this.props.onChange(event.target.value);
   }

   render() {
      const {
         className,
         id,
         placeholder,
         notClearableOptions,
         options,
         idType,
         valueType
      } = this.props;

      return (
         <select
            className={className}
            id={id}
            onChange={this.handleChange}
            value={this.state.value}
            placeholder={placeholder}>
            {!notClearableOptions && <option />}
            {!isEmpty(options) &&
               options.map((option, index) => (
                  <option key={uniqueId()} value={option[idType || 'id']}>
                     {option[valueType || 'name']}
                  </option>
               ))}
         </select>
      );
   }
}

export default SimpleSelect;
