import {sum, mult, inc} from './functions.js'

export const sumDiv = ({props}) =>
{
    return <div>
    <b>{props.a}</b>
    <b>{props.b}</b>
    <b>{sum(props.a, props.b)}</b>
    </div>
}

export const multDiv = ({props}) =>
{
    return <div>
    <b>{props.a}</b>
    <b>{props.b}</b>
    <b>{mult(props.a, props.b)}</b>
    </div>
} 

export const incDiv = ({props}) =>
{
    return <div>
    <b>{props.a}</b>
    <b>{inc(props.a)}</b>
    </div>
} 