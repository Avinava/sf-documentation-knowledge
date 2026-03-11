---
title: "community publish"
domain: cli-commands
topic: community-publish
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.086Z
keywords: [community, publish, Publish, Experience, Builder, site, live., Description, Examples, Flags, Aliases]
---

# community publish

> Publish an Experience Builder site to make it live.

## community publish

Publish an Experience Builder site to make it live.

### Description for community publish

Each time you publish a site, you update the live site with the most recent updates. When you publish an Experience Builder site for the first time, you make the site's URL live and enable login access for site members.

In addition to publishing, you must activate a site to send a welcome email to all site members. Activation is also required to set up SEO for Experience Builder sites. To activate a site, update the status field of the Network type in Metadata API. (https://developer.salesforce.com/docs/atlas.en-us.api\_meta.meta/api\_meta/meta\_network.htm) Alternatively, in Experience Workspaces, go to Administration | Settings, and click Activate.

An email notification informs you when your changes are live on the published site. The site publish process is an async job that generates a jobId. To check the site publish status manually, query the BackgroundOperation object and enter the jobId as the Id. See ‘BackgroundOperation’ in the Object Reference for the Salesforce Platform for more information. (https://developer.salesforce.com/docs/atlas.en-us.object\_reference.meta/object\_reference/sforce\_api\_objects\_backgroundoperation.htm)

If the job doesn’t complete within 15 minutes, it times out. You receive an error message and must restart the site publish process. Completed jobs expire after 24 hours and are removed from the database.

### Examples for community publish

Publish the Experience Builder site with name "My Customer Site':

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-n | \--name NAME

Required

Name of the Experience Builder site to publish.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

### Aliases for community publish

```

```