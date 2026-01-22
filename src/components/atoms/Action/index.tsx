import * as React from 'react';
import classNames from 'classnames';
import { iconMap } from '../../svgs';
import Link from '../Link';

export default function Action(props) {
    const { elementId, className, label, altText, url, showIcon, icon, iconPosition = 'right', style = 'primary', onClick } = props;
    const IconComponent = icon ? iconMap[icon] : null;
    const fieldPath = props['data-sb-field-path'];
    const type = props.__metadata?.modelName;

    const sharedClassName = classNames(
        'sb-component',
        'sb-component-block',
        type === 'Button' ? 'sb-component-button' : 'sb-component-link',
        {
            'sb-component-button-primary': type === 'Button' && style === 'primary',
            'sb-component-button-secondary': type === 'Button' && style === 'secondary',
            'sb-component-link-primary': type === 'Link' && style === 'primary',
            'sb-component-link-secondary': type === 'Link' && style === 'secondary'
        },
        className
    );

    const content = (
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
    );

    // Use <button> for actions without URL, <Link> for navigation
    if (!url) {
        const buttonAnnotations = fieldPath
            ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.altText#@aria-label`, `${fieldPath}.elementId#@id`].join(' ').trim() }
            : {};
        return (
            <button
                type="button"
                id={elementId}
                aria-label={altText}
                className={sharedClassName}
                onClick={onClick}
                {...buttonAnnotations}
            >
                {content}
            </button>
        );
    }

    const linkAnnotations = fieldPath
        ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.url#@href`, `${fieldPath}.altText#@aria-label`, `${fieldPath}.elementId#@id`].join(' ').trim() }
        : {};

    return (
        <Link
            href={url}
            aria-label={altText}
            id={elementId}
            className={sharedClassName}
            {...linkAnnotations}
        >
            {content}
        </Link>
    );
}
