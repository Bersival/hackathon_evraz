import React from 'react'
import { ExhausterCard } from '../../components/ExhausterCard/ExhausterCard';

import './Mainpage.css'

type MainpagePropsType = {
    sinterMachines: Array<sinterMachineType>
}
type sinterMachineType = {
    name: string,
    exhausters: Array<ExhausterType>,
}
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
    oilPressure?: number
  }

export const Mainpage = (props: MainpagePropsType) => {
    // const obj = {exhausterName: sinterMachine.exhausterName,exhausterStatus: sinterMachine.exhausterStatus,rotorName: sinterMachine.rotorName,rotorReplacementDate: sinterMachine.rotorReplacementDate,rotorWorkingDate: sinterMachine.rotorWorkingDate,rotorEstimatedFailureDate: sinterMachine.rotorEstimatedFailureDate,bearingsInfo: sinterMachine.bearingsInfo}
  return (
    <div className='container mainpage_container'>
        {props.sinterMachines.map(sinterMachine => (
            <div className='sinterMachine'>
                <div className='sinterMachine_header subOne_font'>Агломашина {props.sinterMachines.indexOf(sinterMachine) + 1}</div>
                <div className='sinterMachine_exhaustersInto_container'>
                    {sinterMachine.exhausters.map(exhauster => (
                        <div className='ExhausterCardContainer'><ExhausterCard exhausterItem={{exhausterName: exhauster.exhausterName ,exhausterStatus: exhauster.exhausterStatus,rotorName: exhauster.rotorName,rotorReplacementDate: exhauster.rotorReplacementDate,rotorWorkingDate: exhauster.rotorWorkingDate,rotorEstimatedFailureDate: exhauster.rotorEstimatedFailureDate,bearingsInfo: exhauster.bearingsInfo}}></ExhausterCard></div>
                    ))}
                </div>
                
            </div>
        ))}
    </div>
  )
}
