import React from "react";
import { withLocalize } from "react-localize-redux";
import "./estilosBotonesIdiomas.css";

// import './css/language-toggle.css';

class TriaIdioma extends React.Component {

  render() {

    let languages = this.props.languages;
    let activeLanguage = this.props.activeLanguage;

    return (
      <div className="selector editar">
        {languages.map(lang => (  
          <div className="liLista" key={lang.code}>
            <button className="botonesIdiomas" onClick={() => this.props.setActiveLanguage(lang.code)}>
              {lang.name}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default withLocalize(TriaIdioma);

