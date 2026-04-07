---
title: "Troubleshoot Custom Activities"
domain: mc-app-development
topic: troubleshoot-custom-activities
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:21.467Z
estimatedTokens: 220
keywords: [Troubleshoot, Activities, questions, help, isolate, potential, issues, may, occur, creating, attempting, load, activity, Journey, Builder]
---

> These questions help you isolate potential issues that may occur while creating and attempting to load a custom activity in Journey Builder.

# Troubleshoot Custom Activities

These questions help you isolate potential issues that may occur while creating and attempting to load a custom activity in Journey Builder.

-   Is the endpoint for the application web-accessible and SSL-enabled?
-   Is the config.json file built with valid JSON? Use a JSON linter to verify.
-   Does the file include any BOMs? Journey Builder does not parse BOMs correctly.
-   Are all required fields defined in the config.json file?
-   Does the config.json's key property match the installed package component's key field? If the key is missing or incorrect, Journey Builder overrides the config.json file.
-   Is the installed package component's Endpoint URL set to the directory containing the config.json file?
-   Did the custom activity time out? The maximum timeout for the custom activity is 60 seconds, and there is no retry logic.
