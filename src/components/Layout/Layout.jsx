import styles from "./Layout.module.css";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <header>my awesome header</header>
            <main>
                cool main
                {children}
            </main>
            <footer>just footer</footer>
        </div>
    );
};
