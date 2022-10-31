import React from "react";

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;
    const cssLinkId = `micro-frontend-css-${name}`;
    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "cors";
        script.src = `${host}${manifest["files"]["main.js"]}`;
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);

        const css = document.createElement("link");
        css.id = cssLinkId;
        css.rel = "stylesheet"
        css.crossOrigin = "cors";
        css.href = `${host}${manifest["files"]["main.css"]}`;
        css.onload = this.renderMicroFrontend;
        document.head.appendChild(css);

      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;

    window[`createRoot${name}`] &&
      window[`createRoot${name}`](`${name}-container`, history);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
