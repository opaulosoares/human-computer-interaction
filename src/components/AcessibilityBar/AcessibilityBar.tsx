import React, { useEffect, useState } from "react";
import AccessibleIcon from "@mui/icons-material/Accessible";
import "./index.css";

const AccessibilityBar: React.FC = () => {
  const [searchBar, setSearchBar] = useState<HTMLInputElement>(null as any);
  const [contrast, setContrast] = useState(false);

  useEffect(() => {
    setSearchBar(document.querySelector("#searchbar") as HTMLInputElement);
  }, []);

  const toggleContrast = () => {
    setContrast(!contrast);
    // Adicione lógica para alternar o modo de alto contraste na aplicação
  };

  const focusSearchBar = () => {
    searchBar?.focus();
  };

  const decreaseFontSize = () => {
    // Adicione lógica para diminuir o tamanho da fonte na aplicação
  };

  const jumpToContent = () => {
    document
      .getElementById("main-content")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  console.log(searchBar);

  return (
    <div
      className="accessibility-bar"
      style={{
        height: "32px",
        background: "#174931",
        display: "flex",
        alignItems: "center",
      }}
    >
      <button className="borderless-btn">
        <AccessibleIcon sx={{ fontSize: 14 }} />
        {" "}Acessibilidade
      </button>
      <a className="borderless-btn" href="#menu">
        Ir para menu [1]
      </a>
      <a className="borderless-btn" href="#sales">
        Ir para conteúdo [2]
      </a>
      <button className="borderless-btn" onClick={focusSearchBar}>
        Ir para pesquisa [3]
      </button>
    </div>
  );
};

export default AccessibilityBar;
