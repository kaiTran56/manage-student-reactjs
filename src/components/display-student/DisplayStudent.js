import React, { Component } from 'react';
import "./../../App.css";
import axios from 'axios';
import *as typeUrl from "./../../constants/UrlAPIConstant";

export default class DisplayStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseList: [],
            studentList: [],
            codeOfClass: "",

        };
    }

    componentDidMount() {
        this.getCourse();
        this.getAllStudent();
    }

    getCourse = () => {
        axios.get(typeUrl.GET_COURSE)
            .then(response => {
                console.log(response.data);
                this.setState({
                    courseList: response.data
                })
            })
            ;
    }


    exportExcelFile = () => {

        let { codeOfClass, studentList } = this.state;

        if (studentList.length === 0) {
            alert("Nothing to export to excel file!");
        } else {
            if (codeOfClass != "" || codeOfClass.length > 0) {

                if (window.confirm('Bạn có muốn tải file thống kê không?')) {
                    axios.get(typeUrl.DOWNLOAD_EXCEL_FILE + "/" + codeOfClass, {
                        responseType: 'blob',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => {
                            const url = window.URL.createObjectURL(new Blob([response.data]));
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', 'excel_course_' + codeOfClass + "_" + new Date() + '_statistic.xlsx');
                            document.body.appendChild(link);
                            link.click();
                        })
                        .catch(err => console.log(err));
                } else {

                }
            } else {
                alert("Can't download File, please choose a code of Course!");
            }
        }



    }

    getAllStudent = () => {
        this.setState({
            studentList: []
        })
        axios.get(typeUrl.GET_ALL_STUDENT)
            .then(response => response.data)
            .then(res => {
                this.setState({
                    studentList: res.listResult
                })
            })
    }

    getStudentByCourse = (event) => {
        let course = event.target.value;
        this.setState({
            studentList: [],
            codeOfClass: course,
        })
        console.log(course);
        if (course !== "All") {
            axios.get(typeUrl.GET_STUDENT_BY_COURSE + course)
                .then(response => response.data)
                .then(res => {
                    if (res != null)
                        this.setState({
                            studentList: res
                        });
                    console.log(res);
                }
                ).catch(err => alert(err));
        } else if (course === "All") {
            this.getAllStudent();
        }
    }

    render() {
        let { courseList, studentList } = this.state;
        let elementCourse = courseList.map((course, index) => {
            return (<option key={index} value={course.codeOfClass} >{course.name}</option>)
        })

        let elementStudent = studentList.map((student, index) => {
            return (<tr className="d-flex row-height-cell-table text-sm-left" key={index} >
                <th className="col-1 text-center sticky-col first-col">
                    {/* sticky-col first-col */}
                    {index + 1}
                </th>
                <td className="col-2 sticky-col second-col">
                    {/* sticky-col second-col */}
                    <input type="text"
                        className="form-control row-height-input-table" value={student.codeOfClass} placeholder="Lớp học" disabled />
                </td>
                <td className="col-2 sticky-col third-col">
                    {/* sticky-col third-col */}
                    <input type="text"
                        className="form-control row-height-input-table" value={student.name} placeholder="Tên học sinh" disabled />
                </td>
                <td className="col-2">
                    <input type="text"
                        className="form-control row-height-input-table" value={student.dob} disabled />
                </td>
                <td className="col-1">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input row-height-input-table" type="radio" name={"inlineRadioOptions_" + index} value="Nam" disabled checked={student.gender === 'Nam' || student.gender === 'nam'} />
                        <label className="form-check-label small" for="inlineRadio1">Nam</label>
                        <input className="form-check-input row-height-input-table" type="radio" name={"inlineRadioOptions_" + index} value="Nu" disabled checked={student.gender === 'Nu' || student.gender === 'nu'} />
                        <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                    </div>

                </td>
                <td className="col-2">
                    <input type="text"
                        className="form-control row-height-input-table" value={student.phone} placeholder="Số điện thoại" disabled />
                </td>
                <td className="col-5">
                    <textarea className="form-control row-height-input-table" rows="1" value={student.note} disabled></textarea>
                </td>
            </tr>

            );
        });
        return (
            <div>
                <div className="card ">
                    <div className="card-header row">
                        <div className="col-1">Lớp</div>
                        <div className="col-3">
                            <select className="custom-select" onChange={this.getStudentByCourse}>
                                <option disabled selected>None</option>
                                {elementCourse}
                                <option value="All">All Student</option>
                            </select>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="scrollit">
                            <table className="table table-bordered main-table" >
                                <thead className="thead thead-dark sticky-header sticky-header-position small">
                                    <tr className="d-flex ">
                                        <th className="col-1 text-center sticky-col first-header">
                                            STT
                                        </th>
                                        <th className="col-2 sticky-col second-header">Lớp</th>
                                        <th className="col-2 sticky-col third-header">Tên sinh viên</th>
                                        <th className="col-2">Ngày sinh</th>
                                        <th className="col-1">Giới tính</th>
                                        <th className="col-2">Số điện thoại</th>
                                        <th className="col-2">Ghi chú</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {elementStudent}
                                </tbody>
                            </table></div>
                        <button type="button" className="btn btn-success batch-input-position" onClick={this.exportExcelFile}>Export</button>
                    </div>
                </div>
            </div >

        );
    }
}