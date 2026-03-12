---
title: "Social Customer Service Configuration"
domain: chatterapi
topic: social-customer-service-configuration
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:21.047Z
estimatedTokens: 577
keywords: [Social, Customer, Service, Configuration, current]
---

# Social Customer Service Configuration

> The current configuration of Social Customer
    Service.

# Social Customer Service Configuration

The current configuration of Social Customer Service.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| inboundApex​HandlerId | String | ID of the Apex class that handles inbound social data. | Small, 44.0 | 44.0 |
| isAllFBResponse​AccountsEnabled | Boolean | Indicates whether the org has access to all Facebook accounts when responding to a post (true) or just the Facebook account that the post was sent to (false). | Small, 55.0 | 55.0 |
| isInbound​ParentPostEnabled | Boolean | Indicates whether a social post's parent is sent to this org. | Small, 44.0 | 44.0 |
| inbound​Processing​Concurrency​Enabled | Boolean | Indicates whether your org allows concurrent processing of inbound social posts written by different people (true) or not (false). Social posts written by the same person are processed one at a time instead of simultaneously. | Small, 53.0 | 53.0 |
| isPackageInstalled | Boolean | Indicates whether a Social Customer Service package is installed to this org. | Small, 44.0 | 44.0 |
| isSocialPublishing​ApprovalEnabled | Boolean | Indicates whether some agents require approval before publishing social posts. | Small, 44.0 | 44.0 |
| isTenant​ConnectionValid | Boolean | Indicates whether the tenant connection is valid. This value is true if we're able to connect to Social Studio and false if you must reauthenticate to Social Studio using the setupTenantUrl response parameter. | Small, 44.0 | 40.0 |
| managedSocial​AccountCount | Integer | Current number of social accounts that this org has. | Small, 44.0 | 44.0 |
| managedSocial​AccountLimit | Integer | Maximum number of social accounts that this org is allowed to have. | Small, 44.0 | 44.0 |
| providerSettings | Social Customer Service Provider Settings[] | List of Social Customer Service settings related to the behavior of specific social networks. | Small, 45.0 | 45.0 |
| runAsUserId | String | ID of the context user. | Small, 44.0 | 44.0 |
| setupTenantUrl | String | Setup tenant URL used to direct the user's browser to authorize their tenant. | Small, 44.0 | 40.0 |
| tenantType | String | Type of tenant in this org (for example, Starter). Null if no tenant is configured. | Small, 44.0 | 44.0 |

## Related Topics

- Social Customer Service Provider Settings (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scs_provider_settings_output.htm)
