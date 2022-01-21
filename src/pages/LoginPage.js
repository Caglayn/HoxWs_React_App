import React from "react";
import Input from "../components/input";
import { withTranslation } from 'react-i18next';
import { login } from '../api/apiCalls';

class LoginPage extends React.Component{
    state = {
        username:null,
        password:null,
        pendingApiCall:false,
        errors:{}
    };

    onChange = event =>{
        const{ name, value } = event.target;

        this.setState({
            [name]:value
        });
    };

    onClickLogin = async event => {
        event.preventDefault();
        const {username, password} = this.state;
        const creds = {
            username,
            password
        };
        login(creds);
    };

    render(){
        const{ t } = this.props;
        const{ pendingApiCall, errors } = this.state;
        const{ username, password } = errors;
        return(
            <div className="container">
                <form>
                    <h1 className="text-center">{t('Log In')}</h1>
                    <Input name="username" label={t('Username')} error = {username} onChange={this.onChange} />
                    <Input name="password" label={t('Password')} error = {password} onChange={this.onChange} type="password" />
                    <div className="text-center">
                        <button 
                        className="btn btn-primary" 
                        onClick={this.onClickLogin} 
                        disabled={pendingApiCall}>
                            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} {t('Log In')}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const LoginPageWithTranslation = withTranslation()(LoginPage);
export default LoginPageWithTranslation;