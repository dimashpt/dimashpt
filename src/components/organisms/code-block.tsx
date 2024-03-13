'use client';

import { useTheme } from 'next-themes';
import { themes } from 'prism-react-renderer';
import { CodeBlock as CodeBlockView } from 'react-code-block';

type CodeBlockProps = {
  code: string;
  hideLines?: boolean;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  hideLines,
}: CodeBlockProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <CodeBlockView
      language="ts"
      code={code}
      theme={resolvedTheme === 'light' ? themes.vsLight : themes.vsDark}
    >
      <CodeBlockView.Code
        className={!hideLines ? 'px-5 py-2 text-xs md:text-sm' : ''}
      >
        <div className="table-row">
          {!hideLines && (
            <CodeBlockView.LineNumber className="table-cell pr-8 text-sm text-muted-foreground text-right select-none" />
          )}
          <CodeBlockView.LineContent className="table-cell">
            <CodeBlockView.Token />
          </CodeBlockView.LineContent>
        </div>
      </CodeBlockView.Code>
    </CodeBlockView>
  );
};
