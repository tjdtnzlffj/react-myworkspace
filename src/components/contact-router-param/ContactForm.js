import Button from "@material-ui/core/Button";

const ContactForm = ({nickNameRef, numberRef, mailRef, onEntry}) => {
  return(  
   
  <div style={{ display: "flex" }}>
  <input type="text" placeholder="이름" ref={nickNameRef} />
  <input type="text" placeholder="연락처" ref={numberRef} />
  <input type="text" placeholder="이메일" ref={mailRef} />
  <Button
    style={{ width: "5%" }}
    variant="contained"
    color="primary"
    onClick={
      onEntry
    }
  >
    입력
  </Button>
</div>

  )};

export default ContactForm;