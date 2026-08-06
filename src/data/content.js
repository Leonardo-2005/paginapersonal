export const SKILLS = [
  { icon: '⚡', title: 'Frontend', desc: 'HTML · CSS · React' },
  { icon: '🛠️', title: 'Backend', desc: 'Node.js · Python' },
  { icon: '🎨', title: 'UI/UX', desc: 'Figma · Diseño' },
  { icon: '📱', title: 'Responsive', desc: 'Mobile first' },
]

export const STATS = [
  { value: '3+', label: 'Años de experiencia' },
  { value: '20+', label: 'Proyectos completados' },
  { value: '100%', label: 'Clientes satisfechos' },
]

export const PROJECTS = [
  {
    tag: 'Arduino · Python',
    title: 'Sistema de Casa Inteligente (Domótica)',
    description:
      'Sistema de domótica para el control de una casa: 8 luces controladas por relés, portón de garaje motorizado con servo (apertura/cierre suave y luz automática), 4 sensores de puertas con anti-rebote, y una alarma de seguridad con buzzer a 4kHz y luz roja parpadeante al dispararse. Incluye una interfaz gráfica de escritorio hecha en Python (Tkinter) que se conecta por puerto serial para monitorear y controlar todo el sistema en tiempo real.',
    role: 'individual',
    contribution:
      'Proyecto individual. Programé el firmware completo en Arduino (C++): lógica de relés, movimiento suave del servo, lectura de sensores con anti-rebote y máquina de estados de la alarma. También desarrollé la interfaz gráfica de escritorio en Python con Tkinter, incluyendo la comunicación serial en tiempo real, el dibujo interactivo de la casa y el registro de eventos del sistema.',
    tech: ['Arduino (C++)', 'Python', 'Tkinter', 'PySerial'],
    link: '',
  },
  {
    tag: 'React · Vite',
    title: 'Portafolio Personal (este sitio)',
    description:
      'Sitio web personal para mostrar mi perfil como desarrollador y mis proyectos. Basado en el diseño creado en Figma durante el primer parcial de Portales Web 1.',
    role: 'individual',
    contribution:
      'Proyecto individual para la clase Portales Web 1. Diseñé el layout en Figma y luego lo implementé con React, dividiendo la interfaz en componentes reutilizables (Navbar, Hero, About, Projects, Footer), maquetación responsive con CSS puro y despliegue en Vercel conectado a GitHub.',
    tech: ['React', 'Vite', 'CSS'],
    link: 'https://github.com/LeonardoHernandez504/paginapersonal2',
  },
]

export const PROFILE = {
  name: 'Leonardo Hernández',
  initials: 'LH',
  role: 'Desarrollador web apasionado por crear experiencias digitales modernas y funcionales.',
  bio: 'Soy un desarrollador web con experiencia en tecnologías modernas. Me apasiona construir interfaces intuitivas y sistemas robustos, tanto en proyectos de software como en proyectos que combinan hardware y software.',
  email: 'lehernandezm2005@gmail.com',
}
