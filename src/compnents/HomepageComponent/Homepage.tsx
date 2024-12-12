import LeafletMap from "../LeafletMapComponent/LeafletMap"
import styles from "./Homepage.module.scss"

export default async function Homepage(){
    return(
        <div className={styles.homepage}>
            <div className={styles.homepage_wrapper}>
                <h1 style={{color: '$foreground-color-1'}}> This is Event Sphere! </h1>
                <div className={styles.homepage__map}>
                    <LeafletMap />
                </div>
            </div>
        </div>
        
    )
    
}