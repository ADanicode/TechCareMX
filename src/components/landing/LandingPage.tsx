import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
	BadgeCheck,
	Cable,
	ChevronRight,
	Clock3,
	Cpu,
	Gamepad2,
	Gauge,
	GraduationCap,
	Keyboard,
	KeyRound,
	MapPin,
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

const pickupLocations = [
	{
		title: 'Punto 1: Kiosco',
		tag: 'Recoleccion y entrega local',
		detail: 'Punto de referencia: kiosco. Ideal para entregas rapidas en zona centrica.',
		iframeSrc:
			'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d555.1834394433079!2d-98.78829331699878!3d19.981865694123236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1775330312835!5m2!1ses-419!2smx',
	},
	{
		title: 'Punto 2: OXXO afuera',
		tag: 'Entrega rapida por mensaje',
		detail: 'Punto de referencia: OXXO afuera. Coordino por WhatsApp la hora exacta de encuentro.',
		iframeSrc:
			'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d283.73444198934124!2d-98.72095752826631!3d19.995255411029017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1775330699820!5m2!1ses-419!2smx',
	},
	{
		title: 'Punto 3: Biblioteca UPP',
		tag: 'Atencion local para estudiantes',
		detail: 'Punto de referencia: biblioteca UPP. Aqui aplican descuentos y servicios especiales para estudiantes.',
		iframeSrc:
			'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1369.3056528003024!2d-98.6841144287174!3d19.98010697612693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1775330774296!5m2!1ses-419!2smx',
	},
];

const uppMapsLink = 'https://maps.app.goo.gl/y4so8LQpG1yTjEin8';

const quoteSteps = [
	'Envias fotos + falla por WhatsApp.',
	'Diagnostico claro con rango de costo.',
	'Aprobacion y entrega con seguimiento.',
];

const confidenceSignals = [
	'Revision tecnica con checklist en cada equipo.',
	'Garantia sobre mano de obra en servicios realizados.',
	'Comunicacion transparente antes de cualquier cambio.',
];

function MapEmbed({ src, title }: { src: string; title: string }) {
	const [showMap, setShowMap] = useState(false);

	return (
		<div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10">
			{showMap ? (
				<iframe
					src={src}
					className="h-64 w-full border-0"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title={title}
				/>
			) : (
				<div className="relative flex h-64 flex-col items-center justify-center gap-3 bg-slate-900/85 px-5 text-center">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_60%)]" />
					<MapPin className="relative h-6 w-6 text-cyan-200" />
					<p className="relative text-sm text-slate-200">Cargar mapa de {title}</p>
					<button
						type="button"
						onClick={() => setShowMap(true)}
						className="relative rounded-full bg-linear-to-r from-cyan-300 to-sky-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
					>
						Mostrar mapa
					</button>
				</div>
			)}
		</div>
	);
}

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
							<a href="#ubicaciones" className="transition-colors hover:text-white">Ubicaciones</a>
							<a href="#testimonios" className="transition-colors hover:text-white">Testimonios</a>
						</nav>
					</div>
					<div className="no-scrollbar -mx-2 flex gap-2 overflow-x-auto pb-3 md:hidden">
						{[
							{ href: '#servicios', label: 'Servicios' },
							{ href: '#reparaciones', label: 'Reparaciones' },
							{ href: '#ubicaciones', label: 'Ubicaciones' },
							{ href: '#testimonios', label: 'Testimonios' },
						].map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="shrink-0 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200"
							>
								{link.label}
							</a>
						))}
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
								<div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-4">
									<p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">Cotizacion profesional</p>
									<p className="mt-2 text-sm leading-7 text-slate-100">Respuesta por mensaje y ruta de solucion con rango de precio antes de iniciar.</p>
								</div>
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
								<div className="mt-6 rounded-[28px] border border-white/10 bg-white/6 p-5">
									<p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Proceso de cotizacion</p>
									<div className="mt-3 space-y-3">
										{quoteSteps.map((step, index) => (
											<div key={step} className="flex items-start gap-3 text-sm text-slate-300">
												<div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 text-xs font-bold text-cyan-100">
													{index + 1}
												</div>
												<p>{step}</p>
											</div>
										))}
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
								<div className="mt-6 grid gap-3">
									{confidenceSignals.map((signal) => (
										<div key={signal} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/38 p-4 text-sm text-slate-200">
											<BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
											<p>{signal}</p>
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

				<section id="ubicaciones" className="section-shell py-10 md:py-16">
					<Reveal>
						<SectionHeading
							eyebrow="Cobertura Local"
							title="Ubicaciones de recoleccion y entrega"
							description="Trabajo con puntos locales cercanos para entregar y recibir equipos de forma mas practica y segura."
						/>
					</Reveal>

					<div className="mt-10 grid gap-6 lg:grid-cols-3">
						{pickupLocations.map((location, index) => (
							<Reveal key={location.title} delay={index * 0.08}>
								<GlassPanel className="h-full rounded-3xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
									<div className="mb-3 flex items-center gap-2 text-cyan-200">
										<MapPin className="h-4 w-4" />
										<p className="text-xs font-semibold uppercase tracking-[0.2em]">{location.tag}</p>
									</div>
									<p className="text-xl font-bold text-white">{location.title}</p>
									<p className="mt-2 text-sm leading-6 text-slate-300">{location.detail}</p>
									<MapEmbed src={location.iframeSrc} title={location.title} />
								</GlassPanel>
							</Reveal>
						))}
					</div>

					<Reveal delay={0.2}>
						<GlassPanel strong className="mt-8 rounded-4xl p-6">
							<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
								<div>
									<div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
										<GraduationCap className="h-4 w-4" />
										Beneficio UPP
									</div>
									<p className="mt-3 text-2xl font-bold text-white">Descuentos especiales y servicios para estudiantes de la UPP</p>
									<p className="mt-2 text-sm leading-7 text-slate-300">Punto sugerido: biblioteca UPP. Agenda por mensaje y coordinamos entrega, recoleccion y beneficio estudiantil.</p>
								</div>
								<a
									href={uppMapsLink}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-cyan-300 to-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
								>
									Abrir punto UPP
								</a>
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
					<Reveal delay={0.28}>
						<div className="mt-4 grid gap-3 md:grid-cols-2">
							<div className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-slate-200">
								<div className="mb-2 inline-flex items-center gap-2 text-cyan-100">
									<Clock3 className="h-4 w-4" />
									<span className="font-semibold">Respuesta agil</span>
								</div>
								Normalmente respondo tan pronto revise el mensaje para no retrasar tu servicio.
							</div>
							<div className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-slate-200">
								<div className="mb-2 inline-flex items-center gap-2 text-cyan-100">
									<BadgeCheck className="h-4 w-4" />
									<span className="font-semibold">Trabajo de calidad</span>
								</div>
								Cada equipo se entrega con validacion funcional y comunicacion clara de lo realizado.
							</div>
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