// combineReducersが結合するための関数
import { combineReducers } from 'redux'
import events from './events'
export default combineReducers({ events })
// 他にも状態を管理したい場合、下記のようにかける。
// export default combineReducers({ count ,foo, bar, baz})