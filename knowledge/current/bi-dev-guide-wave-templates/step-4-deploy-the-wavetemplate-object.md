---
title: "Step 4: Deploy the WaveTemplate Object"
domain: bi-dev-guide-wave-templates
topic: step-4-deploy-the-wavetemplate-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.488Z
estimatedTokens: 193
keywords: [Step, Deploy, WaveTemplate, editing, JSON, files, template, back, development, org, results, work, testing]
---

# Step 4: Deploy the WaveTemplate Object

> After editing its JSON files, deploy the template object back to the development org to
  see the results of your work and for testing.

# Step 4: Deploy the WaveTemplate Object

After editing its JSON files, deploy the template object back to the development org to see the results of your work and for testing.

Deploying your edited files pushes the changes you’ve made to the development org for testing and collaborative development by the rest of your team. Before you deploy your changes, they reside only in your local file system. Deploying your changes overwrites any files in your development org. Retrieving them again from the development org overwrites your local files.

-   Deploy with CLI. Use the force:source:push command to push them back to your scratch org.
-   Deploy with Salesforce Extensions for Visual Studio Code. Use the Command Palette **Push Source from Default Scratch Org**
