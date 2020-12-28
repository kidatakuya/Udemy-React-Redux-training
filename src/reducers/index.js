// combineReducersが結合するための関数
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
// 他にも状態を管理したい場合、下記のようにかける。
// export default combineReducers({ count ,foo, bar, baz})