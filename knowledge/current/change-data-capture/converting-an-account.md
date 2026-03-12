---
title: "Converting an Account"
domain: change-data-capture
topic: converting-an-account
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.704Z
estimatedTokens: 96
keywords: [Converting, Account, person, converted, business, API, modifying, record, change, event, generated, new]
---

# Converting an Account

> If a person account is converted to a business account through the API by modifying the
    record type ID, a change event for the account is generated. This change event contains the
    new record type ID of the account.

# Converting an Account

If a person account is converted to a business account through the API by modifying the record type ID, a change event for the account is generated. This change event contains the new record type ID of the account.

Conversely, if a business account is converted to a person account, a change event is generated for the account with the new record type ID.
