---
title: "Create an Account for End Users"
domain: headless-identity
topic: create-an-account-for-end-users
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.862Z
estimatedTokens: 243
keywords: [Account, End, Users, store, including, their, contact, records, Headless, Identity, Apex, registration, handlers, new, log]
---

# Create an Account for End Users

> You must use an account to store information about your end users, including their
  contact records. For Headless Identity, you reference the account in your Apex registration
  handlers. When new users log in via an authentication provider or sign up directly through your
  site, they’re added as contacts.

# Create an Account for End Users

You must use an account to store information about your end users, including their contact records. For Headless Identity, you reference the account in your Apex registration handlers. When new users log in via an authentication provider or sign up directly through your site, they’re added as contacts.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


Salesforce supports two types of accounts: business accounts, which store information about organizations, and person accounts, which store information about individuals. For this example, you use a business account to keep all your end-user records in one place.

1.  From the App Launcher, find and select **Accounts**.
2.  Click **New**.
3.  For the Account Name, enter My Account.

    You can leave the rest of the details blank.

4.  Save your new account.
