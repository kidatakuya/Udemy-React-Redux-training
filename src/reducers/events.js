import _ from 'lodash'//axoisで帰ってきたデータを整理するパッケージ
import { 
    CREATE_EVENTS,
    READ_EVENTS,
    READ_EVENT,
    DELETE_EVENTS,
    UPDATE_EVENTS 
} from '../actions'

const initialState = { value: 0}

export default ( events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENTS:
        case READ_EVENT:
        case UPDATE_EVENTS:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case READ_EVENTS:
            // console.log(action.response.data)
        return _.mapKeys(action.response.data,'id')//帰ってきたidを使って整理してくれる
        case DELETE_EVENTS:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}
