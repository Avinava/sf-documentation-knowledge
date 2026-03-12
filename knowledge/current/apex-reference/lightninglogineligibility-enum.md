---
title: "LightningLoginEligibility Enum"
domain: apex-reference
topic: lightninglogineligibility-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.401Z
estimatedTokens: 476
keywords: [LightningLoginEligibility, Contains, Lightning, Login, eligibility, used, Auth.SessionManagement.getLightningLoginEligibility, method., Usage, Values]
---

# LightningLoginEligibility Enum

> Contains a Lightning Login eligibility value used by the Auth.SessionManagement.getLightningLoginEligibility
      method.

# LightningLoginEligibility Enum

Contains a Lightning Login eligibility value used by the Auth.SessionManagement.getLightningLoginEligibility method.

## Usage

If you use the Discovery page type, users can verify themselves with Lightning Login. Lightning Login lets internal users log in with Salesforce Authenticator instead of a password. Certain conditions must be met for Lightning Login to succeed.

Call Auth.SessionManagement.getLightningLoginEligibility before or after a login attempt to get the eligibility status. You can call after a login attempt to determine why the login attempt failed.

## Enum Values

The following are the values of the Auth.LightningLoginEligibility enum.

| Value | Description |
| --- | --- |
| ELIGIBLE | All eligibility conditions are met. The admin has enabled Salesforce Authenticator and Lightning Login, assigned the user Lightning Login user permission, and selected Allow only for users with the Lightning Login User permission from the Session Settings Setup page. The user has set up Salesforce Authenticator and enrolled in Lightning Login. |
| ORG_AUTHENTICATOR_NOT_ENABLED | The admin hasn’t enabled Salesforce Authenticator. |
| ORG_PREF_NOT_ENABLED | The admin hasn’t enabled Lightning Login. The Admin must select Allow Lightning Login from the Session Settings Setup page. |
| USER_AUTHENTICATOR_NOT_CONNECTED | The user hasn’t set up Salesforce Authenticator. |
| USER_NOT_ALLOWED | The admin hasn’t granted the user AllowLightningLogin user permission. Allowing Lightning Login to certain users requires the OnlyLLPermUserAllowed org preference. Admins must select Allow only for users with the Lightning Login User permission from the Session Settings Setup page. |
| USER_NOT_ENROLLED | The user hasn’t enrolled in Lightning Login. |
| USER_PERM_NOT_ENABLED | The admin hasn’t granted the user the Lightning Login Eligible user permission. |
