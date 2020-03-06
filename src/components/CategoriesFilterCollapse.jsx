import React from "react";
import { Collapse, Checkbox } from "@baltimorecounty/dotgov-components";

const CategoriesFilterCollapse = props => {
  const { id, header, onChange, items } = props;

  return (
    <Collapse id={id} header={header}>
      {items.map(item => {
        return (
          <Checkbox
            key={item.name}
            id={item.name}
            name={item.name}
            onChange={onChange}
            checked={item.checked}
            label={item.name}
            value={`${item.checked}`}
          />
        );
      })}
    </Collapse>
  );
};

export default CategoriesFilterCollapse;
