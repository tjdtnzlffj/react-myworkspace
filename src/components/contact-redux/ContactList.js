import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const contactAddress = useSelector((state) => state.contact);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>연락처</th>
            <th>이메일</th>
          </tr>
        </thead>
      </table>

      {contactAddress.map((member) => (
        <ContactItem key={member.id} member={member} />
      ))}
    </div>
  );
};

export default ContactList;
