import type { Theme } from "@mui/material/styles";

export default function componentStyleOverrides(
  theme: Theme,
  borderRadius: number,
  outlinedFilled: boolean
) {
  const bgColor = theme.palette.grey[50];
  const menuSelectedBack = theme.palette.secondary[50];
  const menuSelected = theme.palette.secondary.main;
  const transition = "all 0.3s ease-out";

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: "4px",
          minHeight: "42px",
          transition: "all 0.4s ease-in-out",
          boxShadow: "none",
          display: "flex",
          padding: "12px 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          "&:hover": {
            boxShadow: "none",
          },
          "&:disabled": {
            cursor: "not-allowed",
            pointerEvents: "auto",
          },
        },
        startIcon: {
          marginLeft: "0px",
          marginRight: "0px",
        },
        endIcon: {
          marginLeft: "0px",
        },
        contained: {
          color: theme.palette.grey[50],
          ...theme.typography.button,
          "&.icon__button": {
            padding: "10px 16px",
          },
          "&:disabled, &:disabled:hover": {
            backgroundColor: theme.palette.grey[500],
            color: theme.palette.text.secondary,
          },
        },
        outlined: {
          color: theme.palette.primary[700],
          ...theme.typography.button,
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:disabled, &:disabled:hover": {
            borderColor: theme.palette.grey[500],
            color: theme.palette.grey[500],
          },
        },
        outlinedError: {
          color: theme.palette.error[900],
          borderColor: theme.palette.error[900],
          "&:hover": {
            color: theme.palette.error[500],
            borderColor: theme.palette.error[500],
          },
        },
        containedPrimary: {
          background: theme.palette.primary[700],
          "&:hover": {
            background: theme.palette.secondary.main,
          },
        },
        containedSecondary: {
          background: theme.palette.secondary.main,
          "&:hover": {
            background: theme.palette.primary[700],
          },
        },
        outlinedPrimary: {
          borderColor: theme.palette.primary[700],
          "&:hover": {
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
          },
          "&:hover > *": {
            color: theme.palette.secondary.main,
          },
        },
        outlinedSecondary: {
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
          "&:hover": {
            color: theme.palette.primary[700],
            borderColor: theme.palette.primary[700],
          },
          "&:hover > *": {
            color: theme.palette.primary[700],
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.custom_icon_button": {
            backgroundColor: theme.palette.primary[50],
            color: theme.palette.primary[700],
            borderRadius: "4px",
            display: "flex",
            padding: "8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          },

          "&.custom_icon_button:hover": {
            backgroundColor: theme.palette.primary[700],
            color: theme.palette.primary[50],
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          borderRadius: `${borderRadius}px`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.palette.text.dark,
          padding: "24px",
        },
        title: {
          fontSize: "1.125rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          alignItems: "center",
        },
        outlined: {
          border: "1px dashed",
        },
      },
    },
    MuiListItemButton: {
      // sidebar menu items
      styleOverrides: {
        root: {
          color: theme.palette.text.secondary,
          paddingTop: "10px",
          borderRadius: "0px",
          padding: "14px 16px",
          "&.Mui-selected": {
            color: menuSelected,
            backgroundColor: menuSelectedBack,
            "&:hover": {
              backgroundColor: menuSelectedBack,
            },
            "& .MuiListItemIcon-root": {
              color: menuSelected,
            },
          },
          "&:hover": {
            backgroundColor: menuSelectedBack,
            color: menuSelected,
            "& .MuiListItemIcon-root": {
              color: menuSelected,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      // sidebar menu item icons
      styleOverrides: {
        root: {
          color: theme.palette.text.secondary,
          minWidth: "24px",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
    MuiListItemText: {
      // sidebar menu item texts
      styleOverrides: {
        root: { margin: 0 },
        primary: {
          // the below styling is used in the image gallery list during nbs registration
          ...theme.typography.body2,
          fontWeight: 500,
          color: theme.palette.grey[900],
        },
        secondary: {
          // the below styling is used in the image gallery list during nbs registration
          ...theme.typography.caption,
          fontWeight: 500,
          color: theme.palette.grey[600],
          paddingTop: "6px",
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: { minWidth: 0 },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // color of bottom border for variant 'standard' (also used in autocomplete)
          "&.MuiInput-root::before, &.MuiInput-root::after": {
            borderBottom: `1px solid ${theme.palette.grey[500]}`,
          },
          "&.MuiInput-root.Mui-error::before, &.MuiInput-root.Mui-error::after":
            {
              borderBottom: `1px solid ${theme.palette.error[800]}`,
            },
          "&.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before, &.MuiInput-root:focus:not(.Mui-disabled, .Mui-error):before, &.MuiInput-root:hover:not(.Mui-disabled, .Mui-error):after, &.MuiInput-root:focus:not(.Mui-disabled, .Mui-error):after":
            {
              borderBottom: "2px solid",
              borderBottomColor: theme.palette.secondary[500],
            },
        },
        input: {
          color: theme.palette.text.dark,
          "&::placeholder": {
            color: theme.palette.text.secondary,
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // placeholder of standard textfield
          "& .MuiInput-input": {
            "&::placeholder": {
              color: theme.palette.grey[700],
              opacity: 1,
            },
          },
          "& .Mui-error .MuiInput-input": {
            "&::placeholder": {
              color: theme.palette.error[800],
              opacity: 1,
            },
          },
          "& .Mui-focused .MuiInputAdornment-root": {
            // start Adornment for textfield on focus
            color: theme.palette.secondary[500],
          },
          "& .Mui-error .MuiInputAdornment-root": {
            // start Adornment for textfield on error
            color: theme.palette.error[800],
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...theme.typography.caption,
          marginLeft: 0,
          "&.Mui-error": {
            color: theme.palette.error[800],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: outlinedFilled ? bgColor : "transparent",
          borderRadius: `${borderRadius}px`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.grey[700],
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary[500],
            borderWidth: "2px",
          },
          "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.error[800],
            borderWidth: "2px",
          },
          "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.error[800],
            borderWidth: "2px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary[500],
            borderWidth: "2px",
          },
          "&:hover $notchedOutline": {
            borderColor: theme.palette.secondary[500],
          },
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          ...theme.typography.body2,
          color: `${theme.palette.grey[700]}`,
          background: outlinedFilled ? bgColor : "transparent",
          padding: "15.5px 14px",
          borderRadius: `${borderRadius}px`,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0,
            },
          },
          "&::placeholder": {
            ...theme.typography.body2,
            color: theme.palette.text.dark,
          },
          "&.Mui-disabled": {
            cursor: "not-allowed",
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: "12px",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: theme.palette.grey[300],
          },
        },
        mark: {
          backgroundColor: theme.palette.background.paper,
          width: "4px",
        },
        valueLabel: {
          color: theme.palette.primary.light,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          height: "52px",
          "& .MuiAutocomplete-tag": {
            //multiple autocomplete Chip
            height: "24px",
            padding: 0,
          },
          "& .MuiInput-root": {
            marginTop: "8px",
            paddingBottom: "4px",
            paddingTop: "8px",
          },
          "& .MuiInput-input::placeholder": {
            color: theme.palette.grey[700],
            opacity: 1,
          },
          "& .Mui-error .MuiInput-input::placeholder": {
            color: theme.palette.error[800],
            opacity: 1,
          },
          "& .MuiInput-input": {
            ...theme.typography.body2,
            fontWeight: 400,
            lineHeight: "140%!important",
            color: theme.palette.grey[700],
          },
          "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd": {
            "& .MuiSvgIcon-root": {
              color: "rgba(0,0,0,0.56)",
            },
          },
          "& .MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-popupIndicator, & .MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-clearIndicator":
            {
              color: "rgba(0,0,0,0.56)",
              "&:hover": {
                backgroundColor: "transparent",
              },
            },
          "& .MuiInputAdornment-root.MuiInputAdornment-positionStart": {
            // start Adornment
            color: theme.palette.grey[700],
            "& svg": {
              width: "24px",
              height: "24px",
            },
          },
          "& .Mui-error .MuiInputAdornment-root.MuiInputAdornment-positionStart":
            {
              // start Adornment when error
              color: theme.palette.error[800],
            },
          "& .Mui-focused.MuiInputBase-adornedStart": {
            // start Adornment for multiple autocomplete
            color: theme.palette.secondary[500],
          },
          "& .Mui-focused.Mui-error .MuiInputAdornment-positionStart": {
            // start Adornment for multiple autocomplete
            // color: theme.palette.error[500]
            color: `${theme.palette.error[800]}!important`,
          },
          "&.Mui-focused": {
            "& .MuiInputAdornment-root.MuiInputAdornment-positionStart": {
              color: theme.palette.secondary[500],
            },
          },
        },
        paper: {
          // the options container paper
          backgroundColor: theme.palette.background.default,
          borderRadius: "4px",
        },
        popper: {
          borderRadius: `${borderRadius}px`,
          boxShadow:
            "0px 3px 14px 2px rgba(0, 0, 0, 0.12), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 5px 5px -3px rgba(0, 0, 0, 0.20)",
        },
        inputRoot: {
          paddingRight: "0px!important",
        },
        listbox: {
          // CSS for the popover list of options
          "& .MuiAutocomplete-option": {
            ...theme.typography.body2,
            padding: "6px 16px",
            transition: transition,
            "&.Mui-focused": {
              backgroundColor: theme.palette.secondary[50],
              color: theme.palette.secondary[500],
              fontWeight: 700,
            },
          },
          '& .MuiAutocomplete-option[aria-selected="true"], & .MuiAutocomplete-option[aria-selected="true"]:hover':
            {
              fontWeight: 700,
              backgroundColor: theme.palette.secondary[50],
              color: theme.palette.secondary[500],
              "&.Mui-focused": {
                backgroundColor: theme.palette.secondary[50],
              },
            },
        },
        noOptions: {
          ...theme.typography.body2,
          color: theme.palette.text.primary,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.divider,
          opacity: 1,
          marginBottom: "16px!important", // needed for sidebar dividers
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: "transparent",
          },
          "& svg": {
            fill: theme.palette.primary[700],
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          overflow: "hidden",
          display: "flex",
          padding: "0px",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          color: theme.palette.secondary[500],
          background: theme.palette.secondary[50],
          transition: "all .2s ease-in-out",
          "&:hover": {
            color: theme.palette.text.secondary,
            background: theme.palette.secondary[500],
          },
        },
        rounded: {
          borderRadius: "4px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          ...theme.typography.caption,
          backgroundColor: theme.palette.secondary[50],
          borderRadius: "100px",
          color: theme.palette.secondary[500],
          padding: "3px 10px",
          height: "22px",
          ".MuiChip-deleteIcon": {
            color: "rgba(0,0,0,0.26)!important",
            height: "16px",
            width: "16px",
          },
          ".MuiChip-label": {
            marginTop: "2px",
          },
          "&.MuiChip-deletable .MuiChip-deleteIcon": {
            color: "inherit",
          },
        },
      },
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          color: theme.palette.text.dark,
          fontSize: "16px",
        },
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        label: {
          marginTop: 14,
          marginBottom: 14,
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiInternalDateTimePickerTabs: {
      styleOverrides: {
        tabs: {
          backgroundColor: theme.palette.primary.light,
          "& .MuiTabs-flexContainer": {
            borderColor: theme.palette.primary[200],
          },
          "& .MuiTab-root": {
            color: theme.palette.grey[900],
          },
          "& .MuiTabs-indicator": {
            backgroundColor: theme.palette.primary.dark,
          },
          "& .Mui-selected": {
            color: theme.palette.primary.dark,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          borderBottom: "1px solid",
          borderColor: theme.palette.grey[200],
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0.5,
          backgroundColor: theme.palette.background.default,
          boxShadow:
            "0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px -7px rgba(0, 0, 0, 0.20)",
          padding: 0,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          ...theme.typography.h6,
          color: theme.palette.primary[700],
          padding: "16px 24px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "16px 24px!important",
          borderTop: "1px solid rgba(0, 0, 0, 0.12)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          "& .MuiDialogContentText-root": {
            ...theme.typography.body1,
            color: theme.palette.text.primary,
            padding: 0,
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "16px 24px!important",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: theme.palette.grey[200],
          "&.MuiTableCell-head": {
            fontSize: "0.875rem",
            color: theme.palette.grey[900],
            fontWeight: 500,
          },
        },
      },
    },
    MuiDateTimePickerToolbar: {
      styleOverrides: {
        timeDigitsContainer: {
          alignItems: "center",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          ...theme.typography.body2,
          fontWeight: "400!important",
          color: theme.palette.text.secondary,
          background: theme.palette.grey[700],
          borderRadius: "4px",
          padding: "4px 8px",
        },
        arrow: {
          "&:before": {
            background: theme.palette.grey[700],
          },
        },
      },
    },

    MuiPaginationItem: {
      styleOverrides: {
        root: {
          margin: "6px",
          ...theme.typography.caption,
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary[700],
            color: theme.palette.text.secondary,
          },
          "&.Mui-selected:hover": {
            backgroundColor: `${theme.palette.primary[800]}!important`,
            color: theme.palette.text.secondary,
          },
        },
        sizeSmall: {
          height: "22px",
          width: "22px",
          minWidth: "22px",
        },
        page: {
          paddingTop: "2px",
          paddingLeft: "5px",
        },
      },
    },
    MuiDataGrid: {
      defaultProps: {
        rowHeight: 54,
      },
      styleOverrides: {
        root: {
          borderWidth: 0,
          "& .MuiDataGrid-columnHeader--filledGroup": {
            borderBottomWidth: 0,
          },
          "& .MuiDataGrid-columnHeader--emptyGroup": {
            borderBottomWidth: 0,
          },
          "& .MuiFormControl-root>.MuiInputBase-root": {
            backgroundColor: `${theme.palette.background.default} !important`,
            borderColor: `${theme.palette.divider} !important`,
          },
        },
        toolbarContainer: {
          "& .MuiButton-root": {
            paddingLeft: "16px !important",
            paddingRight: "16px !important",
          },
        },
        withBorderColor: {
          borderBottom: "1px solid",
          borderColor: theme.palette.divider,
        },
        columnHeader: {
          color: theme.palette.grey[600],
          paddingLeft: 24,
          paddingRight: 24,
        },
        footerContainer: {
          "&.MuiDataGrid-withBorderColor": {
            borderBottom: "none",
          },
        },
        columnHeaderCheckbox: {
          paddingLeft: 0,
          paddingRight: 0,
        },
        cellCheckbox: {
          paddingLeft: 0,
          paddingRight: 0,
        },
        cell: {
          borderWidth: 0,
          paddingLeft: 24,
          paddingRight: 24,
          "&.MuiDataGrid-cell--withRenderer > div ": {
            " > .high": {
              background: theme.palette.success.light,
            },
            "& > .medium": {
              background: theme.palette.warning.light,
            },
            "& > .low": {
              background: theme.palette.error.light,
            },
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "unset!important",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.palette.primary[700],
          "&:hover": {
            color: theme.palette.secondary[500],
          },
        },
      },
    },
    // input label (also used in autocomplete)
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...theme.typography.caption,
          fontSize: "14px",
          color: theme.palette.grey[500],
          "&[data-shrink=false]": {
            ...theme.typography.body2,
            fontWeight: 400,
            color: theme.palette.grey[700],
          },
          "&.Mui-focused": {
            color: theme.palette.secondary[500],
          },
          "&.Mui-error": {
            color: theme.palette.error[800],
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiFormLabel-asterisk": {
            color: theme.palette.secondary[500],
          },
          "&[data-shrink=true] .MuiFormLabel-asterisk": {
            color: theme.palette.grey[500],
          },
          "&[data-shrink=true].Mui-focused .MuiFormLabel-asterisk": {
            color: theme.palette.secondary[500],
          },
          "&[data-shrink=true].Mui-error .MuiFormLabel-asterisk": {
            color: theme.palette.error[800],
          },
        },
        asterisk: {
          color: theme.palette.grey[700],
          "&[data-shrink=false]": {
            color: theme.palette.grey[700],
          },

          "&.Mui-error": {
            color: theme.palette.error[800],
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          // switch bar background color when off
          backgroundColor: "#000000",
        },
      },
    },

    // ******* Stepper: ********//
    MuiStepper: {
      styleOverrides: {
        root: {
          minHeight: "40px",
          "& .MuiStep-root:first-of-type": {
            paddingLeft: 0,
          },
          "& .MuiStep-root:last-of-type": {
            paddingRight: 0,
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          height: "24px",
          minWidth: "24px",
          minHeight: "24px",
          color: theme.palette.grey[500],
          "&.Mui-active": {
            color: theme.palette.primary[700],
          },
          "&.Mui-completed": {
            color: theme.palette.success[800],
          },
          "&.Mui-active.Mui-error": {
            color: theme.palette.error[800],
          },
        },
        text: {
          ...theme.typography.body2,
          fontWeight: 700,
          fill: theme.palette.text.secondary,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          ...theme.typography.h6,
          color: theme.palette.grey[500],
          "&.Mui-active": {
            color: theme.palette.primary[700],
            fontWeight: 600,
          },
          "&.Mui-active.Mui-error": {
            color: theme.palette.error[800],
          },
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: "#BDBDBD",
        },
      },
    },
    // ************************//
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "0!important", //used in login form
        },
      },
    },
    MuiPopper: {
      styleOverrides: {
        root: {
          // below settings are needed for language selection dd menu
          "& .MuiList-root": {
            backgroundColor: theme.palette.background.default,
          },
          "& .MuiListItemButton-root.Mui-selected .MuiTypography-root, & .MuiListItemButton-root:hover .MuiTypography-root":
            {
              backgroundColor: theme.palette.secondary[50],
              color: theme.palette.secondary[500],
              fontWeight: 700,
            },
        },
      },
    },
  };
}
