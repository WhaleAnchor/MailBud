import React from 'react';
import './Mail.css'; // Don't forget to create this CSS file
import { BsEnvelope } from 'react-icons/bs';

function Mail() {
  const mailboxes = Array.from({ length: 1000 }, (_, i) => i + 1);

  return (
    <div className="mail-grid">
      {mailboxes.map((mailboxNumber) => (
        <div key={mailboxNumber} className="mailbox">
          <div className="mailbox-number">{mailboxNumber}</div>
          <div className="mailbox-icon">
            <BsEnvelope size={30} /> {/* Adjust the size as needed */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mail;
