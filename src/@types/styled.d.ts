import 'styled-components'
import { defaultTheme } from './../Styles/theme';
import { defaultTheme } from '../Styles/theme'


type ThemeType = typeof defaultTheme;


declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}