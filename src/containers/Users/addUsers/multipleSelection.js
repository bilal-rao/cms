import React, { Component } from 'react';
import { Col, Row } from 'antd';
import Select, { SelectOption } from '../../../components/uielements/select';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

export default class extends Component {
    handleChange = value => { };

    render() {
        const rowStyle = {
            width: '100%',
            display: 'flex',
            flexFlow: 'row wrap'
        };
        const colStyle = {
            marginBottom: '16px'
        };
        const gutter = 16;

        return (
            <ContentHolder>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={this.handleChange}
                >
                    {children}
                </Select>
            </ContentHolder>
        );
    }
}
