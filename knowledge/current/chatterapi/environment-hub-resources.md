---
title: "Environment Hub Resources"
domain: chatterapi
topic: environment-hub-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.978Z
estimatedTokens: 259
keywords: [Environment, Hub, Resources, new, orgs, connect]
---

# Environment Hub Resources

> Use Environment Hub resources to create new orgs and connect existing orgs to the
    hub.

# Environment Hub Resources

Use Environment Hub resources to create new orgs and connect existing orgs to the hub.

Available resources:

| Resource | Description |
| --- | --- |
| /connect/environment-hub/my-domain-validation/myDomain | Validates that the specified My Domain name is available, valid, and unique. Your My Domain name determines the URLs used when you enable single sign-on or connect existing organizations to Environment Hub. |
| /connect/environment-hub/oauth-url-generator/username | Generates the URL used to initiate the OAuth workflow that connects an org to the Environment Hub. |
| /connect/environment-hub/signup-member-validation/username | Validates the input parameters used to initiate an org sign-up in the Environment Hub. |
| /connect/environment-hub/sso-user-mappings/hubMemberId | Creates an SSO mapping between an Environment Hub user and a user in a hub member org. An SSO user mapping lets the Environment Hub user log in as the mapped user in the member org without having to re-authenticate. |

## Related Topics

- /connect/environment-hub/my-domain-validation/myDomain (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_environment_hub_my_domain_validation.htm)
- /connect/environment-hub/oauth-url-generator/username (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_environment_hub_oauth_url_generator.htm)
- /connect/environment-hub/signup-member-validation/username (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_enviroment_hub_signup_member_validation.htm)
- /connect/environment-hub/sso-user-mappings/hubMemberId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_environment_hub_sso_mapping.htm)
