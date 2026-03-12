---
title: "Retrieve Changes to Profiles with Source Tracking"
domain: sfdx-dev
topic: retrieve-changes-to-profiles-with-source-tracking
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.668Z
estimatedTokens: 749
keywords: [Retrieve, Changes, Profiles, Source, Tracking, Retrieving, behaves, little, differently]
---

# Retrieve Changes to Profiles with Source Tracking

> Retrieving profiles behaves a little differently with source tracking.

# Retrieve Changes to Profiles with Source Tracking

Retrieving profiles behaves a little differently with source tracking.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

In general, we recommend that you use permission sets instead of profiles. Profiles aren’t consistent across orgs, and the source files that are retrieved and deployed depend on the org type, the tracking state, and other metadata in the operation. If you decide to continue using profiles, we recommend that you exclude them when you deploy or retrieve by adding them to the .forceignore file.

Without source tracking, retrieving profiles only returns some profile information. Retrieving profiles returns information about profiles that pertains to other items specified in the package.xml file.

For example, retrieving profiles with this package.xml file returns profile permissions for the MyCustomField\_\_c custom field on the Account object.

```

```

With source tracking, retrieving profiles returns profile information pertaining to anything else specified in the package.xml file plus any components getting tracked by source tracking. That includes any entity for which a change exists between your local project and the org.

For example, say you create a custom field on the Opportunity object called OppCustomField\_\_c in your local environment. Source tracking detects the change and reports it. Now you retrieve profiles using the same package.xml file as you did when source tracking was off.

```

```

Even though the package.xml file doesn’t reference OppCustomField\_\_c, because source tracking is tracking the new custom field, your retrieve returns profile permissions for both the MyCustomField\_\_c custom field on the Account object and the OppCustomField\_\_c on the Opportunity object.

For more information about retrieving profiles, see the [Profile metadata type](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_profile.htm) in the Metadata API Developer Guide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Although source retrieves don’t include package.xml files, retrieve requests return profile information pertaining to everything reported by source tracking.

#### See Also

-   [*Salesforce Help*: Permission Sets](https://help.salesforce.com/s/articleView?id=platform.perm_sets_overview.htm&type=5&language=en_US "Salesforce Help: Permission Sets - HTML (New Window)")

-   [How to Exclude Source When Syncing](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm "When syncing metadata between your local file system and a target org, you often have source files you want to exclude. Similarly, you often want to exclude certain files when converting source to Salesforce DX source format. In both cases, you can exclude individual files or all files in a specific directory with a .forceignore file.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
 <types>
  <members>Account.MyCustomField__c</members>
  <name>CustomField</name>
 </types>
 <types>
  <members>*</members>
  <name>Profile</name>
 </types>
 <version>50.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
 <types>
  <members>Account.MyCustomField__c</members>
  <name>CustomField</name>
 </types>
 <types>
  <members>*</members>
  <name>Profile</name>
 </types>
 <version>50.0</version>
</Package>
```

## Related Topics

- How to Exclude Source When Syncing (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm)
