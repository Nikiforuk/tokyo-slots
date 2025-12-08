"use client";
import { motion } from "framer-motion";
import styles from "../Footer.module.scss";

export default function FooterTitle() {
  return (
    <motion.h2
      className={styles.table_title}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
    >
      Balance
    </motion.h2>
  );
}

