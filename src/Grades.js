import React, { useState, useEffect } from 'react';

export default function Input() {
  const [grades, setGrades] = useState([{weight: '', percent: ''}]);
  const [del, setDel] = useState(false);

  useEffect(()=> {
    // If the delete flag is on, see if we can remove empty grades and remove them. Set the delete flag to false.
    if (del) {
      const newGrades = grades.filter(({weight, percent})=> weight || percent);
      
      if (JSON.stringify(newGrades) !== JSON.stringify(grades)) {
        setGrades(newGrades);
      }
      setDel(false);
    }
    // If the last element is filled in, or if there is nothing in the list, add a new grade to grades
    if (grades.length < 1 || grades[grades.length-1].weight || grades[grades.length-1].percent) {
      setGrades(grades.concat([{weight: '', percent: ''}]));
    }
    return null;
  }, [grades, del]);

  return (
    <div>
      <h1>Grades</h1>
      {grades.map((grade, i)=> {
        const [weightKey, percentKey] = Object.keys(grade);
        return (
          <form key={`grade-${i}`}>
            <div>
              <input
                type='text' name={`${weightKey}-${i}`}
                value={grades[i].weight}
                i={i} placeholder={weightKey}
                onInput={e=> {
                  setGrades(Array.from(grades, (grade, index)=> index===i ? {...grade, [weightKey]: e.target.value.replace(/\D/,'')} : grade));
                  setDel(true);
                }}
              />
            </div>
            <div>
              <input
                type='text' name={`${percentKey}-${i}`}
                value={grades[i].percent}
                i={i} placeholder={percentKey}
                onInput={e=> {
                  setGrades(Array.from(grades, (grade, index)=> index===i ? {...grade, [percentKey]: e.target.value.replace(/\D/,'')} : grade));
                  setDel(true);
                }}
              />
            </div>
          </form>
        );
      })}
    </div>
  );
}