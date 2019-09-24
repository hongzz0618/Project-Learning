import React from "react";
import { withLocalize } from "react-localize-redux";
import "./estilosBotonesIdiomas.css";

// import './css/language-toggle.css';

class TriaIdioma extends React.Component {

  render() {

    let languages = this.props.languages;
    let activeLanguage = this.props.activeLanguage;

    return (
      <ul className="selector">
        {languages.map(lang => (  
          <li className="liLista" key={lang.code}>
            <button className="botonesIdiomas" onClick={() => this.props.setActiveLanguage(lang.code)}>
              {lang.name}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default withLocalize(TriaIdioma);

