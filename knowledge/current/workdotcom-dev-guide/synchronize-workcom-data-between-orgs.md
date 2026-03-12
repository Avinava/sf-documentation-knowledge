---
title: "Synchronize Work.com Data Between Orgs"
domain: workdotcom-dev-guide
topic: synchronize-workcom-data-between-orgs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.451Z
estimatedTokens: 447
keywords: [Synchronize, Work.com, Data, Orgs, Users, encouraged, install, org, dedicated, may, result, scenarios, migrated, kept, synch]
---

# Synchronize Work.com Data Between Orgs

> Users are encouraged to install and use Work.com in an org dedicated to Work.com. This
    may result in scenarios where data in an existing org has to be migrated or kept in synch with a
    new Work.com org.

# Synchronize Work.com Data Between Orgs

Users are encouraged to install and use Work.com in an org dedicated to Work.com. This may result in scenarios where data in an existing org has to be migrated or kept in synch with a new Work.com org.

When keeping orgs in synch, avoid using bi-directional synchronization, as manual conflict management between org data will be required. Instead, we recommend having a single “source of truth” org. If a data change occurs in a different org, use Salesforce APIs to make the change in the “source of truth” org first, and then synchronize the change back to the org where the change initially occurred.

If other orgs only need read-only access to Work.com org data, use Salesforce Connect to display the Work.com org data in the other orgs. If Salesforce Connect won’t work for your scenario, you can use Salesforce API calls to query the Work.com org. For example, you could use on-demand API calls in your Lightning Web Components to query your Work.com org data, and display the data in your component.

Consider doing initial data synchs followed by smaller incremental data synchs. A strategy might work as follows:

-   Run an initial data load job to move data to the new org.
-   Run nightly or hourly incremental data load jobs to keep orgs in synch.
-   If a record is updated in the new org, use Salesforce APIs to update the existing org first, and then migrate that incremental change back to the new org. This avoids unnecessary data conflicts.

Data synchronization middleware tools might help with this process.

#### See Also

-   [*Salesforce Help*: Salesforce Connect](https://help.salesforce.com/articleView?id=platform_connect_about.htm&type=5&language=en_US "
    Salesforce Help: Salesforce Connect - HTML (New Window)")
