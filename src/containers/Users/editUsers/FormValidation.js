import React, { Component } from 'react';
import { Input } from 'antd';
import Form from '../../../components/uielements/form';
import Checkbox from '../../../components/uielements/checkbox';
import Button from '../../../components/uielements/button';
import Notification from '../../../components/notification';
const FormItem = Form.Item;

class FormWIthSubmissionButton extends Component {
  state = {
    confirmDirty: false,
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      
      if (!err) {
        Notification(
          'success',
          'User has been Added',
          // JSON.stringify(values)
        );
        // this.props.history.push('dashboard/users')
        this.props.history.history.push('/dashboard/users');
      }
    });
  };
  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  render() {
    // console.log('props:',this.props)
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="E-mail" hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input name="email" id="email" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Name" hasFeedback>
          {getFieldDecorator('text', {
            rules: [
              {
                required: true,
                message: 'Please input your Name!',
              },
              {
                validator: this.checkConfirm,
              },
            ],
          })(<Input type="text" />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedFormWIthSubmissionButton = Form.create()(FormWIthSubmissionButton);
export default WrappedFormWIthSubmissionButton;
