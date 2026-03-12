---
title: "Slow Deployments"
domain: metadata-api
topic: slow-deployments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.719Z
estimatedTokens: 258
keywords: [Slow, Deployments, file-based, Metadata, API, deployment, occurs, during, server, downtime, such, Salesforce, service, upgrade, take, longer, expected., behavior, happens, because]
---

# Slow Deployments

> If a file-based Metadata API deployment occurs during server downtime, such as a
    Salesforce service upgrade, the deployment can take longer than expected. This behavior happens
    because both component deployment and validation are retried from the beginning after the
    service is restored. However, if Apex tests were part of the deployment, only tests that weren’t
    run before the downtime are run.

# Slow Deployments

If a file-based Metadata API deployment occurs during server downtime, such as a Salesforce service upgrade, the deployment can take longer than expected. This behavior happens because both component deployment and validation are retried from the beginning after the service is restored. However, if Apex tests were part of the deployment, only tests that weren’t run before the downtime are run.

This behavior affects file-based deployment and retrieval, change sets, some package installs and upgrades, second-generation managed package creation, and deploys and retrieves started from the Salesforce CLI or the Salesforce VS Code extensions. It doesn’t affect CRUD-based metadata operations.

If your instance is due for a planned service upgrade, avoid running deployments during the service upgrade. To check whether your Salesforce instance is due for an upgrade, check Salesforce Trust. Salesforce performs major service upgrades three times per year and other maintenance updates throughout the year.
