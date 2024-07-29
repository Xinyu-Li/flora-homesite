import React, { FC } from 'react';
import { Space } from 'antd';
import styles from './Logo.module.scss';
import Image from 'next/image';


const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Space>
        <Image src={'/logo1.png'} alt="FLoRA Logo" width={100} height={70} />
      </Space>
    </div>
  );
};

export default Logo;
