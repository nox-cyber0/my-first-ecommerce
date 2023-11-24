const ProductCard = () => {
  return (
    <div className="rounded-lg shadow-md shadow-slate-300 dark:shadow-slate-900 flex sm:block">
      <div className="flex justify-center items-center rounded-tl-lg max-sm:rounded-bl-lg sm:rounded-t-lg bg-slate-500 w-2/5 sm:w-full h-32 sm:h-40">
        <p className="text-slate-800 font-medium">Product</p>
      </div>
      <div className="flex justify-start items-center py-1.5 px-3 rounded-br-lg max-sm:rounded-tr-lg sm:rounded-b-lg w-3/5 sm:w-full sm:block max-sm:h-32 flex-wrap dark:bg-slate-700">
        <div>
          <h4 className="text-slate-400 font-medium">Product X</h4>
          <p className="text-slate-700 dark:text-slate-50">$200</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;