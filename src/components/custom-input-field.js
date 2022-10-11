const fixedInputClass =
  "dark:bg-[#E7F0FF] rounded-md appearance-none relative block w-full px-3 py-2 border dark:border-[##363740] border-gray-300 dark:placeholder-black placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#272945] focus:border-[#272945] focus:z-10 sm:text-sm ";

export function CustomInputField({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
}) {
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  );
}
