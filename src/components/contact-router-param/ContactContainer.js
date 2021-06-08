import { useRef, useState } from "react";

import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

import {lst} from "./data"

const ContactContainer = () => {
  const [contactAddress, setContactAddress] = useState(lst);
  const list = useRef();
  const nickName = useRef();
  const number = useRef();
  const mail = useRef();

  const handleEntry = () => {
    console.log(nickName.current.value);
    console.log(number.current.value);
    console.log(mail.current.value);
    setContactAddress([
      {
        name: nickName.current.value,
        phone: number.current.value,
        email: mail.current.value,
      },
      ...contactAddress,
    ]);
    nickName.current.value = "";
    number.current.value = "";
    mail.current.value = "";
  };
  const handleRemove = (index) => {
    const arr = contactAddress;
    const newArr = contactAddress.filter((_, order) => order !== index);

    console.log(arr[0] === newArr[0]);
    setContactAddress(contactAddress.filter((_, order) => order !== index));
  };
 
  const handleSave = (index) => {
    setContactAddress(
      contactAddress.map((member, order) => {
        if (order === index) {
          const tr = list.current.children[index];
          const editName = tr.querySelector(".firstName");
          const editPhone = tr.querySelector(".secondPhone");
          const editEmail = tr.querySelector(".thridEmail");
          member.name = editName.value;
          member.phone = editPhone.value;
          member.email = editEmail.value;
          delete member.edit;
        }
        return member;
      })
    );
  };

  return (
    <>
    <ContactForm
      nickNameRef={nickName}
      numberRef={number}
      mailRef={mail}
      onEntry={handleEntry}
      />
      <ContactList
      listRef={list}
      contactAddress={contactAddress}
      onRemove={handleRemove}
      onSave={handleSave}
      
      />
   </>
  );
};
export default ContactContainer;
