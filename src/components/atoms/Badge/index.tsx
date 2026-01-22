import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function Badge(props) {
    const { label, url, color = 'text-primary', styles, className } = props;
    const fieldPath = props['data-sb-field-path'];
    if (!label && !url) {
        return null;
    }

    return (
        <div
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-badge',
                color,
                className,
                styles?.self ? mapStyles(styles?.self) : undefined
            )}
            data-sb-field-path={fieldPath}
        >
            {url ? (
                <img src={url} alt={label || 'Badge'} className="h-6" {...(fieldPath && { 'data-sb-field-path': '.url' })} />
            ) : (
                <span className="tracking-wider uppercase" {...(fieldPath && { 'data-sb-field-path': '.label' })}>
                    {label}
                </span>
            )}
        </div>
    );
}
