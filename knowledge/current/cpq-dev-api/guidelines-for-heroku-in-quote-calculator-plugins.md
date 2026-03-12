---
title: "Guidelines for Heroku in Quote Calculator Plugins"
domain: cpq-dev-api
topic: guidelines-for-heroku-in-quote-calculator-plugins
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:23.739Z
estimatedTokens: 262
keywords: [Guidelines, Heroku, Quote, Calculator, Plugins, Salesforce, CPQ, call, perform, asynchronous, calculations, write, plugin, review, working]
---

# Guidelines for Heroku in Quote Calculator Plugins

> Salesforce CPQ quote calculator plugins call Heroku to perform asynchronous
  calculations. When you write a quote calculator plugin, review important guidelines for working
  with the Heroku service.

# Guidelines for Heroku in Quote Calculator Plugins

Salesforce CPQ quote calculator plugins call Heroku to perform asynchronous calculations. When you write a quote calculator plugin, review important guidelines for working with the Heroku service.

-   Quote calculator plugins perform synchronous calculations in the quote line editor UI, within a standard web browser with all expected platform and browser information available. However, asynchronous calculations occur within a Heroku application outside of the web browser. If your plugin must reference the state of the platform running the calculation, make sure to account for whether the quote line editor or Heroku is handling the calculation.
-   If your plugin makes callouts to an endpoint that you own, make sure that both the local Salesforce host and your external Heroku host can access the endpoint URI.
-   The total time for a calculation plus the time for a callout to Heroku from your system can’t be longer than 30 seconds. Otherwise, Heroku will terminate the calculation.
