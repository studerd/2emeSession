import { IsEmpty} from './is-empty';

export interface Business extends IsEmpty {
    id:string;
    toString:string;
}
export const defaultBusiness:Business={id:'',isEmpty:true,toString:''}