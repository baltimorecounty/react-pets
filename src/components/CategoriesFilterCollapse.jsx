import React from "react";
import { Collapse, Checkbox } from "@baltimorecounty/dotgov-components";

const CategoriesFilterCollapse = props => {
  const { id, header, onChange, items } = props;

  return (
    <Collapse id={id} header={header}>
      {items.map(item => {
        const { label, value } = item;
        const name = `${label}-${value}`.toLowerCase();
        return (
          <Checkbox
            key={name}
            id={name}
            name={id}
           // onChange={onChange}
           // checked={item.checked}
            label={label}
            value={value}
          />
        );
      })}
    </Collapse>
  );
};

export default CategoriesFilterCollapse;
