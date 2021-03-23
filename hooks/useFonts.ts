import { useFetch, useContext } from '@nuxtjs/composition-api';

type TFont = string | IFont;

export interface IFont {
    family: string;
    weight: string;
    style: string;
}

const getFontQuery = (fonts: TFont | TFont[]) => {
    if (fonts === 'all' || fonts === 'exclude' || fonts === 'include') {
        return fonts;
    }

    const usableFonts: string[] = [];
    const fontsArray = Array.isArray(fonts) ? fonts : [fonts];

    const fontQuery = fontsArray
        .map((font) => (typeof font !== 'string' ? font.family : font))
        .filter((font) => !usableFonts.includes(font));

    return fontQuery;
};

export default function useFonts(fonts: TFont | TFont[]) {
    const { $axios: axios } = useContext();

    const fontQuery = getFontQuery(fonts);
    useFetch(async () => {
        const fonts = await axios.get(`http://127.0.0.1:4040/api/db`, {
            params: {
                font: fontQuery
            }
        });

        console.log(fonts);
    });
}
