import { GET_RESOURCE_TYPE } from '../Utils/constant'

const intialState = {
    getResourceType: [],
}

export default function (state = intialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_RESOURCE_TYPE:
            return { ...state, getResourceType: payload }

        default:
            return state;
    }

}
