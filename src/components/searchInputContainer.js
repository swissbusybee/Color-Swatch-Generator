import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

export default function SearchInputContainer({
  searchInput,
  handleSearchInput,
  getImageData,
}) {
  return (
    <Box p={2}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={searchInput}
        onChange={handleSearchInput}
        InputProps={{
          endAdornment: (
            <IconButton onClick={getImageData}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}
