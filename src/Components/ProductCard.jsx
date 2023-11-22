const ProductCard = () => {
  return (
    <div className="flex sm:block shadow-lg h-36 sm:h-fit">
      <div className="max-sm:rounded-tl-lg max-sm:rounded-bl-lg bg-slate-200 sm:rounded-tl-lg sm:rounded-t-lg flex justify-center items-center w-2/5 sm:w-full h-36">Product</div>
      <div className="max-sm:rounded-t-lg max-sm:rounded-bl-lg bg-slate-50 sm:rounded-bl-lg sm:b-lg py-1.5 px-3 w-3/5 sm:w-full max-sm:flex justify-start items-center">
        <div>
          <p className="text-sm font-medium text-slate-500">Product name</p>
          <p className="text-base text-slate-800">$200</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;