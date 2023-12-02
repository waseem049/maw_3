import React, { useState } from "react";
import {
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    Typography,
    Button,
    Container,
} from "@mui/material";
import "./SpeakerDialog.css";
const defaultValue = {
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Phone: "",
    Company: "",
    Tittle: "",
    JobTittle: "",
    LinkedInProfileURL: "",
    TwitterHandle: "",
    ContactPerson: "",
    ContactPersonEmailAddress: "",
    BriefBio: "",
    TalkTittle: "",
    TalkAbstract: "",
};
function SpeakerDialog(props) {
    const [user, setUser] = useState(defaultValue);
    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    };
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted with data:", user);
    }
    return (
        <div className="speaker">
            <div className="speaker-context">
                <h1>CONF3RENCE 2024</h1>
                <br /> <h1>BECOME A SPEAKER</h1>
                <br />
                <br /> Fill the form on the right if you want to be part of
                <br /> Europe’s premier event!
                <br />
                <br /> Join the forefront of innovation and gain exposure <br />
                for your personal brand by partnering with CONF3RENCE! As a
                speaker, you’ll have the
                <br /> opportunity to connect with
                <br /> key industry leaders and demonstrate your expertise to a
                captive audience.
                <br /> Don’t miss this chance to boost your personal brand!
            </div>
            <div>
                <Container className="form">
                    <form onSubmit={handleSubmit} className="form_data">
                        <FormControl>
                            <InputLabel>First Name</InputLabel>
                            <Input
                                onChange={(e) => onValueChange(e)}
                                name="name"
                            />

                            <FormControl>
                                <InputLabel>Last Name</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="username"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Email Address</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="email"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Phone</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="phone"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Company</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="company"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Tittle</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="tittle"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Job Tittle</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="jobtittle"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>LinkedIn Profile URL</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="linkedinprofileurl"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Twitter Handle</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="twitterhandle"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Contact Person</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="contactperson"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>
                                    Contact Person Email Address
                                </InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="contactpersonemailaddress"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Brief Bio</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="briefbio"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Talk Tittle</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="talktittle"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel>Talk Abstract</InputLabel>
                                <Input
                                    onChange={(e) => onValueChange(e)}
                                    name="talkabstract"
                                />
                            </FormControl>
                            <div className="btns">
                                <FormControl>
                                    <Button
                                        variant="contained"
                                        onClick={props.onClose}
                                    >
                                        Close
                                    </Button>
                                </FormControl>
                                <FormControl>
                                    <Button variant="contained">Submit</Button>
                                </FormControl>
                            </div>
                        </FormControl>
                    </form>
                </Container>
            </div>
        </div>
    );
}

export default SpeakerDialog;