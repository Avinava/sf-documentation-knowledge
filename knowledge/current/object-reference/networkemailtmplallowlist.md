---
title: "NetworkEmailTmplAllowlist"
domain: object-reference
topic: networkemailtmplallowlist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.227Z
estimatedTokens: 354
keywords: [NetworkEmailTmplAllowlist, allowlist, one-time, password, OTP, email, templates, sent, end, users, Headless, Registration, Flow, Passwordless, Login]
---

# NetworkEmailTmplAllowlist

> Represents an allowlist for the one-time password (OTP) email templates that
         are sent to end users during the Headless Registration Flow, the Headless Passwordless
         Login Flow, and the Headless Forgot Password Flow. This object is available in API
      version 60.0 and later.

# NetworkEmailTmplAllowlist

Represents an allowlist for the one-time password (OTP) email templates that are sent to end users during the Headless Registration Flow, the Headless Passwordless Login Flow, and the Headless Forgot Password Flow. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EmailTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe IDs of the allowlisted email templates that can be sent to users during the headless authorization flows for registration, passwordless login, and forgot password. You can list multiple template IDs. When your app sends its initial request to Headless Registration API or Headless Passwordless Login API, the emailtemplate parameter can include only an email template ID from the allowlist. For Headless Forgot Password API, it works the same way, but only if email template allowlisting is enabled.This field is a relationship field.Relationship NameEmailTemplateRelationship TypeLookupRefers ToEmailTemplate |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the Experience Cloud site for which the allowlist is being configured.This field is a relationship field.Relationship NameNetworkRelationship TypeLookupRefers ToNetwork |
