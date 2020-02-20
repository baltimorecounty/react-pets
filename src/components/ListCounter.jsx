import React from "react";

const ListCounter = ({ count, total }) => (
  <p className="dg_list_counter ">{`Showing ${count} of ${total} news items`}</p>
);

export default ListCounter;
