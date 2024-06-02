const Reviews = async () => {
  // NOTE: Intentionally rendering this component by 4 sec.
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return(
    <>
      <div>Reviews</div>
    </>
  )
};

export default Reviews

