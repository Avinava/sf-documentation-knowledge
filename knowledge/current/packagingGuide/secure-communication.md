---
title: "Secure Communication"
domain: packagingGuide
topic: secure-communication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.143Z
estimatedTokens: 293
keywords: [Secure, Communication, Ensure, solution, reachable, exclusively, over, connections, SFTP, HTTPS, Avoid, HTTP, FTP, because, protocols]
---

# Secure Communication

> Ensure that your solution is reachable exclusively over secure connections such as SFTP
    and HTTPS. Avoid using HTTP and FTP because these protocols don’t encrypt the information that
    flows over the internet.

# Secure Communication

Ensure that your solution is reachable exclusively over secure connections such as SFTP and HTTPS. Avoid using HTTP and FTP because these protocols don’t encrypt the information that flows over the internet.

Use SSH file transfer protocol (SFTP) when sending and receiving file transfers. SFTP uses encryption algorithms to securely move files and provides a higher level of protection than FTP.

Use hypertext transfer protocol secure (HTTPS) to send data between a web browser and a website. In HTTPS, communication is encrypted using transport layer security (TLS), which protects the data in transit. Use secure versions of TLS, disable weak ciphers, generate long keys, and redirect incoming requests that use HTTP to HTTPS.

To prevent man-in-the-middle downgrade attacks, use HTTP strict transport security (HSTS). In these attacks, hackers intercept communication and redirect visitors from an HTTPS version of a resource to an HTTP copy.

To learn more, see [Secure Coding Secure Communications](https://developer.salesforce.com/docs/atlas.en-us.260.0.secure_coding_guide.meta/secure_coding_guide/secure_coding_secure_communications.htm).
