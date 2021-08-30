const NewForYou = () => {
  return (
    <div className="flex xs:px-4 sm:px-14 items-center py-5 xs:justify-between">
      <p className="flex-none text-off-white xs:text-xs sm:text-md font-bold ">
        NEW FOR YOU
      </p>
      <hr className="flex-grow text-bright mx-2 xs:hidden sm:flex" />
      <p className="flex-none text-bright tracking-wide flex justify-end xs: text-xs sm:text-sm">
        Read Together
      </p>
    </div>
  );
};

export default NewForYou;
