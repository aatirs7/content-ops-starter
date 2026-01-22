import * as React from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
    const formRef = React.useRef<HTMLFormElement>(null);
    const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const { fields = [], elementId, submitButton, className, styles = {}, 'data-sb-field-path': fieldPath } = props;

    if (fields.length === 0) {
        return null;
    }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        setStatus('submitting');

        try {
            const data = new FormData(formRef.current!);
            // Simulate form submission - replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 500));
            setStatus('success');
            formRef.current?.reset();
        } catch (error) {
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div
                className={classNames('sb-component', 'sb-component-block', 'sb-component-form-block', className)}
                role="status"
                aria-live="polite"
            >
                <div className="text-center py-8">
                    <p className="text-lg font-medium text-primary">Thank you for your submission!</p>
                    <p className="mt-2 text-sm opacity-75">We'll be in touch soon.</p>
                    <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="mt-4 text-sm underline hover:no-underline"
                    >
                        Submit another response
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-form-block',
                className,
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
                    ? mapStyles({
                          borderWidth: styles?.self?.borderWidth,
                          borderStyle: styles?.self?.borderStyle,
                          borderColor: styles?.self?.borderColor ?? 'border-primary'
                      })
                    : undefined,
                styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
            )}
            name={elementId}
            id={elementId}
            onSubmit={handleSubmit}
            ref={formRef}
            data-sb-field-path= {fieldPath}
        >
            <div
                className={classNames('w-full', 'flex', 'flex-wrap', 'gap-8', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}
                {...(fieldPath && { 'data-sb-field-path': '.fields' })}
            >
                <input type="hidden" name="form-name" value={elementId} />
                {fields.map((field, index) => {
                    const modelName = field.__metadata.modelName;
                    if (!modelName) {
                        throw new Error(`form field does not have the 'modelName' property`);
                    }
                    const FormControl = getComponent(modelName);
                    if (!FormControl) {
                        throw new Error(`no component matching the form field model name: ${modelName}`);
                    }
                    return <FormControl key={index} {...field} {...(fieldPath && { 'data-sb-field-path': `.${index}` })} />;
                })}
            </div>
            {submitButton && (
                <div className={classNames('mt-8', 'flex', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}>
                    <SubmitButtonFormControl
                        {...submitButton}
                        isSubmitting={status === 'submitting'}
                        {...(fieldPath && { 'data-sb-field-path': '.submitButton' })}
                    />
                </div>
            )}
            {status === 'error' && (
                <p className="mt-4 text-sm text-red-600" role="alert">
                    Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}
