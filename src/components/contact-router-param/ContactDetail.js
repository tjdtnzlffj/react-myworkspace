import { useHistory, useParams } from "react-router-dom";
import { lst } from "./data";


const ContactDetail = () => {
  const { keyword } = useParams();
  const history = useHistory();
  console.log("keyword:" + keyword);

  const member = lst.filter(
    (member) => member.keyword === parseInt(keyword)
  )[0];

  return (
    <>
      <h1>contact: {keyword}</h1>
      <p>
        {member.name},{member.phone},{member.email}
      </p>
      <div>
        <button onClick={() => {history.push("/contact")}}>목록</button>
      </div>
    </>
  );
};

export default ContactDetail;
