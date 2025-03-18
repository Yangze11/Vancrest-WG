import React, { useState } from 'react';
import { Table, Card, Button, Space, Modal, Form, Input, message, DatePicker } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import MDEditor from '@uiw/react-md-editor';

const Announcements = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: '系统维护公告',
      content: '系统将于2024年1月1日进行例行维护...',
      startTime: '2024-01-01',
      endTime: '2024-01-02',
      status: '进行中'
    }
  ]);

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      key: 'startTime'
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      key: 'endTime'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            编辑
          </Button>
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          >
            删除
          </Button>
        </Space>
      )
    }
  ];

  const handleAdd = () => {
    form.resetFields();
    setVisible(true);
  };

  const handleEdit = (record) => {
    form.setFieldsValue(record);
    setVisible(true);
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: '确认删除',
      content: '确定要删除这条公告吗？',
      onOk: () => {
        setAnnouncements(announcements.filter(item => item.id !== record.id));
        message.success('删除成功');
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);
      // 这里将来需要接入实际的API
      setTimeout(() => {
        const newAnnouncement = {
          ...values,
          id: Date.now(),
          startTime: values.startTime.format('YYYY-MM-DD'),
          endTime: values.endTime.format('YYYY-MM-DD'),
          status: '进行中'
        };
        setAnnouncements([newAnnouncement, ...announcements]);
        setVisible(false);
        message.success('保存成功');
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('表单验证失败:', error);
    }
  };

  return (
    <div>
      <Card
        title="公告管理"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            新建公告
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={announcements}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>

      <Modal
        title="编辑公告"
        open={visible}
        onOk={handleSubmit}
        onCancel={() => setVisible(false)}
        confirmLoading={loading}
        width={800}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: '请输入公告标题' }]}
          >
            <Input placeholder="请输入公告标题" />
          </Form.Item>
          <Form.Item
            name="content"
            label="内容"
            rules={[{ required: true, message: '请输入公告内容' }]}
          >
            <MDEditor height={400} />
          </Form.Item>
          <Form.Item
            name="startTime"
            label="开始时间"
            rules={[{ required: true, message: '请选择开始时间' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="endTime"
            label="结束时间"
            rules={[{ required: true, message: '请选择结束时间' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Announcements;