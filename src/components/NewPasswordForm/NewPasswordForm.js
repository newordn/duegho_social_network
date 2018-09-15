import React, { Component } from 'react';
import './NewPasswordForm.css';
import Button from '../Button/Button';
import Password from '../Password/Password';

class NewPasswordForm extends Component {
    render() {
        
        return (
            <form className="new_password">
                <div class="margin-bottom">
                    <Button key="1" width="form-title-width" height="form-title-height" backgroundColor="bg-white" textStyle="new_password-header-style" text="Mot de passe" alignment="left" />
                </div>
                <div className="center">
                <label htmlFor="password" className="new_password_label">Nouveau mot de passe</label>
                <div className="margin-bottom">
                    <Password placeholder="" id="password" width="new_password_width"/>   
                </div>
                <label htmlFor="password" className="new_password_label">Confirmer le mot de passe</label>
                <div className="margin-bottom">
                    <Password id="confirmPassword" placeholder="" width="new_password_width"/>   
                </div>
                <div className="new_password_button_right">
                <Button key="2" width="form-width" height="form-height" backgroundColor="bg-aqua" textStyle="white" text="Enregistrer" alignment="button-center" />
                </div>
                </div>
            </form>
        );
    }
}

export default NewPasswordForm;