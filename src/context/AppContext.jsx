import React, {useState, useContext} from 'react';

export const LANGUAGE = {
    EN: 'English',
    CN: '简体中文',
}

export const LANGUAGES = [LANGUAGE.EN, LANGUAGE.CN]

export const AppContext = React.createContext({});

export const AppProvider = ({children}) => {
    const [lang,setLang] = useState(LANGUAGES.EN);

    return(
        <AppContext.Provider value={{lang, setLang, LANGUAGE, LANGUAGES}}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext);

export default AppProvider;