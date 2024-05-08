import type { SurfaceThemeTypes } from "../types";

const useSurfaceTheme = () => {
    return [
        "light",
        "eggshell",
        "dark",        
        "primary",
        "primary-light",
        "primary-dark",
        "secondary",
        "secondary-light",
        "secondary-dark",
        "accent",
        "accent-light",
        "accent-dark",
      ] as SurfaceThemeTypes[];      
}

export default useSurfaceTheme;