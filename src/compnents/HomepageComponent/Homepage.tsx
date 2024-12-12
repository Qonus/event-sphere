import LeafletMap from "../LeafletMapComponent/LeafletMap"
import styles from "./Homepage.module.scss"

export default async function Homepage(){
    return(
        <div className={styles.homepage}>
            <div className={styles.homepage_wrapper}>
                <div className={styles.homepage__map}>
                    <LeafletMap />
                </div>
            </div>
        </div>
        
    )
    
}