"use client";
import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QrScanner = ({ onScanSuccess }) => {
  const [isScanning, setIsScanning] = useState(false);
  const qrScannerRef = useRef(null);

  useEffect(() => {
    if (isScanning && qrScannerRef.current) {
      const qrCodeScanner = new Html5QrcodeScanner(qrScannerRef.current, {
        fps: 10,
        qrbox: 250,
      });

      qrCodeScanner.render(onScanSuccess);

      return () => {
        qrCodeScanner.clear();
      };
    }
  }, [isScanning, onScanSuccess]);

  return (
    <div>
      {!isScanning ? (
        <button onClick={() => setIsScanning(true)}>Start Scanning</button>
      ) : (
        <div ref={qrScannerRef} style={{ width: "100%", height: "400px" }} />
      )}
    </div>
  );
};

export default QrScanner;
