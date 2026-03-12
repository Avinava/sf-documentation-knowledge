---
title: "ContentDistribution"
domain: object-reference
topic: contentdistribution
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.030Z
estimatedTokens: 1743
keywords: [ContentDistribution, sharing, document, externally, API, version, 32.0, later, Calls, Special, Access, Rules, Usage]
---

# ContentDistribution

> Represents information about sharing a document externally.
		This object is available in API version 32.0 and later.

# ContentDistribution

Represents information about sharing a document externally. This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   Content deliveries must be enabled to query content deliveries.
-   Users (including users with the “View All Data” permission) can query only the files that they have access to. If the file is managed by a Content Library, the user must have “Deliver Content” enabled in the library permission definition and be a member of the library. If the file isn’t managed by a Content Library, the user must have the “Enable Creation of Content Deliveries for Salesforce Files” permission.
-   Users can query the DistributionPublicUrl and Password fields only if they are the file owner, if the file is shared with them, or if the RelatedRecordId specifies a record that the users can access.
-   If the shared document is deleted, the delete cascades to any associated ContentDistribution. The ContentDistribution is still queryable by using the QueryAll verb.
-   If the shared document is archived, the only fields that users can edit are ExpiryDate and PreferencesExpires.
-   Customer Portal users can’t access this object.
-   Guest users of Experience Cloud sites can't access or create this object.
-   Chatter Free users can’t access this object.

## Fields

| Field Name | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the shared document. |
| ContentDownloadUrl | TypestringPropertiesSort, NillableDescriptionThe link for downloading the file. This field is available in API version 40.0 and later. |
| ContentVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the shared document version.This is a relationship field.Relationship NameContentVersionRelationship TypeLookupRefers ToContentVersion |
| DistributionPublicUrl | TypestringPropertiesNillable, SortDescriptionURL of the link to the shared document. |
| ExpiryDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate when the shared document becomes inaccessible. |
| FirstViewDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the shared document is first viewed. |
| LastViewDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the shared document was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the content delivery. |
| OwnerId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the user who owns the shared document.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| PdfDownloadUrl | TypestringPropertiesSort, NillableDescriptionThe link for downloading the file as a PDF. This field is available in API version 40.0 and later. |
| Password | TypestringPropertiesGroup, Nillable, SortDescriptionA password that allows access to a shared document. |
| PreferencesAllowOriginalDownload | TypebooleanPropertiesCreate, Filter, UpdateDescriptionWhen true, the shared document can be downloaded as the file type that it was uploaded as.When false, download availability depends on whether a preview of the file exists. If a preview exists, the file can’t be downloaded. If a preview doesn’t exist, the file can still be downloaded.If the shared document is a link, it can’t be downloaded. |
| PreferencesAllowPDFDownload | TypebooleanPropertiesCreate, Filter, UpdateDescriptionWhen true, the shared document can be downloaded as a PDF if the original file type is PDF or if a PDF preview has been generated. |
| PreferencesAllowViewInBrowser | TypebooleanPropertiesCreate, Filter, UpdateDescriptionWhen true, a preview of the shared document can be viewed in a Web browser. |
| PreferencesExpires | TypebooleanPropertiesCreate, Filter, UpdateDescriptionWhen true, access to the shared document expires on the date that’s specified by ExpiryDate. |
| PreferencesLinkLatestVersion | TypebooleanPropertiesCreate, Filter, UpdateDescriptionWhen true, users see the most recent version of a shared document. When false, users see the version of the document that’s shared, even if it isn’t the most recent version. |
| PreferencesNotifyOnVisit | TypebooleanPropertiesCreate, Filter, UpdateDescriptionWhen true, the owner of the shared document is emailed the first time that someone views or downloads the shared document. |
| PreferencesNotifyRndtnComplete | TypebooleanPropertiesCreate, Filter, UpdateDescriptionWhen true, the owner of the shared document is emailed when renditions of the shared document that can be previewed in a Web browser are generated. |
| PreferencesPasswordRequired | TypebooleanPropertiesCreate, Filter, UpdateDescriptionWhen true, a password, specified by Password, is required to access the shared document. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record, such as an Account, Campaign, or Case, that the shared document is related to.This is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAccount, Campaign, Case, Contact, EmailMessage, Lead, ListEmail, Opportunity |
| ViewCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times that the shared document has been viewed. |

## Usage

Use this object to create, update, delete, or query information about a document shared externally via a link or via Salesforce CRM Content delivery.

The ContentDistribution object supports triggers before and after these operations: insert, update, delete. It supports triggers after undelete.

## Example

The VP of Marketing wants file authors to specify whether their files can be shared with external people using content delivery. He also wants some files to have a password. You can add a custom field DeliveryPolicy on the ContentVersion object. Make the custom field a picklist with the values, Allowed, Blocked, and Password required. Add the field to the ContentVersion layout so that the user can set the delivery policy per file. Then, add an insert trigger for the ContentDistribution object to enforce the rules based on the delivery policy set in the file.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The ContentVersionId for ContentDistribution must be unique.

This trigger for the ContentDistribution object enforces the delivery policy rules for each file:

```

```

The trigger calls this helper class:

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Apex has a per organization limit of 10 concurrent requests that last longer than 5 seconds. A trigger that uploads files can easily hit this limit.

## Code Examples

```
trigger deliveryPolicy on ContentDistribution (before insert) {
    for (ContentDistribution cd : trigger.new) {
        String versionId = DeliveryPolicyHelper.getContentVersionId(cd);
        ContentVersion version = [select DeliveryPolicy__c from ContentVersion where Id = :versionId];
        String policy = version.DeliveryPolicy__c;
        if (policy.equals('Blocked')) {
            cd.addError('This file is not allowed to be delivered.');
        } else if (policy.equals('Password required')){
            if (!DeliveryPolicyHelper.requirePassword(cd)) {
                cd.addError('To deliver this file, set a password.');
            }
        } 
    }
}
```

```apex
public class DeliveryPolicyHelper {
    public static String getContentVersionId(ContentDistribution cd) {
        if (cd.ContentVersionId != null) {
            return cd.ContentVersionId;
        } else {
            String versionId = [select LatestPublishedVersionId from ContentDocument where Id = :cd.ContentDocumentId].get(0).LatestPublishedVersionId;
            return versionId;
        }
    }
    
    public static boolean requirePassword(ContentDistribution cd) {
        return cd.PreferencesPasswordRequired;
    }
}
```
