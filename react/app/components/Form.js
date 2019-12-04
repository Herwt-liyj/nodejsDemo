//form表单提交数据
import React, { Component } from 'react';
class Form extends Component {
    render() {
        return (
            <ul>
                <li>
                    <label>姓名：</label>
                    <input type='text' placeholder="请输入姓名"></input>
                </li>
                <li>
                    <label>班级：</label>
                    <input type='text' placeholder="请输入班级"></input>
                </li>
                <li>
                    <label>年龄：</label>
                    <input type='text' placeholder="请输入年龄"></input>
                </li>
                <li>
                    <label>性别：</label>
                    <input type='text' placeholder="请输入性别"></input>
                </li>
                <li>
                    <label>成绩：</label>
                    <input type='text' placeholder="请输入成绩"></input>
                </li>
            </ul>
        )
    }
}

export default Form;