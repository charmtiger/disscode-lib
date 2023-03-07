import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

export interface ExtendComponentMetadata extends ComponentMetadata {
  hideInProjectType: string[];
}
