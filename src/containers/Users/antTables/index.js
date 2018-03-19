import React, { Component } from 'react';
import Tabs, { TabPane } from '../../../components/uielements/tabs';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import TableDemoStyle from './demo.style';
import fakeData from '../fakeData';
import { tableinfos } from './configs';
import * as TableViews from './tableViews/';
import { Button } from 'antd';

const dataList = new fakeData(10);

export default class AntTable extends Component {
  renderTable(tableInfo) {
    let Component;
    switch (tableInfo.value) {
      case 'sortView':
        Component = TableViews.SortView;
        break;
      case 'filterView':
        Component = TableViews.FilterView;
        break;
      case 'editView':
        Component = TableViews.EditView;
        break;
      case 'groupView':
        Component = TableViews.GroupView;
        break;
      case 'customizedView':
        Component = TableViews.CustomizedView;
        break;
      default:
        Component = TableViews.SimpleView;
    }
<<<<<<< HEAD
    return <Component tableInfo={tableInfo} dataList={dataList} history={this.props} />;
  }
  render() {
    console.log('index.js of ant table,',this.props)
=======
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }
  render() {
>>>>>>> bb592121d350e320d6737343a4a4d60d6b8a831e
    return (
      <LayoutContentWrapper>
        <TableDemoStyle className="isoLayoutContent">
          <Tabs className="isoTableDisplayTab">
            {tableinfos.map(tableInfo => (
              <TabPane tab={tableInfo.title} key={tableInfo.value}>
                {this.renderTable(tableInfo)}
              </TabPane>
            ))}
          </Tabs>
        </TableDemoStyle>
      </LayoutContentWrapper>
    );
  }
}
export { TableViews, tableinfos, dataList };
