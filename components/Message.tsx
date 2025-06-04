import styles from './Message.module.css';

interface MessageProps {
  text: string;
}

export default function Message({ text }: MessageProps) {
  return <p className={styles.message}>{text}</p>;
}
