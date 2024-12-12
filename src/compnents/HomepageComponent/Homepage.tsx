import LeafletMap from "../LeafletMapComponent/LeafletMap"
import styles from "./Homepage.module.scss"

export default async function Homepage(){
    return(
        <main>
            <p> This is homepage </p>
            <h1>My Leaflet Map</h1>
            <LeafletMap />
        </main>
    )
    
}