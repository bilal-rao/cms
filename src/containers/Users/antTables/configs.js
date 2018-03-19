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
<<<<<<< HEAD
=======
  // console.log(type)
>>>>>>> bb592121d350e320d6737343a4a4d60d6b8a831e
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
<<<<<<< HEAD
                <Icon type="edit"  onClick={()=>console.log('icon clicked')} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Icon type="eye" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
=======
                <Icon type="edit" className="isoEditIcon" />
                {/* <Icon type="decription" className="isoViewIcon" /> */}
>>>>>>> bb592121d350e320d6737343a4a4d60d6b8a831e
                <Icon type="delete" className="isoDeleteIcon" />
            </div>
    default:
      return TextCell(value);
  }
};

<<<<<<< HEAD
=======
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
>>>>>>> bb592121d350e320d6737343a4a4d60d6b8a831e

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
<<<<<<< HEAD
=======
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
>>>>>>> bb592121d350e320d6737343a4a4d60d6b8a831e
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
<<<<<<< HEAD
=======
  // {
  //   title: <IntlMessages id="antTable.title.dob" />,
  //   key: 'date',
  //   width: 200,
  //   render: object => renderCell(object, 'DateCell', 'date')
  // }
>>>>>>> bb592121d350e320d6737343a4a4d60d6b8a831e
];
const smallColumns = [columns[1], columns[2], columns[3], columns[4]];
const sortColumns = [
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: true },
  { ...columns[3], sorter: true },
<<<<<<< HEAD
  { ...columns[4], sorter: false }
=======
  { ...columns[4], sorter: true }
>>>>>>> bb592121d350e320d6737343a4a4d60d6b8a831e
];

const tableinfos = [
  {
<<<<<<< HEAD
    // title: 'Sortable Table',
=======
    title: 'Sortable Table',
>>>>>>> bb592121d350e320d6737343a4a4d60d6b8a831e
    value: 'sortView',
    columns: clone(sortColumns)
  },
];
export { columns, tableinfos };
