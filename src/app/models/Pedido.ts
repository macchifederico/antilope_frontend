export interface Pedido{

    id: number;
    nombre_cliente: string;
    apellido_cliente: string;
    telefono_cliente: string;
    direccion_cliente: string;
    estado: string; // f=finalizado, p=pendiente, c=cancelado, e=en proceso
    fecha_creacion: string;
    fecha_estimada_entrega: string;

}