---
title: "Limitations and Considerations Limitations and
   Considerations"
domain: pages
topic: limitations-and-considerations-limitations-and-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:21.963Z
estimatedTokens: 219
keywords: [Limitations, Considerations, known, Visualforce, Charting]
---

# Limitations and Considerations Limitations and
   Considerations

> This section lists considerations and known limitations for Visualforce Charting.

# Limitations and Considerations Limitations and Considerations

This section lists considerations and known limitations for Visualforce Charting.

-   Visualforce charts only render in browsers which support scalable vector graphics (SVG). For more information, see [W3C SVG Working Group](http://www.w3.org/Graphics/SVG/ "HTML (New Window)").
-   Visualforce charting uses JavaScript to draw the charts. Visualforce charts won’t display in pages rendered as PDFs.
-   Email clients don’t usually support JavaScript execution in messages. Don’t use Visualforce charting in email messages or email templates.
-   Visualforce charting sends errors and messages to the JavaScript console. Keep a JavaScript debugging tool, such as Chrome DevTools or Safari Web Inspector, active during development.
-   Dynamic (Apex-generated) charting components aren’t supported at this time.
