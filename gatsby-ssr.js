/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

import React from "react"
import { renderToString } from "react-dom/server"
import createEmotionServer from "@emotion/server/create-instance"

import createCache from "@emotion/cache"

export const replaceRenderer = ({ bodyComponent, setHeadComponents }) => {
  const cache = createCache({ key: "css" })
  const { extractCriticalToChunks } = createEmotionServer(cache)

  const html = renderToString(bodyComponent)
  const chunks = extractCriticalToChunks(html)

  setHeadComponents(
    chunks.styles.map(style => (
      <style
        key={style.key}
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ))
  )
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="init-color-mode"
      dangerouslySetInnerHTML={{
        __html: `
      (function() {
        try {
          var mode = localStorage.getItem('theme-ui-color-mode') || 'light';
          document.documentElement.setAttribute('data-theme-ui-color-mode', mode);
        } catch (e) {}
      })();
    `,
      }}
    />,
  ])
}
