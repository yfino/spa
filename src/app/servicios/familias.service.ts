import {Injectable} from '@angular/core';


@Injectable()
export class FamiliasService {

    public conjuntoFamilias: Familia[] = [
    {   nombre: 'Security',
        descripcion: 'Aqui va la descripción de la familia Seguros'
    },
    {   nombre: 'Payments',
        descripcion: 'Aqui va la descripción de la familia Pagos'
    },
    {   nombre: 'Analytics',
        descripcion: 'Aqui va la descripción de la familia Agregacion del exterior'
    },
    {   nombre: 'Account',
        descripcion: 'Aqui va la descripción de la familia Account'
    },
    {   nombre: 'Consignments',
    descripcion: 'Aqui va la descripción de la familia Remesas'
    },
    {   nombre: 'Channels',
    descripcion: 'Aqui va la descripción de la familia Channels'
    }
    ];
    constructor() {
        console.log('Servicio listo para usar');

    }
    getFamilias(): Familia[] {
        return this.conjuntoFamilias;
    }

    getCadaFamilia(idx: string) {
        return this.conjuntoFamilias;

    }

    getDescripcionFamilia(idx: number) {
        return this.conjuntoFamilias[idx];
    }
    buscarFamilia( termino: string): Familia[] {
        const familiaArr: Familia[] = [];
        termino = termino.toLowerCase();
        for (const familia of this.conjuntoFamilias) {
            const nombre = familia.nombre.toLowerCase();
            if ( nombre.indexOf(termino) >= 0) {
                familiaArr.push(familia);
            }
        }
        return familiaArr;
    }
}
    export interface Familia {
        nombre: string;
        descripcion: string;
    }
