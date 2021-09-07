import React, { Component } from 'react';
import "./../../App.css";
import axios from "axios";
import * as typeURL from "./../../constants/UrlAPIConstant";

class AddingStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkAll: false,

            codeOfClass: "",
            name: "",
            dob: "",
            gender: "",
            phone: "",
            note: "",


            singleCheck_1: false,
            codeOfClass_1: "",
            name_1: "",
            dob_1: "",
            gender_1: "",
            phone_1: "",
            note_1: "",

            singleCheck_2: false,
            codeOfClass_2: "",
            name_2: "",
            dob_2: "",
            gender_2: "",
            phone_2: "",
            note_2: "",

            singleCheck_3: false,
            codeOfClass_3: "",
            name_3: "",
            dob_3: "",
            gender_3: "",
            phone_3: "",
            note_3: "",

            singleCheck_4: false,
            codeOfClass_4: "",
            name_4: "",
            dob_4: "",
            gender_4: "",
            phone_4: "",
            note_4: "",

            singleCheck_5: false,
            codeOfClass_5: "",
            name_5: "",
            dob_5: "",
            gender_5: "",
            phone_5: "",
            note_5: "",

            singleCheck_6: false,
            codeOfClass_6: "",
            name_6: "",
            dob_6: "",
            gender_6: "",
            phone_6: "",
            note_6: "",

            singleCheck_7: false,
            codeOfClass_7: "",
            name_7: "",
            dob_7: "",
            gender_7: "",
            phone_7: "",
            note_7: "",

            singleCheck_8: false,
            codeOfClass_8: "",
            name_8: "",
            dob_8: "",
            gender_8: "",
            phone_8: "",
            note_8: "",

            singleCheck_9: false,
            codeOfClass_9: "",
            name_9: "",
            dob_9: "",
            gender_9: "",
            phone_9: "",
            note_9: "",

            singleCheck_10: false,
            codeOfClass_10: "",
            name_10: "",
            dob_10: "",
            gender_10: "",
            phone_10: "",
            note_10: "",



        }
        this.state.checkedArray = [];
        this.state.courseList = [];
        this.state.batchInput = false;

    }

    componentDidMount() {
        this.getCourse();
    }

    getCourse = () => {
        axios.get(typeURL.GET_COURSE)
            .then(response => {

                this.setState({
                    courseList: response.data
                })
            })
            ;
    }

    onCheckedAll = () => {
        this.setState({
            checkAll: !this.state.checkAll,
            singleCheck_1: !this.state.checkAll,
            singleCheck_2: !this.state.checkAll,

            singleCheck_3: !this.state.checkAll,

            singleCheck_4: !this.state.checkAll,

            singleCheck_5: !this.state.checkAll,

            singleCheck_6: !this.state.checkAll,

            singleCheck_7: !this.state.checkAll,

            singleCheck_8: !this.state.checkAll,

            singleCheck_9: !this.state.checkAll,

            singleCheck_10: !this.state.checkAll,
        });
        console.log("Show successfully!");
    }

    onSingleCheck_1 = () => {
        this.setState(
            {
                checkAll: false,
                singleCheck_1: !this.state.singleCheck_1

            });

    }

    onSingleCheck_2 = () => {
        this.setState(
            {
                checkAll: false,
                singleCheck_2: !this.state.singleCheck_2

            });
    }
    onSingleCheck_3 = () => {
        this.setState(
            {
                checkAll: false,
                singleCheck_3: !this.state.singleCheck_3

            });
    }
    onSingleCheck_4 = () => {
        this.setState(
            {
                checkAll: false,
                singleCheck_4: !this.state.singleCheck_4

            });
    }
    onSingleCheck_5 = () => {
        this.setState(
            {
                checkAll: false,
                singleCheck_5: !this.state.singleCheck_5

            });
    }
    onSingleCheck_6 = () => {
        this.setState(
            {
                checkAll: false,
                singleCheck_6: !this.state.singleCheck_6

            });
    }
    onSingleCheck_7 = () => {
        this.setState(
            {
                checkAll: false,
                singleCheck_7: !this.state.singleCheck_7

            });
    }
    onSingleCheck_8 = () => {
        this.setState(
            {
                checkAll: false,
                singleCheck_8: !this.state.singleCheck_8

            });
    }
    onSingleCheck_9 = () => {
        this.setState(
            {
                checkAll: false,
                singleCheck_9: !this.state.singleCheck_9

            });
    }
    onSingleCheck_10 = () => {
        this.setState(
            {
                checkAll: false,
                singleCheck_10: !this.state.singleCheck_10

            });
    }

    onPreventReload = (event) => {
        event.preventDefault();
    }

    createStudentBatchInput = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            batchInput: false
        })
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    createStudentBatchInputBtn = () => {
        let { codeOfClass, name, dob, gender, phone, note } = this.state;

        let errorName = [];
        if (codeOfClass === "" || codeOfClass === null || codeOfClass === undefined) {
            errorName.push("CodeOfClass")
        }
        if (!phone.match("^[0-9]{10}$")) {
            alert("Wrong format of phone!");
        }

        if (name.length > 25) {
            alert("Wrong format of name, not too 25 characters!");
        }

        if (dob === "") {
            errorName.push("dob")
        }
        if (gender === "") {
            errorName.push("gender")
        }
        if (phone === "") {
            errorName.push("phone")
        }


        if (name === "") {
            errorName.push("name")
        }
        if (errorName === undefined || errorName.length == 0) {
            this.setState({

                codeOfClass_1: codeOfClass,
                name_1: name,
                dob_1: dob,
                gender_1: gender,
                phone_1: phone,
                note_1: note,

                codeOfClass_2: codeOfClass,
                name_2: name,
                dob_2: dob,
                gender_2: gender,
                phone_2: phone,
                note_2: note,

                codeOfClass_3: codeOfClass,
                name_3: name,
                dob_3: dob,
                gender_3: gender,
                phone_3: phone,
                note_3: note,

                codeOfClass_4: codeOfClass,
                name_4: name,
                dob_4: dob,
                gender_4: gender,
                phone_4: phone,
                note_4: note,

                codeOfClass_5: codeOfClass,
                name_5: name,
                dob_5: dob,
                gender_5: gender,
                phone_5: phone,
                note_5: note,

                codeOfClass_6: codeOfClass,
                name_6: name,
                dob_6: dob,
                gender_6: gender,
                phone_6: phone,
                note_6: note,

                codeOfClass_7: codeOfClass,
                name_7: name,
                dob_7: dob,
                gender_7: gender,
                phone_7: phone,
                note_7: note,

                codeOfClass_8: codeOfClass,
                name_8: name,
                dob_8: dob,
                gender_8: gender,
                phone_8: phone,
                note_8: note,

                codeOfClass_9: codeOfClass,
                name_9: name,
                dob_9: dob,
                gender_9: gender,
                phone_9: phone,
                note_9: note,

                codeOfClass_10: codeOfClass,
                name_10: name,
                dob_10: dob,
                gender_10: gender,
                phone_10: phone,
                note_10: note,

                codeOfClass: "",
                name: "",
                dob: "",
                gender: "",
                phone: "",
                note: "",

            })
        } else {
            alert("Please not empty! " + errorName);
        }



    }

    createStudent_1 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({

            [name]: value

        })
    }

    saveStudent_1 = () => {
        let { singleCheck_1, codeOfClass_1, name_1, dob_1, gender_1, phone_1, note_1 } = this.state;

        let studentTemp = {
            codeOfClass: codeOfClass_1,
            name: name_1,
            dob: this.formatDate(dob_1),
            gender: gender_1,
            phone: phone_1,
            note: note_1,
        }
        if (singleCheck_1) {
            if (!phone_1.match("^[0-9]{10}$") || phone_1 === "") {
                alert("Student_1: Wrong format of phone!");
            }
            if (codeOfClass_1 === "" || codeOfClass_1 === null || codeOfClass_1 === undefined) {
                alert("Student_1: Please not empty code of class");
            }
            if (dob_1 === "") {
                alert("Student_1: Please not empty code of class");
            }
            if (gender_1 === "") {
                alert("Student_1: Please not empty gender");
            }
            if (name_1.length > 25 || name_1 === "") {
                alert("Student_1: Wrong format of name, not too 25 characters!");
            } else {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save Student_1 information successfully!");
                    })
                    ;
            }
        }
    }

    formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [day, month, year].join('/');
    }

    createStudent_2 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({

            [name]: value

        })
    }

    saveStudent_2 = () => {
        let { singleCheck_2, codeOfClass_2, name_2, dob_2, gender_2, phone_2, note_2 } = this.state;
        let studentTemp = {
            codeOfClass: codeOfClass_2,
            name: name_2,
            dob: this.formatDate(dob_2),
            gender: gender_2,
            phone: phone_2,
            note: note_2,

        }

        if (singleCheck_2) {
            if (!phone_2.match("^[0-9]{10}$") || phone_2 === "") {
                alert("Student_2: Wrong format of phone!");
            }
            if (codeOfClass_2 === "" || codeOfClass_2 === null || codeOfClass_2 === undefined) {
                alert("Student_2: Please not empty code of class");
            }
            if (dob_2 === "") {
                alert("Student_2: Please not empty code of class");
            }
            if (gender_2 === "") {
                alert("Student_2: Please not empty gender");
            }
            if (name_2.length > 25 || name_2 === "") {
                alert("Student_2: Wrong format of name, not too 25 characters!");
            } else {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save Student_2 information successfully!");
                    })
                    ;
            }
        }
    }
    createStudent_3 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({

            [name]: value

        })
    }

    saveStudent_3 = () => {
        let { singleCheck_3, codeOfClass_3, name_3, dob_3, gender_3, phone_3, note_3 } = this.state;
        let studentTemp = {
            codeOfClass: codeOfClass_3,
            name: name_3,
            dob: this.formatDate(dob_3),
            gender: gender_3,
            phone: phone_3,
            note: note_3,

        }

        if (singleCheck_3) {
            if (!phone_3.match("^[0-9]{10}$") || phone_3 === "") {
                alert("Student_3: Wrong format of phone!");
            }
            if (codeOfClass_3 === "" || codeOfClass_3 === null || codeOfClass_3 === undefined) {
                alert("Student_3: Please not empty code of class");
            }
            if (dob_3 === "") {
                alert("Student_3: Please not empty code of class");
            }
            if (gender_3 === "") {
                alert("Student_3: Please not empty gender");
            }
            if (name_3.length > 25 || name_3 === "") {
                alert("Student_3: Wrong format of name, not too 25 characters!");
            } else {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save Student_3 information successfully!");
                    })
                    ;
            }
        }
    }
    createStudent_4 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({

            [name]: value

        })
    }

    saveStudent_4 = () => {
        let { singleCheck_4, codeOfClass_4, name_4, dob_4, gender_4, phone_4, note_4 } = this.state;
        let studentTemp = {
            codeOfClass: codeOfClass_4,
            name: name_4,
            dob: this.formatDate(dob_4),
            gender: gender_4,
            phone: phone_4,
            note: note_4,

        }

        if (singleCheck_4) {
            if (!phone_4.match("^[0-9]{10}$") || phone_4 === "") {
                alert("Student_4: Wrong format of phone!");
            }
            if (codeOfClass_4 === "" || codeOfClass_4 === null || codeOfClass_4 === undefined) {
                alert("Student_4: Please not empty code of class");
            }
            if (dob_4 === "") {
                alert("Student_4: Please not empty code of class");
            }
            if (gender_4 === "") {
                alert("Student_4: Please not empty gender");
            }
            if (name_4.length > 25 || name_4 === "") {
                alert("Student_4: Wrong format of name, not too 25 characters!");
            } else {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save Student_4 information successfully!");
                    })
                    ;
            }
        }
    }
    createStudent_5 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({

            [name]: value

        })
    }

    saveStudent_5 = () => {
        let { singleCheck_5, codeOfClass_5, name_5, dob_5, gender_5, phone_5, note_5 } = this.state;
        let studentTemp = {
            codeOfClass: codeOfClass_5,
            name: name_5,
            dob: this.formatDate(dob_5),
            gender: gender_5,
            phone: phone_5,
            note: note_5,

        }

        if (singleCheck_5) {
            if (!phone_5.match("^[0-9]{10}$") || phone_5 === "") {
                alert("Student_5: Wrong format of phone!");
            }
            if (codeOfClass_5 === "" || codeOfClass_5 === null || codeOfClass_5 === undefined) {
                alert("Student_5: Please not empty code of class");
            }
            if (dob_5 === "") {
                alert("Student_5: Please not empty code of class");
            }
            if (gender_5 === "") {
                alert("Student_5: Please not empty gender");
            }
            if (name_5.length > 25 || name_5 === "") {
                alert("Student_5: Wrong format of name, not too 25 characters!");
            } else {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save Student_5 information successfully!");
                    })
                    ;
            }
        }
    }
    createStudent_6 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({

            [name]: value

        })
    }

    saveStudent_6 = () => {
        let { singleCheck_6, codeOfClass_6, name_6, dob_6, gender_6, phone_6, note_6 } = this.state;
        let studentTemp = {
            codeOfClass: codeOfClass_6,
            name: name_6,
            dob: this.formatDate(dob_6),
            gender: gender_6,
            phone: phone_6,
            note: note_6,

        }

        if (singleCheck_6) {
            if (!phone_6.match("^[0-9]{10}$") || phone_6 === "") {
                alert("Student_6: Wrong format of phone!");
            }
            if (codeOfClass_6 === "" || codeOfClass_6 === null || codeOfClass_6 === undefined) {
                alert("Student_6: Please not empty code of class");
            }
            if (dob_6 === "") {
                alert("Student_6: Please not empty code of class");
            }
            if (gender_6 === "") {
                alert("Student_6: Please not empty gender");
            }
            if (name_6.length > 25 || name_6 === "") {
                alert("Student_6: Wrong format of name, not too 25 characters!");
            } else {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save Student_6 information successfully!");
                    })
                    ;
            }
        }
    }
    createStudent_7 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({

            [name]: value

        })
    }

    saveStudent_7 = () => {
        let { singleCheck_7, codeOfClass_7, name_7, dob_7, gender_7, phone_7, note_7 } = this.state;
        let studentTemp = {
            codeOfClass: codeOfClass_7,
            name: name_7,
            dob: this.formatDate(dob_7),
            gender: gender_7,
            phone: phone_7,
            note: note_7,

        }

        if (singleCheck_7) {
            if (!phone_7.match("^[0-9]{10}$") || phone_7 === "") {
                alert("Student_7: Wrong format of phone!");
            }
            if (codeOfClass_7 === "" || codeOfClass_7 === null || codeOfClass_7 === undefined) {
                alert("Student_7: Please not empty code of class");
            }
            if (dob_7 === "") {
                alert("Student_7: Please not empty code of class");
            }
            if (gender_7 === "") {
                alert("Student_7: Please not empty gender");
            }
            if (name_7.length > 25 || name_7 === "") {
                alert("Student_7: Wrong format of name, not too 25 characters!");
            } else {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save Student_7 information successfully!");
                    })
                    ;
            }
        }
    }
    createStudent_8 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({

            [name]: value

        })
    }

    saveStudent_8 = () => {
        let { singleCheck_8, codeOfClass_8, name_8, dob_8, gender_8, phone_8, note_8 } = this.state;
        let studentTemp = {
            codeOfClass: codeOfClass_8,
            name: name_8,
            dob: this.formatDate(dob_8),
            gender: gender_8,
            phone: phone_8,
            note: note_8,

        }

        if (singleCheck_8) {
            if (!phone_8.match("^[0-9]{10}$") || phone_8 === "") {
                alert("Student_8: Wrong format of phone!");
            }
            if (codeOfClass_8 === "" || codeOfClass_8 === null || codeOfClass_8 === undefined) {
                alert("Student_8: Please not empty code of class");
            }
            if (dob_8 === "") {
                alert("Student_8: Please not empty code of class");
            }
            if (gender_8 === "") {
                alert("Student_8: Please not empty gender");
            }
            if (name_8.length > 25 || name_8 === "") {
                alert("Student_8: Wrong format of name, not too 25 characters!");
            } else {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save Student_8 information successfully!");
                    })
                    ;
            }
        }
    }
    createStudent_9 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({

            [name]: value

        })
    }

    saveStudent_9 = () => {
        let { singleCheck_9, codeOfClass_9, name_9, dob_9, gender_9, phone_9, note_9 } = this.state;
        let studentTemp = {
            codeOfClass: codeOfClass_9,
            name: name_9,
            dob: this.formatDate(dob_9),
            gender: gender_9,
            phone: phone_9,
            note: note_9,

        }

        if (singleCheck_9) {
            if (!phone_9.match("^[0-9]{10}$") || phone_9 === "") {
                alert("Student_9: Wrong format of phone!");
            }
            if (codeOfClass_9 === "" || codeOfClass_9 === null || codeOfClass_9 === undefined) {
                alert("Student_9: Please not empty code of class");
            }
            if (dob_9 === "") {
                alert("Student_9: Please not empty code of class");
            }
            if (gender_9 === "") {
                alert("Student_9: Please not empty gender");
            }
            if (name_9.length > 25 || name_9 === "") {
                alert("Student_9: Wrong format of name, not too 25 characters!");
            } else {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save Student_9 information successfully!");
                    })
                    ;
            }
        }
    }
    createStudent_10 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({

            [name]: value

        })
    }

    saveStudent_10 = () => {
        let { singleCheck_10, codeOfClass_10, name_10, dob_10, gender_10, phone_10, note_10 } = this.state;
        let studentTemp = {
            codeOfClass: codeOfClass_10,
            name: name_10,
            dob: this.formatDate(dob_10),
            gender: gender_10,
            phone: phone_10,
            note: note_10,

        }

        if (singleCheck_10) {
            if (!phone_10.match("^[0-9]{10}$") || phone_10 === "") {
                alert("Student_10: Wrong format of phone!");
            }
            if (codeOfClass_10 === "" || codeOfClass_10 === null || codeOfClass_10 === undefined) {
                alert("Student_10: Please not empty code of class");
            }
            if (dob_10 === "") {
                alert("Student_10: Please not empty code of class");
            }
            if (gender_10 === "") {
                alert("Student_10: Please not empty gender");
            }
            if (name_10.length > 25 || name_10 === "") {
                alert("Student_10: Wrong format of name, not too 25 characters!");
            } else {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save Student_10 information successfully!");
                    })
                    ;
            }
        }



    }

    saveStudent = () => {

        let { singleCheck_1, singleCheck_2, singleCheck_3, singleCheck_4, singleCheck_5, singleCheck_6, singleCheck_7, singleCheck_8, singleCheck_9, singleCheck_10 } = this.state;

        this.saveStudent_1();
        this.saveStudent_2();
        this.saveStudent_3();
        this.saveStudent_4();
        this.saveStudent_5();
        this.saveStudent_6();
        this.saveStudent_7();
        this.saveStudent_8();
        this.saveStudent_9();
        this.saveStudent_10();

        if ((singleCheck_1 || singleCheck_2 || singleCheck_3 || singleCheck_4 || singleCheck_5 || singleCheck_6 || singleCheck_7 || singleCheck_8 || singleCheck_9 || this.onSingleCheck_10) === true) {

        } else if ((singleCheck_1 && singleCheck_2 && singleCheck_3 && singleCheck_4 && singleCheck_5 && singleCheck_6 && singleCheck_7 && singleCheck_8 && singleCheck_9 && this.onSingleCheck_10) === false) {
            alert("Nothing to save Student information!");
        }



        this.setState({

            checkAll: false,

            codeOfClass: "",
            name: "",
            dob: "",
            gender: "",
            phone: "",
            note: "",


            singleCheck_1: false,
            codeOfClass_1: "",
            name_1: "",
            dob_1: "",
            gender_1: "",
            phone_1: "",
            note_1: "",

            singleCheck_2: false,
            codeOfClass_2: "",
            name_2: "",
            dob_2: "",
            gender_2: "",
            phone_2: "",
            note_2: "",

            singleCheck_3: false,
            codeOfClass_3: "",
            name_3: "",
            dob_3: "",
            gender_3: "",
            phone_3: "",
            note_3: "",

            singleCheck_4: false,
            codeOfClass_4: "",
            name_4: "",
            dob_4: "",
            gender_4: "",
            phone_4: "",
            note_4: "",

            singleCheck_5: false,
            codeOfClass_5: "",
            name_5: "",
            dob_5: "",
            gender_5: "",
            phone_5: "",
            note_5: "",

            singleCheck_6: false,
            codeOfClass_6: "",
            name_6: "",
            dob_6: "",
            gender_6: "",
            phone_6: "",
            note_6: "",

            singleCheck_7: false,
            codeOfClass_7: "",
            name_7: "",
            dob_7: "",
            gender_7: "",
            phone_7: "",
            note_7: "",

            singleCheck_8: false,
            codeOfClass_8: "",
            name_8: "",
            dob_8: "",
            gender_8: "",
            phone_8: "",
            note_8: "",

            singleCheck_9: false,
            codeOfClass_9: "",
            name_9: "",
            dob_9: "",
            gender_9: "",
            phone_9: "",
            note_9: "",

            singleCheck_10: false,
            codeOfClass_10: "",
            name_10: "",
            dob_10: "",
            gender_10: "",
            phone_10: "",
            note_10: "",

        })


    }

    deleteStudent = () => {
        let { singleCheck_1, singleCheck_2, singleCheck_3, singleCheck_4, singleCheck_5, singleCheck_6, singleCheck_7, singleCheck_8, singleCheck_9, singleCheck_10 } = this.state;


        let showInfor =[];

        this.setState({
            checkAll: false,
        });

        if (singleCheck_1) {
            this.setState({
                singleCheck_1: false,
                codeOfClass_1: "",
                name_1: "",
                dob_1: "",
                gender_1: "",
                phone_1: "",
                note_1: "",
            });
            showInfor.push(" Student_1");
        } if (singleCheck_2) {
            this.setState({
                singleCheck_2: false,
                codeOfClass_2: "",
                name_2: "",
                dob_2: "",
                gender_2: "",
                phone_2: "",
                note_2: "",
            });
            showInfor.push(" Student_2");
        } if (singleCheck_3) {
            this.setState({
                singleCheck_3: false,
                codeOfClass_3: "",
                name_3: "",
                dob_3: "",
                gender_3: "",
                phone_3: "",
                note_3: "",
            });
            showInfor.push(" Student_3");
        } if (singleCheck_4) {
            this.setState({
                singleCheck_4: false,
                codeOfClass_4: "",
                name_4: "",
                dob_4: "",
                gender_4: "",
                phone_4: "",
                note_4: "",
            });
            showInfor.push(" Student_4");
        } if (singleCheck_5) {
            this.setState({
                singleCheck_5: false,
                codeOfClass_5: "",
                name_5: "",
                dob_5: "",
                gender_5: "",
                phone_5: "",
                note_5: "",
            });
            showInfor.push(" Student_5");
        } if (singleCheck_6) {
            this.setState({
                singleCheck_6: false,
                codeOfClass_6: "",
                name_6: "",
                dob_6: "",
                gender_6: "",
                phone_6: "",
                note_6: "",
            });
            showInfor.push(" Student_6");
        } if (singleCheck_7) {
            this.setState({
                singleCheck_7: false,
                codeOfClass_7: "",
                name_7: "",
                dob_7: "",
                gender_7: "",
                phone_7: "",
                note_7: "",
            });
            showInfor.push(" Student_7");
        } if (singleCheck_8) {
            this.setState({
                singleCheck_8: false,
                codeOfClass_8: "",
                name_8: "",
                dob_8: "",
                gender_8: "",
                phone_8: "",
                note_8: "",
            });
            showInfor.push(" Student_8");
        } if (singleCheck_9) {
            this.setState({
                singleCheck_9: false,
                codeOfClass_9: "",
                name_9: "",
                dob_9: "",
                gender_9: "",
                phone_9: "",
                note_9: "",
            });
            showInfor.push(" Student_9");
        } if (singleCheck_10) {
            this.setState({
                singleCheck_10: false,
                codeOfClass_10: "",
                name_10: "",
                dob_10: "",
                gender_10: "",
                phone_10: "",
                note_10: "",
            });
            showInfor.push(" Student_10");
        }

        if(showInfor===undefined||showInfor.length===0){
            alert("Nothing to delete Student information!");
        }else{
            alert("Delete successfully! "+showInfor);
        }

    }

    render() {
        let { courseList, checkAll } = this.state;
        let { singleCheck, codeOfClass, name, dob, gender, phone, note } = this.state;
        let { singleCheck_1, codeOfClass_1, name_1, dob_1, gender_1, phone_1, note_1 } = this.state;
        let { singleCheck_2, codeOfClass_2, name_2, dob_2, gender_2, phone_2, note_2 } = this.state;
        let { singleCheck_3, codeOfClass_3, name_3, dob_3, gender_3, phone_3, note_3 } = this.state;
        let { singleCheck_4, codeOfClass_4, name_4, dob_4, gender_4, phone_4, note_4 } = this.state;
        let { singleCheck_5, codeOfClass_5, name_5, dob_5, gender_5, phone_5, note_5 } = this.state;
        let { singleCheck_6, codeOfClass_6, name_6, dob_6, gender_6, phone_6, note_6 } = this.state;
        let { singleCheck_7, codeOfClass_7, name_7, dob_7, gender_7, phone_7, note_7 } = this.state;
        let { singleCheck_8, codeOfClass_8, name_8, dob_8, gender_8, phone_8, note_8 } = this.state;
        let { singleCheck_9, codeOfClass_9, name_9, dob_9, gender_9, phone_9, note_9 } = this.state;
        let { singleCheck_10, codeOfClass_10, name_10, dob_10, gender_10, phone_10, note_10 } = this.state;
        let elementCourse = courseList.map((course, index) => {
            return (<option key={index} value={course.name} >{course.name}</option>)
        })


        return (
            <div className="card">
                <div className="card-header">
                    <form onSubmit={this.onPreventReload}>
                        <div className=" row">
                            <div className="col-2">
                                <select className="form-control" name="codeOfClass" onChange={this.createStudentBatchInput} value={codeOfClass} required>
                                    <option>None</option>
                                    {elementCourse}
                                </select>
                            </div>
                            <div className="col-2 ">
                                <input type="text" required
                                    className="form-control " value={name} name="name" aria-describedby="helpId" placeholder="Tên học sinh" onChange={this.createStudentBatchInput} />
                            </div>
                            <div className="col-2">
                                <input type="date" required
                                    className="form-control " value={dob} name="dob" aria-describedby="helpId" onChange={this.createStudentBatchInput} required />
                            </div>
                            <div className="col-1">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" value="Nam" checked={gender === "Nam"} onChange={this.createStudentBatchInput} required />
                                    <label className="form-check-label small" for="inlineRadio1">Nam</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" value="Nu" checked={gender === "Nu"} onChange={this.createStudentBatchInput} required />
                                    <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                                </div>
                            </div>
                            <div className="col-2">
                                <input type="text"
                                    className="form-control " name="phone" value={phone} aria-describedby="helpId" required placeholder="Số điện thoại" onChange={this.createStudentBatchInput} />
                            </div>
                            <div className="col-3">
                                <input type="text"
                                    className="form-control " name="note" value={note} aria-describedby="helpId" required placeholder="Ghi chú" onChange={this.createStudentBatchInput} />
                            </div>
                        </div>
                        <div> <button type="button" className="btn btn-success batch-input-position" onClick={this.createStudentBatchInputBtn}>Batch Input</button></div>

                    </form>
                </div>
                <div className="card-body">

                    <table className="table table-bordered main-table" >

                        <thead className="thead thead-dark sticky-header sticky-header-position">
                            <tr className="d-flex">
                                <th className="col-1 text-center sticky-col first-header">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" value="option1" onClick={this.onCheckedAll} checked={checkAll} />
                                    </div>
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

                            <tr className="d-flex " >
                                <th className="col-1 text-center sticky-col first-col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_1" checked={singleCheck_1} onClick={this.onSingleCheck_1} />
                                        <label className="form-check-label" for="inlineCheckbox1">1</label>
                                    </div>
                                </th>
                                <td className="col-2 sticky-col second-col">

                                    <select className="form-control" name="codeOfClass_1" value={codeOfClass_1} onChange={this.createStudent_1}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2 sticky-col third-col">

                                    <input type="text"
                                        className="form-control " name="name_1" aria-describedby="helpId" placeholder="Tên học sinh" value={name_1} onChange={this.createStudent_1} />
                                </td>
                                <td className="col-2">
                                    <input type="date"
                                        className="form-control " name="dob_1" aria-describedby="helpId" value={dob_1} onChange={this.createStudent_1} />
                                </td>
                                <td className="col-1">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_1" value="Nam" checked={gender_1 === "Nam"} onChange={this.createStudent_1} />
                                        <label className="form-check-label small" for="inlineRadio1">Nam</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_1" value="Nu" checked={gender_1 === "Nu"} onChange={this.createStudent_1} />
                                        <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                                    </div>
                                </td>
                                <td className="col-2">
                                    <input type="text"
                                        className="form-control " name="phone_1" aria-describedby="helpId" placeholder="Số điện thoại" value={phone_1} onChange={this.createStudent_1} />
                                </td>
                                <td className="col-2">
                                    <textarea className="form-control" name="note_1" rows="1" value={note_1} onChange={this.createStudent_1}></textarea>
                                </td>
                            </tr>

                            {/* \---------------------------------------------------------------------\ */}

                            <tr className="d-flex " >
                                <th className="col-1 text-center sticky-col first-col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_2" checked={singleCheck_2} onClick={this.onSingleCheck_2} />
                                        <label className="form-check-label" for="inlineCheckbox1">2</label>
                                    </div>
                                </th>
                                <td className="col-2 sticky-col second-col">

                                    <select className="form-control" name="codeOfClass_2" value={codeOfClass_2} onChange={this.createStudent_2}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2 sticky-col third-col">

                                    <input type="text"
                                        className="form-control " name="name_2" aria-describedby="helpId" placeholder="Tên học sinh" value={name_2} onChange={this.createStudent_2} />
                                </td>
                                <td className="col-2">
                                    <input type="date"
                                        className="form-control " name="dob_2" aria-describedby="helpId" value={dob_2} onChange={this.createStudent_2} />
                                </td>
                                <td className="col-1">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_2" value="Nam" checked={gender_2 === "Nam"} onChange={this.createStudent_2} />
                                        <label className="form-check-label small" for="inlineRadio1">Nam</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_2" value="Nu" checked={gender_2 === "Nu"} onChange={this.createStudent_2} />
                                        <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                                    </div>
                                </td>
                                <td className="col-2">
                                    <input type="text"
                                        className="form-control " name="phone_2" aria-describedby="helpId" placeholder="Số điện thoại" value={phone_2} onChange={this.createStudent_2} />
                                </td>
                                <td className="col-2">
                                    <textarea className="form-control" name="note_2" rows="1" value={note_2} onChange={this.createStudent_2}></textarea>
                                </td>
                            </tr>
                            {/* \---------------------------------------------------------------------\ */}
                            <tr className="d-flex " >
                                <th className="col-1 text-center sticky-col first-col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_3" checked={singleCheck_3} onClick={this.onSingleCheck_3} />
                                        <label className="form-check-label" for="inlineCheckbox1">3</label>
                                    </div>
                                </th>
                                <td className="col-2 sticky-col second-col">

                                    <select className="form-control" name="codeOfClass_3" value={codeOfClass_3} onChange={this.createStudent_3}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2 sticky-col third-col">

                                    <input type="text"
                                        className="form-control " name="name_3" aria-describedby="helpId" placeholder="Tên học sinh" value={name_3} onChange={this.createStudent_3} />
                                </td>
                                <td className="col-2">
                                    <input type="date"
                                        className="form-control " name="dob_3" aria-describedby="helpId" value={dob_3} onChange={this.createStudent_3} />
                                </td>
                                <td className="col-1">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_3" value="Nam" checked={gender_3 === "Nam"} onChange={this.createStudent_3} />
                                        <label className="form-check-label small" for="inlineRadio1">Nam</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_3" value="Nu" checked={gender_3 === "Nu"} onChange={this.createStudent_3} />
                                        <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                                    </div>
                                </td>
                                <td className="col-2">
                                    <input type="text"
                                        className="form-control " name="phone_3" aria-describedby="helpId" placeholder="Số điện thoại" value={phone_3} onChange={this.createStudent_3} />
                                </td>
                                <td className="col-2">
                                    <textarea className="form-control" name="note_3" rows="1" value={note_3} onChange={this.createStudent_3}></textarea>
                                </td>
                            </tr>
                            {/* \---------------------------------------------------------------------\ */}
                            <tr className="d-flex " >
                                <th className="col-1 text-center sticky-col first-col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_4" checked={singleCheck_4} onClick={this.onSingleCheck_4} />
                                        <label className="form-check-label" for="inlineCheckbox1">4</label>
                                    </div>
                                </th>
                                <td className="col-2 sticky-col second-col">

                                    <select className="form-control" name="codeOfClass_4" value={codeOfClass_4} onChange={this.createStudent_4}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2 sticky-col third-col">

                                    <input type="text"
                                        className="form-control " name="name_4" aria-describedby="helpId" placeholder="Tên học sinh" value={name_4} onChange={this.createStudent_4} />
                                </td>
                                <td className="col-2">
                                    <input type="date"
                                        className="form-control " name="dob_4" aria-describedby="helpId" value={dob_4} onChange={this.createStudent_4} />
                                </td>
                                <td className="col-1">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_4" value="Nam" checked={gender_4 === "Nam"} onChange={this.createStudent_4} />
                                        <label className="form-check-label small" for="inlineRadio1">Nam</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_4" value="Nu" checked={gender_4 === "Nu"} onChange={this.createStudent_4} />
                                        <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                                    </div>
                                </td>
                                <td className="col-2">
                                    <input type="text"
                                        className="form-control " name="phone_4" aria-describedby="helpId" placeholder="Số điện thoại" value={phone_4} onChange={this.createStudent_4} />
                                </td>
                                <td className="col-2">
                                    <textarea className="form-control" name="note_4" rows="1" value={note_4} onChange={this.createStudent_4}></textarea>
                                </td>
                            </tr>

                            {/* \---------------------------------------------------------------------\ */}
                            <tr className="d-flex " >
                                <th className="col-1 text-center sticky-col first-col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_5" checked={singleCheck_5} onClick={this.onSingleCheck_5} />
                                        <label className="form-check-label" for="inlineCheckbox1">5</label>
                                    </div>
                                </th>
                                <td className="col-2 sticky-col second-col">

                                    <select className="form-control" name="codeOfClass_5" value={codeOfClass_5} onChange={this.createStudent_5}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2 sticky-col third-col">

                                    <input type="text"
                                        className="form-control " name="name_5" aria-describedby="helpId" placeholder="Tên học sinh" value={name_5} onChange={this.createStudent_5} />
                                </td>
                                <td className="col-2">
                                    <input type="date"
                                        className="form-control " name="dob_5" aria-describedby="helpId" value={dob_5} onChange={this.createStudent_5} />
                                </td>
                                <td className="col-1">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_5" value="Nam" checked={gender_5 === "Nam"} onChange={this.createStudent_5} />
                                        <label className="form-check-label small" for="inlineRadio1">Nam</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_5" value="Nu" checked={gender_5 === "Nu"} onChange={this.createStudent_5} />
                                        <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                                    </div>
                                </td>
                                <td className="col-2">
                                    <input type="text"
                                        className="form-control " name="phone_5" aria-describedby="helpId" placeholder="Số điện thoại" value={phone_5} onChange={this.createStudent_5} />
                                </td>
                                <td className="col-2">
                                    <textarea className="form-control" name="note_5" rows="1" value={note_5} onChange={this.createStudent_5}></textarea>
                                </td>
                            </tr>
                            {/* \---------------------------------------------------------------------\ */}
                            <tr className="d-flex " >
                                <th className="col-1 text-center sticky-col first-col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_6" checked={singleCheck_6} onClick={this.onSingleCheck_6} />
                                        <label className="form-check-label" for="inlineCheckbox1">6</label>
                                    </div>
                                </th>
                                <td className="col-2 sticky-col second-col">

                                    <select className="form-control" name="codeOfClass_6" value={codeOfClass_6} onChange={this.createStudent_6}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2 sticky-col third-col">

                                    <input type="text"
                                        className="form-control " name="name_6" aria-describedby="helpId" placeholder="Tên học sinh" value={name_6} onChange={this.createStudent_6} />
                                </td>
                                <td className="col-2">
                                    <input type="date"
                                        className="form-control " name="dob_6" aria-describedby="helpId" value={dob_6} onChange={this.createStudent_6} />
                                </td>
                                <td className="col-1">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_6" value="Nam" checked={gender_6 === "Nam"} onChange={this.createStudent_6} />
                                        <label className="form-check-label small" for="inlineRadio1">Nam</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_6" value="Nu" checked={gender_6 === "Nu"} onChange={this.createStudent_6} />
                                        <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                                    </div>
                                </td>
                                <td className="col-2">
                                    <input type="text"
                                        className="form-control " name="phone_6" aria-describedby="helpId" placeholder="Số điện thoại" value={phone_6} onChange={this.createStudent_6} />
                                </td>
                                <td className="col-2">
                                    <textarea className="form-control" name="note_6" rows="1" value={note_6} onChange={this.createStudent_6}></textarea>
                                </td>
                            </tr>
                            {/* \---------------------------------------------------------------------\ */}
                            <tr className="d-flex " >
                                <th className="col-1 text-center sticky-col first-col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_7" checked={singleCheck_7} onClick={this.onSingleCheck_7} />
                                        <label className="form-check-label" for="inlineCheckbox1">7</label>
                                    </div>
                                </th>
                                <td className="col-2 sticky-col second-col">

                                    <select className="form-control" name="codeOfClass_7" value={codeOfClass_7} onChange={this.createStudent_7}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2 sticky-col third-col">

                                    <input type="text"
                                        className="form-control " name="name_7" aria-describedby="helpId" placeholder="Tên học sinh" value={name_7} onChange={this.createStudent_7} />
                                </td>
                                <td className="col-2">
                                    <input type="date"
                                        className="form-control " name="dob_7" aria-describedby="helpId" value={dob_7} onChange={this.createStudent_7} />
                                </td>
                                <td className="col-1">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_7" value="Nam" checked={gender_7 === "Nam"} onChange={this.createStudent_7} />
                                        <label className="form-check-label small" for="inlineRadio1">Nam</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_7" value="Nu" checked={gender_7 === "Nu"} onChange={this.createStudent_7} />
                                        <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                                    </div>
                                </td>
                                <td className="col-2">
                                    <input type="text"
                                        className="form-control " name="phone_7" aria-describedby="helpId" placeholder="Số điện thoại" value={phone_7} onChange={this.createStudent_7} />
                                </td>
                                <td className="col-2">
                                    <textarea className="form-control" name="note_7" rows="1" value={note_7} onChange={this.createStudent_7}></textarea>
                                </td>
                            </tr>

                            {/* \---------------------------------------------------------------------\ */}
                            <tr className="d-flex " >
                                <th className="col-1 text-center sticky-col first-col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_8" checked={singleCheck_8} onClick={this.onSingleCheck_8} />
                                        <label className="form-check-label" for="inlineCheckbox1">8</label>
                                    </div>
                                </th>
                                <td className="col-2 sticky-col second-col">

                                    <select className="form-control" name="codeOfClass_8" value={codeOfClass_8} onChange={this.createStudent_8}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2 sticky-col third-col">

                                    <input type="text"
                                        className="form-control " name="name_8" aria-describedby="helpId" placeholder="Tên học sinh" value={name_8} onChange={this.createStudent_8} />
                                </td>
                                <td className="col-2">
                                    <input type="date"
                                        className="form-control " name="dob_8" aria-describedby="helpId" value={dob_8} onChange={this.createStudent_8} />
                                </td>
                                <td className="col-1">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_8" value="Nam" checked={gender_8 === "Nam"} onChange={this.createStudent_8} />
                                        <label className="form-check-label small" for="inlineRadio1">Nam</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_8" value="Nu" checked={gender_8 === "Nu"} onChange={this.createStudent_8} />
                                        <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                                    </div>
                                </td>
                                <td className="col-2">
                                    <input type="text"
                                        className="form-control " name="phone_8" aria-describedby="helpId" placeholder="Số điện thoại" value={phone_8} onChange={this.createStudent_8} />
                                </td>
                                <td className="col-2">
                                    <textarea className="form-control" name="note_8" rows="1" value={note_8} onChange={this.createStudent_8}></textarea>
                                </td>
                            </tr>

                            {/* \---------------------------------------------------------------------\ */}
                            <tr className="d-flex " >
                                <th className="col-1 text-center sticky-col first-col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_9" checked={singleCheck_9} onClick={this.onSingleCheck_9} />
                                        <label className="form-check-label" for="inlineCheckbox1">9</label>
                                    </div>
                                </th>
                                <td className="col-2 sticky-col second-col">

                                    <select className="form-control" name="codeOfClass_9" value={codeOfClass_9} onChange={this.createStudent_9}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2 sticky-col third-col">

                                    <input type="text"
                                        className="form-control " name="name_9" aria-describedby="helpId" placeholder="Tên học sinh" value={name_9} onChange={this.createStudent_9} />
                                </td>
                                <td className="col-2">
                                    <input type="date"
                                        className="form-control " name="dob_9" aria-describedby="helpId" value={dob_9} onChange={this.createStudent_9} />
                                </td>
                                <td className="col-1">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_9" value="Nam" checked={gender_9 === "Nam"} onChange={this.createStudent_9} />
                                        <label className="form-check-label small" for="inlineRadio1">Nam</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_9" value="Nu" checked={gender_9 === "Nu"} onChange={this.createStudent_9} />
                                        <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                                    </div>
                                </td>
                                <td className="col-2">
                                    <input type="text"
                                        className="form-control " name="phone_9" aria-describedby="helpId" placeholder="Số điện thoại" value={phone_9} onChange={this.createStudent_9} />
                                </td>
                                <td className="col-2">
                                    <textarea className="form-control" name="note_9" rows="1" value={note_9} onChange={this.createStudent_9}></textarea>
                                </td>
                            </tr>

                            {/* \---------------------------------------------------------------------\ */}
                            <tr className="d-flex " >
                                <th className="col-1 text-center sticky-col first-col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_10" checked={singleCheck_10} onClick={this.onSingleCheck_10} />
                                        <label className="form-check-label" for="inlineCheckbox1">10</label>
                                    </div>
                                </th>
                                <td className="col-2 sticky-col second-col">

                                    <select className="form-control" name="codeOfClass_10" value={codeOfClass_10} onChange={this.createStudent_10}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2 sticky-col third-col">

                                    <input type="text"
                                        className="form-control " name="name_10" aria-describedby="helpId" placeholder="Tên học sinh" value={name_10} onChange={this.createStudent_10} />
                                </td>
                                <td className="col-2">
                                    <input type="date"
                                        className="form-control " name="dob_10" aria-describedby="helpId" value={dob_10} onChange={this.createStudent_10} />
                                </td>
                                <td className="col-1">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_10" value="Nam" checked={gender_10 === "Nam"} onChange={this.createStudent_10} />
                                        <label className="form-check-label small" for="inlineRadio1">Nam</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender_10" value="Nu" checked={gender_10 === "Nu"} onChange={this.createStudent_10} />
                                        <label className="form-check-label small" for="inlineRadio2">Nữ</label>
                                    </div>
                                </td>
                                <td className="col-2">
                                    <input type="text"
                                        className="form-control " name="phone_10" aria-describedby="helpId" placeholder="Số điện thoại" value={phone_10} onChange={this.createStudent_10} />
                                </td>
                                <td className="col-2">
                                    <textarea className="form-control" name="note_10" rows="1" value={note_10} onChange={this.createStudent_10}></textarea>
                                </td>
                            </tr>

                        </tbody>

                    </table>
                    <button type="button" className="btn btn-md btn-danger batch-input-position" onClick={this.deleteStudent}>Delete</button>{' '}{' '}
                    <button type="button" className="btn btn-md btn-success batch-input-position" onClick={this.saveStudent}>Register</button>
                </div>
            </div>
        );
    }
}

export default AddingStudent;