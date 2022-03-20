import React, { useState } from 'react'
import {FaTrash} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import {deleteGoal, updateGoal, reset} from '../features/goals/goalSlice';

function GoalItem({goal}) {

  const [editmode, setEditmode] = useState(false)
  const [text,setText] = useState(goal.text);

  const dispatch = useDispatch();

  const onKeyUp = (e) => {
    if (e.charCode === 13) {
      dispatch(updateGoal({id:goal._id, goalData:{text}}))
      setEditmode(false);
      
    }
  }

  return (
    <div className='goal'>
        <div>
            {new Date(goal.createdAt).toLocaleString('el-GR')}
        </div>
        {
          editmode ? (
            <>
              <input 
                type="text" 
                name='text' 
                id='text' 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onKeyUp}/>
              <p>{goal._id}</p>
            </>
          ) : (
            <>
              <h2 onClick={()=>setEditmode(true)}>{goal.text}</h2>
              <p>{goal._id}</p>
              <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
                <FaTrash size={14}/>
              </button>
            </>
          )
        }
        
    </div>
  )
}

export default GoalItem