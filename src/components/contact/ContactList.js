import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ContactList = ({nickNameRef, numberRef, mailRef, listRef, contactAddress, onEntry
,onRemove, onEdit, onSave, onCancle}) => {

  const classes = useStyles();
  

  
  return(<>  <React.Fragment>
    <Container maxWidth="lg">
      <div className={classes.root} noValidate autoComplete="off">
        <input type="text" placeholder="이름" ref={nickNameRef} />
        <input type="text" placeholder="연락처" ref={numberRef} />
        <input type="text" placeholder="이메일" ref={mailRef} />
        <Button
          style={{ width: "5%" }}
          variant="contained"
          color="primary"
          onClick={() => {
            onEntry();
          }}
        >
          입력
        </Button>
      </div>
      <div>
        <Typography component="div">
          <table>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
            >
              <thead>
                <>
                  <tr>
                    <>
                      <th></th>
                      <th>이름</th>
                      <th>연락처</th>
                      <th>이메일</th>
                      <th></th>
                    </>
                  </tr>
                </>
              </thead>
              <tbody ref={listRef}>
                <>
                  {contactAddress.map((member, order) => (
                    <tr key={order}>
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
                      {!member.edit && <td>{member.name}</td>}
                      {!member.edit && <td>{member.phone}</td>}
                      {!member.edit && <td>{member.email}</td>}
                      <td>
                        {!member.edit && (
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                              onEdit(order);
                            }}
                          >
                            편집
                          </Button>
                        )}
                        {member.edit && (
                          <input
                            class="firstName"
                            type="text"
                            defaultValue={member.name}
                          ></input>
                        )}
                        {member.edit && (
                          <input
                            class="secondPhone"
                            type="text"
                            defaultValue={member.phone}
                          ></input>
                        )}
                        {member.edit && (
                          <input
                            class="thridEmail"
                            type="text"
                            defaultValue={member.email}
                          ></input>
                        )}
                        {member.edit && (
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                              onSave(order);
                            }}
                          >
                            저장
                          </Button>
                        )}{" "}
                        {member.edit && (
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                              onCancle(order);
                            }}
                          >
                            취소
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </>
              </tbody>
            </Grid>
          </table>
        </Typography>
      </div>
    </Container>
  </React.Fragment> </>)


};

export default ContactList;