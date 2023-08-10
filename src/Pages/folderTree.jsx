/* eslint-disable react/prop-types */

import { useState } from "react";

/* eslint-disable no-unused-vars */
const elements = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: ".bin",
          children: [
            {
              name: "acorn",
            },
            { name: "browserlist" },
          ],
        },
      ],
    },
    {
      name: "src",
      children: [
        {
          name: "app.css",
        },
        {
          name: "app.js",
        },
      ],
    },
  ],
};

function Element({ element, depth }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <div onClick={() => setIsExpanded(!isExpanded)}>
        {element.children && "+"}
        {element.name}
      </div>
      {isExpanded && (
        <div style={{ marginLeft: `${depth * 10}px` }}>
          {element?.children?.map((element) => (
            <Element key={element.name} element={element} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
function FolderTree() {
  return (
    <div>
      {elements.children.map((entry) => (
        <Element key={entry.name} element={entry} depth={1} />
      ))}
    </div>
  );
}

export default FolderTree;
