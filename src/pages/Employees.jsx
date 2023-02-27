import React, { useState, useEffect } from 'react';
import axios from "axios";
import { 
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Search,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject, } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid, contextMenuItems } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const toolbarOptions = ['Search'];
  const [artifact, setArtifact] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);
  
  useEffect(() => {
    const getArtifact = async () => {
      try {
        const response = await axios.get(
          "https://archaeologs-barc6.ondigitalocean.app/api/artifacts"
        );
        setArtifact(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getArtifact();
  }, []);
  const editing = { allowDeleting: true, allowEditing: true };

  const handleDetailClick = (data) => {
    setSelectedDetail(data.detail);
  };

  const detailTemplate = (props) => {
    return (
      <div onClick={() => handleDetailClick(props.data)}>
        {props.data.detail.substring(0, 37)}
      </div>
    );
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Artifact details" />
      <GridComponent
        dataSource={artifact}
        width="auto"
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        pageSettings={{ pageCount: 5 }}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => {
            if (item.field === "detail") {
              return (
                <ColumnDirective
                  key={index}
                  {...item}
                  template={detailTemplate}
                />
              );
            }
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject services={[
          Search,
          Page,
          ContextMenu,
          Filter,
          ExcelExport,
          Edit,
          PdfExport,
          Resize,
          Sort,
          ]} />
      </GridComponent>

      {selectedDetail && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="text-lg font-bold mb-2">Details</div>
            <div>{selectedDetail}</div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setSelectedDetail(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;