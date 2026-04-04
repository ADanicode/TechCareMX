import React from 'react';
import { motion } from 'framer-motion';

type WhatsAppFloatProps = {
	href: string;
};

export default function WhatsAppFloat({ href }: WhatsAppFloatProps) {
	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noreferrer"
			aria-label="Cotizar por WhatsApp"
			className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-cyan-300/20 bg-slate-950/78 px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(8,47,73,0.5)] backdrop-blur-xl transition-colors hover:border-cyan-300/40 sm:bottom-8 sm:right-8"
			initial={{ opacity: 0, y: 18 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.55, delay: 0.75 }}
			whileHover={{ scale: 1.03, y: -2 }}
			whileTap={{ scale: 0.98 }}
		>
			<span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950">
				<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
					<path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.18 6.4 2.18 11.83c0 1.74.46 3.43 1.33 4.92L2 22l5.4-1.42a9.8 9.8 0 0 0 4.63 1.18h.01c5.42 0 9.84-4.4 9.85-9.83a9.76 9.76 0 0 0-2.84-7.02Zm-7.02 15.18h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.2.84.85-3.12-.2-.32a8.15 8.15 0 0 1-1.25-4.35 8.23 8.23 0 0 1 8.25-8.2 8.13 8.13 0 0 1 5.82 2.42 8.12 8.12 0 0 1 2.4 5.8 8.23 8.23 0 0 1-8.23 8.24Zm4.52-6.17c-.25-.13-1.48-.73-1.71-.82-.23-.08-.39-.12-.56.13-.16.24-.64.82-.78.99-.14.16-.29.18-.54.06-.25-.13-1.04-.38-1.99-1.22-.73-.65-1.23-1.45-1.38-1.69-.14-.24-.01-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.36-.76-1.86-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.01 2.58.12.16 1.76 2.7 4.27 3.78.6.26 1.07.41 1.43.52.6.19 1.14.16 1.57.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.11-.22-.18-.46-.31Z" />
				</svg>
			</span>
			<span className="hidden sm:inline">Cotizar por WhatsApp</span>
		</motion.a>
	);
}