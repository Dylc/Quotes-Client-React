import React from 'react';
import './App.css';
import MyHeaderAppBar from './common/AppBar';
import { IntlProvider } from "react-intl";
import messages from "./lang";
import { selectLang } from "../src/features/contextMenu/contextMenuSlice";
import { useAppSelector } from "../src/app/hooks";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';
import Searched from './pages/Searched';

const THEME = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

function App() {

  const selectedLang = useAppSelector(selectLang);
  
  return (
    <ThemeProvider theme={THEME}>
      <IntlProvider messages={messages[selectedLang]} locale={selectedLang}>
        <Router>
          <Switch>
            <div className="App">
              <div className="App-container">
                <MyHeaderAppBar />
                <Route exact path="/searched">
                  <Searched />
                </Route>
                <Route path="/add">
                  <Add />
                </Route>
                <Route path="/edit">
                  <Edit />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </div>
            </div>
          </Switch>
        </Router>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
