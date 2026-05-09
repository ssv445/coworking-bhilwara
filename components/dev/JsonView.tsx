import { Fragment } from 'react';

type JsonPrimitive = string | number | boolean | null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonValue = JsonPrimitive | JsonValue[] | { [k: string]: any };

interface Props {
  data: JsonValue;
  indent?: number;
  isRoot?: boolean;
}

function renderValue(v: JsonValue, indent: number): React.ReactNode {
  const pad = '  '.repeat(indent);
  const padInner = '  '.repeat(indent + 1);
  if (v === null) return <span className="tk-key">null</span>;
  if (typeof v === 'boolean') return <span className="tk-key">{String(v)}</span>;
  if (typeof v === 'number') return <span className="tk-num">{v}</span>;
  if (typeof v === 'string') return <span className="tk-str">&quot;{v}&quot;</span>;
  if (Array.isArray(v)) {
    if (v.length === 0) return <span className="tk-pun">[]</span>;
    const allPrim = v.every((x) => typeof x === 'string' || typeof x === 'number');
    if (allPrim && v.length <= 8) {
      return (
        <>
          <span className="tk-pun">[</span>
          {v.map((x, i) => (
            <Fragment key={i}>
              {typeof x === 'string' ? (
                <span className="tk-str">&quot;{x}&quot;</span>
              ) : (
                <span className="tk-num">{x as number}</span>
              )}
              {i < v.length - 1 && <span className="tk-pun">, </span>}
            </Fragment>
          ))}
          <span className="tk-pun">]</span>
        </>
      );
    }
    return (
      <>
        <span className="tk-pun">[</span>
        {'\n'}
        {v.map((x, i) => (
          <Fragment key={i}>
            {padInner}
            {renderValue(x, indent + 1)}
            {i < v.length - 1 ? <span className="tk-pun">,</span> : null}
            {'\n'}
          </Fragment>
        ))}
        {pad}
        <span className="tk-pun">]</span>
      </>
    );
  }
  if (typeof v === 'object') {
    const obj = v as { [k: string]: JsonValue; __comments?: { [k: string]: string } };
    const comments = obj.__comments;
    const entries = Object.entries(obj).filter(([k]) => k !== '__comments');
    if (entries.length === 0) return <span className="tk-pun">{'{}'}</span>;
    return (
      <>
        <span className="tk-pun">{'{'}</span>
        {'\n'}
        {entries.map(([k, val], i) => (
          <Fragment key={k}>
            {padInner}
            <span className="tk-fn">&quot;{k}&quot;</span>
            <span className="tk-pun">: </span>
            {renderValue(val, indent + 1)}
            {i < entries.length - 1 ? <span className="tk-pun">,</span> : null}
            {comments && comments[k] && (
              <span className="tk-cmt">{`  // ${comments[k]}`}</span>
            )}
            {'\n'}
          </Fragment>
        ))}
        {pad}
        <span className="tk-pun">{'}'}</span>
      </>
    );
  }
  return String(v);
}

export default function JsonView({ data, indent = 0, isRoot = true }: Props) {
  if (isRoot && data && typeof data === 'object' && !Array.isArray(data)) {
    return <>{renderValue(data, indent)}</>;
  }
  return <>{renderValue(data, indent)}</>;
}
