---
title: "Update to the CLI Release Candidate or Nightly"
domain: sfdx-setup
topic: update-to-the-cli-release-candidate-or-nightly
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:19.173Z
estimatedTokens: 1038
keywords: [CLI, Release, Candidate, Nightly, new, version, weekly, time, publish, changes, plan, include, Think, CLI-version, Salesforce]
---

# Update to the CLI Release Candidate or Nightly

> We release a new version of the CLI weekly. At the same time we also publish a release
    candidate of the CLI that contains changes that we plan to include in the next weekly release.
    Think of the release candidate as the CLI-version of the Salesforce sandbox preview. You can
    update to a release candidate if you want to check out upcoming features. Or stay on the current
    and official release. Or go back and forth. It’s up to you!

# Update to the CLI Release Candidate or Nightly

We release a new version of the CLI weekly. At the same time we also publish a release candidate of the CLI that contains changes that we plan to include in the next weekly release. Think of the release candidate as the CLI-version of the Salesforce sandbox preview. You can update to a release candidate if you want to check out upcoming features. Or stay on the current and official release. Or go back and forth. It’s up to you!

We also release nightly builds every day. Nightly builds include the latest versions of all our libraries and plugins. If you want to try out a fix that was merged just a day ago, try installing a nightly build. Similar to the release candidate, the nightly builds help improve the stability of Salesforce CLI by catching issues before they make it to the stable release.

While the latest (stable) release is the most reliable, we encourage users to also test the release candidates and nightly builds and report issues to our [GitHub issues repository](https://github.com/forcedotcom/cli/issues). We recommend you run your continuous integration (CI) jobs against both the current release and the release candidate to identify potential breaking changes before they happen.

To display the version of your installed Salesforce CLI, run this command from a terminal (macOS and Linux) or command prompt (Windows). The version doesn’t indicate if it’s a release candidate or nightly build, so check the [release notes](https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md) for the current version numbers.

```

```

## Update Using Installers

Installers use the tags stable for the current release, stable-rc for the release candidate, and nightly for the nightly builds.

If you’ve already installed Salesforce CLI and are using the current release, run this command in a terminal (macOS and Linux) or command prompt (Windows) to switch to the release candidate.

```

```

Similarly, run this command to install the nightly build.

```

```

To uninstall the release candidate or nightly build and return to the current version, run this command.

```

```

## Install Using npm

Npm installs use the tags latest for the current release, latest-rc for the release candidate, and nightly for the nightly builds.

To install the release candidate using npm, run this command in a terminal (macOS and Linux) or command prompt (Windows).

```

```

Similarly, run this command to install the nightly build.

```

```

To uninstall the release candidate or nightly build and return to the current version, run this command.

```

```

To view the Salesforce CLI versions that are currently associated with the npm tags, run this command.

```

```

## Install from a TAR File

Salesforce CLI distributes TAR files for the release candidate and nightly builds that you can install on all supported operating systems. The download URLs are similar to the URLs for [installing the current release](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_linux "Salesforce CLI distributes TAR files that you can install on all supported operating systems."), but use the stable-rc or nightly channel rather than the stable channel.

For example, to wget the Linux TAR file for the release candidate, run this command in a terminal (macOS and Linux) or command prompt (Windows), which downloads from the stable-rc channel.

```

```

This command downloads a nightly build.

```

```

Other than using a different channel, the instructions for installing the release candidate or nightly build from a TAR file are the same as the instructions for [installing the current release](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_linux "Salesforce CLI distributes TAR files that you can install on all supported operating systems.").

#### See Also

-   [*Trailhead*: Get Early Access with the Sandbox Preview](https://trailhead.salesforce.com/en/content/learn/modules/sf_releases/sf-releases-sandbox-preview "Trailhead: Get Early Access with the Sandbox
    Preview - HTML (New Window)")

## Code Examples

```
sf update stable-rc
```

```
sf update nightly
```

```
sf update stable
```

```apex
npm install --global @salesforce/cli@latest-rc
```

```apex
npm install --global @salesforce/cli@nightly
```

## Related Topics

- installing the current
          release (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
