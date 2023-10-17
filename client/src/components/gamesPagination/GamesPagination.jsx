import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../store/games/gamesSlice";
import { getGames } from "../../store/games/gamesActions";

export default function GamesPagination() {
  const { currentPage, totalPages } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(changePage({ page: value }));
    dispatch(getGames());
  };

  return (
    <Stack
      className="pagination"
      sx={{ margin: "20px", borderRadius: "20px" }}
      spacing={2}
    >
      <Pagination
        className="paginationBody"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "5px",
          borderRadius: "20px",
        }}
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
