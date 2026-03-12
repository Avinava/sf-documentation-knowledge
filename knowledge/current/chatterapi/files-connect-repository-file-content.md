---
title: "Files Connect Repository File Content"
domain: chatterapi
topic: files-connect-repository-file-content
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.732Z
estimatedTokens: 89
keywords: [Files, Connect, Repository, File, Content, external, system, streamed]
---

# Files Connect Repository File Content

> Get the content of the repository file from the external system. The
      content is streamed as the body of the response.

# Files Connect Repository File Content

Get the content of the repository file from the external system. The content is streamed as the body of the response.

Resource

```

```

```

```

Available version

32.0

The communities resource is available in version 35.0 and later.

HTTP methods

GET, HEAD

Response body

Binary stream of the file content.

## Code Examples

```
/connect/content-hub/repositories/repositoryId/files/repositoryFileId/content
```

```
/connect/communities/communityId/content-hub/repositories/repositoryId/files/repositoryFileId/content
```
