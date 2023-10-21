import React from 'react'

function History({history, onChange}) {

  const historyItems = history.map((item, index) => {
    return (<li className='history-item' key={index} onClick={() => onChange(index)}>Step: {index}</li>)
  })

  return (
    <>
    <h2 className='history-title'>History</h2>
    <ul className='history-list'>{historyItems}</ul>
    </>
  )
}

export default History