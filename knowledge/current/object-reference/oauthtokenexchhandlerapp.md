---
title: "OauthTokenExchHandlerApp"
domain: object-reference
topic: oauthtokenexchhandlerapp
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.329Z
estimatedTokens: 456
keywords: [OauthTokenExchHandlerApp, enablement, settings, specific, Salesforce, connected, app, external, client, that’s, enabled, token, exchange, handler, multiple]
---

# OauthTokenExchHandlerApp

> Represents the enablement settings for a specific Salesforce connected app or
         external client app that’s enabled for the token exchange handler. A handler can be enabled
         for multiple apps. This object is available in API version 60.0 and later.

# OauthTokenExchHandlerApp

Represents the enablement settings for a specific Salesforce connected app or external client app that’s enabled for the token exchange handler. A handler can be enabled for multiple apps. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| ApexExecutionUserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the user who runs the Apex token exchange handler. We recommend that you use an integration user.This field is a relationship field.Relationship NameApexExecutionUserRelationship TypeLookupRefers ToUser |
| ConnectedApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe connected app that’s being used to integrate with Salesforce.This field is a relationship field.Relationship NameConnectedApplicationRelationship TypeLookupRefers ToConnectedApplication |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the token exchange handler is the default handler for this app. During the token exchange flow, in the token request, you can optionally include a token_handler parameter with the name of a specific handler’s Apex class. If you don’t include this parameter, Salesforce defaults to the default handler.The default value is false. |
| OauthTokenExchangeHandlerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe OauthTokenExchangeHandler with which these enablement settings are associated.This field is a relationship field.Relationship NameOauthTokenExchangeHandlerRelationship TypeLookupRefers ToOauthTokenExchangeHandler |
