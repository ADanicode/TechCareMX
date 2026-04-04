import React from 'react';

type SectionHeadingProps = {
	eyebrow: string;
	title: string;
	description: string;
	align?: 'left' | 'center';
};

export default function SectionHeading({
	eyebrow,
	title,
	description,
	align = 'left',
}: SectionHeadingProps) {
	const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';

	return (
		<div className={alignment}>
			<div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
				{eyebrow}
			</div>
			<h2 className="bg-linear-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl">
				{title}
			</h2>
			<p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>
		</div>
	);
}