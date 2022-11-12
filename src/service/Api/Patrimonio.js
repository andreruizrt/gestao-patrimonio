import { List } from "react-native-paper";
import { get, post, put, destroy } from "../../config/api";

export const Patrimonio = {
    index: () => get('/patrimonio'),
    create: (params) => post('/patrimonio', params),
    update: (params, id) => post('/patrimonio/' + id, params)
}