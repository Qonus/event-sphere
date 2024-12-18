## Description
This is a [Next.js](https://nextjs.org) + [MongoDB](https://www.mongodb.com/products/platform/atlas-database) project made in 24 hours as a submition for offline [BICAP hackathon](https://capedu.kz/bicap) in Binom school, Astana, Kazakhstan. 

## Setup .env
Create a ```.env``` file in the main directory, it should include following fields filled with your data:

```
MONGODB_URI = "YOUR_MONGO_URI"

NEXTAUTH_SECRET= "YOUR_AUTH_SECRET"

NEXTAUTH_URL= "http://localhost:3000/"

GOOGLE_CLIENT_ID= "YOUR_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET= "YOUR_GOOGLE_CLIENT_SECRET"
```

- `MONGODB_URI` follow [this guide](https://youtu.be/VlJ2v6CcWMM?si=RdlKdwZ_yaskvzUq)

- `NEXTAUTH_SECRET` paste ```npx auth secret```

- `GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET` follow [this article](https://www.balbooa.com/help/gridbox-documentation/integrations/other/google-client-id)

## Running

- Install all required libraries by running
```
npm install
```

- Run the development server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Used Libraries:
- MongoDB
- Next-Auth
- Leaflet
- OpenStreetMap
- Imgur
