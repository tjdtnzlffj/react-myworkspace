import Button from "@material-ui/core/Button";

import { useState } from "react";
import { useHistory } from "react-router";

const ContactItem = ({ order, onRemove, onSave, member }) => {
  const [edit, setEdit] = useState(member.Edit);
  const history = useHistory();

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {" "}
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  onRemove(order);
                }}
              >
                ✔
              </Button>
            </td>
            {!edit && <td style={{cursor:"pointer"}} onClick={() => {history.push(`/contact/${member.keyword}`);}}>{member.name}</td>}
            {!edit && <td style={{cursor:"pointer"}} onClick={() => {history.push(`/contact/${member.keyword}`);}}>{member.phone}</td>}
            {!edit && <td style={{cursor:"pointer"}} onClick={() => {history.push(`/contact/${member.keyword}`);}}>{member.email}</td>}
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
                  class="firstName"
                  type="text"
                  defaultValue={member.name}
                ></input>
              )}
              {edit && (
                <input
                  class="secondPhone"
                  type="text"
                  defaultValue={member.phone}
                ></input>
              )}
              {edit && (
                <input
                  class="thridEmail"
                  type="text"
                  defaultValue={member.email}
                ></input>
              )}
              {edit && (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    onSave(order);
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
    </div>
  );
};

export default ContactItem;
