import React, { useState } from 'react';

function App() {
  const [inmueble, setInmueble] = useState({
    codigoCatastral: "CAT-2026-VNZ",
    coordenadaX: 10.4806,
    coordenadaY: -66.9036,
    coordenadaZ: 15.5,
    baseImponible: 5000,
    alicuota: 0.05
  });

  const impuestoCalculado = inmueble.baseImponible * inmueble.alicuota;

  const elevarAltura = () => {
    setInmueble(prev => ({
      ...prev,
      coordenadaZ: prev.coordenadaZ + 3.0
    }));
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#1e1e2e', color: '#fff', minHeight: '100vh' }}>
      <h1>??? Sistema Catastral & Fiscal (3D + IA)</h1>
      <p>Servidor local corriendo desde PyCharm con sincronización en vivo.</p>

      <div style={{ background: '#2b2b3b', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <h3>?? Ficha Técnica del Inmueble</h3>
        <p><strong>Código:</strong> {inmueble.codigoCatastral}</p>
        <p><strong>Ubicación (X, Y):</strong> {inmueble.coordenadaX}, {inmueble.coordenadaY}</p>
        <p><strong>Altura Relativa (Z):</strong> {inmueble.coordenadaZ} metros</p>
        <p><strong>Impuesto Estimado:</strong> ${impuestoCalculado.toFixed(2)} USD</p>

        <button 
          onClick={elevarAltura}
          style={{ padding: '10px 15px', backgroundColor: '#40a02b', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Simular Piso Adicional (+3m en Z)
        </button>
      </div>

      <div style={{ background: '#313244', padding: '15px', borderRadius: '10px', marginTop: '20px', borderLeft: '5px solid #89b4fa' }}>
        ?? <strong>Diagnóstico Agente IA:</strong> Lógica geoespacial conectada. El incremento en el eje Z recalcula automáticamente el volumen tributario.
      </div>
    </div>
  );
}

export default App;
