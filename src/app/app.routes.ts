import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FamiliasComponent } from './components/familias/familias.component';
import { FamiliaSegurosComponent } from './components/familia-seguros/familia-seguros.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FamiliaAgregacionComponent } from './components/familia-agregacion/familia-agregacion.component';
import { RegistroPymeComponent } from './components/registro-pyme/registro-pyme.component';
import { CargaDocumentosPymeComponent } from './components/carga-documentos-pyme/carga-documentos-pyme.component';
import { FamiliaAnaliticaComponent } from './components/familia-analitica/familia-analitica.component';
import { FamiliaPagosComponent } from './components/familia-pagos/familia-pagos.component';
import { FamiliaRecaudosComponent } from './components/familia-recaudos/familia-recaudos.component';
import { FamiliaNominaFilialesComponent } from './components/familia-nomina-filiales/familia-nomina-filiales.component';
import { FamiliaFilialesExteriorComponent } from './components/familia-filiales-exterior/familia-filiales-exterior.component';
import { EnvioDocumentosPymeComponent } from './components/envio-documentos-pyme/envio-documentos-pyme.component';
import { DetalleExtractoComponent } from './components/detalle-extracto/detalle-extracto.component';
import {RecomendacionComponent } from './components/recomendacion/recomendacion.component';
import {CuentaAhorrosComponent } from './components/cuenta-ahorros/cuenta-ahorros.component';
import {CuentaCorrienteComponent } from './components/cuenta-corriente/cuenta-corriente.component';
import {LoadingComponent } from './components/shared/loading/loading.component';
import {TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import {CuentaInversionComponent } from './components/cuenta-inversion/cuenta-inversion.component';
import {ContactanosComponent } from './components/contactanos/contactanos.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'familias', component: FamiliasComponent},
    {path: 'familia-seguros', component: FamiliaSegurosComponent},
    {path: 'buscador/:termino', component: BuscadorComponent},
    {path: 'familia-agregacion', component: FamiliaAgregacionComponent},
    {path: 'registro-pyme', component: RegistroPymeComponent},
    {path: 'carga-documentos-pyme', component: CargaDocumentosPymeComponent},
    {path: 'familia-analitica', component: FamiliaAnaliticaComponent},
    {path: 'familia-pagos', component: FamiliaPagosComponent},
    {path: 'familia-recaudos', component: FamiliaRecaudosComponent},
    {path: 'familia-nomina-filiales', component: FamiliaNominaFilialesComponent},
    {path: 'familia-filiales-exterior', component: FamiliaFilialesExteriorComponent},
    {path: 'envio-documentos-pyme', component: EnvioDocumentosPymeComponent},
    {path: 'detalle-extracto', component: DetalleExtractoComponent},
    {path: 'recomendacion', component: RecomendacionComponent},
    {path: 'cuenta-ahorros', component: CuentaAhorrosComponent},
    {path: 'cuenta-corriente', component: CuentaCorrienteComponent},
    {path: 'loading', component: LoadingComponent},
    {path: 'tarjeta-credito', component: TarjetaCreditoComponent},
    {path: 'cuenta-inversion', component: CuentaInversionComponent},
    {path: 'contactanos', component: ContactanosComponent},

    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
