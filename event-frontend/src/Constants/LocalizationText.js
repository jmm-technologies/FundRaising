import { useTranslation } from "react-i18next"

export const LangText = (key)=>
{
    const {t} = useTranslation()
    return t(key)
}