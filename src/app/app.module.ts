import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapModalModule} from 'ng2-bootstrap-modal';
import {APP_ROUTING} from './app.routes';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';


import {FamiliasService} from './servicios/familias.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
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
import { RecomendacionComponent } from './components/recomendacion/recomendacion.component';
import { CuentaAhorrosComponent } from './components/cuenta-ahorros/cuenta-ahorros.component';
import { CuentaCorrienteComponent } from './components/cuenta-corriente/cuenta-corriente.component';
import { AutenticacionService } from './servicios/autentication.service';
import { ChannelsComponent } from './components/channels/channels.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { CuentaInversionComponent } from './components/cuenta-inversion/cuenta-inversion.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    FamiliasComponent,
    FamiliaSegurosComponent,
    BuscadorComponent,
    FamiliaAgregacionComponent,
    RegistroPymeComponent,
    CargaDocumentosPymeComponent,
    FamiliaAnaliticaComponent,
    FamiliaPagosComponent,
    FamiliaRecaudosComponent,
    FamiliaNominaFilialesComponent,
    FamiliaFilialesExteriorComponent,
    EnvioDocumentosPymeComponent,
    DetalleExtractoComponent,
    RecomendacionComponent,
    CuentaAhorrosComponent,
    CuentaCorrienteComponent,
    ChannelsComponent,
    LoadingComponent,
    TarjetaCreditoComponent,
    CuentaInversionComponent,
    ContactanosComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    BootstrapModalModule,
    ChartsModule,
    FormsModule

  ],
  providers: [
    FamiliasService,
    AutenticacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }
