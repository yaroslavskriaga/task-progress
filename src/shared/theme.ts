import { createTheme } from "@mui/material";

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
          color: "#999999",
          "&.Mui-checked": {
            color: "#00B797",
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
          border: "1px solid #DDDDDD",
          borderRadius: 0,
          color: "unset",
          "&:nth-child(3)": {
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            borderBottom: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
          "&:last-of-type": {
            borderBottom: "1px solid #DDDDDD",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderTop: 0,
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
          backgroundColor: "#00B797",
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "#00B797",
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
              color: "#00B797",
            },
          },
          "&.accordion-expand-title": {
            color: "#999999",
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
