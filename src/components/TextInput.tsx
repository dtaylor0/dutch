interface TextInputProps {
    label: string;
    formKey: string;
    formValue: string;
    uniqueId: string;
    handleChange: React.ChangeEventHandler;
}

function TextInput({
    label,
    formKey,
    formValue,
    uniqueId,
    handleChange,
}: TextInputProps) {
    return (
        <div className="flex lg:w-2/3">
            <label className="font-semibold flex-1 m-auto" htmlFor={formKey}>
                {label}:
            </label>
            <input
                className="rounded-lg bg-white flex-3 p-1 m-1"
                type="text"
                name={formKey}
                id={`${uniqueId}-${formKey}`}
                value={formValue}
                onChange={handleChange}
            />
        </div>
    );
}

export default TextInput;
