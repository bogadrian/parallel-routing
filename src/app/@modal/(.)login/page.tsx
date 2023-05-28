import { Modal } from '../../../components/Modal';
import { Form } from '../../../components/Form/index';
import styles from '../../page.module.css';

export default async function LoginModal() {
  return (
    <Modal>
      <main className={styles.main}>
        <div>
          <Form />
        </div>
      </main>
    </Modal>
  );
}
