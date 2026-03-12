---
title: "Work.com Command Center Licensing"
domain: workdotcom-dev-guide
topic: workcom-command-center-licensing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.313Z
estimatedTokens: 245
keywords: [Work.com, Command, Center, Licensing, Design, solution, Salesforce, platform, end-user, license, requirements, mind]
---

# Work.com Command Center Licensing

> Design your solution with Salesforce platform and Work.com end-user license requirements
  in mind.

# Work.com Command Center Licensing

Design your solution with Salesforce platform and Work.com end-user license requirements in mind.

Your solution’s users are also Workplace Command Center users. Every Command Center user must have one Lightning Platform Starter (LPS) or core CRM user license. LPS and CRM licenses are required to access Salesforce features in general.

To access the Work.com data model, users must also have a Workplace Command Center add-on license installed in their org. Without it, the org admin can’t assign the Workplace Command Center PSL to users.

Based on your solution’s features, there can be additional user licenses requirements. For example, Work.com Command Center doesn’t ship with CRM Analytics or Tableau licenses. Solutions that embed CRM Analytics or Tableau components are only available to customers who purchase CRMA or Tableau licenses. However, Tableau licenses aren’t required to access the public world-wide health visualization.
