/**
 * Created by consultadd on 21/6/17.
 */
import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props)=>{
    return(
        <div>
            <Sparklines data={props.data} height={30} width={50}>
                <SparklinesLine color={props.color} />
            </Sparklines>
        </div>
        );
}