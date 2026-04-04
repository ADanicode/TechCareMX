import React from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode;
	strong?: boolean;
};

export default function GlassPanel({ children, className = '', strong = false, ...props }: GlassPanelProps) {
	const baseClass = strong ? 'glass-panel-strong neon-ring' : 'glass-panel';

	return (
		<div className={`${baseClass} ${className}`.trim()} {...props}>
			{children}
		</div>
	);
}