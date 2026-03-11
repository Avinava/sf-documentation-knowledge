/**
 * Release schedule and API version mapping for Salesforce.
 * Salesforce releases 3 times per year: Spring, Summer, Winter.
 */

export interface ReleaseInfo {
    /** Release identifier, e.g. "spring-26" */
    id: string;
    /** Human-readable name, e.g. "Spring '26" */
    name: string;
    /** API version number, e.g. "65.0" */
    apiVersion: string;
    /** Approximate release date */
    approximateDate: string;
    /** Season code */
    season: 'spring' | 'summer' | 'winter';
    /** Calendar year */
    year: number;
}

/**
 * Known releases with their API version mappings.
 * Add new entries as Salesforce announces them.
 */
export const RELEASES: ReleaseInfo[] = [
    { id: 'winter-25-v62', name: "Winter '25", apiVersion: '62.0', approximateDate: '2024-10', season: 'winter', year: 2025 },
    { id: 'spring-25-v63', name: "Spring '25", apiVersion: '63.0', approximateDate: '2025-02', season: 'spring', year: 2025 },
    { id: 'summer-25-v64', name: "Summer '25", apiVersion: '64.0', approximateDate: '2025-06', season: 'summer', year: 2025 },
    { id: 'winter-26-v65', name: "Winter '26", apiVersion: '65.0', approximateDate: '2025-10', season: 'winter', year: 2026 },
    { id: 'spring-26-v66', name: "Spring '26", apiVersion: '66.0', approximateDate: '2026-02', season: 'spring', year: 2026 },
    { id: 'summer-26-v67', name: "Summer '26", apiVersion: '67.0', approximateDate: '2026-06', season: 'summer', year: 2026 },
];

/** Get the latest release */
export function getLatestRelease(): ReleaseInfo {
    return RELEASES[RELEASES.length - 1]!;
}

/** Get a release by ID */
export function getReleaseById(id: string): ReleaseInfo | undefined {
    return RELEASES.find((r) => r.id === id);
}

/** Get release by API version */
export function getReleaseByApiVersion(version: string): ReleaseInfo | undefined {
    return RELEASES.find((r) => r.apiVersion === version);
}
