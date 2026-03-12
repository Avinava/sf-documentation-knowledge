---
title: "Identify Who Interacted with Your Packaged Component"
domain: pkg2-dev
topic: identify-who-interacted-with-your-packaged-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.013Z
estimatedTokens: 383
keywords: [Identify, Interacted, Packaged, Component, subscriber, org, user, triggered, interaction]
---

# Identify Who Interacted with Your Packaged Component

> After you identify your packaged component, identify both the subscriber org and the
  user who triggered the interaction.

# Identify Who Interacted with Your Packaged Component

After you identify your packaged component, identify both the subscriber org and the user who triggered the interaction.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


-   Identify the subscriber org with the organization\_id. Some standard fields are always populated and provide you with info about the subscriber org. Some supplemental fields, when populated, add detail about that org.

    This table describes the subscriber org fields.

    | Standard Fields | Supplemental Fields |
    | --- | --- |
    | organization_nameorganization_statusorganization_editionorganization_type | organization_country_codeorganization_language_localeorganization_time_zoneorganization_instancecloned_from_organization_id |

-   Use the user\_id\_token to identify and describe the user associated with the interaction. This hashed token represents the ID of the user who accessed the package. The ID persists, even if a user’s details change, across any packages that the user interacts with.

    These supplemental fields, when populated, can provide you with more data about the user.

    -   user\_type
    -   user\_agent
    -   user\_country\_code
    -   user\_time\_zone
    -   session\_key
    -   login\_key

    Because user\_id\_token can represent many different usage situations, we don’t recommend using App Analytics for auditing customer license usage.
