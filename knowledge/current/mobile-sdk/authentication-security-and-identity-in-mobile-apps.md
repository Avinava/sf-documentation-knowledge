---
title: "Authentication, Security, and Identity
in Mobile Apps"
domain: mobile-sdk
topic: authentication-security-and-identity-in-mobile-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.227Z
estimatedTokens: 290
keywords: [Authentication, Security, Identity, Mobile, Apps, Secure, essential, enterprise, applications, running, devices, OAuth, 2.0, industry-standard, protocol, authorization, customer’s, handing, username, password, often, described, valet, key]
---

> Secure authentication is essential for enterprise applications running on mobile devices. OAuth
      2.0, the industry-standard protocol, enables secure authorization for access to a customer’s
      data, without handing out the username and password. It is often described as the valet key of
    

# Authentication, Security, and Identity in Mobile Apps

Secure authentication is essential for enterprise applications running on mobile devices. OAuth 2.0, the industry-standard protocol, enables secure authorization for access to a customer’s data, without handing out the username and password. It is often described as the valet key of software access. A valet key restricts access to certain features of your car. For example, a parking attendant can’t open the trunk or glove compartment using a valet key.

Mobile app developers can quickly and easily embed the Salesforce OAuth 2.0 implementation. The implementation uses an HTML view to collect the username and password, which are then sent to the server. The server returns a session token and a persistent refresh token that are stored on the device for future interactions.

A Salesforce connected app is the primary means by which a mobile app connects to Salesforce. A connected app gives both the developer and the administrator control over how the app connects and who has access. For example, a connected app can restrict access to a set of customers, set or relax an IP range, and so on.
