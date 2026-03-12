---
title: "SessionLevel Enum"
domain: apex-reference
topic: sessionlevel-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.461Z
estimatedTokens: 380
namespace: Auth
keywords: [SessionLevel, Auth.SessionLevel, SessionManagement.setSessionLevel, Usage]
---

# SessionLevel Enum

> An Auth.SessionLevel enum value is used by the  SessionManagement.setSessionLevel method.

**Namespace:** `Auth`

# SessionLevel Enum

An Auth.SessionLevel enum value is used by the SessionManagement.setSessionLevel method.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Enum Values

| Value | Description |
| --- | --- |
| LOW | The user’s security level for the current session meets the lowest requirements.NoteThis low level is not available, nor used, in the Salesforce UI. User sessions through the Salesforce UI are either standard or high assurance. You can set this level using the API, but users assigned this level will experience unpredictable and reduced functionality in their Salesforce organization. |
| STANDARD | The user’s security level for the current session meets the Standard requirements set in the current organization Session Security Levels. |
| HIGH_ASSURANCE | The user’s security level for the current session meets the High Assurance requirements set in the current organization Session Security Levels. |

## Usage

With session-level security, you control user access to features that support it, such as connected apps and reporting. For example, you can customize an organization’s Session Settings to require users to log in with multi-factor authentication (MFA) to get a High Assurance session. Then, you can restrict access to a specific connected app by requiring a High Assurance session level in the settings for the connected app.

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
