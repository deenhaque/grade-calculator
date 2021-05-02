import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styles
const Grade = styled.div`
  display: inline-block;
  margin: auto;
  justify-content: left;
`;
const StyledGrades = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
  background-color: #43AA8B;
  border-radius: 20px;
  padding-left: 20px;
  align-content: center;
`;
const StyledInput = styled.input`
  margin: 5px;
  text-align: center;
  width: 70px;
`;

export default function Grades() {
  const [grades, setGrades] = useState([{weight: '', percent: '', label: ''}]);
  const [del, setDel] = useState(false);
  const [gradeGoal, setGradeGoal] = useState(80);

  const averageGrade = ()=> {
    let currGrades = 0;
    let currWeights = 0;
    grades.forEach(({weight, percent})=> {
      if (weight && percent) {
        currGrades += parseInt(weight)*parseInt(percent);
        currWeights += parseInt(weight);
      }
    });
    if (currWeights === 0) {
      return 0;
    }
    return currGrades / currWeights;
  }

  const currentGrade = ()=> {
    let avg = 0;
    grades.forEach(({weight, percent})=> {
      if (weight && percent) {
        avg += parseInt(weight)*parseInt(percent)/100;
      }
    });
    return avg;
  }

  const calculateRemainingGradeStr = ()=> {
    // Get current avg grade
    let avg = 0;
    let totalWeight = 0;
    let remainingWeight = 100;
    let remainingGrade = 0;
    // Get avg grade and remaining weight
    grades.forEach(({weight, percent})=> {
      if (weight && percent) {
        avg += parseInt(weight)*parseInt(percent)/100;
        totalWeight += parseInt(weight);
      }
    });
    remainingWeight = 100-totalWeight;

    // Remaining grade calculation
    remainingGrade = (gradeGoal - avg) / (remainingWeight/100);
    return `${parseFloat(remainingGrade).toFixed(2)}% of weight ${remainingWeight}%`;
  }

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
    if (grades.length < 1 || grades[grades.length-1].weight || grades[grades.length-1].percent || grades[grades.length-1].label) {
      setGrades(grades.concat([{weight: '', percent: '', label: ''}]));
    }
    return null;
  }, [grades, del]);

  return (
    <StyledGrades>
      <h1 style={{color: '#F0F4EF'}}>Grades</h1>
        {grades.map((grade, i)=> {
          const [weightKey, percentKey, labelKey] = Object.keys(grade);
          return (
              <Grade>
                <StyledInput
                  type='text' name={`${labelKey}-${i}`}
                  value={grades[i].label}
                  i={i} placeholder={labelKey.charAt(0).toUpperCase()+labelKey.slice(1)}
                  onInput={e=> {
                    const newDel = e.target.value.length === 0;
                    setGrades(Array.from(grades, (grade, index)=> index===i ? {...grade, [labelKey]: e.target.value} : grade));
                    setDel(newDel);
                  }}
                /><label for={`${labelKey}-${i}`}>, </label>
                <StyledInput
                  type='text' name={`${percentKey}-${i}`}
                  value={grades[i].percent}
                  i={i} placeholder={percentKey.charAt(0).toUpperCase()+percentKey.slice(1)}
                  onInput={e=> {
                    const newDel = e.target.value.length === 0;
                    setGrades(Array.from(grades, (grade, index)=> index===i ? {...grade, [percentKey]: e.target.value.replace(/\D/,'')} : grade));
                    setDel(newDel);
                  }}
                /><label for={`${percentKey}-${i}`}>%, </label>
                <StyledInput
                  style={{width: '50px'}}
                  type='text' name={`${weightKey}-${i}`}
                  value={grades[i].weight}
                  i={i} placeholder={weightKey.charAt(0).toUpperCase()+weightKey.slice(1)}
                  onInput={e=> {
                    const newDel = e.target.value.length === 0;
                    setGrades(Array.from(grades, (grade, index)=> index===i ? {...grade, [weightKey]: e.target.value.replace(/\D/,'')} : grade));
                    setDel(newDel);
                  }}
                /><label for={`${weightKey}-${i}`}>%</label>
              </Grade>
          );
        })}
        <p>
          Average Grade: {`${parseFloat(averageGrade()).toFixed(2)}%`}<br></br>
          Current Grade: {`${parseFloat(currentGrade()).toFixed(2)}%`}
        </p>

        <div class='form-group'>
            <label for="goalGrade">Grade Goal:</label>
            <StyledInput
              type='text' name='goalGrade'
              value={gradeGoal}
              placeholder='Grade Goal'
              onInput={e=> {
                setGradeGoal(e.target.value.replace(/\D/,''));
              }}
            />
        </div>
        <p>
          Remaining Grade Needed: {calculateRemainingGradeStr()}
        </p>
        
    </StyledGrades>
    

  );
}