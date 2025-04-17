// create asyncHandler function to handle async errors

export const asyncHandler = (fn) => {
   return async (req, res, next) => {
      try {
         await fn(req, res, next);
      } catch (error) {
         next(error);
      }
   };
};
