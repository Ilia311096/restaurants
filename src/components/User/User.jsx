import styles from "./styles.module.css";
import classnames from "classnames";
import { useUser } from "./hooks/useUser";
import { useIsUsersLoading } from "./hooks/useIsUsersLoading";

export const User = ({ userId, className }) => {
  const user = useUser(userId);
  const isLoading = useIsUsersLoading();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!user) {
    return null;
  }

  return <div className={classnames(styles.root, className)}>{user.name}</div>;
};
