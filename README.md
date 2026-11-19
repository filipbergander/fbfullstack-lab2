# Laboration 2 | Fullstack-utveckling med ramverk DT193G

## REST-webbtjänst 
Webbtjänsten är skapad genom backend-ramverket [NestJS](https://nestjs.com/), ORM-verktyget [Prisma](https://www.prisma.io/) och databashanteraren PostgreSQL i [Supabase](https://supabase.com/).  
API:et är publicerat via hosten [Render](https://render.com/).

Webbtjänsten skapades med syfte att hantera resmål. Funktionalitet för CRUD har implementerats med CREATE, READ, DELETE och PUT för resmåls-posterna.

### Översikt av webbtjänstens struktur
All logik och hanteringen av resmål finns under `src/vacations`.  
- **Module (vacations.module.ts):** Modulen som  synkroniserar controller och service för hanteringen av resmål.  
- **Controller (vacations.controller.ts):** Hanterar inkommande HTTP-anrop samt validerar data och skickar datan vidare till servicen  
- **Service (vacations.service.ts):** Ansvarar för affärslogiken och CRUD-funktionaliteten via Prisma. Ger felmeddelanden, till exempel 404 om ett resmål saknas.  
- **DTO (create-vacation.dto.ts):** Schema med tillåtna typer och fält för att skapa och uppdatera resmål. Validering och felmeddelanden genereras med NestJS `class-validator` och `class-transform`. Exempelvis så att tomma strängar, ogiltiga tal eller fel datatyper inte kan lagras. Avger en `400 Bad Request` med felmeddelande.  
- **DTO (update-vacation.dto.ts):** Ärver egenskaperna från create-vacation genom PartialType. Detta för att uppdatera ett befintligt resmål.  

### Publicerad länk
Liveversion av API:et finns tillgänglig på: https://fbfullstack-lab2.onrender.com/    
**OBS:** Render-hosten och webbtjänsten går ned i viloläge efter 15 minuters inaktivitet, eftersom det är en gratisversion jag använder. Detta innebär att det första anropet kan ta lite tid, ca 30 sek, innan servern vaknar till liv. 

## Installation och körning via localhost
- Klona ner repot och installera NPM-paket: ```npm install```  

- Skapa en ``.env``-fil i projektets rotkatalog med:
```
DATABASE_URL="postgresql://postgres.[DITT_PROJEKT]:[DITT_LÖSENORD]@[aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true](https://aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true)"
DIRECT_URL="postgresql://postgres.[DITT_PROJEKT]:[DITT_LÖSENORD]@[aws-0-eu-west-1.pooler.supabase.com:5432/postgres](https://aws-0-eu-west-1.pooler.supabase.com:5432/postgres)"
```
*En `.env.sample`-fil skapades även i källkoden för att demonstrera anslutningssträngarna, vilka du sedan hittar under ditt egna Supabase-konto.*

- Lägg till Prisma-klienten och synkronisera sedan med databasmodellen:
```
npx prisma generate
npx prisma migrate deploy
```

- Starta den lokala utvecklingsservern:
```
npm run start:dev
```  

### Databasschema
Databasmodellen finns i `prisma/schema.prisma`.  
**Resmål (vacation):**
| Fält          | Typ     | Beskrivning |
|---------------|----------|-------------|
| id           | Int | Automatiskt genererat ID (PK) |
| title      | String   | Titel på resmålet |
| vacationDays         | Int   | Antal semesterdagar |
| visited      | Boolean   | Om resmålet är besökt eller inte |
| createdAt    | DateTime     | Tid & datum när resmålet skapades |

### Routes
| Metod | Ändpunkt              | Beskrivning                                      |
|-------|------------------------|--------------------------------------------------|
| GET | /vacations    | Hämtar alla sparade resmål    |
| GET | /vacations/:id    | Hämtar specifikt resmål via id    |
| POST | /vacations       | Skapar ett nytt resmål    |
| DELETE | /vacations/:id    | Raderar ett resmål via id    |
| PUT | /vacations/:id       | Uppdaterar ett tillagt resmål via id    |

För att testa ett POST-anrop på den lokala servern skickas en JSON-body, t.ex:
```json
{
  "title": "Italien",
  "vacationDays": 10,
  "visited": false
}
```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
