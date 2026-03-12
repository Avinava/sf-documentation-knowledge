---
title: "Packaging Checklist"
domain: pkg1-dev
topic: packaging-checklist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.703Z
estimatedTokens: 329
keywords: [Packaging, Checklist, Ready, deploy, metadata, start, creating, package, Take, few, minutes, verify, covered, items, you’re]
---

# Packaging Checklist

> Ready to deploy your packaging metadata and start creating a package? Take a few
    minutes to verify that you covered the items in this checklist, and you’re good to
    go.

# Packaging Checklist

Ready to deploy your packaging metadata and start creating a package? Take a few minutes to verify that you covered the items in this checklist, and you’re good to go.

1.  Link the namespace of each package you want to work with to the Dev Hub org.
2.  Copy the metadata of the package from your version control system to a local project.
3.  Update the config files, if needed.

    For example, to work with managed packages, sfdx-project.json must include the namespace.

    ```

    ```

4.  (Optional) Create an alias for each org you want to work with.

    If you haven’t yet created an alias for each org, consider doing that now. Using aliases is an easy way to switch between orgs when you’re working in the CLI.

5.  Authenticate the Dev Hub org.
6.  Create a scratch org.

    A scratch org is different than a sandbox org. You specify the org shape using project-scratch.json. To create a scratch org and set it as the defaultusername org, run this command from the project directory.

    ```

    ```

7.  Push source to the scratch org.
8.  Update source in the scratch org as needed.
9.  Pull the source from the scratch org if you used declarative tools to make changes there.

With these steps complete, you’re ready to deploy your package metadata to the packaging org.

## Code Examples

```
"namespace": "acme_example",
```

```
sf org create scratch --definition-file config/project-scratch-def.json
```
