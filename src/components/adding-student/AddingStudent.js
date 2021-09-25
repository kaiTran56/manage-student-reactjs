import React, { Component } from 'react';
import "./../../App.css";
import axios from "axios";
import * as typeURL from "./../../constants/UrlAPIConstant";

class AddingStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkAll: false,
            objectTotal: [],
            showToast: false,
            showSuccess: false,
            showFailure: false,

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
            duplicated_1: false,
            showDuplicated_1: false,


            singleCheck_2: false,
            codeOfClass_2: "",
            name_2: "",
            dob_2: "",
            gender_2: "",
            phone_2: "",
            note_2: "",
            duplicated_2: false,
            showDuplicated_2: null,


            singleCheck_3: false,
            codeOfClass_3: "",
            name_3: "",
            dob_3: "",
            gender_3: "",
            phone_3: "",
            note_3: "",
            duplicated_3: false,
            showDuplicated_3: null,

            singleCheck_4: false,
            codeOfClass_4: "",
            name_4: "",
            dob_4: "",
            gender_4: "",
            phone_4: "",
            note_4: "",
            duplicated_4: false,
            showDuplicated_4: null,

            singleCheck_5: false,
            codeOfClass_5: "",
            name_5: "",
            dob_5: "",
            gender_5: "",
            phone_5: "",
            note_5: "",
            duplicated_5: false,
            showDuplicated_5: null,

            singleCheck_6: false,
            codeOfClass_6: "",
            name_6: "",
            dob_6: "",
            gender_6: "",
            phone_6: "",
            note_6: "",
            duplicated_6: false,
            showDuplicated_6: null,

            singleCheck_7: false,
            codeOfClass_7: "",
            name_7: "",
            dob_7: "",
            gender_7: "",
            phone_7: "",
            note_7: "",
            duplicated_7: false,
            showDuplicated_7: null,

            singleCheck_8: false,
            codeOfClass_8: "",
            name_8: "",
            dob_8: "",
            gender_8: "",
            phone_8: "",
            note_8: "",
            duplicated_8: false,
            showDuplicated_8: null,

            singleCheck_9: false,
            codeOfClass_9: "",
            name_9: "",
            dob_9: "",
            gender_9: "",
            phone_9: "",
            note_9: "",
            duplicated_9: false,
            showDuplicated_9: null,

            singleCheck_10: false,
            codeOfClass_10: "",
            name_10: "",
            dob_10: "",
            gender_10: "",
            phone_10: "",
            note_10: "",
            duplicated_10: false,
            showDuplicated_10: null,



        }
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
        this.setState({
            [name]: value
        });
    }

    createStudentBatchInputBtn = () => {
        let { codeOfClass, name, dob, gender, phone, note } = this.state;

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
    }

    createStudent_1 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value,
        });


    }
    checkDuplicated_1 = (nameStudent, genderStudent, dobStudent) => {
        axios.get(typeURL.CHECK_DUPLICATED + nameStudent + "&genderStudent=" + genderStudent + "Nam&dobStudent=" + (dobStudent))
            .then(response => {
                if (response.data === true) {
                    setTimeout(() => {
                        this.setState({
                            duplicated_1: true,
                            showToast: true,
                            showDuplicated_1: true
                        })
                        setTimeout(() => this.setState({ showToast: false, duplicated_1: false, showDuplicated_1: false }), 3000);
                    }, 2000);
                } else {
                    this.setState({
                        duplicated_1: false,
                        showToast: false
                    })
                }
            });
    }


    saveStudent_1 = () => {

        let { codeOfClass_1, name_1, dob_1, gender_1, phone_1, note_1, duplicated_1 } = this.state;
        //this.checkDuplicated_1(name_1, gender_1, this.formatDate(dob_1));
        let err = [];
        if (name_1.length === 0 && dob_1.length === 0 && gender_1.length === 0) {
            return false;
        }
        if (!phone_1.match("^[0-9]{10}$") || phone_1 === "") {
            err.push(" Wrong format of phone!");
        }
        if (codeOfClass_1 === "" || codeOfClass_1 === "None" || codeOfClass_1 === undefined || codeOfClass_1.length === 0) {
            err.push(" Please not empty code of class");
        }
        if (dob_1 === "") {
            err.push("Wrong format of dob!");
        }
        if (gender_1 === "") {
            err.push(" Please not empty gender");
        }
        if (name_1.length > 25 || name_1 === "") {
            err.push(" Wrong format of name, not too 25 characters!");
        }

        this.checkDuplicated_1(name_1, gender_1, this.formatDate(dob_1));

        let studentTemp = {
            codeOfClass: codeOfClass_1,
            name: name_1,
            dob: this.formatDate(dob_1),
            gender: gender_1,
            phone: phone_1,
            note: note_1,
        };

        if (err === undefined || err.length === 0) {

            if (duplicated_1 === false) {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save student_1 successfully!");
                        this.setState({
                            singleCheck_1: false,
                            codeOfClass_1: "",
                            name_1: "",
                            dob_1: "",
                            gender_1: "",
                            phone_1: "",
                            note_1: "",
                            result_1: true,
                        });
                    }).catch(err => {
                        this.setState({
                            duplicated_1: true,
                        });

                    });
                ;
            } else {

            }
        } else {
            alert("Student_1_err: " + err);
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
            [name]: value,
        });
    }
    checkDuplicated_2 = (nameStudent, genderStudent, dobStudent) => {
        axios.get(typeURL.CHECK_DUPLICATED + nameStudent + "&genderStudent=" + genderStudent + "Nam&dobStudent=" + (dobStudent))
            .then(response => {
                if (response.data === true) {
                    setTimeout(() => {
                        this.setState({
                            duplicated_2: true,
                            showToast: true,
                            showDuplicated_2: true
                        })
                        setTimeout(() => this.setState({ showToast: false, duplicated_2: false, showDuplicated_2: false }), 3000);
                    }, 2000);
                } else {
                    this.setState({
                        duplicated_2: false,
                        showToast: false
                    })
                }
            });
    }


    saveStudent_2 = () => {
        

        let { codeOfClass_2, name_2, dob_2, gender_2, phone_2, note_2, duplicated_2 } = this.state;
        //this.checkDuplicated_2(name_2, gender_2, this.formatDate(dob_2));
        let err = [];
        if (name_2.length === 0 && dob_2.length === 0 && gender_2.length === 0) {
            return false;
        }
        if (!phone_2.match("^[0-9]{10}$") || phone_2 === "") {
            err.push(" Wrong format of phone!");
        }
        if (codeOfClass_2 === "" || codeOfClass_2 === "None" || codeOfClass_2 === undefined || codeOfClass_2.length === 0) {
            err.push(" Please not empty code of class");
        }
        if (dob_2 === "") {
            err.push("Wrong format of dob!");
        }
        if (gender_2 === "") {
            err.push(" Please not empty gender");
        }
        if (name_2.length > 25 || name_2 === "") {
            err.push(" Wrong format of name, not too 25 characters!");
        }
        this.checkDuplicated_2(name_2, gender_2, this.formatDate(dob_2));

        let studentTemp = {
            codeOfClass: codeOfClass_2,
            name: name_2,
            dob: this.formatDate(dob_2),
            gender: gender_2,
            phone: phone_2,
            note: note_2,
        };

        if (err === undefined || err.length === 0) {

            if (duplicated_2 === false) {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save student_2 successfully!");
                        this.setState({
                            singleCheck_2: false,
                            codeOfClass_2: "",
                            name_2: "",
                            dob_2: "",
                            gender_2: "",
                            phone_2: "",
                            note_2: "",
                            result_2: true,
                        });


                    }).catch(err => {
                        this.setState({
                            duplicated_2: true,
                        });

                    });
                ;

            } else {

            }
        } else {
            alert("Student_2_err: " + err);
        }

    }
    createStudent_3 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value,
        });
    }
    checkDuplicated_3 = (nameStudent, genderStudent, dobStudent) => {
        axios.get(typeURL.CHECK_DUPLICATED + nameStudent + "&genderStudent=" + genderStudent + "Nam&dobStudent=" + (dobStudent))
            .then(response => {
                if (response.data === true) {
                    setTimeout(() => {
                        this.setState({
                            duplicated_3: true,
                            showToast: true,
                            showDuplicated_3: true
                        })
                        setTimeout(() => this.setState({ showToast: false, duplicated_3: false, showDuplicated_3: false }), 3000);
                    }, 2000);
                } else {
                    this.setState({
                        duplicated_3: false,
                        showToast: false
                    })
                }
            });
    }


    saveStudent_3 = () => {

        let { codeOfClass_3, name_3, dob_3, gender_3, phone_3, note_3, duplicated_3 } = this.state;

        let err = [];
        if (name_3.length === 0 && dob_3.length === 0 && gender_3.length === 0) {
            return false;
        }
        if (!phone_3.match("^[0-9]{10}$") || phone_3 === "") {
            err.push(" Wrong format of phone!");
        }
        if (codeOfClass_3 === "" || codeOfClass_3 === "None" || codeOfClass_3 === undefined || codeOfClass_3.length === 0) {
            err.push(" Please not empty code of class");
        }
        if (dob_3 === "") {
            err.push("Wrong format of dob!");
        }
        if (gender_3 === "") {
            err.push(" Please not empty gender");
        }
        if (name_3.length > 25 || name_3 === "") {
            err.push(" Wrong format of name, not too 25 characters!");
        }
        this.checkDuplicated_3(name_3, gender_3, this.formatDate(dob_3));

        let studentTemp = {
            codeOfClass: codeOfClass_3,
            name: name_3,
            dob: this.formatDate(dob_3),
            gender: gender_3,
            phone: phone_3,
            note: note_3,
        };

        if (err === undefined || err.length === 0) {

            if (duplicated_3 === false) {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save student_3 successfully!");
                        this.setState({
                            singleCheck_3: false,
                            codeOfClass_3: "",
                            name_3: "",
                            dob_3: "",
                            gender_3: "",
                            phone_3: "",
                            note_3: "",
                        });

                    }).catch(err => {
                        this.setState({
                            duplicated_3: true,
                            showToast: true
                        })
                    });
                ;

            }
        } else {
            alert("Student_3_err: " + err);
        }

    }
    createStudent_4 = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value,
        });
    }
    checkDuplicated_4 = (nameStudent, genderStudent, dobStudent) => {
        axios.get(typeURL.CHECK_DUPLICATED + nameStudent + "&genderStudent=" + genderStudent + "Nam&dobStudent=" + (dobStudent))
            .then(response => {
                if (response.data === true) {
                    setTimeout(() => {
                        this.setState({
                            duplicated_4: true,
                            showToast: true,
                            showDuplicated_4: true
                        })
                        setTimeout(() => this.setState({ showToast: false, duplicated_4: true, showDuplicated_4: false }), 3000);
                    }, 2000);
                } else {
                    this.setState({
                        duplicated_4: false,
                        showToast: false
                    })
                }
            });
    }


    saveStudent_4 = () => {

        let { codeOfClass_4, name_4, dob_4, gender_4, phone_4, note_4, duplicated_4 } = this.state;
        this.checkDuplicated_4(name_4, gender_4, this.formatDate(dob_4));
        let err = [];
        if (name_4.length === 0 && dob_4.length === 0 && gender_4.length === 0) {
            return false;
        }
        if (!phone_4.match("^[0-9]{10}$") || phone_4 === "") {
            err.push(" Wrong format of phone!");
        }
        if (codeOfClass_4 === "" || codeOfClass_4 === "None" || codeOfClass_4 === undefined || codeOfClass_4.length === 0) {
            err.push(" Please not empty code of class");
        }
        if (dob_4 === "") {
            err.push("Wrong format of dob!");
        }
        if (gender_4 === "") {
            err.push(" Please not empty gender");
        }
        if (name_4.length > 25 || name_4 === "") {
            err.push(" Wrong format of name, not too 25 characters!");
        }

        let studentTemp = {
            codeOfClass: codeOfClass_4,
            name: name_4,
            dob: this.formatDate(dob_4),
            gender: gender_4,
            phone: phone_4,
            note: note_4,
        };

        if (err === undefined || err.length === 0) {

            if (duplicated_4 === false) {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save student_4 successfully!");
                        this.setState({
                            singleCheck_4: false,
                            codeOfClass_4: "",
                            name_4: "",
                            dob_4: "",
                            gender_4: "",
                            phone_4: "",
                            note_4: "",
                        });
                    }).catch(err => {
                        this.setState({
                            duplicated_4: true,
                            showToast: true
                        })
                    });
                ;
                
            }
        } else {
            alert("Student_4_err: " + err);
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
    checkDuplicated_5 = (nameStudent, genderStudent, dobStudent) => {
        axios.get(typeURL.CHECK_DUPLICATED + nameStudent + "&genderStudent=" + genderStudent + "Nam&dobStudent=" + (dobStudent))
            .then(response => {
                if (response.data === true) {
                    setTimeout(() => {
                        this.setState({
                            duplicated_5: true,
                            showToast: true,
                            showDuplicated_5: true
                        })
                        setTimeout(() => this.setState({ showToast: false, duplicated_5: true, showDuplicated_5: false }), 3000);
                    }, 2000);
                } else {
                    this.setState({
                        duplicated_5: false,
                        showToast: false
                    })
                }
            });
    }


    saveStudent_5 = () => {

        let { codeOfClass_5, name_5, dob_5, gender_5, phone_5, note_5, duplicated_5 } = this.state;
        this.checkDuplicated_5(name_5, gender_5, this.formatDate(dob_5));
        let err = [];
        if (name_5.length === 0 && dob_5.length === 0 && gender_5.length === 0) {
            return false;
        }
        if (!phone_5.match("^[0-9]{10}$") || phone_5 === "") {
            err.push(" Wrong format of phone!");
        }
        if (codeOfClass_5 === "" || codeOfClass_5 === "None" || codeOfClass_5 === undefined || codeOfClass_5.length === 0) {
            err.push(" Please not empty code of class");
        }
        if (dob_5 === "") {
            err.push("Wrong format of dob!");
        }
        if (gender_5 === "") {
            err.push(" Please not empty gender");
        }
        if (name_5.length > 25 || name_5 === "") {
            err.push(" Wrong format of name, not too 25 characters!");
        }

        let studentTemp = {
            codeOfClass: codeOfClass_5,
            name: name_5,
            dob: this.formatDate(dob_5),
            gender: gender_5,
            phone: phone_5,
            note: note_5,
        };

        if (err === undefined || err.length === 0) {

            if (duplicated_5 === false) {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save student_5 successfully!");
                        this.setState({
                            singleCheck_5: false,
                            codeOfClass_5: "",
                            name_5: "",
                            dob_5: "",
                            gender_5: "",
                            phone_5: "",
                            note_5: "",
                        });
                    }).catch(err => {
                        this.setState({
                            duplicated_5: true,
                            showToast: true
                        })
                    });
                ;
                
            } 
        } else {
            alert("Student_5_err: " + err);
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
    checkDuplicated_6 = (nameStudent, genderStudent, dobStudent) => {
        axios.get(typeURL.CHECK_DUPLICATED + nameStudent + "&genderStudent=" + genderStudent + "Nam&dobStudent=" + (dobStudent))
            .then(response => {
                if (response.data === true) {
                    setTimeout(() => {
                        this.setState({
                            duplicated_6: true,
                            showToast: true,
                            showDuplicated_6: true
                        })
                        setTimeout(() => this.setState({ showToast: false, duplicated_6: true, showDuplicated_6: false }), 3000);
                    }, 2000);
                } else {
                    this.setState({
                        duplicated_6: false,
                        showToast: false
                    })
                }
            });
    }


    saveStudent_6 = () => {

        let { codeOfClass_6, name_6, dob_6, gender_6, phone_6, note_6, duplicated_6 } = this.state;
        this.checkDuplicated_6(name_6, gender_6, this.formatDate(dob_6));
        let err = [];
        if (name_6.length === 0 && dob_6.length === 0 && gender_6.length === 0) {
            return false;
        }
        if (!phone_6.match("^[0-9]{10}$") || phone_6 === "") {
            err.push(" Wrong format of phone!");
        }
        if (codeOfClass_6 === "" || codeOfClass_6 === "None" || codeOfClass_6 === undefined || codeOfClass_6.length === 0) {
            err.push(" Please not empty code of class");
        }
        if (dob_6 === "") {
            err.push("Wrong format of dob!");
        }
        if (gender_6 === "") {
            err.push(" Please not empty gender");
        }
        if (name_6.length > 25 || name_6 === "") {
            err.push(" Wrong format of name, not too 25 characters!");
        }

        let studentTemp = {
            codeOfClass: codeOfClass_6,
            name: name_6,
            dob: this.formatDate(dob_6),
            gender: gender_6,
            phone: phone_6,
            note: note_6,
        };

        if (err === undefined || err.length === 0) {

            if (duplicated_6 === false) {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save student_6 successfully!");
                        this.setState({
                            singleCheck_6: false,
                            codeOfClass_6: "",
                            name_6: "",
                            dob_6: "",
                            gender_6: "",
                            phone_6: "",
                            note_6: "",
                        });
                    }).catch(err => {
                        this.setState({
                            duplicated_6: true,
                            showToast: true
                        })
                    });
                ;
                
            } 
        } else {
            alert("Student_6_err: " + err);
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
    checkDuplicated_7 = (nameStudent, genderStudent, dobStudent) => {
        axios.get(typeURL.CHECK_DUPLICATED + nameStudent + "&genderStudent=" + genderStudent + "Nam&dobStudent=" + (dobStudent))
            .then(response => {
                if (response.data === true) {
                    setTimeout(() => {
                        this.setState({
                            duplicated_7: true,
                            showToast: true,
                            showDuplicated_7: true
                        })
                        setTimeout(() => this.setState({ showToast: false, duplicated_7: true, showDuplicated_7: false }), 3000);
                    }, 2000);
                } else {
                    this.setState({
                        duplicated_7: false,
                        showToast: false
                    })
                }
            });
    }


    saveStudent_7 = () => {

        let { codeOfClass_7, name_7, dob_7, gender_7, phone_7, note_7, duplicated_7 } = this.state;
        this.checkDuplicated_7(name_7, gender_7, this.formatDate(dob_7));
        let err = [];
        if (name_7.length === 0 && dob_7.length === 0 && gender_7.length === 0) {
            return false;
        }
        if (!phone_7.match("^[0-9]{10}$") || phone_7 === "") {
            err.push(" Wrong format of phone!");
        }
        if (codeOfClass_7 === "" || codeOfClass_7 === "None" || codeOfClass_7 === undefined || codeOfClass_7.length === 0) {
            err.push(" Please not empty code of class");
        }
        if (dob_7 === "") {
            err.push("Wrong format of dob!");
        }
        if (gender_7 === "") {
            err.push(" Please not empty gender");
        }
        if (name_7.length > 25 || name_7 === "") {
            err.push(" Wrong format of name, not too 25 characters!");
        }

        let studentTemp = {
            codeOfClass: codeOfClass_7,
            name: name_7,
            dob: this.formatDate(dob_7),
            gender: gender_7,
            phone: phone_7,
            note: note_7,
        };

        if (err === undefined || err.length === 0) {

            if (duplicated_7 === false) {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save student_7 successfully!");
                        this.setState({
                            singleCheck_7: false,
                            codeOfClass_7: "",
                            name_7: "",
                            dob_7: "",
                            gender_7: "",
                            phone_7: "",
                            note_7: "",
                        });
                    }).catch(err => {
                        this.setState({
                            duplicated_7: true,
                            showToast: true
                        })
                    });
                ;
               
            } 
        } else {
            alert("Student_7_err: " + err);
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
    checkDuplicated_8 = (nameStudent, genderStudent, dobStudent) => {
        axios.get(typeURL.CHECK_DUPLICATED + nameStudent + "&genderStudent=" + genderStudent + "Nam&dobStudent=" + (dobStudent))
            .then(response => {
                if (response.data === true) {
                    setTimeout(() => {
                        this.setState({
                            duplicated_8: true,
                            showToast: true,
                            showDuplicated_8: true
                        })
                        setTimeout(() => this.setState({ showToast: false, duplicated_8: true, showDuplicated_8: false }), 3000);
                    }, 2000);
                } else {
                    this.setState({
                        duplicated_8: false,
                        showToast: false
                    })
                }
            });
    }


    saveStudent_8 = () => {

        let { codeOfClass_8, name_8, dob_8, gender_8, phone_8, note_8, duplicated_8 } = this.state;
        this.checkDuplicated_8(name_8, gender_8, this.formatDate(dob_8));
        let err = [];
        if (name_8.length === 0 && dob_8.length === 0 && gender_8.length === 0) {
            return false;
        }
        if (!phone_8.match("^[0-9]{10}$") || phone_8 === "") {
            err.push(" Wrong format of phone!");
        }
        if (codeOfClass_8 === "" || codeOfClass_8 === "None" || codeOfClass_8 === undefined || codeOfClass_8.length === 0) {
            err.push(" Please not empty code of class");
        }
        if (dob_8 === "") {
            err.push("Wrong format of dob!");
        }
        if (gender_8 === "") {
            err.push(" Please not empty gender");
        }
        if (name_8.length > 25 || name_8 === "") {
            err.push(" Wrong format of name, not too 25 characters!");
        }

        let studentTemp = {
            codeOfClass: codeOfClass_8,
            name: name_8,
            dob: this.formatDate(dob_8),
            gender: gender_8,
            phone: phone_8,
            note: note_8,
        };

        if (err === undefined || err.length === 0) {

            if (duplicated_8 === false) {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save student_8 successfully!");
                        this.setState({
                            singleCheck_8: false,
                            codeOfClass_8: "",
                            name_8: "",
                            dob_8: "",
                            gender_8: "",
                            phone_8: "",
                            note_8: "",
                        });
                    }).catch(err => {
                        this.setState({
                            duplicated_8: true,
                            showToast: true
                        })
                    });
                ;
                
            } 
        } else {
            alert("Student_8_err: " + err);
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
    checkDuplicated_9 = (nameStudent, genderStudent, dobStudent) => {
        axios.get(typeURL.CHECK_DUPLICATED + nameStudent + "&genderStudent=" + genderStudent + "Nam&dobStudent=" + (dobStudent))
            .then(response => {
                if (response.data === true) {
                    setTimeout(() => {
                        this.setState({
                            duplicated_9: true,
                            showToast: true,
                            showDuplicated_9: true
                        })
                        setTimeout(() => this.setState({ showToast: false, duplicated_9: true, showDuplicated_9: false }), 3000);
                    }, 2000);
                } else {
                    this.setState({
                        duplicated_9: false,
                        showToast: false
                    })
                }
            });
    }


    saveStudent_9 = () => {

        let { codeOfClass_9, name_9, dob_9, gender_9, phone_9, note_9, duplicated_9 } = this.state;
        this.checkDuplicated_9(name_9, gender_9, this.formatDate(dob_9));
        let err = [];
        if (name_9.length === 0 && dob_9.length === 0 && gender_9.length === 0) {
            return false;
        }
        if (!phone_9.match("^[0-9]{10}$") || phone_9 === "") {
            err.push(" Wrong format of phone!");
        }
        if (codeOfClass_9 === "" || codeOfClass_9 === "None" || codeOfClass_9 === undefined || codeOfClass_9.length === 0) {
            err.push(" Please not empty code of class");
        }
        if (dob_9 === "") {
            err.push("Wrong format of dob!");
        }
        if (gender_9 === "") {
            err.push(" Please not empty gender");
        }
        if (name_9.length > 25 || name_9 === "") {
            err.push(" Wrong format of name, not too 25 characters!");
        }

        let studentTemp = {
            codeOfClass: codeOfClass_9,
            name: name_9,
            dob: this.formatDate(dob_9),
            gender: gender_9,
            phone: phone_9,
            note: note_9,
        };

        if (err === undefined || err.length === 0) {

            if (duplicated_9 === false) {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save student_9 successfully!");
                        this.setState({
                            singleCheck_9: false,
                            codeOfClass_9: "",
                            name_9: "",
                            dob_9: "",
                            gender_9: "",
                            phone_9: "",
                            note_9: "",
                        });
                    }).catch(err => {
                        this.setState({
                            duplicated_9: true,
                            showToast: true
                        })
                    });
                ;
                
            } 
        } else {
            alert("Student_9_err: " + err);
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
    checkDuplicated_10 = (nameStudent, genderStudent, dobStudent) => {
        axios.get(typeURL.CHECK_DUPLICATED + nameStudent + "&genderStudent=" + genderStudent + "Nam&dobStudent=" + (dobStudent))
            .then(response => {
                if (response.data === true) {
                    setTimeout(() => {
                        this.setState({
                            duplicated_10: true,
                            showToast: true,
                            showDuplicated_10: true
                        })
                        setTimeout(() => this.setState({ showToast: false, duplicated_10: true, showDuplicated_10: false }), 3000);
                    }, 2000);
                } else {
                    this.setState({
                        duplicated_10: false,
                        showToast: false
                    })
                }
            });
    }


    saveStudent_10 = () => {

        let { codeOfClass_10, name_10, dob_10, gender_10, phone_10, note_10, duplicated_10 } = this.state;
        this.checkDuplicated_10(name_10, gender_10, this.formatDate(dob_10));
        let err = [];
        if (name_10.length === 0 && dob_10.length === 0 && gender_10.length === 0) {
            return false;
        }
        if (!phone_10.match("^[0-9]{10}$") || phone_10 === "") {
            err.push(" Wrong format of phone!");
        }
        if (codeOfClass_10 === "" || codeOfClass_10 === "None" || codeOfClass_10 === undefined || codeOfClass_10.length === 0) {
            err.push(" Please not empty code of class");
        }
        if (dob_10 === "") {
            err.push("Wrong format of dob!");
        }
        if (gender_10 === "") {
            err.push(" Please not empty gender");
        }
        if (name_10.length > 25 || name_10 === "") {
            err.push(" Wrong format of name, not too 25 characters!");
        }

        let studentTemp = {
            codeOfClass: codeOfClass_10,
            name: name_10,
            dob: this.formatDate(dob_10),
            gender: gender_10,
            phone: phone_10,
            note: note_10,
        };

        if (err === undefined || err.length === 0) {

            if (duplicated_10 === false) {
                axios.post(typeURL.SAVE_STUDENT, studentTemp)
                    .then(response => {
                        alert("Save student_10 successfully!");
                        this.setState({
                            singleCheck_10: false,
                            codeOfClass_10: "",
                            name_10: "",
                            dob_10: "",
                            gender_10: "",
                            phone_10: "",
                            note_10: "",
                        });
                    }).catch(err => {
                        this.setState({
                            duplicated_10: true,
                            showToast: true
                        })
                    });
                ;
                
            } 
        } else {
            alert("Student_10_err: " + err);
        }
    }

    saveStudent = () => {
        console.log("Button!");
        console.log(this.state);
        let messageSuccess = [];

        let { showSuccess, duplicated_1, duplicated_2, duplicated_3, duplicated_4, duplicated_5, duplicated_6, duplicated_7, duplicated_8, duplicated_9, duplicated_10 } = this.state;
        this.saveStudent_1();
        if (duplicated_1 === false) {

            messageSuccess.push("Student_1");
        }
        this.saveStudent_2();
        if (duplicated_2 === false) {

            messageSuccess.push("Student_2");
        }
        this.saveStudent_3();
        if (duplicated_3 === false)
            messageSuccess.push("Student_3");

        this.saveStudent_4();
        if (duplicated_4 === false)
            messageSuccess.push("Student_4");

        this.saveStudent_5();
        if (duplicated_5 === false)
            messageSuccess.push("Student_5");

        this.saveStudent_6();
        if (duplicated_6 === false)
            messageSuccess.push("Student_6");

        this.saveStudent_7();
        if (duplicated_7 === false)
            messageSuccess.push("Student_7");

        this.saveStudent_8();
        if (duplicated_8 === false)
            messageSuccess.push("Student_8");

        this.saveStudent_9();
        if (duplicated_9 === false)
            messageSuccess.push("Student_9");

        this.saveStudent_10();
        if (duplicated_10 === false)
            messageSuccess.push("Student_10");

        if (messageSuccess === undefined || messageSuccess.length === 0) {
            console.log(messageSuccess + " - " + showSuccess + " _ " + duplicated_1 + " - " + duplicated_2);
            setTimeout(() => {
                this.setState({
                    showFailure: true
                })
                setTimeout(() => this.setState({ showFailure: false }), 3000);
            }
                , 100);
        }


        this.setState({
            checkAll: false,
            codeOfClass: "",
            name: "",
            dob: "",
            gender: "",
            phone: "",
            note: "",
        });
    }

    deleteStudent = () => {
        let { singleCheck_1, singleCheck_2, singleCheck_3, singleCheck_4, singleCheck_5, singleCheck_6, singleCheck_7, singleCheck_8, singleCheck_9, singleCheck_10 } = this.state;
        let showInfor = [];
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
        if (window.confirm('Are you sure to delete these?')) {
            if (showInfor === undefined || showInfor.length === 0) {
                alert("Nothing to delete Student information!");
            } else {
            }
        } else {
        }


    }

    render() {
        let { courseList, checkAll, showToast, showSuccess, showFailure } = this.state;
        let { codeOfClass, name, dob, gender, phone, note } = this.state;
        let { singleCheck_1, codeOfClass_1, name_1, dob_1, gender_1, phone_1, note_1, showDuplicated_1 } = this.state;
        let { singleCheck_2, codeOfClass_2, name_2, dob_2, gender_2, phone_2, note_2, showDuplicated_2 } = this.state;
        let { singleCheck_3, codeOfClass_3, name_3, dob_3, gender_3, phone_3, note_3, showDuplicated_3 } = this.state;
        let { singleCheck_4, codeOfClass_4, name_4, dob_4, gender_4, phone_4, note_4, showDuplicated_4 } = this.state;
        let { singleCheck_5, codeOfClass_5, name_5, dob_5, gender_5, phone_5, note_5, showDuplicated_5 } = this.state;
        let { singleCheck_6, codeOfClass_6, name_6, dob_6, gender_6, phone_6, note_6, showDuplicated_6 } = this.state;
        let { singleCheck_7, codeOfClass_7, name_7, dob_7, gender_7, phone_7, note_7, showDuplicated_7 } = this.state;
        let { singleCheck_8, codeOfClass_8, name_8, dob_8, gender_8, phone_8, note_8, showDuplicated_8 } = this.state;
        let { singleCheck_9, codeOfClass_9, name_9, dob_9, gender_9, phone_9, note_9, showDuplicated_9 } = this.state;
        let { singleCheck_10, codeOfClass_10, name_10, dob_10, gender_10, phone_10, note_10, showDuplicated_10 } = this.state;
        let elementCourse = courseList.map((course, index) => {
            return (<option key={index} value={course.name} >{course.name}</option>)
        })


        return (
            <div className="card">

                <div className="card-header">
                    <form onSubmit={this.onPreventReload}>
                        <div className=" row">
                            <div className="col-1"></div>
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
                            <div className="col-2">
                                <input type="text"
                                    className="form-control " name="note" value={note} aria-describedby="helpId" required placeholder="Ghi chú" onChange={this.createStudentBatchInput} />
                            </div>
                        </div>
                        <div> <button type="button" className="btn btn-success batch-input-position" onClick={this.createStudentBatchInputBtn}>Batch Input</button></div>

                    </form>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            {showFailure ?
                                <div aria-live="polite" aria-atomic="true" >
                                    <div class="toast bg-danger" >
                                        <div class="toast-header">
                                            <strong class="mr-auto">Tin nhắn: </strong>
                                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="toast-body">
                                            Luu không thành công
                                        </div>
                                    </div>
                                </div>
                                : ""}
                        </div>
                        <div className="col-4">
                            {showSuccess ?
                                <div aria-live="polite" aria-atomic="true" >
                                    <div class="toast bg-success" >
                                        <div class="toast-header">
                                            <strong class="mr-auto">Tin nhắn: </strong>
                                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="toast-body">
                                            Luu thành công
                                        </div>
                                    </div>
                                </div>
                                : ""}
                        </div>

                        <div className="col-4">
                            {showToast ?
                                <div aria-live="polite" aria-atomic="true" >
                                    <div class="toast bg-warning" >
                                        <div class="toast-header">
                                            <strong class="mr-auto">Tin nhắn: </strong>
                                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="toast-body">
                                            Thông tin sinh viên bị lặp
                                        </div>
                                    </div>
                                </div>
                                : ""}
                        </div>

                    </div>


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

                            <tr className={showDuplicated_1 === true ? "d-flex table-danger" : "d-flex"} >
                                <th className="col-1 text-center ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_1" checked={singleCheck_1} onClick={this.onSingleCheck_1} />
                                        <label className="form-check-label" for="inlineCheckbox1">1</label>
                                    </div>
                                </th>
                                <td className="col-2">

                                    <select className="form-control" name="codeOfClass_1" value={codeOfClass_1} onChange={this.createStudent_1}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2">

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

                            <tr className={showDuplicated_2 === true ? "d-flex table-danger" : "d-flex"} >
                                <th className="col-1 text-center ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_2" checked={singleCheck_2} onClick={this.onSingleCheck_2} />
                                        <label className="form-check-label" for="inlineCheckbox1">2</label>
                                    </div>
                                </th>
                                <td className="col-2">

                                    <select className="form-control" name="codeOfClass_2" value={codeOfClass_2} onChange={this.createStudent_2}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2">

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
                            <tr className={showDuplicated_3 === true ? "d-flex table-danger" : "d-flex"} >
                                <th className="col-1 text-center ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_3" checked={singleCheck_3} onClick={this.onSingleCheck_3} />
                                        <label className="form-check-label" for="inlineCheckbox1">3</label>
                                    </div>
                                </th>
                                <td className="col-2">

                                    <select className="form-control" name="codeOfClass_3" value={codeOfClass_3} onChange={this.createStudent_3}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2">

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
                            <tr className={showDuplicated_4 === true ? "d-flex table-danger" : "d-flex"} >
                                <th className="col-1 text-center ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_4" checked={singleCheck_4} onClick={this.onSingleCheck_4} />
                                        <label className="form-check-label" for="inlineCheckbox1">4</label>
                                    </div>
                                </th>
                                <td className="col-2">

                                    <select className="form-control" name="codeOfClass_4" value={codeOfClass_4} onChange={this.createStudent_4}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2">

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
                            <tr className={showDuplicated_5 === true ? "d-flex table-danger" : "d-flex"} >
                                <th className="col-1 text-center ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_5" checked={singleCheck_5} onClick={this.onSingleCheck_5} />
                                        <label className="form-check-label" for="inlineCheckbox1">5</label>
                                    </div>
                                </th>
                                <td className="col-2">

                                    <select className="form-control" name="codeOfClass_5" value={codeOfClass_5} onChange={this.createStudent_5}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2">

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
                            <tr className={showDuplicated_6 === true ? "d-flex table-danger" : "d-flex"} >
                                <th className="col-1 text-center ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_6" checked={singleCheck_6} onClick={this.onSingleCheck_6} />
                                        <label className="form-check-label" for="inlineCheckbox1">6</label>
                                    </div>
                                </th>
                                <td className="col-2">

                                    <select className="form-control" name="codeOfClass_6" value={codeOfClass_6} onChange={this.createStudent_6}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2">

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
                            <tr className={showDuplicated_7 === true ? "d-flex table-danger" : "d-flex"} >
                                <th className="col-1 text-center ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_7" checked={singleCheck_7} onClick={this.onSingleCheck_7} />
                                        <label className="form-check-label" for="inlineCheckbox1">7</label>
                                    </div>
                                </th>
                                <td className="col-2">

                                    <select className="form-control" name="codeOfClass_7" value={codeOfClass_7} onChange={this.createStudent_7}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2">

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
                            <tr className={showDuplicated_8 === true ? "d-flex table-danger" : "d-flex"} >
                                <th className="col-1 text-center ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_8" checked={singleCheck_8} onClick={this.onSingleCheck_8} />
                                        <label className="form-check-label" for="inlineCheckbox1">8</label>
                                    </div>
                                </th>
                                <td className="col-2">

                                    <select className="form-control" name="codeOfClass_8" value={codeOfClass_8} onChange={this.createStudent_8}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2">

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
                            <tr className={showDuplicated_9 === true ? "d-flex table-danger" : "d-flex"} >
                                <th className="col-1 text-center ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_9" checked={singleCheck_9} onClick={this.onSingleCheck_9} />
                                        <label className="form-check-label" for="inlineCheckbox1">9</label>
                                    </div>
                                </th>
                                <td className="col-2">

                                    <select className="form-control" name="codeOfClass_9" value={codeOfClass_9} onChange={this.createStudent_9}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2">

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
                            <tr className={showDuplicated_10 === true ? "d-flex table-danger" : "d-flex"} >
                                <th className="col-1 text-center ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name="singleCheck_10" checked={singleCheck_10} onClick={this.onSingleCheck_10} />
                                        <label className="form-check-label" for="inlineCheckbox1">10</label>
                                    </div>
                                </th>
                                <td className="col-2">

                                    <select className="form-control" name="codeOfClass_10" value={codeOfClass_10} onChange={this.createStudent_10}>
                                        <option>None</option>
                                        {elementCourse}
                                    </select>
                                </td>
                                <td className="col-2">

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

                    </table><button type="button" className="btn btn-md btn-success batch-input-position" onClick={this.saveStudent}>Register</button>&nbsp;{''}
                    <button type="button" className="btn btn-md btn-danger batch-input-position" onClick={this.deleteStudent}>Delete</button>&nbsp;&nbsp;

                </div>
            </div>
        );
    }
}

export default AddingStudent;