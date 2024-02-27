// // import React from 'react';
// // import './_addCarForm.module.scss'

// // const AddCarForm = () => {
// //   return (
// //     <div>
// //       <form action="">
// //       <input type="text" placeholder=''/>
// //       <input type="text" placeholder=''/>
// //       <input type="text" placeholder=''/>
// //       <button>Confirm</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default AddCarForm;

// // Modal.js

// import React, { useState } from 'react';
// import './Modal.css'; // Создайте файл стилей для модального окна

// const AddCarForm = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     // Добавьте другие поля формы по необходимости
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Обработка отправки формы
//     console.log('Form submitted:', formData);
//     // Дополнительная логика обработки данных формы
//     // ...
//     onClose(); // Закрываем модальное окно после отправки формы
//   };

//   return (
//     <div className={`modal ${isOpen ? 'open' : ''}`}>
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
          
//           />
         
//           {/* Добавьте другие поля формы по необходимости */}
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCarForm;
