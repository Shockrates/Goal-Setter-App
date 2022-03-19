import React from 'react'
import {FaTrash} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import {deleteGoal, reset} from '../features/goals/goalSlice';

function GoalItem({goal}) {

  const dispatch = useDispatch();

  return (
    <div className='goal'>
        <div>
            {new Date(goal.createdAt).toLocaleString('el-GR')}
        </div>
        <h2>{goal.text}</h2>
        <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
          <FaTrash size={14}/>
        </button>
    </div>
  )
}

export default GoalItem