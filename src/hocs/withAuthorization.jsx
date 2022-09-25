import { useSelector } from "react-redux";

export const withAuthorization = (
  AuthorizeComponent,
  UnAuthorizedComponent
) => {
  const ComponentWithAuthorization = (props) => {
    // const isAuthorized = useSelector(selectIsUserAuthorized);
    const isAuthorized = true;

    return isAuthorized ? (
      <AuthorizeComponent {...props} />
    ) : (
      <UnAuthorizedComponent {...props} />
    );
  };

  return ComponentWithAuthorization;
};
