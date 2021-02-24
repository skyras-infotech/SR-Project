import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette:{
        primary:{
            main:"#51BEFF",
        },
        secondary:{
            main:"#B6B6B6"
        }
    },
    typography:{
        fontFamily:[
            'Fredoka One',
        ].join(','),
        button:{
            textTransform:"none",
        },
    }
});

export default theme;