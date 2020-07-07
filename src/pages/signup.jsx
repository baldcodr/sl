import React, { Component } from "react";
import Layout from '../components/Layout';
import Lines from '../components/Lines';
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Social from '../components/Social';





const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        top: '0px',
        width: '100%',
        height: '100%',
        padding: theme.spacing(2, 4, 3),
    },
    content: {
        paddingTop: '50px',
        paddingBottom: '20px',
    },
    formPage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%'
    },
    container: {
        paddingTop: "20px",

    }
}));
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: '',
            fNameValue: '',
            lNameValue: '',
        };
    }
    // const classes = useStyles();

    render() {
        return (
					<React.Fragment>
						<Helmet
							bodyAttributes={{
								style: "background-color : #111011 !important",
							}}
						/>
						<img
							id='imageBG'
							className='hide-on-med-and-up'
							src='https://res.cloudinary.com/sl-asset/image/upload/v1593953838/sl-asset/S_MOBILE_xo9tks.gif'
							alt='background mobile'
						/>
						<img
							id='imageBG'
							className='hide-on-small-only'
							src='https://res.cloudinary.com/sl-asset/image/upload/v1594097751/sl-asset/blacklivesmatter_qzdhck.jpg'
							alt='background desktop'
						/>
						<Lines />
						<Layout />
						<Container maxWidth='xs' className='form-container'>
							<div className='form-title'>
								<h5>signup for the newsletter</h5>
							</div>
							<form
								action='https://officialsl.us10.list-manage.com/subscribe/post?u=121ac0217e5d582d4ff78cfe1&amp;id=4973e04cf1'
								method='POST'
								id='mc-embedded-subscribe-form'
								name='mc-embedded-subscribe-form'
								class='validate'
								target='_blank'>
								<input
									type='hidden'
									name='u'
									value='eb05e4f830c2a04be30171b01'
								/>
								<input type='hidden' name='id' value='8281a64779' />

								<div className='form-label'>
									<label htmlFor='mce-FNAME'>firstname</label>
									<span class='asterisk'>**</span>
									<input
										type='text'
										name='FNAME'
										id='mce-FNAME'
										className='form-input'
										value={this.state.fNameValue}
										onChange={(e) => {
											this.setState({ fNameValue: e.target.value });
										}}
									/>
								</div>
								<div className='form-label'>
									<label htmlFor='mce-LNAME'>lastname</label>
									<span class='asterisk'>**</span>
									<input
										type='text'
										name='LNAME'
										id='mce-LNAME'
										className='form-input'
										value={this.state.lNameValue}
										onChange={(e) => {
											this.setState({ lNameValue: e.target.value });
										}}
									/>
								</div>

								<div className='form-label'>
									<label htmlFor='mce-EMAIL'>email</label>
									<span class='asterisk'>**</span>
									<input
										type='email'
										name='EMAIL'
										id='mce-EMAIL'
										className='form-input'
										value={this.state.emailValue}
										onChange={(e) => {
											this.setState({ emailValue: e.target.value });
										}}
										autoCapitalize='off'
										autoCorrect='off'
									/>
								</div>

								<input
									type='submit'
									value='SUBMIT'
									name='subscribe'
									id='mc-embedded-subscribe'
									className='submit-btn'
								/>
								<div className='form-footer'>
									<div>
										<a href='https://www.umusic.co.uk/privacy.html'>
											privacy policy
										</a>
									</div>
									<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
									<div>
										<a href='https://www.umusic.co.uk/terms.html'>
											terms &amp; conditions{" "}
										</a>
									</div>
								</div>

								<div
									style={{ position: "absolute", left: "-5000px" }}
									aria-hidden='true'
									aria-label='Please leave the following three fields empty'>
									<label htmlFor='b_name'>Name: </label>
									<input
										type='text'
										name='b_name'
										tabIndex='-1'
										value=''
										placeholder='Freddie'
										id='b_name'
									/>

									<label htmlFor='b_email'>Email: </label>
									<input
										type='email'
										name='b_email'
										tabIndex='-1'
										value=''
										placeholder='youremail@gmail.com'
										id='b_email'
									/>

									<label htmlFor='b_comment'>Comment: </label>
									<textarea
										name='b_comment'
										tabIndex='-1'
										placeholder='Please comment'
										id='b_comment'></textarea>
								</div>
							</form>
						</Container>

						{/* <Container maxWidth="sm">
                    <div >
                        <div>
                            <div className="center donate">sign up for the newsletter
                   </div>
                            <div className="form">
                                <div className="center form-row"><div className="form-label">fullname</div> <input className="form-input" /></div>
                                <div className="center donate form-row"><div className="form-label">email</div> <input className="form-input" /></div>
                                <div className><div className="center donate submit-btn"> SUBMIT</div></div>
                            </div>
                        </div>
                    </div>
                </Container> */}

						<Social />
					</React.Fragment>
				);
    }
};