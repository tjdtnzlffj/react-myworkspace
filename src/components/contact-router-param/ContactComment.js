import { Divider, ListItemText } from "@material-ui/core";

const ContactComment = (order, comment) => {
  return (
    <>
    {order !== 0 && (
      <Divider
      key= {`divider${comment.keyword}`}
      style={{marginTop: "1rem", marginBottom: "1rem"}}
      />
    )}
       <ListItemText key={`item-${comment.keyword}`}>{comment.content}</ListItemText>
    </>
  );
};
export default ContactComment