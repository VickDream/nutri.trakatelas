// import './Card.css';

export default function Card({ children, onClick, className = '', ...props }) {
  return (
    <div
      className={`custom-card ${className}`}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : {}}
      {...props}
    >
      {children}
    </div>
  );
}