
import React, { Component } from 'react';
import Form from '../../../components/uielements/form';
import Input from '../../../components/uielements/input';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import IntlMessages from '../../../components/utility/intlMessages';
import FormValidation from './FormValidation';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
    }
};

export default class EditUsers extends Component {
    render() {
        // console.log('props:',this.props)
        return (
            <LayoutWrapper>
                <PageHeader><IntlMessages id="forms.addUsers" /></PageHeader>
                <Box>
                    <FormValidation history={this.props} />
                </Box>
            </LayoutWrapper>
        );
    }
}
