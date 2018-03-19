import React, { Component } from 'react';
import TableWrapper from '../antTable.style';
import Button from '../../../../components/uielements/button';
import IntlMessages from '../../../../components/utility/intlMessages';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

=======
>>>>>>> bb592121d350e320d6737343a4a4d60d6b8a831e

export default class extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      dataList: this.props.dataList.getAll()
    };
  }
  onChange(pagination, filters, sorter) {
    const { dataList } = this.props;
    if (sorter && sorter.columnKey && sorter.order) {
      if (sorter.order === 'ascend') {
        dataList.getSortAsc(sorter.columnKey);
      } else {
        dataList.getSortDesc(sorter.columnKey);
      }
      this.setState({ dataList: dataList.getAll() });
    }
  }
  render() {
<<<<<<< HEAD
    // console.log('sdsdsd', this.props)
    return (
      <div>
        <Link to="users/addUsers">
          <Button type="primary">
            {<IntlMessages id="forms.button.addUsers" />}
          </Button>
        </Link>
=======
    return (
      <div>
        <Button type="primary">
          {<IntlMessages id="forms.button.addUsers" />}
        </Button>
>>>>>>> bb592121d350e320d6737343a4a4d60d6b8a831e
        <TableWrapper
          columns={this.props.tableInfo.columns}
          onChange={this.onChange}
          dataSource={this.state.dataList}
          className="isoSortingTable"
        />
      </div>
    );
  }
}
