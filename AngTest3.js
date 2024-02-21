
import React from 'react';

class UnComponent extends React.Component {
  constructor(props) {
    super(props);
    // Create a ref to hold the input element
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // Access the input element and set its initial value if defaultValue prop is provided
    if (this.props.defaultValue && this.inputRef.current) {
      this.inputRef.current.value = this.props.defaultValue;
    }
  }

  handleChange = () => {
    // Call the onChange prop if provided, passing the current value of the input
    if (this.props.onChange && this.inputRef.current) {
      this.props.onChange(this.inputRef.current.value);
    }
  };

  render() {
    return (
      <div>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.handleChange}
          data-testid="input" // For testing purposes
        />
      </div>
    );
  }
}

export default UncComponent;