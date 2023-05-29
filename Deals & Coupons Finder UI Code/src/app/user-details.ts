import { coupon } from "./coupon";

export class UserDetails {
    constructor(
        public username:String,
        public email:String,
        public cashbackPoints:number,
        public preferences:[],
        public listOfCoupons:Array<coupon> =[]
    ){}
    
}
