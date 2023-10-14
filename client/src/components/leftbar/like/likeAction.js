import { PRODUCT_API } from "../../../helpers/const";
export const toggleProductLike = createAsyncThunk(
  "products/toggleProductLike",
  async ({ setIsLike, likes, productId }, { dispatch }) => {
    const user = getAuthUser();
    let updatedLikesArr;

    if (!likes) {
      updatedLikesArr = [];
    } else {
      updatedLikesArr = [...likes];
    }

    if (setIsLike) {
      updatedLikesArr.push({
        id: Date.now(),
        user,
      });
    } else {
      updatedLikesArr = updatedLikesArr.filter((like) => like.user !== user);
    }

    await axios.patch(`${PRODUCT_API}/${productId}`, {
      likes: updatedLikesArr,
    });

    dispatch(getProducts());
  }
);
