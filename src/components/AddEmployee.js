import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const [img, setImg] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
        onClick= {handleShow}
        className="block mx-auto m-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">+ Add Employee</button>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={(e) => {
                  e.preventDefault();
                  console.log('hello from edit Employee');
                  console.log(props.id, name, role);
                  props.newEmployee(name, role, img);
        }}
              id='editmodal' className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                    Full Name
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                       id="name" 
                       type="text"
                       placeholder='ex. google.com'  
                       value={name}
                       onChange={(e) => {setName(e.target.value);
                      }}
                />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
                    Role
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                       id="role" 
                       type="text" 
                       placeholder='ex. google.com' 
                       value={role}
                       onChange={(e) => {setRole(e.target.value);
                      }}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="img">
                    Image URL
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                       id="img" 
                       type="text"
                       placeholder='ex. google.com' 
                       value={img}
                       onChange={(e) => {setImg(e.target.value);
                      }}
                    />
                </div>
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='bg-slate-300 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded' onClick={handleClose}>Close</button>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClose} form="editmodal">Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddEmployee;