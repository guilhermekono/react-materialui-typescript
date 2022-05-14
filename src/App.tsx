import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightTheme } from "./shared/themes";
import { AppThemeProvider} from './shared/contexts/ThemeContext'

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <div className="App">
          <AppRoutes/>
        </div>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

