import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PreventGoBack = (WrappedComponent) => {
  const PreventGoBackComponent = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const handleHistoryChange = () => {
        if (location.state && location.state.preventGoBack) {
          navigate(location.state.from, { replace: true });
        }
      };

      window.addEventListener('popstate', handleHistoryChange);

      return () => {
        window.removeEventListener('popstate', handleHistoryChange);
      };
    }, [navigate, location]);

    return <WrappedComponent {...props} />;
  };

  return PreventGoBackComponent;
};

export default PreventGoBack;