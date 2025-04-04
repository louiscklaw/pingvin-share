'use client';
import { useEffect, useRef, useState } from 'react';
import QRCodeStyling, { Options } from 'qr-code-styling';
import styles from './page.module.css';

interface ClientQRProps {
  link: string; // Assuming link is a string, adjust type if needed
  // Add other props here if needed
}

export default function ClientQR({ link }: ClientQRProps) {
  const [options, setOptions] = useState<Options>({
    width: 200,
    height: 200,
    type: 'svg',
    data: 'https://share.louislabs.com',
    // image:
    // "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q',
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: 'anonymous',
      saveAsBlob: true,
    },
    dotsOptions: {
      color: '#14182d',
    },
    backgroundOptions: {
      color: '#ffffff',
    },
  });
  const [qrCode, setQrCode] = useState<QRCodeStyling>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQrCode(new QRCodeStyling(options));
  }, []);

  useEffect(() => {
    if (ref.current) {
      qrCode?.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode?.update(options);
  }, [qrCode, options]);

  useEffect(() => {
    setOptions({ ...options, data: link });
  }, [link]);

  return (
    <>
      <div className={styles.qrWrapper} ref={ref} />
    </>
  );
}
