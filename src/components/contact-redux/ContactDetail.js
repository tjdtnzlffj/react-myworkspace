import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const ContactDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  console.log("id:" + id);

  const contactAddress = useSelector((state) => state.contact);
  const member = contactAddress.filter(
    (member) => member.id === parseInt(id)
  )[0];

  // const member = lst.filter((member) => member.id === parseInt(id))[0];

  return (
    <>
      <p>
        {member.name},{member.phone},{member.email}
      </p>
      <div>
        <button
          onClick={() => {
            history.push("/contact");
          }}
        >
          목록
        </button>
      </div>
    </>
  );
};

export default ContactDetail;
