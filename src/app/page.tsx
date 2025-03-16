import Homepage from "../compnents/HomepageComponent/Homepage";

export default function Home(){
  console.log(process.env.NEXTAUTH_URL);
  return(
    <Homepage />
  )
    
}