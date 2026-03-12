---
title: "Choose a Sign-Up Form Hosting Option"
domain: packagingGuide
topic: choose-a-sign-up-form-hosting-option
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.450Z
estimatedTokens: 183
keywords: [Choose, Sign-Up, Form, Hosting, Option, serves, registration, prospective, customers, sign, trials, Review]
---

# Choose a Sign-Up Form Hosting Option

> The sign-up form serves as the registration page that prospective customers use to sign
    up for trials. Review and choose a hosting option for your sign-up form.

# Choose a Sign-Up Form Hosting Option

The sign-up form serves as the registration page that prospective customers use to sign up for trials. Review and choose a hosting option for your sign-up form.

The SignupRequest API supports several HTML form hosting options. Choose one of the following:

-   Node.js and React app hosted on Heroku
-   Lightning component hosted on Experience Cloud site
-   Visualforce page hosted on Sites
-   Web-to-Lead form with Flow Builder

By default, the SignupRequest API is available only to authenticated calls. If you have a use case that requires unauthenticated calls, for example, making your sign-up form available to unauthenticated users, follow the pattern in the code sample.

```

```

## Code Examples

```apex
public with sharing class newTrialSignupController {
@auraEnabled
public static void getNewLead(Lead newLead, String templateId, String username, Boolean createLead, String domain) { }
// SignupCreation is an inner class without sharing. It runs in the system context
// and is used to handle SignupRequest calls for unauthenticated users.
public without sharing class SignupCreation {
public void createNewTrial(Lead newLead, String templateId, String username, String domain) {
}}}
```
