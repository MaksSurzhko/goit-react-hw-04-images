//  


// import React, { useState, useEffect } from 'react';
// import SearchBar from '../components/searchbar/searchbar';
// import ImageGallery from './imageGallery/imageGallery';
// import Button from '../components/button/button';
// import Loader from './loader/loader';
// import Modal from './modal/modal';

// import mcss from '../components/modal/mcss.module.css';

// const App = () => {
//   const [searchName, setSearchName] = useState('');
//   const [photos, setPhotos] = useState([]);
//   const [images, setImages] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleFormSubmit = (searchName) => {
//     if (searchName.trim() === '') {
//       alert('Please write something');
//       return;
//     }

//     setSearchName(searchName);
//     setImages([]);
//     setCurrentPage(1);
//   };

//   useEffect(() => {
//     fetchImages(searchName, currentPage);
//   }, [searchName, currentPage]);

//   const fetchImages = (searchName, page) => {
//     setLoading(true);

//     fetch(
//       `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.hits.length === 0) {
//           alert('Error! Cannot find images');
//         }

//         if (page === 1) {
//           setImages(data.hits);
//         } else {
//           setImages((prevImages) => [...prevImages, ...data.hits]);
//         }
//         setCurrentPage(page);
//       })
//       .catch((error) => {
//         alert('Images not found' + error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleLoadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.keyCode === 27) {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       <SearchBar onSubmit={handleFormSubmit} />
//       {images.length > 0 && (
//         <ImageGallery images={images} openModal={openModal} />
//       )}

//       {images.length > 0 && images.length % 12 === 0 && (
//         <Button onLoadMore={handleLoadMore} />
//       )}

//       <Loader loading={loading} />

//       {modalOpen && (
//         <Modal active={modalOpen} setActive={closeModal}>
//           <img
//             className={mcss.img}
//             src={selectedImage.largeImageURL}
//             alt={selectedImage.tags}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect } from 'react';
// import SearchBar from '../components/searchbar/searchbar';
// import ImageGallery from './imageGallery/imageGallery';
// import Button from '../components/button/button';
// import Loader from './loader/loader';
// import Modal from './modal/modal';

// import mcss from '../components/modal/mcss.module.css';

// const App = () => {
//   const [searchName, setSearchName] = useState('');
//   const [photos, setPhotos] = useState([]);
//   const [images, setImages] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   const handleFormSubmit = (searchName) => {
//     if (searchName.trim() === '') {
//       alert('Please write something');
//       return;
//     }

//     setSearchName(searchName);
//     setIsFormSubmitted(true);
//     setImages([]);
//     setCurrentPage(1);
//   };

//   useEffect(() => {
//     if (isFormSubmitted) {
//       fetchImages(searchName, currentPage);
//       setIsFormSubmitted(false);
//     }
//   }, [isFormSubmitted, searchName, currentPage]);

//   const fetchImages = (searchName, page) => {
//     setLoading(true);

//     fetch(
//       `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.hits.length === 0) {
//           alert('Error! Cannot find images');
//         }

//         if (page === 1) {
//           setImages(data.hits);
//         } else {
//           setImages((prevImages) => [...prevImages, ...data.hits]);
//         }
//         setCurrentPage(page);
//       })
//       .catch((error) => {
//         alert('Images not found' + error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleLoadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.keyCode === 27) {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       <SearchBar onSubmit={handleFormSubmit} />
//       {images.length > 0 && (
//         <ImageGallery images={images} openModal={openModal} />
//       )}

//       {images.length > 0 && images.length % 12 === 0 && (
//         <Button onLoadMore={handleLoadMore} />
//       )}

//       <Loader loading={loading} />

//       {modalOpen && (
//         <Modal active={modalOpen} setActive={closeModal}>
//           <img
//             className={mcss.img}
//             src={selectedImage.largeImageURL}
//             alt={selectedImage.tags}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default App;