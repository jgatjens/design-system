/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface NiCircleText {
    'text': string;
  }
  interface NiCities {
    'items': any;
  }
  interface NiCopyright {
    'bg': string;
    'items': any;
    'text': string;
  }
  interface NiFooter {
    'bg': string;
  }
  interface NiGlobalCss {}
}

declare global {


  interface HTMLNiCircleTextElement extends Components.NiCircleText, HTMLStencilElement {}
  var HTMLNiCircleTextElement: {
    prototype: HTMLNiCircleTextElement;
    new (): HTMLNiCircleTextElement;
  };

  interface HTMLNiCitiesElement extends Components.NiCities, HTMLStencilElement {}
  var HTMLNiCitiesElement: {
    prototype: HTMLNiCitiesElement;
    new (): HTMLNiCitiesElement;
  };

  interface HTMLNiCopyrightElement extends Components.NiCopyright, HTMLStencilElement {}
  var HTMLNiCopyrightElement: {
    prototype: HTMLNiCopyrightElement;
    new (): HTMLNiCopyrightElement;
  };

  interface HTMLNiFooterElement extends Components.NiFooter, HTMLStencilElement {}
  var HTMLNiFooterElement: {
    prototype: HTMLNiFooterElement;
    new (): HTMLNiFooterElement;
  };

  interface HTMLNiGlobalCssElement extends Components.NiGlobalCss, HTMLStencilElement {}
  var HTMLNiGlobalCssElement: {
    prototype: HTMLNiGlobalCssElement;
    new (): HTMLNiGlobalCssElement;
  };
  interface HTMLElementTagNameMap {
    'ni-circle-text': HTMLNiCircleTextElement;
    'ni-cities': HTMLNiCitiesElement;
    'ni-copyright': HTMLNiCopyrightElement;
    'ni-footer': HTMLNiFooterElement;
    'ni-global-css': HTMLNiGlobalCssElement;
  }
}

declare namespace LocalJSX {
  interface NiCircleText {
    'text'?: string;
  }
  interface NiCities {
    'items'?: any;
  }
  interface NiCopyright {
    'bg'?: string;
    'items'?: any;
    'text'?: string;
  }
  interface NiFooter {
    'bg'?: string;
  }
  interface NiGlobalCss {}

  interface IntrinsicElements {
    'ni-circle-text': NiCircleText;
    'ni-cities': NiCities;
    'ni-copyright': NiCopyright;
    'ni-footer': NiFooter;
    'ni-global-css': NiGlobalCss;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ni-circle-text': LocalJSX.NiCircleText & JSXBase.HTMLAttributes<HTMLNiCircleTextElement>;
      'ni-cities': LocalJSX.NiCities & JSXBase.HTMLAttributes<HTMLNiCitiesElement>;
      'ni-copyright': LocalJSX.NiCopyright & JSXBase.HTMLAttributes<HTMLNiCopyrightElement>;
      'ni-footer': LocalJSX.NiFooter & JSXBase.HTMLAttributes<HTMLNiFooterElement>;
      'ni-global-css': LocalJSX.NiGlobalCss & JSXBase.HTMLAttributes<HTMLNiGlobalCssElement>;
    }
  }
}

