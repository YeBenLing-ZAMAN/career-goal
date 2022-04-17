import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayCourse = () => {
    const {displayCourseID} = useParams();
    return (
        <div>
            this is display course 
            content form youtube : {displayCourseID};
        </div>
    );
};

export default DisplayCourse;