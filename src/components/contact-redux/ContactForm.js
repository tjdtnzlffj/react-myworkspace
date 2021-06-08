import Button from "@material-ui/core/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const nickName = useRef();
  const number = useRef();
  const mail = useRef();
  const dispatch = useDispatch();

  const entry = () => {
    const name = nickName.current.value;
    const phone = number.current.value;
    const email = mail.current.value;

    nickName.current.value = "";
    number.current.value = "";
    mail.current.value = "";

    dispatch({
      type: "ENTRY_CONTACT",
      payload: { name, phone, email },
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <input type="text" placeholder="이름" ref={nickName} />
      <input type="text" placeholder="연락처" ref={number} />
      <input type="text" placeholder="이메일" ref={mail} />
      <Button
        style={{ width: "5%" }}
        variant="contained"
        color="primary"
        onClick={entry}
      >
        입력
      </Button>
    </div>
  );
};

export default ContactForm;
