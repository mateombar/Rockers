import React from "react";
import firebase from '../firebase';


import Rocker from "../components/Rocker";
import Rockerform from "../components/Rockerform";
import Loader from "../components/Loader";
import api from "../api";
import "./styles/RockerNew.css";
const ref = firebase.firestore().collection('rockers').doc('NRjOnohuRBUV78NSApyB');
ref.get().then((doc) => {
  if (doc.exists) {
      console.log("Document data:", doc.data());
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(error => {
  console.log("Error getting document:", error);
});
class RockerNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      form: {
        id: "",
        firstName: "",
        lastName: "",
        avatarUrl: "",
        email: "",
        jobTitle: "",
        status: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleImage = (url) => {
    this.setState({
      form: {
        ...this.state.form,
        avatarUrl: url,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    });
    try {
      await this.setState({
        // loading: false,
        form: {
          ...this.state.form,
          id: this.generateHash(
            `${this.state.form.firstName}${this.state.form.firstName}`
          ),
        },
      });
      await api.rockers.create(this.state.form);
      this.props.history.push("/rockers");
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };
  generateHash = (string) => {
    var hash = 0;
    if (string.length === 0) return hash;
    for (let i = 0; i < string.length; i++) {
      var charCode = string.charCodeAt(i) * (Math.random() * 10);
      hash = (hash << 7) - hash + charCode;
      hash = hash & hash;
    }
    return hash;
  };
  render() {
    return (
      <div className="rockernew">
        {this.state.loading ? (
          <Loader />
        ) : (
          <article className="rockernew__article">
            <Rockerform
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              handleImage={this.handleImage}
              formValues={this.state.form}
              headerTitle={"New"}
              error={this.state.error}
            />
            <Rocker data={this.state.form} />
          </article>
        )}
      </div>
    );
  }
}

export default RockerNew;
