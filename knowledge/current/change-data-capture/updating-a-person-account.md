---
title: "Updating a Person Account"
domain: change-data-capture
topic: updating-a-person-account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.710Z
estimatedTokens: 243
keywords: [Updating, Person, Account, two, change, events, generated, contact, regardless, changed, Salesforce, always, updates, LastModifiedDate, system]
---

# Updating a Person Account

> When updating a person account, two change events are generated, one for the account
    and one for the contact, regardless which fields changed. Salesforce always updates the
    LastModifiedDate system field in both the account and contact even if the field updated is only
    in one of the underlying records.

# Updating a Person Account

When updating a person account, two change events are generated, one for the account and one for the contact, regardless which fields changed. Salesforce always updates the LastModifiedDate system field in both the account and contact even if the field updated is only in one of the underlying records.

Because a person account corresponds to one account and one contact, the timestamp fields of the account and contact records must match. If an account-only field is updated, such as the Industry field, the account change event contains the changed field and the LastModifiedDate field. The contact change event contains only the LastModifiedDate field. If the updated field stems from a contact, or is a custom contact field, both change events contain all changed fields and the LastModifiedDate field. In particular, if a person account's first name or last name is modified, the corresponding field is included in both change events.
