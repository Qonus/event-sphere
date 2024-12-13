This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, install npm running following command in your terminal:
```bash
npm install
```
and then install all required libraries by running
```bash
npm i
```

Then, create a .env file in the project folder, and fill with following:

MONGODB_URI = "*your mongo uri*"
(watch this guide: **https://youtu.be/VlJ2v6CcWMM?si=RdlKdwZ_yaskvzUq** if you do not know how to get mongo uri)

NEXTAUTH_SECRET= "*you next auth secret*"
(to generate next auth secret, past "npx auth secret" in whichever terminal you are using)
NEXTAUTH_URL= "http://localhost:3000/"

GOOGLE_CLIENT_ID= "*your client id*"
GOOGLE_CLIENT_SECRET= "*your client secret*"
(follow this article: **https://www.balbooa.com/help/gridbox-documentation/integrations/other/google-client-id** if you
do not know how to create google client id and google client secret. Use "http://localhost:3000/")

Then, run the development server:

```bash
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