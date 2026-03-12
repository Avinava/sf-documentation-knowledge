---
title: "OauthCustomScopeApp"
domain: object-reference
topic: oauthcustomscopeapp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.306Z
estimatedTokens: 209
keywords: [OauthCustomScopeApp, connected, app, custom, scope, assigned, API, version, 49.0, later, Calls]
---

# OauthCustomScopeApp

> Represents the name of the connected app to which the custom scope is
      assigned. This object is available in API version 49.0 and later.

# OauthCustomScopeApp

Represents the name of the connected app to which the custom scope is assigned. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| OauthCustomScopeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the connected app to which the custom scope is assigned. If the connected app is part of a package, include the package’s namespace prefix with the connected app’s name. Use the following format: <namespace_prefix>__<connected_app>. Use two underscores (_) between the namespace prefix and connected app’s name.This is a relationship field.Relationship NameOauthCustomScopeRelationship TypeLookupRefers ToOauthCustomScope |
