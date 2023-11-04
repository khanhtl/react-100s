import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError");
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch");
    this.setState({
      hasError: true,
    });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
