import { useRef, useState } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  const [contactAddress, setContactAddress] = useState([
    { name: "" },
    { phone: "" },
    { email: "" },
  ]);
  const list = useRef();
  const nickName = useRef();
  const number = useRef();
  const mail = useRef();
  const handleEntry = () => {
    console.log("--enrty--");
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
    setContactAddress(contactAddress.filter((_, order) => order !== index));
  };
  const handleEdit = (index) => {
    setContactAddress(
      contactAddress.map((member, order) => {
        if (order === index) {
          member.edit = true;
        }
        return member;
      })
    );
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
  const handleCancel = (index) => {
    setContactAddress(
      contactAddress.map((member, order) => {
        if (order === index) {
          delete member.edit;
        }
        return member;
      })
    );
  };
 

  return <ContactList nickNameRef={nickName} numberRef={number} mailRef={mail} listRef = {list} contactAddress={contactAddress}
  onEntry={handleEntry} onRemove={handleRemove} onEdit={handleEdit} onSave={handleSave} onCancle={handleCancel} />
  



}; export default ContactContainer