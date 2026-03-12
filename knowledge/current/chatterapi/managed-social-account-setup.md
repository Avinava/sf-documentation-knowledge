---
title: "Managed Social Account Setup"
domain: chatterapi
topic: managed-social-account-setup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.709Z
estimatedTokens: 648
keywords: [Managed, Social, Account, Setup, Manage, fan, network]
---

# Managed Social Account Setup

> Manage a social account.

# Managed Social Account Setup

Manage a social account.

Resource

```

```

Available version

44.0–61.0

HTTP methods

GET, PATCH, DELETE

Request body for PATCH

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

Response body for GET and PATCH

[Managed Social Account Setup](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_social_account_setup_output.htm "Describes the setup details of a managed social account or fan page of a social network.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/social-engagement/setup/managed-social-accounts/id
```

```
{ 
  "managedAccountId" : "exampleSocialStudioId",
  "socialNetwork" : "Facebook",
  "parentProviderUserId" : "exampleFacebookUserId",
  "providerUserId" : "exampleFacebookFanpageId",
  "status" : "Running"
}
```

## Related Topics

- Managed Social Account Setup (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_social_account_setup_output.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
