import ContactItem from "./ContactItem";

const ContactList = ({ listRef, contactAddress, onRemove, onSave }) => {
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
        <tbody ref={listRef}>
          <tr>
            {contactAddress.map((member, order) => (
              <ContactItem
                key={order}
                member={member}
                order={order}
                onRemove={onRemove}
                onSave={onSave}
              />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
