import { Review } from "./Review";
import { ReviewWithoutUser } from "./ReviewWithoutUser";
import { withAuthorization } from "../../hocs/withAuthorization";

export const ReviewWithAuthorization = withAuthorization(
  Review,
  ReviewWithoutUser
);
