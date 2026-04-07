---
title: "SmartStore Soups"
domain: mobile-sdk
topic: smartstore-soups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.792Z
estimatedTokens: 404
keywords: [SmartStore, Soups, let, partition, offline, content]
---

# SmartStore Soups

> SmartStore soups let you
  partition your offline content.

# SmartStore Soups

SmartStore soups let you partition your offline content.

SmartStore stores offline data in logical collections known as soups. A SmartStore soup represents a single table in the underlying SQLite database, or store, and typically maps to a standard or custom Salesforce object. Soups contain soup elements. Each element is a JSON object that mirrors a single database row. To streamline data access, you define indexes for each soup. You use these indexes to query the soup with either SmartStore helper methods or SmartStore’s Smart SQL query language. SmartStore indexes also make your life easier by supporting full-text search queries.

It’s helpful to think of soups as tables, and stores as databases. You can define as many soups as you like in an application. As self-contained data sets, soups don’t have predefined relationships to each other, but you can use Smart SQL joins to query across them. Also, in native apps you can write to multiple soups within a transaction.

![Warning](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_warning.png&folder=mobile_sdk)

#### Warning

SmartStore data is volatile. In most cases, its lifespan is tied to the authenticated user and to OAuth token states. When the user logs out of the app, SmartStore deletes all soup data associated with that user. Similarly, when the OAuth refresh token is revoked or expires, the user’s app state is reset, and all data in SmartStore is purged. When designing your app, consider the volatility of SmartStore data, especially if your organization sets a short lifetime for the refresh token.
