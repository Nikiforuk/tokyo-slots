"use client";
import { motion } from "framer-motion";
import styles from "../Footer.module.scss";

export default function FooterTitle() {
  return (
    <motion.h2
      className={styles.table_title}
      animate={{
        textShadow: [
          "0 4px 4px rgba(0,0,0,0.25)",
          "0 6px 6px rgba(0,0,0,0.35)",
          "0 4px 4px rgba(0,0,0,0.25)",
        ],
        scale: [1, 1.02, 1],
      }}
      transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
    >
      Balance
    </motion.h2>
  );
}

