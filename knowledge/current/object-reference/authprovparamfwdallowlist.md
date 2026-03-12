---
title: "AuthProvParamFwdAllowlist"
domain: object-reference
topic: authprovparamfwdallowlist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.404Z
estimatedTokens: 287
keywords: [AuthProvParamFwdAllowlist, allowlisted, URL, forwarded, authentication, provider, client, configuration, URLs, authorization, add, custom, functionality, providers, allowlist]
---

# AuthProvParamFwdAllowlist

> Represents an allowlisted URL parameter that can be forwarded from
         authentication provider client configuration URLs to the authorization URL. Use this type
         to add custom functionality to authentication providers. For example, allowlist a ui_locales parameter and use it to send a user's language
         preference from Salesforce to the third-party provider's login page. This object is
      available in API version 62..0 and later.

# AuthProvParamFwdAllowlist

Represents an allowlisted URL parameter that can be forwarded from authentication provider client configuration URLs to the authorization URL. Use this type to add custom functionality to authentication providers. For example, allowlist a ui\_locales parameter and use it to send a user's language preference from Salesforce to the third-party provider's login page. This object is available in API version 62..0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AuthProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the authentication provider associated with the allowlist.This field is a relationship field.Relationship NameAuthProviderRefers ToAuthProvider |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description for the allowlisted URL parameter. |
| Param | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the parameter, such as ui_locales or login_hint. |
