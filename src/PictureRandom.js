const PictureRandom = ({blogs}) => {
  let picture;
  let animal;
  if(blogs.url === undefined ){
    picture = blogs.message
    animal = 'dog'
  }else{
    picture = blogs.url
    animal = 'cat'
  }
  console.log('picture =',picture,'blogs.message',blogs.message)
  return (
    <div className="PictureCat">
        <div  >
          <img src={`${picture}`} alt={`${animal}`}/>
        </div>     
    </div>
  );
};

export default PictureRandom;
