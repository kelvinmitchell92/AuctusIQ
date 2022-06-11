import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Component } from 'react';
import './index.css';

function App() {
    const [backlogs, setBacklogs] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handleAddButtonClick = () => {
        const newBacklog = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...backlogs, newBacklog];

        setBacklogs(newItems);
        setInputValue('');
        
    };

    const handleDelete = () => {

        backlogs.delete();

    }

    const [nextSprints, setNextSprint] = useState([]);
    const [sprintValue, setSprintValue] = useState('');
    const handleSprintButtonClick = () => {
        const newSprint = {
            itemName: sprintValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...nextSprints, newSprint];

        setNextSprint(newItems);
        setSprintValue('');

    };

    const [nextDevs, setDev] = useState([]);
    const [devValue, setDevValue] = useState('');
    const handleDevButtonClick = () => {
        const newDev = {
            itemName: devValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...nextDevs, newDev];

        setDev(newItems);
        setDevValue('');

    };

    const [nextTests, setTest] = useState([]);
    const [testValue, setTestValue] = useState('');
    const handleTestButtonClick = () => {
        const newTest = {
            itemName: testValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...nextTests, newTest];

        setTest(newItems);
        setTestValue('');

    };


    const [nextReviews, setReview] = useState([]);
    const [reviewValue, setReviewValue] = useState('');
    const handleReviewButtonClick = () => {
        const newReview = {
            itemName: reviewValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...nextReviews, newReview];

        setReview(newItems);
        setReviewValue('');

    };

    const [nextDone, setDone] = useState([]);
    const [doneValue, setDoneValue] = useState('');
    const handleDoneButtonClick = () => {
        const newDone = {
            itemName: doneValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...nextDone, newDone];

        setDone(newItems);
        setDoneValue('');

    };



  return (
    <div className="App">

          <body class="App-body">

              <div class="row">
                  <div class="col-sm-2">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">Backlog</h5>
                              <p class="card-text">

                                  <div className='add-item-box flex'>
                                      <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input flex' placeholder='Add a task...' style={{ width:'3cm' }} />
                                      <a class="btn btn-primary" onClick={() => handleAddButtonClick()}>Add Task</a> 
                                  </div>
                                      <div className='item-list'>
                                          {backlogs.map((item, index) => (
                                              <div className='item-container'>
                                                  <div className='item-name' >

                                                      


                                                      {item.isSelected ? (
                                                          <>

                                                              <strong><span className='completed'>{item.itemName}</span></strong>
                                                          </>
                                                      ) : (
                                                          <>

                                                              <strong><span>{item.itemName}</span></strong>
                                                          </>
                                                      )}

                                                      <button class="btn btn-outline-secondary btn-sm"> → </button>

                                                      <block>
                                                          <button onClick={() => handleDelete()} class="btn btn-outline-secondary btn-sm"> Delete Task </button>
                                                      </block>

                                                  </div>
                                                  
                                                      
                                                      
                                              
                                                  
                                              </div>
                                          ))}
                                      </div>
                                

                              </p>
                              
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-2">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">Next Sprint</h5>
                              <p class="card-text">

                                  <div className='add-item-box flex'>
                                      <input value={sprintValue} onChange={(event) => setSprintValue(event.target.value)} className='add-item-input flex' placeholder='Add a task...' style={{ width: '3cm' }} />
                                      <a class="btn btn-primary" onClick={() => handleSprintButtonClick()}>Add Task</a>
                                  </div>
                                  <div className='item-list'>
                                      {nextSprints.map((item, index) => (
                                          <div className='item-container'>
                                              <div className='item-name' >

                                                  <button class="btn btn-outline-secondary btn-sm"> ← </button>


                                                  {item.isSelected ? (
                                                      <>

                                                          <strong><span className='completed'>{item.itemName}</span></strong>
                                                      </>
                                                  ) : (
                                                      <>

                                                          <strong><span>{item.itemName}</span></strong>
                                                      </>
                                                  )}

                                                  <button class="btn btn-outline-secondary btn-sm"> → </button>

                                                  <block>
                                                      <button class="btn btn-outline-secondary btn-sm"> Delete Task </button>
                                                  </block>

                                              </div>





                                          </div>
                                      ))}
                                  </div>


                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-2">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">In Development</h5>
                              <p class="card-text">

                                  <div className='add-item-box flex'>
                                      <input value={devValue} onChange={(event) => setDevValue(event.target.value)} className='add-item-input flex' placeholder='Add a task...' style={{ width: '3cm' }} />
                                      <a class="btn btn-primary" onClick={() => handleDevButtonClick()}>Add Task</a>
                                  </div>
                                  <div className='item-list'>
                                      {nextDevs.map((item, index) => (
                                          <div className='item-container'>
                                              <div className='item-name' >

                                                  <button class="btn btn-outline-secondary btn-sm"> ← </button>


                                                  {item.isSelected ? (
                                                      <>

                                                          <strong><span className='completed'>{item.itemName}</span></strong>
                                                      </>
                                                  ) : (
                                                      <>

                                                          <strong><span>{item.itemName}</span></strong>
                                                      </>
                                                  )}

                                                  <button class="btn btn-outline-secondary btn-sm"> → </button>

                                                  <block>
                                                      <button class="btn btn-outline-secondary btn-sm"> Delete Task </button>
                                                  </block>

                                              </div>





                                          </div>
                                      ))}
                                  </div>


                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-2">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">In Testing</h5>
                              <p class="card-text">

                                  <div className='add-item-box flex'>
                                      <input value={testValue} onChange={(event) => setTestValue(event.target.value)} className='add-item-input flex' placeholder='Add a task...' style={{ width: '3cm' }} />
                                      <a class="btn btn-primary" onClick={() => handleTestButtonClick()}>Add Task</a>
                                  </div>
                                  <div className='item-list'>
                                      {nextTests.map((item, index) => (
                                          <div className='item-container'>
                                              <div className='item-name' >

                                                  <button class="btn btn-outline-secondary btn-sm"> ← </button>


                                                  {item.isSelected ? (
                                                      <>

                                                          <strong><span className='completed'>{item.itemName}</span></strong>
                                                      </>
                                                  ) : (
                                                      <>

                                                          <strong><span>{item.itemName}</span></strong>
                                                      </>
                                                  )}

                                                  <button class="btn btn-outline-secondary btn-sm"> → </button>

                                                  <block>
                                                      <button class="btn btn-outline-secondary btn-sm"> Delete Task </button>
                                                  </block>

                                              </div>





                                          </div>
                                      ))}
                                  </div>


                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-2">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">In Review</h5>
                              <p class="card-text">

                                  <div className='add-item-box flex'>
                                      <input value={reviewValue} onChange={(event) => setReviewValue(event.target.value)} className='add-item-input flex' placeholder='Add a task...' style={{ width: '3cm' }} />
                                      <a class="btn btn-primary" onClick={() => handleReviewButtonClick()}>Add Task</a>
                                  </div>
                                  <div className='item-list'>
                                      {nextReviews.map((item, index) => (
                                          <div className='item-container'>
                                              <div className='item-name' >

                                                  <button class="btn btn-outline-secondary btn-sm"> ← </button>


                                                  {item.isSelected ? (
                                                      <>

                                                          <strong><span className='completed'>{item.itemName}</span></strong>
                                                      </>
                                                  ) : (
                                                      <>

                                                          <strong><span>{item.itemName}</span></strong>
                                                      </>
                                                  )}

                                                  <button class="btn btn-outline-secondary btn-sm"> → </button>

                                                  <block>
                                                      <button class="btn btn-outline-secondary btn-sm"> Delete Task </button>
                                                  </block>

                                              </div>





                                          </div>
                                      ))}
                                  </div>


                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-2">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">Finished</h5>
                              <p class="card-text">

                                  <div className='item-list'>
                                      {nextDone.map((item, index) => (
                                          <div className='item-container'>
                                              <div className='item-name' >

                                                  <button class="btn btn-outline-secondary btn-sm"> ← </button>


                                                  {item.isSelected ? (
                                                      <>

                                                          <strong><span className='completed'>{item.itemName}</span></strong>
                                                      </>
                                                  ) : (
                                                      <>

                                                          <strong><span>{item.itemName}</span></strong>
                                                      </>
                                                  )}

                                                 

                                                  <block>
                                                      <button class="btn btn-outline-secondary btn-sm"> Delete Task </button>
                                                  </block>

                                              </div>





                                          </div>
                                      ))}
                                  </div>


                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </body>
    </div>
  );
}

export default App;
