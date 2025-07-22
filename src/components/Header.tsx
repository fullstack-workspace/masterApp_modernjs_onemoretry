import { Link } from '@modern-js/runtime/router';
import { useRef } from 'react';

const Header = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('e.clientX - ', e.clientX, ', e.clientY - ', e.clientY);
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      // Add your logic here using rect
      console.log('BoundingClientRect:', rect);
    }
  };
  return (
    <>
      <header>
        {/* <Button /> */}
        <a href="/" className="logo">
          <img
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-js-logo.svg"
            alt="Modern JS + Module federation"
            style={{ height: '32px', verticalAlign: 'middle' }}
          />
          <span
            style={{
              marginLeft: '10px',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.2rem',
            }}
          />
        </a>
        <div
          className="header-links"
          ref={boxRef}
          onMouseMove={handleMouseMove}
        >
          <Link to="/login" className="link">
            Login
          </Link>
          <Link to="/login/register" className="link">
            Register
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
