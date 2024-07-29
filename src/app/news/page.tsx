'use client';
import React from 'react';

import { Inter } from 'next/font/google';
import MainLayout from '../layouts/MainLayout';
import { Typography } from 'antd';

import styles from './news.module.scss';

const inter = Inter({ subsets: ['latin'] });
const { Title, Paragraph } = Typography;
export default function Home() {
    return (
        <>
            <MainLayout>
                <Title level={3} style={{ textAlign: 'center' }}>
                    News
                </Title>
                <div className={styles.container}></div>
            </MainLayout>
        </>
    );
}
