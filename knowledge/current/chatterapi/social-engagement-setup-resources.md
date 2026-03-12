---
title: "Social Engagement Setup Resources"
domain: chatterapi
topic: social-engagement-setup-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.670Z
estimatedTokens: 756
keywords: [Social, Engagement, Setup, Resources, Configure, Customer, Service, product]
---

# Social Engagement Setup Resources

> Configure the Social Customer Service product.

# Social Engagement Setup Resources

Configure the Social Customer Service product.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Social Studio was retired on November 18, 2024.

When authenticating a managed social account, follow these guidelines for a typical flow.

1.  Make a GET request to /connect/social-engagement/setup/managed-social-accounts/authentication using the social network parameter (socialNetwork) and a callback URL (callbackUrl) to your own service.
2.  The response to the GET request contains an OAuth URL (oauthUrl) used to initiate authentication, and an OAuth JWT (oauthJWT) used for security purposes.
3.  Present a browser form to the admin where the form's action is set to the OAuth URL (oauthUrl), the form's method is POST, and the form has a single hidden field called stringToken set to the OAuth JWT (oauthJWT) value.
4.  Submit the form, so that the browser redirects to the OAuth URL (oauthUrl) that presents the admin with the login page for the desired social network.
5.  The admin logs in with their social network credentials and grants permission to the app.
6.  The browser redirects back to the callback URL (callbackUrl) with an accountId query parameter appended to the end of the URL.
7.  The service running at the callback URL location captures the accountId query parameter and makes a GET request to /connect/social-engagement/setup/managed-social-accounts. Set the managedAccountId parameter to the accountId value you got from the query parameter.
8.  The response to the GET contains a list of social accounts from the social network that can be added to Social Customer Service, along with any accounts that have already been added. The already added accounts have id values specified.
9.  Take any social account without an ID from the previous step and copy the information to a POST request to /connect/social-engagement/setup/managed-social-accounts, which adds the social account to Social Customer Service.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/social-engagement/setup | Enable and disable Social Customer Service. |
| /connect/social-engagement/setup/​config | Get and update the Social Customer Service configuration. |
| /connect/social-engagement/setup/​managed-social-accounts/authentication | Get data relevant to authentication for social networks. |
| /connect/social-engagement/setup/​managed-social-accounts | Add managed social accounts and get managed social accounts from a recently authenticated social network. |
| /connect/social-engagement/setup/​managed-social-accounts/id | Manage a social account. |
| /connect/social-engagement/terms-of-service | Get and accept the terms of service. Make a PUT request to read the terms of service and then make a PATCH request to accept them. |

#### See Also

-   [*Knowledge Article*: Marketing Cloud Social Studio Retirement](https://help.salesforce.com/s/articleView?id=000392005&type=1&language=en_US)

## Related Topics

- /connect/social-engagement/setup (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_social_engagement_setup.htm)
- /connect/social-engagement/setup/​config (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_social_engagement_setup_config.htm)
- /connect/social-engagement/setup/​managed-social-accounts/authentication (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_social_accounts_setup_authentication.htm)
- /connect/social-engagement/setup/​managed-social-accounts (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_social_accounts_setup.htm)
- /connect/social-engagement/setup/​managed-social-accounts/id (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_social_account_setup.htm)
- /connect/social-engagement/terms-of-service (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_social_engagement_tos.htm)
