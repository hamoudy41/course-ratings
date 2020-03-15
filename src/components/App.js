import React from 'react';
import Course from './Course';

const App = (props) => {
  return (
    <div className="container" basename="/course-ratings">
      {props.courses.map( course => 
        <Course
          {...course}
          key={course.id}
        />      
      )}
    </div>
  );
}

export default App;
