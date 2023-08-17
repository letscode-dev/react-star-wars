export interface IPropsFieldInput {
    name: string;
	value: string | undefined;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const FieldInput: React.FC<IPropsFieldInput> = ({ name, value, handleChange }) => (
    <input
        value={value}
        onChange={(event) => handleChange(event, name)}
    />
)

export default FieldInput;
