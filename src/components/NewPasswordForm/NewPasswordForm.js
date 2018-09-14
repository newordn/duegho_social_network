import React, { Component } from 'react';
import './NewPasswordForm.css';
import Button from '../Button/Button';
import Password from '../Password/Password';

class NewPasswordForm extends Component {
    render() {
        
        return (
            <form class="new_password">
                <Button key="1" width="form-title-width" height="form-title-height" backgroundColor="bg-white" textStyle="new_password-header-style" text="Mot de passe" alignment="left" />
                <label for="password" class="new_password_label">Nouveau mot de passe</label>
                <Password placeholder="" id="password" width="new_password_width"/>   
                <label for="password" class="new_password_label">Confirmer le mot de passe</label>
                <Password id="confirmPassword" placeholder="" width="new_password_width"/>   
                <Button key="2" width="form-width" height="form-height" backgroundColor="bg-aqua" textStyle="white" text="Enregistrer" alignment="center" />
            </form>
        );
    }
}

export default NewPasswordForm;