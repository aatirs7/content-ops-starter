import * as React from 'react';
import classNames from 'classnames';

import { iconMap } from '../../../svgs';

export default function SubmitButtonFormControl(props) {
    const { elementId, className, label, showIcon, icon, iconPosition = 'right', style = 'primary', isSubmitting = false } = props;
    const IconComponent = icon ? iconMap[icon] : null;
    const fieldPath = props['data-sb-field-path'];
    const annotations = fieldPath ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.elementId#@id`].join(' ').trim() } : {};

    return (
        <button
            type="submit"
            id={elementId}
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-button',
                {
                    'sb-component-button-primary': style === 'primary',
                    'sb-component-button-secondary': style === 'secondary',
                    'opacity-75 cursor-wait': isSubmitting
                },
                className
            )}
            {...annotations}
        >
            {isSubmitting ? (
                <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending…
                </span>
            ) : (
                <>
                    {label && <span {...(fieldPath && { 'data-sb-field-path': '.label' })}>{label}</span>}
                    {showIcon && IconComponent && (
                        <IconComponent
                            className={classNames('shrink-0', 'fill-current', 'w-[1.25em]', 'h-[1.25em]', {
                                'order-first': iconPosition === 'left',
                                'mr-[0.5em]': label && iconPosition === 'left',
                                'ml-[0.5em]': label && iconPosition === 'right'
                            })}
                            {...(fieldPath && { 'data-sb-field-path': '.icon' })}
                        />
                    )}
                </>
            )}
        </button>
    );
}
