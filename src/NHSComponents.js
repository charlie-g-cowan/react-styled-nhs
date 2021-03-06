import React from "react";
// import 'nhsuk-frontend/dist/nhsuk.min.js';
import 'nhsuk-frontend/packages/nhsuk.scss';

export function NHSButton(props) {
    const className = props.className + " nhsuk-button";
    return <button className={className}  {...props} />;
}

export function NHSButtonLink(props) {
    const className = props.className + " nhsuk-button";
    return <a href="/" role="button" draggable="false" className={className} {...props} />
}

export function NHSButtonSecondary(props) {
    const className = props.className + " nhsuk-button nhsuk-button--secondary";
    return <button className={className}  {...props} />;
}

export function NHSFormLabel(props) {
    return <label className='nhsuk-label' {...props} />;
}

export function NHSFormHint(props) {
    return <span className="nhsuk-hint" {...props} />;
}

export function NHSFormControl(props) {
    if (props.error) {
        return <input className='nhsuk-input nhsuk-input--error' {...props} />;
    } else {
        return <input className='nhsuk-input' {...props} />;
    }
}

export function NHSFormGroup(props) {
    if (props.error) {
        return <div className="nhsuk-form-group nhsuk-form-group--error" {...props} />;
    } else {
        return <div className='nhsuk-form-group' {...props} />;
    }
}

export function NHSFormError(props) {
    return <span id="input-with-error-message-error" className="nhsuk-error-message" {...props} />;
}

export function NHSTextArea(props) {
    return <textarea className='nhsuk-textarea' {...props} />;
}
