import React, { FC } from 'react';
import { Space } from 'antd';
import Link from 'next/link';
import styles from '@/styles/Logo.module.scss';
import logoImage from '../../public/logo1.png';
import Image from 'next/image';
import { HOST } from '@/router';
import logo from '../../public/logo1.png';

const Logo: FC = () => {
  // @ts-ignore
  return (
    <div className={styles.container}>
      <Space>
        <Image src={'/backend/logo1.png'} alt="FLoRA Logo" className={styles.logoImage} width={100} height={70} />
      </Space>
    </div>
  );
};

export default Logo;
