---
title: "Displaying Record Types"
domain: pages
topic: displaying-record-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.347Z
estimatedTokens: 454
keywords: [Displaying, Record, Visualforce, pages, Salesforce, API, version, equal, greater, 20.0, support, let, offer, different, business]
---

# Displaying Record Types

> Visualforce pages with a Salesforce API version equal to or greater than 20.0 support record
      types. Record types let you offer different business processes, picklist values, and page
      layouts to different users.

# Displaying Record Types

Visualforce pages with a Salesforce API version equal to or greater than 20.0 support record types. Record types let you offer different business processes, picklist values, and page layouts to different users.

After creating a record type in Setup, enabling support for it in Visualforce requires no additional actions on your part. Visualforce pages for objects that use record types respect your settings. Record type field is named RecordTypeId.

Your record type definitions affect the rendering of <apex:inputField\> tags in the following ways:

-   If the <apex:inputField\> tag refers to a picklist field that's filtered by a record type:
    -   The rendered <apex:inputField\> component only displays options compatible with that record type.
    -   If the <apex:inputField\> component is bound to a dependent picklist with a rendered and editable controlling field, only options compatible with both the record type and the controlling field value display.
-   If the <apex:inputField\> tag refers to a record type field:
    -   If the user can change the field’s record type, or select a record type for the new field, the <apex:inputField\> component renders as a drop-down list. Otherwise, it renders as read-only text.
    -   It's the developer's responsibility to either refresh the page or rerender filtered picklists when the list changes.

In addition, the <apex:outputField\> tag's support for record types is identical to a read-only implementation of the <apex:inputField\> behavior.

When overriding the New button with a Visualforce page, you can choose to skip the record type selection page. If you do, new records you create aren’t forwarded to the record type selection page. Salesforce assumes that your Visualforce page is already handling record types.
