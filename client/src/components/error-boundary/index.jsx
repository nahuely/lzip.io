import React, { Component } from "react";
import { Button } from "../../components";
import "./styles.scss";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {}

  reloadApp() {
    window.location.replace("/");
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="view view__container error-boundary">
          <p className="error-boundary__message">
            Sorry, something went wrong &#128577;
          </p>
          <p className="error-boundary__explanation">
            click reload app button, if the problem persist send an email to{" "}
            <a href="mailto:support@lzip.io">support@lzip.io</a>
          </p>
          <Button onClick={this.reloadApp}>reload app</Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
