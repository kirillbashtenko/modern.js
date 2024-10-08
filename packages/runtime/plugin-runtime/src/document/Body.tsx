// biome-ignore lint/style/useImportType: <explanation>
import React, { useContext } from 'react';
import { DocumentStructureContext } from './DocumentStructureContext';
import { DefaultRoot } from './Root';
import {
  BODY_PARTICALS_SEPARATOR,
  DOCUMENT_CHUNKSMAP_PLACEHOLDER,
  DOCUMENT_SSRDATASCRIPT_PLACEHOLDER,
} from './constants';

export function Body(props: React.DOMAttributes<HTMLBodyElement>) {
  const { hasSetRoot } = useContext(DocumentStructureContext);
  const { children, ...rest } = props;
  return (
    <body {...rest}>
      {hasSetRoot ? null : <DefaultRoot />}
      {children}
      {`${BODY_PARTICALS_SEPARATOR}`}
      {`${DOCUMENT_CHUNKSMAP_PLACEHOLDER}`}
      {`${DOCUMENT_SSRDATASCRIPT_PLACEHOLDER}`}
    </body>
  );
}
