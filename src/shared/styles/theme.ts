import { createTheme } from "@mui/material";
import { color_palette } from "shared/styles/palette";

export const theme = createTheme({
  typography: {
    fontFamily: "Source Sans Pro, Arial, sans-serif",
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: "1rem",
          height: "1rem",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          color: color_palette.main.greyscale_500,
          "&.Mui-checked": {
            color: color_palette.main.success_semi_dark,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "8px 32px 32px",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0 25px",
        },
        content: {
          justifyContent: "space-between",
          margin: "24px 0",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        rounded: {
          border: `1px solid ${color_palette.main.greyscale_300}`,
          color: "unset",
          borderRadius: 0,
          borderBottom: 0,
          "&.first-accordion": {
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          },
          "&:last-of-type": {
            borderBottom: `1px solid ${color_palette.main.greyscale_300}`,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        },
        root: {
          "&.Mui-expanded": {
            margin: 0,
          },
          "&:before": {
            position: "unset",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        bar1Indeterminate: {
          backgroundColor: color_palette.main.success_semi_dark,
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: color_palette.main.success_semi_dark,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.accordion-title": {
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "22px",
            "&.success": {
              color: color_palette.main.success_semi_dark,
            },
          },
          "&.accordion-expand-title": {
            color: color_palette.main.greyscale_500,
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "20px",
          },
        },
        h3: {
          fontWeight: 700,
          fontSize: "22px",
          lineHeight: "24px",
        },
      },
    },
  },
  palette: {
    mode: "light",
  },
});
