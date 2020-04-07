import {Reducer} from "redux"
import { Log_in, Log_out } from "../actions";

 interface ILogState {
  isLogin: boolean;
}
const LogState: ILogState= {
  isLogin: false,
}

 const Login:Reducer<ILogState>=(state : ILogState=LogState, action:any) =>{
  switch (action.type) {
    case Log_in:
      return {
        ...state,
        isLogin: action.value
      };

    case Log_out:
      return {
        ...state,
        isLogin: action.value
      };
    default:
      return state;
  }
}
export default Login