import {loadStripe} from '@stripe/stripe-js';

let stripePromise;

const getStripe =()=>{
    if(!stripePromise){
        stripePromise = loadStripe(`${process.env.stripePubKey}`)
    }
    return stripePromise
}
export default getStripe