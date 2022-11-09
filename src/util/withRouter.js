/**
 * For React Router, wraps the component withRouter
 * and then you can programmatically switch pages
 */
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams
  } from "react-router-dom";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      let [search, setSearch] = useSearchParams();

      return (
        <Component
          {...props}
          router={{ location, navigate, params, search }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

  export default withRouter;