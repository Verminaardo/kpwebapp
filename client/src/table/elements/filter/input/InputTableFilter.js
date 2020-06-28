import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Const from '../../constants/index';
import debounce from 'lodash/debounce';

class InputTableFilter extends Component {
   constructor(props, context) {
      super(props, context);

      this.filter = this.filter.bind(this);

      const { filterRequest, delay, onChange } = props;
      this.onFilter = debounce(filterRequest || onChange, delay || Const.FILTER_DELAY);
   }

   filter(event) {
      let filter;
      const { name, onChange, filterRequest } = this.props;
      if (name) {
         event.persist();
         filter = { [event.target.name]: event.target.value };
      } else {
         filter = event;
      }

      if (filterRequest) {
         onChange(filter);
      }
      this.onFilter(filter);
   }

   render() {
      const { placeholder, name, style, onEnter, className, value } = this.props;
      return (
         <input
            placeholder={placeholder}
            name={name}
            value={value}
            type="text"
            style={style}
            onKeyPress={onEnter}
            onChange={this.filter}
            className={className || 'input-filter form-control'}
         />
      );
   }
}

InputTableFilter.propTypes = {
   placeholder: PropTypes.string,
   value: PropTypes.string,
   name: PropTypes.string,
   className: PropTypes.string,
   style: PropTypes.object,
   delay: PropTypes.number,
   onEnter: PropTypes.func,
   onChange: PropTypes.func.isRequired,
   filterRequest: PropTypes.func
};

export default InputTableFilter;
