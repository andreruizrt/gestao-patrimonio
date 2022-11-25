import { get, post, put, destroy } from "../../config/api";

export const Patrimonio = {
    index: () => get('/patrimonio'),
    patrimonioById: (id) => get('/patrimonio/' + id),
    create: (params) => post('/patrimonio', params),
    update: (params, id) => put('/patrimonio/' + id, params),
    updateSituacao: (params, id) => put('/patrimonio/situacao/' + id, params),
    unique: (id) => get('/patrimonio/' + id),
}