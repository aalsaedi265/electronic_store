import {loadStripe} from '@stripe/stripe-js';

let stripPromese;

const getStripe =()=>{
    if(!stripePromise){
        stripePromise = loadStripe(process.env.stripePubKey)
    }
    return stripPromese
}
export default getStripe