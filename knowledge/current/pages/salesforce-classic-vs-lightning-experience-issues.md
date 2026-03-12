---
title: "Salesforce Classic vs. Lightning Experience Issues"
domain: pages
topic: salesforce-classic-vs-lightning-experience-issues
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.536Z
estimatedTokens: 140
keywords: [Salesforce, Classic, Lightning, Experience, Issues, caused, switching]
---

# Salesforce Classic vs. Lightning Experience Issues

> These issues are caused by switching between Salesforce Classic and Lightning
    Experience.

# Salesforce Classic vs. Lightning Experience Issues

These issues are caused by switching between Salesforce Classic and Lightning Experience.

| Issue | Solution |
| --- | --- |
| A UI check incorrectly returns Theme4t instead of Theme3 when the user is using the Classic UI on mobile devices. This issue occurs with Visualforce global $User.UIThemeDisplayed and Apex class UserInfo.getUiThemeDisplayed commands. | Check the user’s current UI by verifying if the sforce.one JavaScript object is available; this object is not available in the Classic UI. |
