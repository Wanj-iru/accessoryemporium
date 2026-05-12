
export default function AdSpace() {
  return (
    <div style={{ 
      width: '100%', 
      margin: '20px 0', 
      padding: '20px', 
      backgroundColor: '#fffbe6', 
      border: '2px dashed #ffe58f', 
      textAlign: 'center',
      borderRadius: '8px'
    }}>
      <span style={{ fontSize: '12px', color: '#888', display: 'block', marginBottom: '10px' }}>
        SPONSORED ADVERTISEMENT
      </span>
      <div style={{ fontWeight: 'bold', fontSize: '18px' }}>
        🚀 Super Summer Sale - 50% OFF!
      </div>
      <p style={{ fontSize: '14px' }}>Click here to view our exclusive local deals.</p>
    </div>
  );
}

