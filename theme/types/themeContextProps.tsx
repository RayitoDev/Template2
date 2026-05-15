type ThemeContextProps = {
    mode: 'light' | 'dark';
    toggleMode: () => void;
    setDefaultMode: (mode: 'light' | 'dark') => void;
}

export default ThemeContextProps;