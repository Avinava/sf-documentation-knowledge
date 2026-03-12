---
title: "Updating Records Issues"
domain: pages
topic: updating-records-issues
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.551Z
estimatedTokens: 351
keywords: [Updating, Records, Issues, affect, users, trying, Salesforce, mobile, app]
---

# Updating Records Issues

> These issues affect users trying to update records in the Salesforce mobile
  app.

# Updating Records Issues

These issues affect users trying to update records in the Salesforce mobile app.

| Issue | Solution |
| --- | --- |
| Users can’t save Salesforce records immediately after they have been updated. Instead, they see the error message "The record was modified by [current user] during your edit session. Make a note of the data you entered, then reload the record and enter your updates again". | Avoid custom processes that remotely update a record before immediately invoking a standard edit page. Otherwise, users must wait 30 seconds, until the cache period has passed, before they are able to edit the record. |
| Collision detection is triggered when editing unread leads. The error message "This record was modified by (the user updating the lead) during your edit session. Make a note of the data you entered, then reload the record and enter your updates again" appears. | Open the record and make changes using the edit button from the record detail page. |
| A recordTypeID error message appears when the optional recordTypeID parameter is omitted in the following command: sforce.one.createRecord(​entityName​[, recordTypeId]);. The error message “Review the errors on this page. Record Type ID: this value isn't valid for the user: [user name]" may appear. | Modify the sforce.one.createRecord call on the Visualforce page to pass in the recordTypeId parameter. |
