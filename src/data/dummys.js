import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const kanbanGrid = [
  { headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true },

  { headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true },

  { headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false },

  { headerText: 'Done',
    keyField: 'Close',
    allowToggle: true },
];

export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'artifacts',
          icon: <FiShoppingBag />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'list of artifacts',
          icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'employees',
          icon: <IoMdContacts />,
        },
        {
          name: 'customers',
          icon: <RiContactsLine />,
        },
      ],
    },

];

export const ordersGrid = [
    {
      headerText: 'Image',
      template: gridOrderImage,
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'OrderItems',
      headerText: 'Item',
      width: '150',
      editType: 'dropdownedit',
      textAlign: 'Center',
    },
    { field: 'CustomerName',
      headerText: 'Customer Name',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'TotalAmount',
      headerText: 'Total Amount',
      format: 'C2',
      textAlign: 'Center',
      editType: 'numericedit',
      width: '150',
    },
    {
      headerText: 'Status',
      template: gridOrderStatus,
      field: 'OrderItems',
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: '120',
      textAlign: 'Center',
    },
  
    {
      field: 'Location',
      headerText: 'Location',
      width: '150',
      textAlign: 'Center',
    },
  ];

  export const ordersData = [
    {
      OrderID: 5,
      CustomerName: 'artifact.name',
  
      TotalAmount: 'artifact.artifact_number',
      OrderItems: 'artifact.name',
      Location: 'artifact.location',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage: 'artifact.photos',
    },
    {
      OrderID: 6,
      CustomerName: 'artifact.name',
      TotalAmount: 'artifact.artifact_number',
      OrderItems: 'artifact.name',
      Location: 'artifact.location',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage: 'artifact.photos',
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      ProductImage:
      product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      ProductImage:
        product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      ProductImage:
        product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      ProductImage:
        product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      ProductImage:
        product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      ProductImage:
        'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      ProductImage:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      ProductImage:
        'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      ProductImage:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
  ];