## Description
This is a [Next.js](https://nextjs.org) project made in 24 hours as a submition for [BICAP hackathon](https://capedu.kz/bicap) in Binom school, Astana, Kazakhstan.

## Setup
- install  all required libraries by running
```
npm install
```

Then, create a ```.env``` file in the main directory, it should include following fields filled with your data:

```
MONGODB_URI = "YOUR_MONGO_URI"
(watch this guide: **https://youtu.be/VlJ2v6CcWMM?si=RdlKdwZ_yaskvzUq** if you do not know how to get mongo uri)

NEXTAUTH_SECRET= "YOUR_AUTH_SECRET"
(to generate next auth secret, past "npx auth secret" in whichever terminal you are using)
NEXTAUTH_URL= "http://localhost:3000/"

GOOGLE_CLIENT_ID= "YOUR_GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET= "YOUR_GOOGLE_CLIENT_SECRET"
(follow this article: **https://www.balbooa.com/help/gridbox-documentation/integrations/other/google-client-id** if you
do not know how to create google client id and google client secret. Use "http://localhost:3000/")
```

Then, run the development server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Used Libraries:
- Next-Auth
- Leaflet
- OpenStreetMap
- OpenWeather
- Mongodb
- Imgur
