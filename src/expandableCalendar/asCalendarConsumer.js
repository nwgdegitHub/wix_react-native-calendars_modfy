import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import CalendarContext from './calendarContext';

//WrappedComponent即ExpandableCalendar
function asCalendarConsumer(WrappedComponent) {

  class CalendarConsumer extends Component {
    render() {
      return (
        <CalendarContext.Consumer>
          {(context) => (
            <WrappedComponent
              ref={r => (this.contentRef = r)}
              context={context}
              {...this.props}
            />
          )}
        </CalendarContext.Consumer>
      );
    }
  }

  hoistNonReactStatic(CalendarConsumer, WrappedComponent);//目标组件，原组件

  return CalendarConsumer;
}

export default asCalendarConsumer;
