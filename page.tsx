'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, BriefcaseMedical, Download, GraduationCap, HeartPulse, Mail, MapPin, Phone, Sparkles, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Language = 'es' | 'en';

const copy = {
  es: {
    nav: ['Perfil', 'Experiencia', 'Competencias', 'Formación', 'Contacto'], role: 'Asistente veterinaria', specialty: 'Clínica de animales menores',
    intro: 'Egresada de Medicina Veterinaria y Zootecnia con experiencia práctica en la atención de perros y gatos. Brindo apoyo clínico cuidadoso, comunicación clara con los propietarios y disposición constante para aprender.',
    available: 'Lima, Perú', download: 'Descargar CV', explore: 'Conocer mi experiencia', profile: 'Perfil profesional',
    profileText: 'Apoyo en consulta, hospitalización, toma de muestras, canalización, administración de tratamientos, radiografía y cirugía. Me caracterizo por el seguimiento metódico del paciente y por consultar cuando cada caso lo requiere.',
    stats: [['10+', 'consultas apoyadas por día'], ['1 a 4', 'pacientes hospitalizados'], ['IV · IM · SC', 'administración de tratamientos'], ['VetPraxis', 'registro clínico']],
    experience: 'Experiencia', experienceLead: 'Práctica clínica con énfasis en atención segura, seguimiento y trabajo en equipo.', featured: 'Experiencia clínica destacada', complementary: 'Experiencia complementaria',
    present: [
      { role: 'Asistente veterinaria', company: 'Clínica Veterinaria Ariels', place: 'Lima', date: 'Ene — Ago 2026', bullets: ['Más de 10 consultas diarias y monitoreo de 1 a 4 pacientes hospitalizados.', 'Sujeción, toma de muestras, colocación de vías y tratamientos IV, IM y SC.', 'Control de pacientes críticos y estables, manejo del dolor, radiografías y apoyo en cirugías y emergencias.'] },
      { role: 'Internado veterinario', company: 'Veterinaria Mascotas Mimadas', place: 'Lima', date: 'Ago — Dic 2025', bullets: ['Triaje, análisis de muestras sanguíneas y urinarias, canalización y seguimiento hospitalario.', 'Preparación del paciente, monitoreo anestésico, apoyo quirúrgico y recuperación posoperatoria.'] },
      { role: 'Asistente veterinaria', company: 'Clínica Veterinaria Patotas', place: 'Lima', date: 'Dic 2024 — Mar 2025', bullets: ['Apoyo en consultas, signos vitales, historias clínicas y administración de medicamentos.', 'Supervisión de alimentación, higiene y confort; preparación quirúrgica y orientación a propietarios.'] },
    ],
    other: [
      ['Practicante de clínica veterinaria', 'Clínica Veterinaria Ariels', 'Ago — Oct 2024', 'Consultas, laboratorio, vacunación, hospitalización y apoyo quirúrgico.'],
      ['Prácticas preprofesionales', 'Centro Urku · Tarapoto', '6 — 24 Feb 2024', 'Cuidado de animales en cuarentena, alimentación y apoyo en el mariposario.'],
      ['Prácticas preprofesionales', 'INIA · Huánuco', '7 — 23 Ago 2023', 'Cuidado de ovinos y cuyes, administración de fármacos y enriquecimiento ambiental.'],
      ['Asistente del médico veterinario', 'Clínica Veterinaria Canicat · Lima', 'Mar 2022 — Mar 2023', 'Recepción, historias clínicas, examen físico, sujeción y orientación a clientes.'],
    ],
    skills: 'Competencias', skillsLead: 'Capacidades clínicas y personales aplicadas al cuidado diario del paciente.',
    skillItems: [['Atención clínica', 'Triaje, signos vitales, sujeción, toma de muestras y orientación a propietarios.'], ['Hospitalización', 'Canalización, fluidoterapia, administración de medicamentos y monitoreo.'], ['Procedimientos', 'Vacunación, desparasitación, radiografía, profilaxis y asistencia quirúrgica.'], ['Gestión clínica', 'Historias clínicas, VetPraxis, inventario, asepsia, limpieza y desinfección.'], ['Habilidades', 'Organización, trabajo metódico, trabajo bajo presión, comunicación y aprendizaje continuo.']],
    education: 'Educación y formación', degree: 'Medicina Veterinaria y Zootecnia', school: 'Universidad Científica del Sur · Egresada', degreeDate: '2017 — Dic 2025',
    courses: [['Ciclo de Capacitación Continua', 'Cirugía, anestesia y medicina veterinaria de mínima invasión · CMVD Lima', '19 Feb 2026 · 4 horas'], ['Premedicación anestésica', 'Universidad Científica del Sur', '14 Jun 2022 · 2 horas'], ['Jornada de Medicina Felina', 'Universidad Científica del Sur', '7 Jul 2020 · 12 horas']],
    achievements: 'Logros y participación', achievementItems: ['Reconocimiento del radiógrafo por seguir indicaciones y obtener imágenes de calidad.', 'Incorporación al apoyo en emergencias por dedicación y confianza en las tareas asignadas.', 'Participación en campaña de desparasitación y control de pulgas.'],
    tools: 'Idiomas y herramientas', toolsText: 'Español nativo · Inglés básico · VetPraxis · Word · Excel · PowerPoint · Canva', contact: 'Contacto', contactLead: 'Disponible para aportar cuidado clínico, organización y aprendizaje continuo a un equipo veterinario.', call: 'Llamar', write: 'Escribir', footer: 'Asistente veterinaria · Lima, Perú',
  },
  en: {
    nav: ['Profile', 'Experience', 'Skills', 'Education', 'Contact'], role: 'Veterinary assistant', specialty: 'Small animal practice',
    intro: 'Veterinary Medicine and Animal Science graduate with hands-on experience caring for dogs and cats. I provide attentive clinical support, clear communication with owners, and a consistent willingness to learn.',
    available: 'Lima, Peru', download: 'Download résumé', explore: 'Explore my experience', profile: 'Professional profile',
    profileText: 'I support consultations, hospitalization, sample collection, catheter placement, treatment administration, radiography, and surgery. I am known for methodical patient follow-up and for seeking guidance whenever a case requires it.',
    stats: [['10+', 'consultations supported daily'], ['1 to 4', 'hospitalized patients'], ['IV · IM · SC', 'treatment administration'], ['VetPraxis', 'clinical records']],
    experience: 'Experience', experienceLead: 'Hands-on clinical work focused on safe care, patient follow-up, and teamwork.', featured: 'Featured clinical experience', complementary: 'Additional experience',
    present: [
      { role: 'Veterinary assistant', company: 'Clínica Veterinaria Ariels', place: 'Lima', date: 'Jan — Aug 2026', bullets: ['Supported more than 10 consultations per day and monitored 1 to 4 hospitalized patients.', 'Patient restraint, sample collection, catheter placement, and IV, IM, and SC treatments.', 'Monitored critical and stable patients; supported pain management, radiography, surgery, and emergencies.'] },
      { role: 'Veterinary intern', company: 'Veterinaria Mascotas Mimadas', place: 'Lima', date: 'Aug — Dec 2025', bullets: ['Triage, blood and urine sample analysis, catheter placement, and inpatient follow-up.', 'Patient preparation, anesthetic monitoring, surgical support, and postoperative recovery.'] },
      { role: 'Veterinary assistant', company: 'Clínica Veterinaria Patotas', place: 'Lima', date: 'Dec 2024 — Mar 2025', bullets: ['Supported consultations, recorded vital signs and medical histories, and administered prescribed medication.', 'Supervised feeding, hygiene, and comfort; prepared surgical areas and guided pet owners.'] },
    ],
    other: [
      ['Veterinary clinic trainee', 'Clínica Veterinaria Ariels', 'Aug — Oct 2024', 'Consultations, laboratory work, vaccination, hospitalization, and surgical support.'],
      ['Pre-professional internship', 'Centro Urku · Tarapoto', 'Feb 6 — 24, 2024', 'Animal feeding and quarantine care, plus support for the butterfly enclosure.'],
      ['Pre-professional internship', 'INIA · Huánuco', 'Aug 7 — 23, 2023', 'Sheep and guinea pig care, medication, antiparasitic treatment, and enrichment.'],
      ['Veterinary assistant', 'Clínica Veterinaria Canicat · Lima', 'Mar 2022 — Mar 2023', 'Reception, clinical records, physical examinations, safe restraint, and client guidance.'],
    ],
    skills: 'Skills', skillsLead: 'Clinical and interpersonal skills applied to each patient’s daily care.',
    skillItems: [['Clinical care', 'Triage, vital signs, restraint, sample collection, and owner guidance.'], ['Hospitalization', 'Catheter placement, fluid therapy, medication administration, and monitoring.'], ['Procedures', 'Vaccination, deworming, radiography, prophylaxis, and surgical assistance.'], ['Clinical operations', 'Medical records, VetPraxis, inventory, asepsis, cleaning, and disinfection.'], ['Core strengths', 'Organization, methodical work, composure under pressure, communication, and continuous learning.']],
    education: 'Education and training', degree: 'Veterinary Medicine and Animal Science', school: 'Universidad Científica del Sur · Graduate', degreeDate: '2017 — Dec 2025',
    courses: [['Continuing Education Program', 'Surgery, anesthesia, and minimally invasive veterinary medicine · CMVD Lima', 'Feb 19, 2026 · 4 hours'], ['Anesthetic premedication', 'Universidad Científica del Sur', 'Jun 14, 2022 · 2 hours'], ['Feline Medicine Conference', 'Universidad Científica del Sur', 'Jul 7, 2020 · 12 hours']],
    achievements: 'Achievements and participation', achievementItems: ['Praised by the radiographer for following directions and producing quality images.', 'Selected to support emergency cases due to dedication and reliability.', 'Participated in a deworming and flea-control campaign.'],
    tools: 'Languages and tools', toolsText: 'Native Spanish · Basic English · VetPraxis · Word · Excel · PowerPoint · Canva', contact: 'Contact', contactLead: 'Ready to bring clinical care, organization, and continuous learning to a veterinary team.', call: 'Call', write: 'Email', footer: 'Veterinary assistant · Lima, Peru',
  },
};

const ids = ['perfil', 'experiencia', 'competencias', 'formacion', 'contacto'];

export default function Home() {
  const [language, setLanguage] = useState<Language>('es');
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'es' ? 'Adriana Francia Higinio | Asistente veterinaria' : 'Adriana Francia Higinio | Veterinary assistant';
  }, [language]);

  return <main>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Adriana Francia Higinio — inicio"><span className="brand-mark">AF</span><span className="brand-name">Adriana Francia</span></a>
      <nav aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}>{t.nav.map((item, index) => <a key={item} href={`#${ids[index]}`}>{item}</a>)}</nav>
      <div className="language-switch" aria-label={language === 'es' ? 'Seleccionar idioma' : 'Choose language'}>
        <Button variant={language === 'es' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('es')} aria-pressed={language === 'es'}>ES</Button>
        <Button variant={language === 'en' ? 'default' : 'ghost'} size="sm" onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</Button>
      </div>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-copy"><div className="eyebrow"><Stethoscope size={16} /> {t.specialty}</div><h1>Adriana del Carmen <span>Francia Higinio</span></h1><p className="role">{t.role}</p><p className="intro">{t.intro}</p>
        <div className="hero-actions"><Button nativeButton={false} size="lg" render={<a href="./cv-adriana-francia.pdf" download />}><Download /> {t.download}</Button><Button nativeButton={false} variant="outline" size="lg" render={<a href="#experiencia" />}><ArrowDown /> {t.explore}</Button></div>
      </div>
      <aside className="profile-card" aria-label={t.profile}><div className="profile-top"><div className="monogram">AF</div><span className="status-dot" aria-hidden="true" /></div><p className="profile-label">{t.role}</p><h2>{t.specialty}</h2><div className="contact-mini"><MapPin /> {t.available}</div><div className="clinical-line"><span /><span /><span /><span /></div><p className="small-note">{language === 'es' ? 'Cuidado atento · Trabajo metódico · Aprendizaje continuo' : 'Attentive care · Methodical work · Continuous learning'}</p></aside>
    </section>

    <section className="section" id="perfil"><div className="section-kicker"><HeartPulse /> 01</div><div className="section-grid"><div><h2>{t.profile}</h2></div><div><p className="section-lead">{t.profileText}</p></div></div><div className="stats-grid">{t.stats.map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></section>

    <section className="section" id="experiencia"><div className="section-kicker"><BriefcaseMedical /> 02</div><div className="section-grid section-intro"><div><h2>{t.experience}</h2></div><div><p className="section-lead">{t.experienceLead}</p></div></div><p className="subheading">{t.featured}</p>
      <div className="timeline">{t.present.map((job, index) => <article className="job" key={job.company}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="job-card"><div className="job-head"><div><h3>{job.role}</h3><p>{job.company} · {job.place}</p></div><time>{job.date}</time></div><ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
      <p className="subheading other-heading">{t.complementary}</p><div className="experience-grid">{t.other.map(([role, company, date, description]) => <article className="compact-card" key={`${company}-${date}`}><time>{date}</time><h3>{role}</h3><p className="company">{company}</p><p>{description}</p></article>)}</div>
    </section>

    <section className="section tinted" id="competencias"><div className="section-kicker"><Sparkles /> 03</div><div className="section-grid section-intro"><div><h2>{t.skills}</h2></div><div><p className="section-lead">{t.skillsLead}</p></div></div><div className="skills-grid">{t.skillItems.map(([title, description], index) => <article className="skill-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="tools-band"><strong>{t.tools}</strong><span>{t.toolsText}</span></div></section>

    <section className="section" id="formacion"><div className="section-kicker"><GraduationCap /> 04</div><div className="section-grid section-intro"><div><h2>{t.education}</h2></div><div className="degree"><time>{t.degreeDate}</time><h3>{t.degree}</h3><p>{t.school}</p></div></div><div className="courses-grid">{t.courses.map(([title, place, date]) => <article className="course" key={title}><div className="course-dot" /><div><time>{date}</time><h3>{title}</h3><p>{place}</p></div></article>)}</div><div className="achievements"><h3>{t.achievements}</h3><ol>{t.achievementItems.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div></section>

    <section className="contact-section" id="contacto"><div className="contact-orbit" aria-hidden="true"><span>AF</span></div><div className="contact-copy"><p className="section-kicker light">05</p><h2>{t.contact}</h2><p>{t.contactLead}</p></div><div className="contact-actions"><a href="tel:+51965389678"><Phone /><span><small>{t.call}</small>+51 965 389 678</span></a><a href="mailto:100036934@cientifica.edu.pe"><Mail /><span><small>{t.write}</small>100036934@cientifica.edu.pe</span></a></div></section>
    <footer><span>© 2026 Adriana Francia Higinio</span><span>{t.footer}</span></footer>
  </main>;
}
