interface CurrencyInputProps {
    label: string;
    formKey: string;
    formValue: number;
    uniqueId: string;
    handleChange: React.ChangeEventHandler;
}

function CurrencyInput({
    label,
    formKey,
    formValue,
    uniqueId,
    handleChange,
}: CurrencyInputProps) {
    return (
        <div className="flex lg:w-2/3">
            <label className="font-semibold flex-1 m-auto" htmlFor={formKey}>
                {label}:
            </label>
            <input
                className="rounded-lg bg-white flex-3 p-1 m-1"
                type="number"
                min="0"
                step="0.01"
                name={formKey}
                id={`${uniqueId}-${formKey}`}
                value={formValue.toFixed(2)}
                onChange={handleChange}
            />
        </div>
    );
}

export default CurrencyInput;
