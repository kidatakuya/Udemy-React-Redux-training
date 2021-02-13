import _ from 'lodash'//axoisで帰ってきたデータを整理するパッケージ
import { READ_EVENTS, DELETE_EVENTS } from '../actions'

const initialState = { value: 0}

export default ( events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // console.log(action.response.data)
        return _.mapKeys(action.response.data,'id')//帰ってきたidを使って整理してくれる
        case DELETE_EVENTS:
            console.log(action.id)
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}
