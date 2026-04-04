import React from 'react';
import { motion } from 'framer-motion';
import {
	Cable,
	ChevronRight,
	Cpu,
	Gamepad2,
	Gauge,
	Keyboard,
	KeyRound,
	ShieldCheck,
	Star,
	type LucideIcon,
} from 'lucide-react';
import GlassPanel from '../ui/GlassPanel';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import WhatsAppFloat from '../ui/WhatsAppFloat';

const whatsappUrl = 'https://wa.me/527297598588?text=Hola%20TechCareMX,%20quiero%20cotizar%20un%20servicio.';

type ServiceItem = {
	name: string;
	price: string;
	detail: string;
	icon: LucideIcon;
};

const expressServices: ServiceItem[] = [
	{
		name: 'Mantenimiento preventivo',
		price: 'Diagnóstico al momento',
		detail: 'Limpieza interna, revisión general y ajuste para mejorar flujo térmico y rendimiento.',
		icon: ShieldCheck,
	},
	{
		name: 'Cambio de pasta térmica',
		price: '$350 - $450 MXN',
		detail: 'Renueva la disipación de calor en laptops, PCs o consolas con aplicación cuidadosa.',
		icon: Cpu,
	},
	{
		name: 'Formateo y optimización de Windows',
		price: 'Servicio express',
		detail: 'Instalación limpia, drivers, mejoras de arranque y configuración para uso diario.',
		icon: Gauge,
	},
	{
		name: 'Activación de Office',
		price: '$250 - $450 MXN',
		detail: 'Configuración funcional para que Word, Excel y PowerPoint queden listos para trabajar.',
		icon: KeyRound,
	},
];

const repairServices: ServiceItem[] = [
	{
		name: 'Reemplazo de joysticks por drift',
		price: '$250 - $350 MXN',
		detail: 'Cambio de sticks en controles Xbox o PlayStation para recuperar precisión y respuesta.',
		icon: Gamepad2,
	},
	{
		name: 'Cambio de teclados y carcasas de laptop',
		price: 'Cotización variable',
		detail: 'Sustitución de piezas dañadas con revisión de compatibilidad y tiempos según disponibilidad.',
		icon: Keyboard,
	},
	{
		name: 'Reparación de cables',
		price: 'Cotización por daño',
		detail: 'Ajuste o reemplazo de conectores y cableado con pruebas básicas de funcionamiento.',
		icon: Cable,
	},
];

const trustIndicators = [
	{ label: 'Computadoras', value: 'Windows, mantenimiento y rendimiento' },
	{ label: 'Consolas', value: 'Limpieza, drift y revisión térmica' },
	{ label: 'Atención', value: 'Respuesta rápida por WhatsApp' },
	{ label: 'Proceso', value: 'Diagnóstico honesto y tiempos claros' },
];

const contactItems = [
	{
		title: 'Horarios de atención',
		text: 'Sin horario fijo: atiendo por mensaje y respondo en cuanto estoy libre o veo tu solicitud.',
	},
	{
		title: 'Cobertura local',
		text: 'Atención local con entrega, recepción o punto de encuentro a convenir según tu zona.',
	},
	{
		title: 'Contacto directo',
		text: 'Envía fotos, falla detectada y modelo del equipo para cotizar más rápido.',
	},
];

const testimonials = [
	{
		name: 'Carlos M.',
		quote: 'Me devolvió mi laptop el mismo día. Quedó silenciosa y mucho más rápida.',
	},
	{
		name: 'Fernanda R.',
		quote: 'Arregló el drift de mi control de PlayStation y quedó perfecto para jugar otra vez.',
	},
	{
		name: 'Iván T.',
		quote: 'La comunicación fue súper clara y la cotización por WhatsApp fue inmediata.',
	},
];

function ServiceCard({ item }: { item: ServiceItem }) {
	const Icon = item.icon;

	return (
		<div className="group rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:bg-cyan-300/8 hover:shadow-[0_22px_50px_rgba(8,47,73,0.32)]">
			<div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
				<div className="flex gap-4">
					<div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200 transition-colors duration-300 group-hover:border-cyan-300/45 group-hover:bg-cyan-400/20">
						<Icon className="h-5 w-5" />
					</div>
					<div>
						<p className="text-xl font-bold text-white">{item.name}</p>
						<p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
					</div>
				</div>
				<div className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100">
					{item.price}
				</div>
			</div>
		</div>
	);
}

export default function LandingPage() {
	return (
		<div className="relative overflow-hidden pb-16 text-slate-100">
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="grid-fade absolute inset-0 opacity-40" />
				<motion.div
					className="absolute -left-16 top-16 h-64 w-64 rounded-full bg-cyan-400/16 blur-[110px]"
					animate={{ y: [0, 18, 0], opacity: [0.32, 0.5, 0.32] }}
					transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
				/>
				<motion.div
					className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/12 blur-[120px]"
					animate={{ y: [0, 22, 0], x: [0, -12, 0] }}
					transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
				/>
			</div>

			<header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur-md">
				<div className="section-shell">
					<div className="mx-auto flex max-w-7xl items-center justify-between py-4">
						<a href="#" className="group inline-flex items-center gap-2 text-lg font-bold tracking-tight text-white md:text-xl">
							<span className="transition-colors duration-300 group-hover:text-cyan-100">TechCare</span>
							<span className="bg-linear-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">MX</span>
						</a>
						<nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
							<a href="#servicios" className="transition-colors hover:text-white">Servicios</a>
							<a href="#reparaciones" className="transition-colors hover:text-white">Reparaciones</a>
							<a href="#testimonios" className="transition-colors hover:text-white">Testimonios</a>
						</nav>
					</div>
				</div>
			</header>

			<main>
				<section className="section-shell pb-20 pt-10 md:pb-28 md:pt-14">
					<div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
						<Reveal>
							<div>
								<div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
									Computadoras y consolas
								</div>
								<h1 className="max-w-4xl text-5xl font-extrabold leading-[0.92] text-white sm:text-6xl lg:text-7xl">
									<span className="bg-linear-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
										Revive tu tecnología.
									</span>{' '}
									<span className="bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
										Rápido y sin complicaciones.
									</span>
								</h1>
								<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
									Soporte técnico moderno para computadoras y consolas, con procesos claros, tiempos realistas y atención local que te responde sin vueltas.
								</p>
								<div className="mt-8 flex flex-col gap-4 sm:flex-row">
									<a
										href={whatsappUrl}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-cyan-300 to-sky-400 px-7 py-4 text-base font-bold text-slate-950 shadow-[0_18px_50px_rgba(56,189,248,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
									>
										Cotizar por WhatsApp
									</a>
									<a
										href="#servicios"
										className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-7 py-4 text-base font-semibold text-white backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/30 hover:bg-white/10"
									>
										Ver servicios
									</a>
								</div>
								<div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
									{trustIndicators.map((item) => (
										<div key={item.label} className="glass-panel rounded-3xl px-4 py-4">
											<p className="text-sm font-semibold text-white">{item.label}</p>
											<p className="mt-1 text-sm leading-6 text-slate-400">{item.value}</p>
										</div>
									))}
								</div>
							</div>
						</Reveal>

						<Reveal delay={0.12}>
							<GlassPanel strong className="relative overflow-hidden rounded-4xl p-6 sm:p-8">
								<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/60 to-transparent" />
								<p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Diagnóstico claro</p>
								<div className="mt-5 grid gap-4 md:grid-cols-2">
									<div className="rounded-3xl border border-white/10 bg-white/6 p-5">
										<p className="text-sm text-slate-400">Tiempo ágil</p>
										<p className="mt-2 text-3xl font-bold text-white">24h</p>
										<p className="mt-2 text-sm leading-6 text-slate-300">Para servicios express y equipos que no requieren piezas.</p>
									</div>
									<div className="rounded-3xl border border-cyan-400/15 bg-cyan-400/10 p-5">
										<p className="text-sm text-cyan-100/80">Comunicación</p>
										<p className="mt-2 text-3xl font-bold text-white">Honesta</p>
										<p className="mt-2 text-sm leading-6 text-slate-200">Te explico alcances, costos y tiempos antes de mover cualquier pieza.</p>
									</div>
								</div>
								<div className="mt-6 space-y-3 rounded-[28px] border border-white/10 bg-slate-950/35 p-5">
									{[
										'Soporte para laptops, PCs y consolas.',
										'Revisión térmica y limpieza con criterio técnico.',
										'Colaboración externa cuando una falla exige laboratorio especializado.',
									].map((line) => (
										<div key={line} className="flex items-start gap-3">
											<div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
											<p className="text-sm leading-6 text-slate-300">{line}</p>
										</div>
									))}
								</div>
							</GlassPanel>
						</Reveal>
					</div>
				</section>

				<section id="servicios" className="section-shell py-8 md:py-12">
					<Reveal>
						<SectionHeading
							eyebrow="Servicios"
							title="Servicios Express con entrega rápida en 24h"
							description="Intervenciones de software y mantenimiento para dejar tu equipo estable y listo el mismo día."
						/>
					</Reveal>
					<div className="mt-10 grid gap-5 md:grid-cols-2">
						{expressServices.map((item, index) => (
							<Reveal key={item.name} delay={index * 0.08}>
								<ServiceCard item={item} />
							</Reveal>
						))}
					</div>
				</section>

				<section id="reparaciones" className="section-shell py-10 md:py-12">
					<Reveal>
						<SectionHeading
							eyebrow="Reparaciones"
							title="Reparaciones físicas con proceso realista de 3 a 5 días"
							description="Cuando se requieren piezas o sustituciones de hardware, trabajamos con tiempos claros y seguimiento continuo."
						/>
					</Reveal>
					<div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
						{repairServices.map((item, index) => (
							<Reveal key={item.name} delay={index * 0.08}>
								<ServiceCard item={item} />
							</Reveal>
						))}
					</div>
					<Reveal delay={0.24}>
						<div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
							<ChevronRight className="h-4 w-4" />
							El tiempo puede variar según disponibilidad de refacciones y pruebas finales.
						</div>
					</Reveal>
				</section>

				<section id="transparencia" className="section-shell py-10 md:py-16">
					<Reveal>
						<GlassPanel strong className="overflow-hidden rounded-[36px] p-7 sm:p-10">
							<div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
								<div>
									<div className="inline-flex rounded-full border border-amber-300/18 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
										Aviso importante
									</div>
									<h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Transparencia primero, incluso cuando la falla es compleja.</h2>
								</div>
								<div className="rounded-[28px] border border-white/10 bg-white/6 p-6 text-base leading-8 text-slate-200 backdrop-blur-xl">
									<p>
										Para reparaciones de microelectrónica, corto circuito o cambio de metal líquido, trabajo en colaboración con laboratorios especializados para garantizar tu equipo.
									</p>
									<p className="mt-4 text-sm leading-7 text-slate-400">
										Eso significa procesos más seguros, diagnóstico más preciso y cero promesas improvisadas cuando tu dispositivo requiere equipamiento avanzado.
									</p>
								</div>
							</div>
						</GlassPanel>
					</Reveal>
				</section>

				<section id="testimonios" className="section-shell py-10 md:py-16">
					<Reveal>
						<SectionHeading
							eyebrow="Prueba Social"
							title="Lo que dicen nuestros clientes"
							description="La confianza se gana con tiempos cumplidos, comunicación directa y equipos que vuelven a rendir."
						/>
					</Reveal>
					<div className="mt-10 grid gap-6 md:grid-cols-3">
						{testimonials.map((item, index) => (
							<Reveal key={item.name} delay={index * 0.08}>
								<GlassPanel className="h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
									<div className="flex items-center gap-1 text-amber-300">
										{Array.from({ length: 5 }).map((_, starIndex) => (
											<Star key={`${item.name}-${starIndex}`} className="h-4 w-4 fill-current" />
										))}
									</div>
									<p className="mt-4 text-sm leading-7 text-slate-200">"{item.quote}"</p>
									<p className="mt-5 text-sm font-semibold text-cyan-100">{item.name}</p>
								</GlassPanel>
							</Reveal>
						))}
					</div>
				</section>

				<section id="contacto" className="section-shell py-10 md:py-16">
					<Reveal>
						<SectionHeading
							eyebrow="Contacto"
							title="Atención local con seguimiento sencillo y directo"
							description="Si ya sabes la falla o tienes fotos del equipo, envíalas por WhatsApp y te respondo con el camino más viable para repararlo."
						/>
					</Reveal>
					<div className="mt-10 grid gap-6 md:grid-cols-3">
						{contactItems.map((item, index) => (
							<Reveal key={item.title} delay={index * 0.08}>
								<GlassPanel className="h-full rounded-[28px] p-6">
									<p className="text-lg font-bold text-white">{item.title}</p>
									<p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
								</GlassPanel>
							</Reveal>
						))}
					</div>
					<Reveal delay={0.2}>
						<div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-4xl border border-white/10 bg-slate-950/46 px-6 py-6 backdrop-blur-xl md:flex-row md:items-center md:px-8">
							<div>
								<p className="text-lg font-bold text-white">Listo para cotizar sin fricción</p>
								<p className="mt-2 text-sm leading-7 text-slate-400">
									Comparte modelo, falla y fotos. Entre más claro llegue el caso, más rápido sale la propuesta.
								</p>
							</div>
							<a
								href={whatsappUrl}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
							>
								Cotizar por WhatsApp
							</a>
						</div>
					</Reveal>
				</section>
			</main>

			<footer className="section-shell pb-8 pt-2">
				<div className="flex flex-col gap-2 border-t border-white/10 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
					<p>TechCareMX. Soporte técnico local para computadoras y consolas.</p>
					<p>Diseño pensado para transmitir velocidad, claridad y confianza.</p>
				</div>
			</footer>

			<WhatsAppFloat href={whatsappUrl} />
		</div>
	);
}