import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  const [artifact, setArtifact] = useState(null);

  useEffect(() => {
    const getArtifact = async () => {
      try {
        const response = await axios.get(
          "https://archaeologs-barc6.ondigitalocean.app/api/artifacts"
        );
        setArtifact(response.data.data);
        //console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getArtifact();
  }, []);

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="List of Artifacts" />
      {artifact && (
        <GridComponent
          id="gridcomp"
          dataSource={artifact}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
          editSettings={editing}
        >
          <ColumnsDirective>
            {ordersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
            services={[
              Resize,
              Sort,
              ContextMenu,
              Filter,
              Page,
              ExcelExport,
              Edit,
              PdfExport,
            ]}
          />
        </GridComponent>
      )}
    </div>
  );
};

export default Orders;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

// import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
// import { Header } from '../components';

// const Orders = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('https://archaeologs-barc6.ondigitalocean.app/api/artifacts/1')
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   const editing = { allowDeleting: true, allowEditing: true };
//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="List of Artifacts" />
//       <GridComponent
//         id="gridcomp"
//         dataSource={data}
//         allowPaging
//         allowSorting
//         allowExcelExport
//         allowPdfExport
//         contextMenuItems={contextMenuItems}
//         editSettings={editing}
//       >
//         <ColumnsDirective>
//           {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//           {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//         <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
//       </GridComponent>
//     </div>
//   );
// };
// export default Orders;
