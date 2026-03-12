---
title: "Create a Zip Batch File with Binary Attachments"
domain: api-asynch
topic: create-a-zip-batch-file-with-binary-attachments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.328Z
estimatedTokens: 140
keywords: [Zip, Batch, File, Binary, Attachments, submit]
---

# Create a Zip Batch File with Binary Attachments

> To submit your binary attachments as a batch, you create a zip batch file
        .

# Create a Zip Batch File with Binary Attachments

To submit your binary attachments as a batch, you create a zip batch file .

1.  Create a base directory that contains the binary attachments. Attachments can be organized in subdirectories.
2.  Create the request.txt CSV, XML, or JSON file in the base directory. The request.txt file is a manifest file for the attachments in the zip file and contains the data for each record that references a binary file.
3.  Create a zip file of the base directory and any subdirectories. A zip file can’t exceed 10 MB.
