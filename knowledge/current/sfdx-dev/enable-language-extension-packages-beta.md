---
title: "Enable Language Extension Packages (Beta)"
domain: sfdx-dev
topic: enable-language-extension-packages-beta
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.001Z
estimatedTokens: 262
keywords: [Enable, Language, Extension, Packages, Beta, Dev, Hub, contain, translations, components, feature, unlocked, first-, second-generation, managed]
---

# Enable Language Extension Packages (Beta)

> Enable Language Extension Packages in Dev Hub to create language extension packages that
  contain translations of components in other packages. This feature is available in unlocked and
  first- and second-generation managed packages.

# Enable Language Extension Packages (Beta)

Enable Language Extension Packages in Dev Hub to create language extension packages that contain translations of components in other packages. This feature is available in unlocked and first- and second-generation managed packages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

This feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at [Agreements and Terms](https://www.salesforce.com/company/legal/agreements/).

Language extension packages can only contain Translations and CustomObjectTranslations. If a base package includes components that can’t be translated, those components aren’t included when you create a language extension package.

1.  In Dev Hub, from Setup, in the Quick Find box, enter Dev Hub, and then select **Dev Hub**.
2.  On the Dev Hub Setup page, turn on **Enable Language Extension Packages**.
