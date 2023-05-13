import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h5 style={{backgroundColor: 'pink', color: 'red', padding: '0.5rem', borderRadius: '3px', margin: '0.5rem 0'}}>Something went wrong.</h5>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;