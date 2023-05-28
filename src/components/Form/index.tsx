import styles from '../../app/page.module.css';

export const Form = () => {
  return (
    <form className={styles.form}>
      <h1 style={{ marginBottom: '30px', color: 'white' }}>Login</h1>
      <input className={styles.input} placeholder="name or email" />
      <div style={{ height: '40px' }}></div>
      <input className={styles.input} placeholder="password" />
      <div className={styles.button_container}>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </div>
    </form>
  );
};
