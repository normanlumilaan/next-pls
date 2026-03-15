/**
 * A button component
 * @param {Button} props - The props for the button component
 * @param {string} props.label - The label for the button
 * @param {() => void} props.onClick - The function to call when the button is clicked
 * @param {React.HTMLAttributes<HTMLButtonElement>} rest - The rest of the props for the button component
 * @returns {JSX.Element} The button component
 */
export interface Button {
  label: string
  onClick: () => void
}

export default function Button({ label, onClick, ...rest }: Button) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="bg-blue-500 text-white p-2 rounded-md"
      {...rest}
    >
      <span>Click me</span>
    </button>
  )
}
