import React from 'react';
import {ReactComponent as LogoIcon} from './sources/icons/Logo.svg';
import './App.css';
import { ExhausterCard } from './components/ExhausterCard/ExhausterCard';
import { Mainpage } from './router/mainpage/Mainpage';

function App() {
  // const bearingExample = 
  const obj = [
    {
      name: "Агломашина №1",
      exhausters: [
        {exhausterName: 'Эксгаустер №124', exhausterStatus: 'working', rotorName: "Ротор №202", rotorReplacementDate: "22/05/2022", rotorWorkingDate: "6 сут", rotorEstimatedFailureDate: "25 сут", bearingsInfo: [{bearingName: "№1 п-к", bearingTemperature: 40, bearingVibration: 2323}, {bearingName: "№2 п-к", bearingTemperature: -11, bearingVibration: 1356}, {bearingName: "№3 п-к", bearingTemperature: 32, bearingVibration: 9011}, {bearingName: "№4 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№5 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№6 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№7 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№8 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№9 п-к", bearingTemperature: 10, bearingVibration: 883}]},
        {exhausterName: 'Эксгаустер №124', exhausterStatus: 'working', rotorName: "Ротор №202", rotorReplacementDate: "22/05/2022", rotorWorkingDate: "6 сут", rotorEstimatedFailureDate: "25 сут", bearingsInfo: [{bearingName: "№1 п-к", bearingTemperature: 40, bearingVibration: 2323}, {bearingName: "№2 п-к", bearingTemperature: -11, bearingVibration: 1356}, {bearingName: "№3 п-к", bearingTemperature: 32, bearingVibration: 9011}, {bearingName: "№4 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№5 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№6 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№7 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№8 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№9 п-к", bearingTemperature: 10, bearingVibration: 883}]},
        
      ]
    },
    {
      name: "Агломашина №2",
      exhausters: [
        {exhausterName: 'Эксгаустер №124', exhausterStatus: 'working', rotorName: "Ротор №202", rotorReplacementDate: "22/05/2022", rotorWorkingDate: "6 сут", rotorEstimatedFailureDate: "25 сут", bearingsInfo: [{bearingName: "№1 п-к", bearingTemperature: 40, bearingVibration: 2323}, {bearingName: "№2 п-к", bearingTemperature: -11, bearingVibration: 1356}, {bearingName: "№3 п-к", bearingTemperature: 32, bearingVibration: 9011}, {bearingName: "№4 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№5 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№6 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№7 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№8 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№9 п-к", bearingTemperature: 10, bearingVibration: 883}]},
        {exhausterName: 'Эксгаустер №124', exhausterStatus: 'working', rotorName: "Ротор №202", rotorReplacementDate: "22/05/2022", rotorWorkingDate: "6 сут", rotorEstimatedFailureDate: "25 сут", bearingsInfo: [{bearingName: "№1 п-к", bearingTemperature: 40, bearingVibration: 2323}, {bearingName: "№2 п-к", bearingTemperature: -11, bearingVibration: 1356}, {bearingName: "№3 п-к", bearingTemperature: 32, bearingVibration: 9011}, {bearingName: "№4 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№5 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№6 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№7 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№8 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№9 п-к", bearingTemperature: 10, bearingVibration: 883}]},
        
      ]
    },
    {
      name: "Агломашина №3",
      exhausters: [
        {exhausterName: 'Эксгаустер №124', exhausterStatus: 'working', rotorName: "Ротор №202", rotorReplacementDate: "22/05/2022", rotorWorkingDate: "6 сут", rotorEstimatedFailureDate: "25 сут", bearingsInfo: [{bearingName: "№1 п-к", bearingTemperature: 40, bearingVibration: 2323}, {bearingName: "№2 п-к", bearingTemperature: -11, bearingVibration: 1356}, {bearingName: "№3 п-к", bearingTemperature: 32, bearingVibration: 9011}, {bearingName: "№4 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№5 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№6 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№7 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№8 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№9 п-к", bearingTemperature: 10, bearingVibration: 883}]},
        {exhausterName: 'Эксгаустер №124', exhausterStatus: 'working', rotorName: "Ротор №202", rotorReplacementDate: "22/05/2022", rotorWorkingDate: "6 сут", rotorEstimatedFailureDate: "25 сут", bearingsInfo: [{bearingName: "№1 п-к", bearingTemperature: 40, bearingVibration: 2323}, {bearingName: "№2 п-к", bearingTemperature: -11, bearingVibration: 1356}, {bearingName: "№3 п-к", bearingTemperature: 32, bearingVibration: 9011}, {bearingName: "№4 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№5 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№6 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№7 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№8 п-к", bearingTemperature: 10, bearingVibration: 883}, {bearingName: "№9 п-к", bearingTemperature: 10, bearingVibration: 883}]},
        
      ]
    },
  ]
    return (
      <div className="app app_container">
        <div className='app_wrapper'>

          <header className='app_header'>
            <nav className='main_navigation'>
              <button className='burger_menu_btn'><svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H1C0.447715 8 0 7.55228 0 7ZM0 13C0 12.4477 0.447715 12 1 12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H1C0.447715 14 0 13.5523 0 13Z" fill="white"/></svg></button>
              <div className='header_logo'><LogoIcon /></div>
              <h1 className='main_headline headerOne_font'>Прогнозная аналитика эксгаустеров</h1>
              <button className='showNotificationsLog_btn'><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 0.666668C7.36819 0.666668 7.66667 0.965145 7.66667 1.33333V2.04555C8.3552 2.13859 9.18399 2.39333 9.91661 2.97942C10.937 3.79572 11.6668 5.17095 11.6668 7.33333C11.6668 9.04312 12.1893 10.3959 13.1376 11.2507C13.4154 11.501 13.4522 11.861 13.358 12.1274C13.2624 12.3977 12.9952 12.6667 12.6001 12.6667H1.40014C1.00505 12.6667 0.737882 12.3977 0.642291 12.1274C0.548097 11.861 0.584886 11.501 0.862636 11.2507C1.81099 10.3959 2.33348 9.04312 2.33348 7.33333C2.33348 5.17095 3.06331 3.79572 4.08368 2.97942C4.81619 2.39341 5.64485 2.13866 6.33333 2.04559V1.33333C6.33333 0.965145 6.63181 0.666668 7 0.666668ZM4.91661 4.02058C4.27031 4.53762 3.66681 5.49572 3.66681 7.33333C3.66681 8.84576 3.30967 10.2362 2.55158 11.3333H11.4487C10.6906 10.2362 10.3335 8.84576 10.3335 7.33333C10.3335 5.49572 9.72998 4.53762 9.08368 4.02058C8.40832 3.4803 7.57573 3.33333 7.00014 3.33333C6.42456 3.33333 5.59196 3.4803 4.91661 4.02058Z" fill="#B1B1B2"/><path d="M6.22144 13.6303C6.0172 13.3239 5.60329 13.2411 5.29694 13.4454C4.99059 13.6496 4.9078 14.0635 5.11204 14.3699C6.04259 15.7657 7.95756 15.7657 8.88811 14.3699C9.09234 14.0635 9.00956 13.6496 8.7032 13.4454C8.39685 13.2411 7.98294 13.3239 7.7787 13.6303C7.37592 14.2344 6.62422 14.2344 6.22144 13.6303Z" fill="#B1B1B2"/></svg></button>
            </nav>
          </header>

          <header className='annotation_header'>
            <div className='route_info'>
              <button className='home_btn'><svg width="16" height="18" viewBox="0 0 16 18" fill="none"><path d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196 17.021 0 16.55 0 16V7C0 6.68333 0.0709998 6.38333 0.213 6.1C0.354333 5.81667 0.55 5.58333 0.8 5.4L6.8 0.9C6.98333 0.766667 7.175 0.666667 7.375 0.6C7.575 0.533333 7.78333 0.5 8 0.5C8.21667 0.5 8.425 0.533333 8.625 0.6C8.825 0.666667 9.01667 0.766667 9.2 0.9L15.2 5.4C15.45 5.58333 15.646 5.81667 15.788 6.1C15.9293 6.38333 16 6.68333 16 7V16C16 16.55 15.8043 17.021 15.413 17.413C15.021 17.8043 14.55 18 14 18H9V12H7V18H2Z" fill="#FFE3B4"/></svg></button>
              <h3 className='route_header subOne_font'>Главный экран</h3>
            </div>
            <ul className='annotationList'>
              <li className='annotationItem'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.41391 8.26623C8.38279 8.24652 8.35715 8.21927 8.33936 8.18701C8.32158 8.15474 8.31224 8.11851 8.3122 8.08166V2.18854C8.3122 1.84044 8.17391 1.5066 7.92777 1.26046C7.68163 1.01432 7.34779 0.876038 6.9997 0.876038C6.6516 0.876038 6.31776 1.01432 6.07162 1.26046C5.82548 1.5066 5.6872 1.84044 5.6872 2.18854V8.08166C5.68714 8.11843 5.67781 8.1546 5.66008 8.18681C5.64235 8.21902 5.61679 8.24624 5.58575 8.26596C5.19698 8.51921 4.88103 8.86951 4.66911 9.28227C4.4572 9.69502 4.35666 10.1559 4.37743 10.6194C4.40872 11.3044 4.70679 11.95 5.20791 12.418C5.70902 12.8861 6.37339 13.1395 7.05891 13.124C7.74444 13.1085 8.3967 12.8254 8.87619 12.3353C9.35568 11.8451 9.62434 11.1867 9.6247 10.501C9.62489 10.0572 9.51424 9.6203 9.3028 9.23004C9.09137 8.83978 8.78583 8.50849 8.41391 8.26623V8.26623Z" stroke="#121212" stroke-width="1.00189" stroke-miterlimit="10" stroke-linecap="round"/><path d="M6.99976 3.06387V10.5014" stroke="#121212" stroke-width="1.00189" stroke-miterlimit="10" stroke-linecap="round"/><path d="M7.00048 11.8145C7.72588 11.8145 8.31394 11.2264 8.31394 10.501C8.31394 9.77562 7.72588 9.18756 7.00048 9.18756C6.27507 9.18756 5.68701 9.77562 5.68701 10.501C5.68701 11.2264 6.27507 11.8145 7.00048 11.8145Z" fill="#121212"/></svg>
                <span className='annotation_text desc_font'>Температура</span>
              </li>
              <li className='annotationItem'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.69491 5.25676C5.26802 5.73727 5.03223 6.35769 5.03223 7.00045C5.03223 7.6432 5.26802 8.26362 5.69491 8.74413" stroke="#121212" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.33496 8.74413C8.76186 8.26362 8.99765 7.6432 8.99765 7.00045C8.99765 6.35769 8.76186 5.73727 8.33496 5.25676" stroke="#121212" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.30101 3.86317C3.50566 4.71407 3.06323 5.83532 3.06323 7.00005C3.06323 8.16478 3.50566 9.28603 4.30101 10.1369" stroke="#121212" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.72778 10.1369C10.5231 9.28603 10.9656 8.16478 10.9656 7.00005C10.9656 5.83532 10.5231 4.71407 9.72778 3.86317" stroke="#121212" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2666 11.3744C12.3408 10.1703 12.9345 8.61308 12.9345 6.99944C12.9345 5.38579 12.3408 3.82854 11.2666 2.62444" stroke="#121212" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.76241 2.62444C1.68817 3.82854 1.09448 5.38579 1.09448 6.99944C1.09448 8.61308 1.68817 10.1703 2.76241 11.3744" stroke="#121212" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span className='annotation_text desc_font'>Вибрация</span>                
              </li>
              <li className='annotationItem'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.937 8.74987C10.937 11.1662 9.41588 12.6874 6.99951 12.6874C4.58314 12.6874 3.06201 11.1662 3.06201 8.74987C3.06201 6.15686 5.88471 2.65632 6.75041 1.64378C6.78121 1.6078 6.81944 1.57892 6.86246 1.55912C6.90549 1.53932 6.95229 1.52907 6.99965 1.52907C7.04701 1.52907 7.09381 1.53932 7.13683 1.55912C7.17986 1.57892 7.21808 1.6078 7.24889 1.64378C8.11432 2.65632 10.937 6.15686 10.937 8.74987Z" stroke="#121212" stroke-width="1.00189" stroke-miterlimit="10"/><path d="M9.40745 8.96817C9.40745 9.4907 9.19988 9.99183 8.8304 10.3613C8.46091 10.7308 7.95978 10.9384 7.43726 10.9384" stroke="#121212" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span className='annotation_text desc_font'>Уровень масла</span>
              </li>
              <li className='annotationItem'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="12" height="12" rx="2" fill="#F9A823"/></svg>
                <span className='annotation_text desc_font'>Предупреждение</span>
              </li>
              <li className='annotationItem'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect width="12" height="12" rx="2" fill="#E32112"/></svg>
                <span className='annotation_text desc_font'>Опасность</span>
              </li>
            </ul>
          </header>
          
          <Mainpage sinterMachines={obj}></Mainpage>
        
        </div>
      </div>
  );
}

export default App;
