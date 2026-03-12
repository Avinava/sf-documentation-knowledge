---
title: "Commerce Extension"
domain: chatterapi
topic: commerce-extension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.520Z
estimatedTokens: 308
keywords: [Commerce, Extension]
---

# Commerce Extension

> A Commerce extension.

# Commerce Extension

A Commerce extension.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| domain | String | Service domain to which the extension belongs. By convention, this is the third portion of the extension point name (epn). For example, if the epn is Commerce_Domain_Cart_Calculate, the service domain is Cart; and if the epn is Commerce_Endpoint_Account_Address, the service domain is Account. | Big, 58.0 | 58.0 |
| epn | String | Extension point name (unique identifier for an extension). For valid values, see the RegisteredExternalService object's ExtensionPointName field. | Big, 58.0 | 58.0 |
| name | String | Name of the extension. By convention, this is the fourth portion of the extension point name (epn). For example, if the epn is Commerce_Domain_Cart_Calculate, the name is Calculate. | Big, 58.0 | 58.0 |
| product | String | Extension family name. By convention, this is the first portion of the extension point name (epn). For example, if the epn is Commerce_Domain_Cart_Calculate, the extension family name is Commerce. | Big, 58.0 | 58.0 |
| type | String | Type of extension. Valid values are:DomainEndpoint | Big, 58.0 | 58.0 |
