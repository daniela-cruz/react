import React, { createContext, useContext, useEffect, useState} from 'react'
// // import NewBookForm from './components/BookForm';

// function App() {
//   // /** A form updated by the user's country and cityL */
//   // const [city, setCity] = useState('');
//   // const [country, setCountry] = useState('');
//   // const handleCityChange = (event) => { setCity(event.target.value)}
//   // const handleCountryChange = (event) => { setCountry(event.target.value)}

//   // return (
//   //     <div>
//   //       <form>
//   //         <input
//   //           type="text"
//   //           placeholder="Your city here..."  
//   //           value={city}
//   //           onChange={handleCityChange}
//   //         />
//   //         <input
//   //           type="text"
//   //           placeholder="Your country here..."  
//   //           value={country}
//   //           onChange={handleCountryChange}
//   //         />
//   //       </form>
//   //       <p>You live in the city of: {city} and the country of: {country}.</p>
//   //     </div>
//   // )

//   const [userText, setText] = useState('');

//   useEffect(() => {
//     window.addEventListener('keydown', handleUserKeypress)
//   })

//   return(
//     <div>
//       Something here...
//       <blockquote>
//         { userText }
//       </blockquote>
//     </div>
//   )
// }


const images = [
  'https://grist.org/wp-content/uploads/2018/12/gettyimages-136599283.jpg?resize=1600,900', 'https://www.isaaa.org/kc/cropbiotechupdate/files/images/2019-07-31-VRTomatoes.jpg', 'https://previews.123rf.com/images/paylessimages/paylessimages1502/paylessimages150233245/40325605-potato-field.jpg',
];

/* My code attempts: */
//
function App() {
  
  const GalleryContext = createContext(); /** */
  const gallery = useContext(GalleryContext); /** */
  const [imgIndex, setImgIndex] = useState(0); /** */ 


  const Slide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  
    return <div className='image-slide' style={styles}></div>;
  };
  
  const Arrow = ({ direction, glyph, click }) => (
    <div className={`slide-arrow ${direction}`} onClick={click}>
      {glyph}
    </div>
  );
  
  const RemoveImage = ({}) => (
    <div className='remove-image-container'>
      <button onClick={handleDeleteEvent}>Remove Image From Array</button>
    </div>
  );
  /** */
  function handleDeleteEvent(clickEvent) {
    if (clickEvent.target.imgIndex > 0) {

    }
  }
  
  const AddNewImage = ({}) => (
    <div className='input-container'>
      <input type='text'  />
      <button>Add To Images Array</button>
    </div>
  );
  
  const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
    const previousSlide = () => {
      if (currentImageIndex >= 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
      /**Make carousel infinite:  */
      else{
        /** make index go to last index */
      }
    };
  
    const nextSlide = () => {
      if (currentImageIndex < images.length) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };
  
    return (
      <div className='carousel'>
        <Arrow direction='left' glyph='&#9664;' click={previousSlide} />
        <Slide url={images[currentImageIndex]} />
        <Arrow direction='right' glyph='&#9654;' click={nextSlide} />
        <AddNewImage />
        <RemoveImage />
      </div>
    );
  };

  return(
    <Carousel />
  )
}





// ReactDOM.render(<Carousel />, document.getElementById('container'));
export default App;
