// import React, { useContext, useState } from 'react';
// import { Link, useNavigate} from 'react-router-dom';
// import { ModeContext } from '../context/ModeContext';
// import { LangContext } from '../context/LangContext';
// import { useCart } from 'react-use-cart';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

// const Header = () => {
//   const [query, setQuery] = useState('');
//   const konsepts = useSelector(p => p);
//   const [open, setOpen] = useState(false);
//   const [mode, setMode] = useContext(ModeContext);
//   const [lang, setLang] = useContext(LangContext);
//   const [isVisible, setIsVisible] = useState(true);
// const navigate =useNavigate();
//   const { totalItems } = useCart();
//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };
//   const handleExit=(e)=>{
//    localStorage.removeItem('active',false);
//    window.location.reload();
//    navigate('/')
// e.preventDefault()

//   };
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   return (

//     <div className="">
      
//      <>
//      <div className="header-one container">
//      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom">
//        <div className="col-md-3 mb-2 mb-md-0 w-100 d-flex justify-content-between  align-items-center" >
//          <div className="d-flex justify-content-between  align-items-center ">
//            <a href="/" style={{ fontSize: "14px", color: '#8B8B8B', textDecoration: 'none' }}>
//              {lang === 'az' ? '59$-dan yuxarı sifarişlər üçün pulsuz çatdırılma!' : 'Free shipping for orders over $59!'}</a>
//          </div>
//          <div className="d-flex  align-items-center ">
//            <a href="/" className='text-decoration-none' style={{ fontSize: "13px", margin: '0 12px', color: '#8B8B8B' }}>
//              {lang === 'az' ? 'Tez-tez verilən suallar' : ' FAQ'}
//            </a>
//            <a href="/" className='text-decoration-none' style={{ fontSize: "13px", color: '#8B8B8B' }}>

//              {lang === 'az' ? 'ƏLAQƏ' : 'CONTACT'}</a>
//          </div>
//        </div>
//      </header>
//      <div className="konsept d-flex align-items-center justify-content-between mb-md-4 ">
//        <div className="search  align-items-center justify-content-between " >
//          <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
//            <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
//              <input type="search" className="form-control" placeholder={lang==="az" ? "Axtar..." :"Search..."} aria-label="Search" />
//            </form>
//          </button>
//          <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
//            <div className="modal-dialog">
//              <div className="modal-content">
//                <div className="modal-header">
//                  <h1 className="modal-title fs-5" id="exampleModalLabel">{lang==="az" ? "Axtar" :"Search"}</h1>
//                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                </div>
//                <div className="modal-body">
//                  <div className="input-group mb-3" >
//                    <input onChange={e => setQuery(e.target.value)} type="text" className="form-control" placeholder={lang==="az" ? "Axtar..." :"Search..."}aria-label="Recipient's username" aria-describedby="button-addon2" />
//                    <button className="btn btn-outline-secondary" id="button-addon2" onClick={toggleVisibility} >{lang==="az" ? "Axtar" :"Search"}</button>
//                  </div>
//                  <ul className="list-group" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
//           setOpen(!open)
//         }}>
//                   {konsepts.filter(p => p.name.toLowerCase().includes(query)).map(item => (
//                     <Link to={/store/${item.id}} className="list-group-item d-flex justify-content-between w-100 list-group-item-action" key={item.id} onClick={toggleVisibility} >{item.name}<img width={50} src={item.image} alt='' /></Link>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Link to={'/'} className="logo">
//         <img src="https:konsept.qodeinteractive.com/wp-content/uploads/2020/07/logo_mainpng.png" width={165} alt="logo" />
//       </Link>
//       <div className="icons d-flex align-items-center justify-content-between">
 
//    {localStorage.getItem('active') === 'nigar.baxshiyeva@gmail.com' ?
//    <>
//    <div className='btn'>{localStorage.getItem("name")}</div>
//    <Link to={'/'} className='log-out btn btn-outline-warning mx-1' onClick={()=>handleExit()}>{lang==="az" ? "Çıxış" : "Log Out"} </Link>
//    </> 
//    :
//    localStorage.getItem('active') === 'nigar.baxshiyeva03@gmail.com'?
//    <>
//      <Link to={'/admin'} className='btn'>Admin</Link>
//      <Link to={'/'} className='log-out btn btn-outline-warning mx-1' onClick={()=>handleExit()}>{lang==="az" ? "Çıxış" : "Log Out"}</Link>
//    </>
//    :
//    <Link to={'/login'} className="btn btn-login">{lang==="az" ? "Daxil ol" : "Log in"}</Link>  
//           }
        
//         <Link to='/cart' type="button" className="shop-btn btn btn-dark position-relative">
//           <i className=" fa-solid fa-cart-shopping" ></i>
//           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
//             {totalItems}
//             <span className="visually-hidden">unread messages</span>
//           </span>
//         </Link>
//         <Link to={'/wishlist'} className="fa-regular fa-heart" style={{textDecoration:"none",color:"black"}}></Link>
//         <button className='btn btn-dark' onClick={() => {
//           mode === 'light' ? setMode('dark') : setMode('light');
//           mode === 'light' ? localStorage.setItem('mode', 'dark') : localStorage.setItem('mode', 'light');
//         }}> {mode === 'light' ? 'Dark' : 'Light'}</button>
//         <button className='btn btn-dark ms-1' onClick={() => {
//           lang === 'en' ? setLang('az') : setLang('en');
//           lang === 'en' ? localStorage.setItem('lang', 'az') : localStorage.setItem('lang', 'en');
//         }}>{lang === 'en' ? "Az" : 'En'}</button>
//         <div className="menu" onClick={() => {
//           setOpen(!open)
//         }}>
//           <i className="fa-solid fa-bars"></i>
//         </div>
//       </div>
//     </div>
//     <div className='menu-bar'>
//       <ul className={open ? 'open' : ""} >
//         <li><Link to="/" className="nav-link px-4 " style={{ fontSize: '13px', fontFamily: "Josefin Sans" }} onClick={() => {
//           setOpen(!open)
//         }}>{lang === 'az' ? 'ANA SƏHİFƏ' : 'HOME'}</Link></li>
//         <li className="nav-item dropdown mx-3">
//           <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '13px', fontFamily: "Josefin Sans" }} >
//             {lang === 'az' ? 'SƏHİFƏLƏR' : 'PAGES'}
//           </a>
//           <ul className="dropdown-menu" onClick={() => {
//           setOpen(!open)
//         }}>
//             <li><Link className="dropdown-item" to="/aboutus">{lang === 'az' ? 'Bizim haqqımızda' : 'About Us'}</Link></li>
//             <li><Link className="dropdown-item" to="/aboutme">{lang === 'az' ? 'Mənim haqqımda' : 'About Me'}</Link></li>
//             <li><Link className="dropdown-item" to="/ourteam">{lang === 'az' ? 'Bizim komanda' : 'Our Team'}</Link></li>
//             <li><Link className="dropdown-item" to="/pricingplans">{lang === 'az' ? 'Qiymət Planları' : 'Pricing Plans'}</Link></li>
//             <li><Link className="dropdown-item" to="/ourclients">{lang === 'az' ? 'Müştərilərimiz' : 'Our Clients'}</Link></li>
//             <li><Link className="dropdown-item" to="/getintouch">{lang === 'az' ? 'Əlaqədə olmaq' : 'Get in Touch'}</Link></li>
//             <li><Link className="dropdown-item" to="/fagpage">{lang === 'az' ? 'Tez-tez verilən suallar səhifəsi' : 'FAQ Page'}</Link></li>
//           </ul>
//         </li>
//         <li className="nav-item dropdown mx-3" >
//           <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '13px', fontFamily: "Josefin Sans" }}>
//             {lang === 'az' ? 'ALIŞ-VERİŞ' : 'SHOP'}
//           </a>
//           <ul className="dropdown-menu" onClick={() => {
//           setOpen(!open)
//         }}>
//             <li><Link  className="dropdown-item" to={'/cart'}>{lang === 'az' ? 'Səbət' : 'Cart '}</Link></li>
//             <li><Link className="dropdown-item" to={'/wishlist'}> {lang === 'az' ? 'İstək siyahısı' : 'Wishlist'}</Link></li>
//             <li><Link className="dropdown-item" to={'/checkout'}>{lang === 'az' ? 'Yoxlamaq' : 'Checkout '}</Link></li>
//           </ul>
//         </li>
//         <li onClick={() => {
//           setOpen(!open)
//         }}><Link to="/store" className="nav-link px-4 " style={{ fontSize: '13px', fontFamily: "Josefin Sans" }}>{lang === 'az' ? 'MAĞAZA' : 'STORE'}</Link></li>
//         <li onClick={() => {
//           setOpen(!open)
//         }}><Link className="nav-link px-4 " to="/portfolio" style={{ fontSize: '13px', fontFamily: "Josefin Sans" }}>{lang === 'az' ? 'PORTFOLIO' : 'PORTFOLIO'} </Link></li>
//         <li onClick={() => {
//           setOpen(!open)
//         }}><Link className="nav-link px-4 " to="/getkonsept" style={{ fontSize: '13px', fontFamily: "Josefin Sans" }}> {lang === 'az' ? 'BLOQ' : 'BLOG'}</Link></li>
//         <li className="heart-icon" onClick={() => {
//           setOpen(!open)
//         }}><i className="bar-heart fa-regular fa-heart"></i></li>
//       <li className='user-icon' onClick={() => {
//           setOpen(!open)
//         }}>  {localStorage.getItem('active') === 'nigar.baxshiyeva.gmail.com' ? "User" : <Link to={'/login'} className="bar-user fa-regular fa-user text-dark"></Link>}</li>
//         <li className='bar-mood'> <button className='mood-icon btn btn-dark' onClick={() => {
//           mode === 'light' ? setMode('dark') : setMode('light');
//           mode === 'light' ? localStorage.setItem('mode', 'dark') : localStorage.setItem('mode', 'light');
//         }}> {mode === 'light' ? 'Dark' : 'Light'}</button></li>
//         <li className='bar-lang'><button className='lang-icon btn btn-dark ms-1 my-2' onClick={() => {
//           lang === 'en' ? setLang('az') : setLang('en');
//           lang === 'en' ? localStorage.setItem('lang', 'az') : localStorage.setItem('lang', 'en');
//         }}>{lang === 'en' ? "Az" : 'En'}</button></li>
//         <li className='search-icon'><button type="button" className="bar-search btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
//           <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
//             <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
//           </form>
//         </button>
//         </li>
//       </ul>
//     </div>
//   </div>
//      </>
//     </div>
//   );

// }


// export default Header;
