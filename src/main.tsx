import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./theme.ts";
import { ThemeProvider } from "styled-components";
import { ConfigProvider } from "antd";

const antdTheme = {
  token: {
    colorPrimary: "#6b47ed",
  },
  components: {},
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={antdTheme}>
        <App />
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>
);
