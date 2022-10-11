export function FormAction({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
  loading = false,
}) {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action}
          className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
            loading ? "!bg-[##dddddd]" : ""
          } bg-[#272945] dark:bg-[#00c5ff] hover:bg-[#272945/70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10`}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
