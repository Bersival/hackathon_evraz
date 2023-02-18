import React from 'react'

import {ReactComponent as NextIcon} from '../../sources/icons/next.svg';
import {ReactComponent as RotorImg} from '../../sources/icons/eksgauster.svg';
import {ReactComponent as TempIcon} from '../../sources/icons/t.svg';
import {ReactComponent as VibIcon} from '../../sources/icons/v.svg';
import {ReactComponent as WorkingIndicatorIcon} from '../../sources/icons/on or off.svg';
import {ReactComponent as DownIcon} from '../../sources/icons/down.svg';
import {ReactComponent as BackIcon} from '../../sources/icons/back.svg';

import './ExhausterCard.css'

type ExhausterType = {
  exhausterName: string;
  exhausterStatus: string;
  rotorName: string;
  rotorReplacementDate: string;
  rotorWorkingDate: string;
  rotorEstimatedFailureDate: string;
  bearingsInfo: Array<bearingInfoType>;
}

type bearingInfoType = {
  bearingName: string,
  bearingTemperature: number,
  bearingVibration: number,
  oilLevel?: number 
}

type ExhausterCardProps = {
  exhausterItem: ExhausterType
}

export const ExhausterCard = (props: ExhausterCardProps) => {
  let warnings = [{}, {}, {}] 
  function toggle_mnemoschema() {
    console.log("soon")
  }

  return (
    <div className='container card_container'>
      <header className='card_header'>
        <div className='card_exhausterStatus_icon'>{props.exhausterItem.exhausterStatus === "working" ? <WorkingIndicatorIcon /> : <WorkingIndicatorIcon />}</div>
        <h1 className='subOne_font'>{props.exhausterItem.exhausterName}</h1>
        <button onClick={() => toggle_mnemoschema()} className='card_toggle_mnemoschema'><NextIcon /></button>
      </header>
      <div className='card_rotor_info_container'>
        <div className='card_rotor_info'>
          <h2 className='card_rotorName_header subOne_font'>{props.exhausterItem.rotorName}</h2>
          <h3 className='card_rotorReplacementDate_header desc_font'>{props.exhausterItem.rotorReplacementDate}</h3>
        </div>
        <hr />
        <div className='card_rotorDetailedInfo_block'>
          <h1 className='card_rotorDetailedInfo_mainHeader subTwo_font'>Последняя замена ротора</h1>
          <h2 className='card_rotorWorkingDate_header subTwo_font'>{props.exhausterItem.rotorWorkingDate}</h2>
          <div className='prediction_block'>
            <p className='card_prediction_text desc_font'>Прогноз</p>
            <p className='card_rotorEstimatedFailureDate_header subOneB_font'>{props.exhausterItem.rotorEstimatedFailureDate}</p>
          </div>
        </div>
        <div className="card_exhausterImg_block"><RotorImg /></div>

        <div className="card_warningBlock">
        <div className="bearingsInfo_container">
          <div className='card_warningHeader_wrapper'>
            <DownIcon />
            <h3 className='card_warnings_header subTwo_font'>Предупреждения</h3>
          </div>
            {props.exhausterItem.bearingsInfo.slice(-1, -3).map(item => (
              <div className='card_bearingItem'>
                <h3 className='card_bearingItemName'>{item.bearingName}</h3>
                <div className='card_bearingItemIcons'>
                  <div className='card_bearingItemTempIcon'><TempIcon /></div>
                  <div className='card_bearingItemVibIcon'><VibIcon /></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card_bearingBlock">
          {props.exhausterItem.bearingsInfo.map(item => (
            <div className='card_bearingItem'>
              <h3 className='card_bearingItemName'>{item.bearingName}</h3>
              <div className='card_bearingItemIcons'>
                <div className='card_bearingItemTempIcon'><TempIcon /></div>
                <div className='card_bearingItemVibIcon'><VibIcon /></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
