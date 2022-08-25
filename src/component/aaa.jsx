import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from "./button/button.component";

const Example=() =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/*<Button variant="dark" onClick={handleShow}>*/}
                {/*Contacts*/}
            {/*</Button>*/}
            <Button type={show?"6-contacts-active":"6-contacts"} onClick={handleShow} text="Contacts"/>

            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Contacts</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                    Email: yingjiya@usc.edu
                    Github:https://github.com/beckyyyj
                    Linkedlin:https://www.linkedin.com/in/yingjiyan/
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};
export default Example;