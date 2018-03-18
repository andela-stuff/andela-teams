/**
 * @fileOverview SearchBar component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:react
 * @requires NPM:react-autosuggest
 * @requires ../containers/react-flex-proto/Col.jsx
 * @requires ../containers/react-flex-proto/Row.jsx
 */

import React from 'react';
import Autosuggest from 'react-autosuggest';

import Col from '../containers/react-flex-proto/Col.jsx';
import Row from '../containers/react-flex-proto/Row.jsx';

const suggestionExamples = [
  {
    text: 'Tabs',
  },
  {
    text: 'Buttons',
  },
  {
    text: 'Progress Bars',
  },
  {
    text: 'Tables',
  },
  {
    text: 'About',
  },
  {
    text: 'Inputs',
  },
  {
    text: 'Notifications',
  },
  {
    text: 'Home',
  },
  {
    text: 'Panels',
  },
  {
    text: 'Modals',
  },
];

/**
* SearchBar component
* @class SearchBar
*/
class SearchBar extends React.Component {
  /**
   * @constructor
  */
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: this.getSuggestions(''),
    };

    this.onChange = this.onChange.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onSuggestionsUpdateRequested =
    this.onSuggestionsUpdateRequested.bind(this);
  }

  /**
   * @method onChange
   *
   * @param { object } event event
   * @param { object } _ _
   *
   * @returns { undefined } response
   */
  onChange(event, { newValue }) {
    this.setState({
      value: newValue,
    });
  }

  /**
   * @method onSuggestionsUpdateRequested
   *
   * @param { object } _ _
   *
   * @returns { undefined } response
   */
  onSuggestionsUpdateRequested({ value }) {
    this.setState({ loading: true, suggestions: [{ type: 'loading' }] });

    // eslint-disable-next-line prefer-arrow-callback
    setTimeout(function f() {
      this.setState({
        suggestions: this.getSuggestions(value),
        loading: false,
      });
    }.bind(this), 200);
  }

  /**
   * @method getSuggestions
   *
   * @param { string } value value
   *
   * @returns { undefined } response
   */
  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const suggestions =
    suggestionExamples
      .filter(lang =>
        lang.text.toLowerCase().slice(0, inputLength) === inputValue);

    return suggestions.length ? suggestions : [{ type: 'no-results' }];
  }

  /**
   * @method getSuggestionValue
   *
   * @param { object } suggestion suggestion
   *
   * @returns { undefined } response
   */
  getSuggestionValue(suggestion) {
    // when suggestion selected, this function tells
    // what should be the value of the input
    return suggestion.text;
  }

  /**
   * @method renderSuggestion
   *
   * @param { object } suggestion suggestion
   *
   * @returns { undefined } response
   */
  renderSuggestion(suggestion) {
    if (this.state.loading) {
      return (
        <div>
          <i className="fa fa-spinner fa-spin" /> Loading...
        </div>
      );
    }

    if (suggestion.type === 'no-results') {
      return (
        <div>
          <i className="fa fa-exclamation-triangle" /> No results found, you may need to be more specific!
        </div>
      );
    }

    return (
      <span>{suggestion.text}</span>
    );
  }

  /**
   * @method render
   *
   * @returns { node } JSX
   */
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search for...',
      value,
      onChange: this.onChange,
    };

    return (
      <Row>
        <Col grow={false} padding={0}>
          <i className="ion-ios-search-strong" />
        </Col>
        <Col padding={0}>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />
        </Col>
      </Row>
    );
  }
}

export default SearchBar;
