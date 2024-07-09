import React from 'react';

function FullName() {
    return (
        <li>
            <b>Full Name: </b>Conrad Kellogg
        </li>
    );
}

function ContactPhone() {
    return (
        <li>
            <b>Contact Phone: </b>+1 (617) 555-5678
        </li>
    );
}

function EmailAddress() {
    return (
        <li>
            <b>Email Address: </b><a href="mailto:conrad.kellogg@mercenary.net">conrad.kellogg@mercenary.net</a>
        </li>
    );
}

export default function Task2JSX() {
    return (
        <>
            <FullName />
            <ContactPhone />
            <EmailAddress />
        </>
    );
}