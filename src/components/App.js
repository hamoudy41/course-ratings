import React from 'react';
import Course from './Course';
import {HashRouter} from 'react-router-dom'

const App = (props) => {
  return (
    <HashRouter basename="/course-ratings">
    <div className="container" >
      {props.courses.map( course => 
        <Course
          {...course}
          key={course.id}
        />      
      )}
    </div>
    </HashRouter>
  );
}

export default App;
