---
title: "Secure Your Tableau Accelerator"
domain: packagingGuide
topic: secure-your-tableau-accelerator
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.133Z
estimatedTokens: 385
keywords: [Secure, Tableau, Accelerator, Accelerators, listed, AppExchange, adhere, requirements, Allowed, Functionality, Links, URL, Actions, Sample, Data]
---

# Secure Your Tableau Accelerator

> All Tableau Accelerators listed on AppExchange must adhere to these
    requirements.

# Secure Your Tableau Accelerator

All Tableau Accelerators listed on AppExchange must adhere to these requirements.

## Allowed Functionality

Use only built-in Tableau functionality in your Accelerator. Don’t use dashboard extensions, third-party connectors from the Tableau Exchange, external first- or third-party code, or connections to external servers.

## Links and URL Actions

Don’t include URL actions or external links in your Accelerator.

## Sample Data Origin

Tableau Accelerators rely on sample data to populate the dashboards before users connect their own data. Either create this sample data yourself, or obtain the right to use and distribute the sample data so that the source can be attributed in your Accelerator listing.

## De-Identified Data

The data for your Accelerator must be de-identified. It can’t contain personally identifiable information, such as the names of real businesses or business entities. You don’t want users to be able to draw any real-world conclusions from the names or places in your dataset.

## Data Packaging

Create a flat extract of all sample data, and package it as part of the TWBX workbook file for your Accelerator. Before you package the data, hide unused fields. Don’t include live queries, even to flat files. Don’t implement custom cryptography.

## Data Source Credentials

Validate data source connections to cloud-based data, and remove credentials for cloud-based data source connections from your Accelerator. Users must enter their own credentials to connect to data.
