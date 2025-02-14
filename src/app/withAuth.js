import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from "./context/authContext";


const withAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login'); // Redirect to login page if not authenticated
      }
    }, [user, loading, router]);

    if (loading || !user ) {
      return   <div> loading...</div>;
    }

    

    return <WrappedComponent {...props} />;
  };

  AuthHOC.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthHOC;
};

export default withAuth;