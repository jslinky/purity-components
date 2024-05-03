import type { GlobalFontProps, FontListSystem, GoogleFontList } from "@/types"

const globalFontProps: GlobalFontProps = {
    fonts: {
        'font-family-base': {
            name: ''
        },
        'heading-font-family': {
            name: ''
        },        
    }
}

/// Couuld loop through here and ouput it, also being outputed by scss/props/font-family. No single source of truth atm
export const systemFontDefinitions: Record<FontListSystem, string> = {
    'sans-system-ui': "system-ui, sans-serif",
    'sans-humanist': "Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif",
    'sans-geometric-humanist': "Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif",
    'sans-classical-humanist': "Optima, Candara, 'Noto Sans', source-sans-pro, sans-serif",
    'sans-neo-grotesque': "Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif",
    'sans-industrial': "Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow', sans-serif-condensed, sans-serif",
    'sans-rounded-sans': "ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand, Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold', Calibri, source-sans-pro, sans-serif",
    'serif-transitional': "Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif",
    'serif-old-style': "'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif",
    'serif-slab-serif': "Rockwell, 'Rockwell Nova', 'Roboto Slab', 'DejaVu Serif', 'Sitka Small', serif",
    'serif-antique': "Superclarendon, 'Bookman Old Style', 'URW Bookman', 'URW Bookman L', 'Georgia Pro', Georgia, serif",
    'serif-didone': "Didot, 'Bodoni MT', 'Noto Serif Display', 'URW Palladio L', P052, Sylfaen, serif",
    'monospace-slab-serif': "'Nimbus Mono PS', 'Courier New', monospace",
    'monospace-code': "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
    'cursive-handwritten': "'Segoe Print', 'Bradley Hand', Chilanka, TSCu_Comic, casual, cursive",
}

export const googleFontDefinitions: Record<GoogleFontList, string> = {
    "sans-montserrat": "'Montserrat', sans-serif",
}

export default globalFontProps