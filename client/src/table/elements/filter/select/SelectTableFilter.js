import React, { Component } from 'react';
import SimpleSelect from "../../pagination/size-per-page/SimpleSelect";

class SelectTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      this.filter = this.filter.bind(this);
   }

   filter(value) {
      const { onChange } = this.props;
      if (onChange && (value || value === '')) {
         onChange(value);
      }
   }

   render() {
      const { id, className, optionList, idType, valueType, placeholder } = this.props;
      return (
         <SimpleSelect
            className={className || 'input-filter form-control'}
            placeholder={placeholder || 'Выберите из списка...'}
            options={optionList}
            idType={idType}
            valueType={valueType}
            onChange={this.filter}
            id={id}
         />
      );
   }
}

export default SelectTableFilter;
