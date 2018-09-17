import React, { Component } from 'react';
import './NewPasswordForm.css';
import Button from '../Button/Button';
import Password from '../Password/Password';

class NewPasswordForm extends Component {
    render() {
        
        return (
            <form className="new_password">
                <div className="margin-bottom">
                    <Button width="form-title-width" height="form-title-height" backgroundColor="bg-white" textStyle="new_password-header-style" text="Mot de passe" alignment="left" />
                </div>
                <div className="center">
                <div className="margin-bottom">
                    <Password placeholder="" label="Nouveau mot de passe" labelStyle="new_password_label" withLabel="inline" id="password" />   
                </div>
                 <div className="margin-bottom">
                        <Password id="confirmPassword" placeholder="" label="Confirmer le mot de passe" labelStyle="new_password_label" withLabel="inline"/>   
                </div>
                    <div className="new_password_button_right">
                        <Button  width="form-width" height="form-height" backgroundColor="bg-aqua" textStyle="white" text="Enregistrer" alignment="button-center" />
                    </div>
                </div>
                
            </form>
        );
    }
}

export default NewPasswordForm;