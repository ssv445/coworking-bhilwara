import type { CSSProperties, ReactNode } from 'react';

interface WindowProps {
  title?: string;
  tag?: string;
  children: ReactNode;
  dense?: boolean;
  dots?: boolean;
  style?: CSSProperties;
}

export default function Window({
  title,
  tag,
  children,
  dense = false,
  dots = true,
  style,
}: WindowProps) {
  return (
    <div className="window" style={style}>
      <div className="window-titlebar">
        {dots && (
          <span className="window-dots">
            <i></i>
            <i></i>
            <i></i>
          </span>
        )}
        {title && <span className="window-title">{title}</span>}
        {tag && <span className="window-tag">{tag}</span>}
      </div>
      <div className={`window-body${dense ? ' tight' : ''}`}>{children}</div>
    </div>
  );
}
