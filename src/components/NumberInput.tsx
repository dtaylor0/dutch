interface NumberInputProps {
    label: string;
    formKey: string;
    formValue: number;
    uniqueId: string;
    handleChange: React.ChangeEventHandler;
}

function NumberInput({
    label,
    formKey,
    formValue,
    uniqueId,
    handleChange,
}: NumberInputProps) {
    return (
        <div className="flex lg:w-2/3">
            <label className="font-semibold flex-1 m-auto" htmlFor={formKey}>
                {label}:
            </label>
            <input
                className="rounded-lg bg-white flex-3 p-1 m-1"
                type="number"
                min="0"
                step="1"
                name={formKey}
                id={`${uniqueId}-${formKey}`}
                value={formValue}
                onChange={handleChange}
            />
        </div>
    );
}

export default NumberInput;
