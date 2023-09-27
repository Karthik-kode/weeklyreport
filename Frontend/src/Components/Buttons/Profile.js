import React, { useState } from 'react';
import Modal from './Modal'; // Create or import a Modal component
// import avatarImage from './path-to-avatar-image.png'; 
import user from '../../../public/Assets/user.png';

export default function Profile(){
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="profile-button-container">
      <button className="profile-button" onClick={toggleModal}>
        <img src={user} alt="User Avatar" className="avatar" />
      </button>
      {modalVisible && (
        <Modal onClose={toggleModal}>
          {/* Content for the modal */}
          <ul className="menu">
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </Modal>
      )}
    </div>
  );
};


