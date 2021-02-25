import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/originwolf.png" alt="Pedro Martins"/>
            <div>
                <strong>Pedro Martins</strong>
                <p>
                    <img src="Icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}