import { useRef, useState } from "react";
import React from "react";
import { edit } from "@material-ui/icons";

const Contact = () => {
 
  const [contactAddress, setContactAddress] = useState([
 {name: ""},
 {phone:""},
 {email:""}
]);
  const list = useRef();
  const nickName = useRef();
  const number = useRef();
  const mail = useRef();
  const entry = () => {
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
  const remove = (index) => {
    setContactAddress(contactAddress.filter((_, idx) => idx !== index));
  };
  const edit = (index) => {
        setContactAddress(
          contactAddress.map((member, order) => {
            if (order === index) {
              member.edit = true;
            }
            return member
          })
        )
  };
  const save = (index) => {
    setContactAddress(
      contactAddress.map((member, order) => {
        if (order === index) {
          const tr = list.current.children[index];
          const editName = tr.querySelector(".firstName");
          const editPhone = tr.querySelector(".secondPhone")
          const editEmail = tr.querySelector(".thridEmail")
          member.name = editName.value;
          member.phone = editPhone.value;
          member.email = editEmail.value;
          delete member.edit;
        }
        return member;
      })
    )
  };
  const cancel = (index) => {
    setContactAddress(
      contactAddress.map((member, order) => {
        if (order === index) {
         delete member.edit;
        }
        return member;
      }))
    };
  
  

  return (
    <>
      <div>
        <input type="text" placeholder="이름" ref={nickName} />
        <input type="text" placeholder="연락처" ref={number} />
        <input type="text" placeholder="이메일" ref={mail} />
        <button onClick={entry}>입력</button>
      </div>
      <div>
        <table>
          <thead>
            <>
              <tr>
                <>
                  <th> 이름</th>
                  <th> 연락처</th>
                  <th>이메일</th>
                </>
              </tr>
            </>
          </thead>
          <tbody ref={list}>
            <>
              {contactAddress.map((member, order) => (
                <tr key={order}>
                  <button
                    onClick={() => {
                      remove(order);
                    }}
                  >
                    ✔
                  </button>
                  {!member.edit && <td>{member.name}</td>}
                  {!member.edit && <td>{member.phone}</td>}
                  {!member.edit && <td>{member.email}</td>}
                  {!member.edit && (
                  <button onClick = {() => {
                    edit(order);
                  }}>편집</button>)}
                  {member.edit && (
                    <input class="firstName" type="text" defaultValue={member.name}></input> )}
                     {member.edit && (
                    <input class="secondPhone" type="text" defaultValue={member.phone}></input> )}
                     {member.edit && (
                    <input class="thridEmail" type="text" defaultValue={member.email}></input> )}
                  {member.edit && (
                  <button onClick = {() => {
                    save(order);
                  }}>저장</button>)}
                  {member.edit && (
                  <button onClick = {() => {
                    cancel(order);
                  }}>취소</button>)}
                  
                 
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact;
