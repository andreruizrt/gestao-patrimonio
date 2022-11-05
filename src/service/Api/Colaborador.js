import { get, post, put, destroy } from "../../config/api";

export const Colaborador = {
    index: () => get('/colaborador'),
    create: (params) => post('/colaborador', params),
}