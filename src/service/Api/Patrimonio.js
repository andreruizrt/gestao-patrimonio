import { List } from "react-native-paper";
import { get, post, put, destroy } from "../../config/api";

export const Colaborador = {
    index: () => get('/patrimonio'),
    create: (params) => post('/patrimonio', params),
    update: (params,id) => post('/patrimonio/'+id,params)
}