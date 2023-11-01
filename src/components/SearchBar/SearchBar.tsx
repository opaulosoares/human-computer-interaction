// React MUI SearchBar Component without alpha or styled

import React from "react";
import { InputBase, Paper, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { Search } from "@mui/icons-material";

interface SearchBarProps {
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder,
    onChange,
    value,
}: SearchBarProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Paper
            component="form"
            sx={{
                p: "0.5rem 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                boxSizing: "border-box",
                gap: 2,
                bgcolor: "transparent",
                border: `1px solid ${colors.neutral[10]}`,
            }}
            elevation={0}
        >
            <Search />
            <InputBase
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                size="small"
                sx={{ verticalAlign: "center" }}
            />
        </Paper>
    );
};

export default SearchBar;
