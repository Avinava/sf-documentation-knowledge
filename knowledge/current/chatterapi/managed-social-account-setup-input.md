---
title: "Managed Social Account Setup Input"
domain: chatterapi
topic: managed-social-account-setup-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:11.651Z
estimatedTokens: 482
keywords: [Managed, Social, Account, Setup, Input, Data]
---

# Managed Social Account Setup Input

> Data required to create a managed social account.

# Managed Social Account Setup Input

Data required to create a managed social account.

Root XML tag

<managedSocialAccountSetup>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| managedAccountId | String | ID for this managed account in a third-party system (for example, Social Studio). | Required | 44.0 |
| parentProvider​UserId | String | User ID of the user on the social network if the managed social account is a fan page (for example, a Facebook fan page). | Required when using Facebook for POST requests to /connect/social-​engagement/setup​/managed-social-​accounts. Otherwise it is optional. | 44.0 |
| providerUserId | String | User ID of the user on the social network, or the Page ID of the page if the managed social account is a fan page. | Required for POST requests to /connect/social-​engagement/setup/​managed-social-​accounts. Optional for PATCH requests to /connect/social-​engagement/setup/​managed-social-​accounts/id. | 44.0 |
| socialNetwork | String | Social network that this account belongs to. Values are:FacebookTwitterInstagram (if your org supports it)YouTube (if your org supports it)To see which networks are available on your org, check with your Salesforce representative. | Required for POST requests to /connect/social-​engagement/setup/​managed-social-​accounts. Optional for PATCH requests to /connect/social-​engagement/setup/​managed-social-​accounts/id. | 44.0 |
| status | String | Status of this managed social account. Values are:Running—Posts for this social account are being sent to your org.Stopped—Posts for this social account aren’t being sent to your org.Use this field to start and stop inbound activity for a given social account. Defaults to Running for a Social Customer Service Starter/Pro tenant; defaults to Stopped for a Full Social Studio tenant. | Optional | 44.0 |

## Code Examples

```
{ 
  "managedAccountId" : "exampleSocialStudioId",
  "socialNetwork" : "Facebook",
  "parentProviderUserId" : "exampleFacebookUserId",
  "providerUserId" : "exampleFacebookFanpageId",
  "status" : "Running"
}
```
