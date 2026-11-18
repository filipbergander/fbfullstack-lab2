import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // Välkomstmeddelande med api-routes
    return 'Välkommen till resmål API:et! <br> <br> <b>API-routes:</b> <br> GET /vacations : Hämta alla resmål <br> GET /vacations/:id : Hämta ett specifikt resmål med id <br> POST /vacations : Skapa ett nytt resmål <br> PUT /vacations/:id : Uppdatera ett befintligt resmål med id <br> DELETE /vacations/:id : Ta bort ett befintligt resmål med id';
  }
}
