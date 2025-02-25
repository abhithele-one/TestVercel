import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRCodeScanner: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef<HTMLDivElement | null>(null);
  const html5QrcodeScannerRef = useRef<Html5QrcodeScanner | null>(null);  // Store the scanner instance

  const onScanSuccess = (decodedText: string) => {
    console.log('QR Code Scanned: ', decodedText);
    alert(`Scanned QR Code: ${decodedText}`);
    // Optionally stop the scanner after a successful scan
    setScanning(false);
  };

  const onScanError = (errorMessage: string) => {
    console.error('Scan Error: ', errorMessage);
  };

  useEffect(() => {
    if (scanning && scannerRef.current) {
      const elementId = scannerRef.current.id;
      // Initialize the scanner and store it in the ref
      html5QrcodeScannerRef.current = new Html5QrcodeScanner(elementId, {
        fps: 10,
        qrbox: 250,
      }, true);

      html5QrcodeScannerRef.current.render(onScanSuccess, onScanError);
    }

    return () => {
      // Cleanup the scanner instance on unmount or when scanning is stopped
      if (html5QrcodeScannerRef.current) {
        html5QrcodeScannerRef.current.clear();
      }
    };
  }, [scanning]);

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <div id="scanner" ref={scannerRef} style={{ width: '100%', height: '400px' }}></div>
      {!scanning && (
        <button style={{ backgroundColor: "red" }} onClick={() => setScanning(true)}>Start Scanning</button>
      )}
    </div>
  );
};

export default QRCodeScanner;
