import styles from '../page.module.css';

export default function Loading() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className={styles.loader} />
    </div>
  );
}
