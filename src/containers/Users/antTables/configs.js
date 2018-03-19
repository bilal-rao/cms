import React from 'react';
import clone from 'clone';
import IntlMessages from '../../../components/utility/intlMessages';
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell
} from '../../../components/tables/helperCells';
import { Icon } from 'antd';

const renderCell = (object, type, key) => {
  // console.log(type)
  const value = object[key];
  switch (type) {
    case 'ImageCell':
      return ImageCell(value);
    case 'DateCell':
      return DateCell(value);
    case 'LinkCell':
      return LinkCell(value);
    case 'CrudIcon':
      return <div>
                <Icon type="edit" className="isoEditIcon" />
                {/* <Icon type="decription" className="isoViewIcon" /> */}
                <Icon type="delete" className="isoDeleteIcon" />
            </div>
    default:
      return TextCell(value);
  }
};

// const columns = [
//   {
//     title: <IntlMessages id="antTable.title.image" />,
//     key: 'avatar',
//     width: '1%',
//     className: 'isoImageCell',
//     render: object => renderCell(object, 'ImageCell', 'avatar')
//   },
//   {
//     title: <IntlMessages id="antTable.title.name" />,
//     key: 'name',
//     width: 100,
//     render: object => renderCell(object, 'TextCell', 'name')
//   },
//   {
//     title: <IntlMessages id="antTable.title.email" />,
//     key: 'email',
//     width: 200,
//     render: object => renderCell(object, 'LinkCell', 'email')
//   },
//   {
//     title: <IntlMessages id="antTable.title.status" />,
//     key: 'status',
//     width: 100,
//     render: object => renderCell(object, 'TextCell', 'status')
//   }
// ];

const columns = [
  {
    title: <IntlMessages id="antTable.title.image" />,
    key: 'avatar',
    width: '1%',
    className: 'isoImageCell',
    render: object => renderCell(object, 'ImageCell', 'avatar')
  },
  {
    title: <IntlMessages id="antTable.title.name" />,
    key: 'name',
    width: 300,
    render: object => renderCell(object, 'TextCell', 'name')
  },
  // {
  //   title: <IntlMessages id="antTable.title.lastName" />,
  //   key: 'lastName',
  //   width: 100,
  //   render: object => renderCell(object, 'TextCell', 'lastName')
  // },
  // {
  //   title: <IntlMessages id="antTable.title.city" />,
  //   key: 'city',
  //   width: 200,
  //   render: object => renderCell(object, 'TextCell', 'city')
  // },
  // {
  //   title: <IntlMessages id="antTable.title.street" />,
  //   key: 'street',
  //   width: 200,
  //   render: object => renderCell(object, 'TextCell', 'street')
  // },
  {
    title: <IntlMessages id="antTable.title.email" />,
    key: 'email',
    width: 400,
    render: object => renderCell(object, 'LinkCell', 'email')
  },
  {
    title: <IntlMessages id="antTable.title.status" />,
    key: 'status',
    width: 100,
    render: object => renderCell(object, 'TextCell', 'status')
  },
  {
    title: <IntlMessages id="antTable.title.actions" />,
    key: 'actions',
    width: 400,
    render: object => renderCell(object, 'CrudIcon', 'actions')
  }
  // {
  //   title: <IntlMessages id="antTable.title.dob" />,
  //   key: 'date',
  //   width: 200,
  //   render: object => renderCell(object, 'DateCell', 'date')
  // }
];
const smallColumns = [columns[1], columns[2], columns[3], columns[4]];
const sortColumns = [
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: true },
  { ...columns[3], sorter: true },
  { ...columns[4], sorter: true }
];

const tableinfos = [
  {
    title: 'Sortable Table',
    value: 'sortView',
    columns: clone(sortColumns)
  },
];
export { columns, tableinfos };
