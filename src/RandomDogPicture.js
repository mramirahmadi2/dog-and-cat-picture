import useFetch from "./useFetch";
import PictureRandom from "./PictureRandom";

const RandomDogPicture = () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const { error, isPending, data: blogs, refetch } = useFetch(url);

  return (
    <div className="App">
      <h2>Random Picture Dog</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <div>
          <PictureRandom blogs={blogs} />
        </div>
      )}
      <button onClick={refetch}>Another Picture</button>
    </div>
  );
};

export default RandomDogPicture;
