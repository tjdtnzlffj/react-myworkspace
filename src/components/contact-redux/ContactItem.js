import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const ContactItem = ({ member }) => {
  const [edit, setEdit] = useState(member.Edit);
  const history = useHistory();
  const dispatch = useDispatch();
  const nickName = useRef();
  const number = useRef();
  const mail = useRef();

  const remove = (id) => {
    dispatch({ type: "REMOVE_CONTACT", payload: id });
  };

  const save = (id) => {
    const name = nickName.current.value;
    const phone = number.current.value;
    const email = mail.current.value;
    dispatch({
      type: "MODIFY_CONTACT",
      payload: { id, name, phone, email },
    });
  };

  return (
    <ListItem>
      <table>
        <tbody>
          <tr>
            <td>
              {" "}
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  remove(member.id);
                }}
                style={{ cursor: "pointer" }}
              >
                ✔
              </Button>
            </td>
            {!edit && (
              <td
                style={{ cursor: "pointer" }}
                onClick={() => {
                  history.push(`/contact/${member.id}`);
                }}
              >
                {member.name}
              </td>
            )}
            {!edit && (
              <td
                style={{ cursor: "pointer" }}
                onClick={() => {
                  history.push(`/contact/${member.id}`);
                }}
              >
                {member.phone}
              </td>
            )}
            {!edit && (
              <td
                style={{ cursor: "pointer" }}
                onClick={() => {
                  history.push(`/contact/${member.id}`);
                }}
              >
                {member.email}
              </td>
            )}
            <td>
              {!member.edit && (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  편집
                </Button>
              )}
              {edit && (
                <input
                  type="text"
                  ref={nickName}
                  defaultValue={member.name}
                ></input>
              )}
              {edit && (
                <input
                  type="text"
                  ref={number}
                  defaultValue={member.phone}
                ></input>
              )}
              {edit && (
                <input
                  type="text"
                  ref={mail}
                  defaultValue={member.email}
                ></input>
              )}
              {edit && (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    save(member.id);
                    setEdit(false);
                  }}
                >
                  저장
                </Button>
              )}{" "}
              {edit && (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  취소
                </Button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </ListItem>
  );
};

export default ContactItem;
