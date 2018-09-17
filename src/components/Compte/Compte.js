import React, {Component } from 'react';
import './Compte.css';
import Button from '../Button/Button';
import Name from '../Name/Name';
import Email from '../Email/Email';
import Input from '../Input/Input';
import PhoneNumber from '../PhoneNumber/PhoneNumber';

class Compte extends Component {

    render()
    {
        return (
                <div className="compte_container">
                    <Button  height="form-title-height" backgroundColor="bg-white" textStyle="new_password-header-style" text="Compte" alignment="left" />
                    <form className="compte_form">
                       <Name label="Nom d'utilisateur" name="name" id="name" withLabel="inline" 
                       placeholder="eren.jaeger"/>   
                    <span className="profil_link">https://duegho.com/eren.jaeger</span>              
                    <Name id="first_name" placeholder="enren" name="first_name" label="Prénom" withLabel="inline"/>
                    <Name id="last_name" name="last_name" label="Nom" withLabel="inline"
                        placeholder="jaeger" />
                        <Email id="email" name="email" withLabel="inline" placeholder="erenjaeger@mail.io" label="Adresse email"/>
                    <PhoneNumber id="number" label="Num.téléphone 1" placeholder="693063228"/>
                    <PhoneNumber id="number2" label="Num.téléphone 2(facultatif)" placeholder="671323646"/>
                    <h1 className="localisation">Localisation</h1>
                    <Input name="localisation" label="Langue" placeholder="Francais" id="localisation"/>
                    </form>
                </div>
            );
    }
   
}

export default Compte;