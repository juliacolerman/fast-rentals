import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Car,
  Check,
  ChevronDown,
  Clock,
  Fuel,
  Gauge,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Wallet,
  Zap,
} from "lucide-react";

// =============================================================
// FAST RENTALS — Luxury High-Converting Landing Page
// Replace these two values with your real WhatsApp number and phone number.
// WhatsApp format: https://wa.me/1XXXXXXXXXX
// Phone format: tel:+1XXXXXXXXXX
// =============================================================

const WHATSAPP_URL = "https://wa.me/12136135314?text=Hi%20Fast%20Rentals%2C%20I%20want%20to%20rent%20a%20car%20and%20start%20driving%20this%20week.";
const PHONE_URL = "tel:+12136135314";
const SMS_URL = "sms:+12136135314";
const DISPLAY_PHONE = "(213) 613-5314";

// =============================================================
// META PIXEL + GOOGLE ANALYTICS
// Replace with your real IDs before launch
// =============================================================

const META_PIXEL_ID = "YOUR_META_PIXEL_ID";
const GOOGLE_ANALYTICS_ID = "G-XXXXXXXXXX";

// =============================================================
// 3-LANGUAGE SUPPORT — English / Portuguese / Spanish
// =============================================================

const translations = {
  pt: {
    "Hybrid Rentals": "Aluguel de Híbridos",
    "Text Message": "Enviar SMS",
    "Call": "Ligar",
    "WhatsApp": "WhatsApp",
    "Los Angeles and Surrounding Areas": "Disponível em Los Angeles e grandes cidades",
    "Freedom Starts With The Right Car.": "A liberdade começa com o carro certo.",
    "Fast Rentals helps drivers find affordable weekly cars to start working fast.": "A Fast Rentals ajuda motoristas a encontrar carros semanais acessíveis para começar a trabalhar rápido.",
    "Get Approved First. Pay At Pickup.": "Seja aprovado primeiro. Pague na retirada.",
    "View Available Cars Now": "Ver carros disponíveis agora",
    "Call Us Now": "Ligue agora",
    "Available Now": "Disponível agora",
    "Start Driving This Week": "Comece a dirigir esta semana",
    "Inventory moves fast. Message us today to reserve a hybrid vehicle and get approved quickly.": "O estoque muda rápido. Envie mensagem hoje para verificar disponibilidade e ser aprovado rapidamente.",
    "CHECK AVAILABILITY": "VERIFICAR DISPONIBILIDADE",
    "AVAILABLE TODAY": "DISPONÍVEL HOJE",
    "START DRIVING": "COMEÇAR AGORA",
    "AVAILABLE NOW": "DISPONÍVEL AGORA",
    "BEST GAS SAVER": "MAIOR ECONOMIA",
    "UBER READY": "PRONTO PARA UBER",
    "LIMITED AVAILABILITY": "DISPONIBILIDADE LIMITADA",
    "Hybrid - Uber Ready": "Híbrido - Pronto para Uber",
    "Hybrid - Uber & Delivery Ready": "Híbrido - Pronto para Uber e entregas",
    "Hybrid - Delivery Ready": "Híbrido - Pronto para entregas",
    "Luxury Hybrid - Premium Ride": "Híbrido de luxo - Viagem premium",
    "Sedan - Uber & Personal Ready": "Sedan - Uber e uso pessoal",
    "SUV - Premium Utility Ride": "SUV - Utilitário premium",
    "Insurance Included": "Seguro incluído",
    "Unlimited Miles": "Milhas ilimitadas",
    "Great on Gas": "Econômico na gasolina",
    "Fast Approval": "Aprovação rápida",
    "Fuel Efficient": "Econômico",
    "Uber Ready": "Pronto para Uber",
    "Extremely Fuel Efficient": "Extremamente econômico",
    "Perfect for DoorDash": "Perfeito para DoorDash",
    "Low Gas Cost": "Baixo custo de gasolina",
    "Uber & Lyft Ready": "Pronto para Uber e Lyft",
    "Save More On Gas": "Economize mais na gasolina",
    "Luxury Interior": "Interior de luxo",
    "Premium Comfort": "Conforto premium",
    "Uber Comfort Ready": "Pronto para Uber Comfort",
    "Reliable Daily Driving": "Confiável para o dia a dia",
    "Spacious SUV Interior": "Interior SUV espaçoso",
    "Comfortable Daily Driving": "Direção confortável diária",
    "Personal Ready": "Pronto para uso pessoal",
    "Comfortable Sedan": "Sedan confortável",
    "Great For Rideshare": "Ótimo para rideshare",
    "Why Pay More?": "Por que pagar mais?",
    "Keep more of what you earn.": "Fique com mais do que você ganha.",
    "Message Us On WhatsApp": "Chame no WhatsApp",
    "Other Rentals": "Outros aluguéis",
    "per week": "por semana",
    "Lower weekly pricing. More money in your pocket.": "Preço semanal menor. Mais dinheiro no seu bolso.",
    "What’s Included?": "O que está incluído?",
    "Fast approval. Reliable vehicles. Ready for drivers.": "Aprovação rápida. Veículos confiáveis. Pronto para motoristas.",
    "Maintenance Included": "Manutenção incluída",
    "DoorDash Ready": "Pronto para DoorDash",
    "Start Earning This Week": "Comece a ganhar esta semana",
    "Most drivers start within": "A maioria começa em",
    "Hybrid vehicles can help": "Veículos híbridos ajudam a",
    "save on gas": "economizar gasolina",
    "Weekly rentals from": "Aluguéis semanais a partir de",
    "Get approved.": "Seja aprovado.",
    "Get keys.": "Pegue as chaves.",
    "Get moving.": "Comece a dirigir.",
    "Fast Approval. Fast Keys. Fast Money.": "Aprovação rápida. Chaves rápidas. Dinheiro rápido.",
    "How It Works": "Como funciona",
    "Simple process. Fast approval. Ready to drive.": "Processo simples. Aprovação rápida. Pronto para dirigir.",
    "Choose A Car": "Escolha um carro",
    "Pick from available weekly rental vehicles ready to drive.": "Escolha entre carros semanais disponíveis e prontos para dirigir.",
    "Message Us": "Envie mensagem",
    "We check availability and basic requirements quickly.": "Verificamos disponibilidade e requisitos básicos rapidamente.",
    "Get Approved": "Seja aprovado",
    "Once approved, get on the road fast.": "Depois da aprovação, comece a dirigir rápido.",
    "Start Today": "Comece hoje",
    "More Vehicles Available": "Mais veículos disponíveis",
    "Looking For Something Else?": "Procurando outra opção?",
    "Call or Text Us For More Vehicle Options": "Ligue ou envie SMS para mais opções",
    "Call Now": "Ligar agora",
    "FAQ": "Perguntas",
    "Fast answers for fast drivers.": "Respostas rápidas para motoristas rápidos.",
    "Questions? Contact us anytime.": "Dúvidas? Fale conosco a qualquer hora.",
    "Do I need credit?": "Preciso de crédito?",
    "No credit check.": "Sem consulta de crédito.",
    "What do I need to get approved?": "O que preciso para ser aprovado?",
    "Valid driver license and basic verification.": "Carteira de motorista válida e verificação básica.",
    "Are the cars Uber and DoorDash ready?": "Os carros estão prontos para Uber e DoorDash?",
    "Yes. Rideshare and delivery ready.": "Sim. Prontos para rideshare e entregas.",
    "Is insurance included?": "O seguro está incluído?",
    "Yes, insurance is included on available vehicles. Accident responsibility and deductible details are explained before pickup.": "Sim, o seguro está incluído nos veículos disponíveis. Responsabilidade por acidentes e franquia são explicadas antes da retirada.",
    "How fast is approval?": "Quão rápida é a aprovação?",
    "Most approvals happen same day.": "A maioria das aprovações acontece no mesmo dia.",
    "How much is the deposit?": "Qual é o valor do depósito?",
    "Refundable deposit starts at $200 depending on the vehicle.": "O depósito reembolsável começa em $200, dependendo do veículo.",
    "Driver Reviews": "Avaliações de motoristas",
    "Trusted By": "Confiado por",
    "Real Drivers": "Motoristas reais",
    "Ready To Drive?": "Pronto para dirigir?",
    "Your next vehicle is ready. Message us today.": "Seu próximo veículo está pronto. Envie mensagem hoje.",
    "Fast Rentals helps connect drivers with available weekly vehicles. Vehicle availability, approval, and terms may vary.": "A Fast Rentals ajuda a conectar motoristas com veículos semanais disponíveis. Disponibilidade, aprovação e termos podem variar.",
    "Available In Los Angeles & Major Cities": "Disponível em Los Angeles e grandes cidades",
    "What brings you here?": "O que você está procurando?",
    "DRIVER RENTALS": "ALUGUEL PARA MOTORISTAS",
    "I Need A Car Rental": "Preciso alugar um carro",
    "VEHICLE OWNERS": "DONOS DE VEÍCULOS",
    "I Want To Rent Out My Car": "Quero alugar meu carro",
    "Southern California & Major Cities": "Sul da Califórnia e grandes cidades",
    "← Back": "← Voltar",
    "Turn Your Car Into": "Transforme seu carro em",
    "Weekly Income.": "Renda semanal.",
    "We help connect qualified drivers with reliable weekly rental vehicles across Los Angeles and surrounding areas.": "Ajudamos a conectar motoristas qualificados com veículos confiáveis de aluguel semanal em Los Angeles e regiões próximas.",
    "We help connect drivers with reliable vehicles across California and surrounding areas.": "Ajudamos a conectar motoristas qualificados com veículos confiáveis de aluguel semanal em Los Angeles e regiões próximas.",
    "Submit Your Vehicle": "Enviar meu veículo",
    "Qualified Drivers": "Motoristas qualificados",
    "Weekly Payment Coordination": "Coordenação de pagamento semanal",
    "Professional Listings": "Anúncios profissionais",
    "Roadside Support Available": "Assistência na estrada disponível",
    "The Problem": "O problema",
    "Tired Of Your Car Sitting Unused?": "Cansado de deixar seu carro parado?",
    "Finding reliable drivers is stressful.": "Encontrar motoristas confiáveis é estressante.",
    "Most owners struggle to find qualified renters consistently.": "Muitos donos têm dificuldade para encontrar locatários qualificados com frequência.",
    "Managing payments takes time.": "Gerenciar pagamentos toma tempo.",
    "Late payments, reminders, and communication become exhausting.": "Pagamentos atrasados, lembretes e comunicação acabam cansando.",
    "Your car should be making money.": "Seu carro deveria estar gerando dinheiro.",
    "Unused vehicles lose money every week they sit parked.": "Carros parados deixam de gerar renda toda semana.",
    "Hybrid Demand": "Demanda por híbridos",
    "Hybrid Vehicles Are In High Demand": "Veículos híbridos estão em alta demanda",
    "Drivers want lower gas costs, Uber-ready vehicles, and reliable weekly rentals.": "Motoristas querem gastar menos com gasolina, carros prontos para Uber e aluguel semanal confiável.",
    "What We Do": "O que fazemos",
    "Simple Support For Vehicle Owners.": "Suporte simples para donos de veículos.",
    "Driver Screening": "Verificação de motoristas",
    "Weekly Coordination": "Coordenação semanal",
    "Faster Rentals": "Aluguéis mais rápidos",
    "Less Stress": "Menos estresse",
    "Owner Income Potential": "Potencial de renda do dono",
    "Owners Typically Earn": "Donos geralmente ganham",
    "$750-$1000 per month": "$750-$1000 por mês",
    "each car depending on vehicle type and demand": "por carro, dependendo do tipo de veículo e da demanda",
    "No Upfront Cost": "Sem custo inicial",
    "You Don’t Pay Unless Your Car Gets Rented.": "Você não paga até seu carro ser alugado.",
    "We only make money when you make money.": "Só ganhamos quando você ganha.",
    "There are no upfront fees to partner with Fast Rentals. You keep your agreed weekly amount for the vehicle, and our commission is only applied once the vehicle is actively rented.": "Não há taxas iniciais para trabalhar com a Fast Rentals. Você mantém o valor semanal combinado pelo veículo, e nossa comissão só é aplicada quando o veículo está alugado.",
    "Vehicles We Accept": "Veículos que aceitamos",
    "Reliable Vehicles Drivers Actually Want": "Veículos confiáveis que motoristas realmente procuram",
    "Hybrid SUVs": "SUVs híbridos",
    "Uber Comfort Vehicles": "Veículos Uber Comfort",
    "Affordable Vehicles": "Veículos acessíveis",
    "check if your car fits": "verifique se seu carro se encaixa",
    "Turn Your Car Into Weekly Income.": "Transforme seu carro em renda semanal.",
    "Your car shouldn’t sit parked losing money.": "Seu carro não deveria ficar parado perdendo dinheiro.",
    "We help owners connect with drivers looking for reliable weekly rental vehicles across Southern California and major cities.": "Ajudamos donos a se conectar com motoristas procurando veículos semanais confiáveis no Sul da Califórnia e grandes cidades.",
    "WhatsApp Us Today": "Fale no WhatsApp hoje"
  },
  es: {
    "Hybrid Rentals": "Rentas híbridas",
    "Text Message": "Enviar texto",
    "Call": "Llamar",
    "WhatsApp": "WhatsApp",
    "Available In Los Angeles, San Diego, San Francisco, Las Vegas & Surrounding Areas": "Disponible en Los Ángeles y ciudades principales",
    "Freedom Starts With The Right Car.": "La libertad empieza con el auto correcto.",
    "Fast Rentals helps drivers find affordable weekly cars to start working fast.": "Fast Rentals ayuda a conductores a encontrar autos semanales accesibles para empezar a trabajar rápido.",
    "Get Approved First. Pay At Pickup.": "Apruébate primero. Paga al recoger.",
    "View Available Cars Now": "Ver autos disponibles ahora",
    "Call Us Now": "Llámanos ahora",
    "Available Now": "Disponible ahora",
    "Start Driving This Week": "Empieza a manejar esta semana",
    "Inventory moves fast. Message us today to reserve a hybrid vehicle and get approved quickly.": "El inventario cambia rápido. Escríbenos hoy para verificar disponibilidad y aprobarte rápido.",
    "CHECK AVAILABILITY": "VER DISPONIBILIDAD",
    "AVAILABLE TODAY": "DISPONIBLE HOY",
    "START DRIVING": "EMPEZAR AHORA",
    "AVAILABLE NOW": "DISPONIBLE AHORA",
    "BEST GAS SAVER": "MÁS ECONÓMICO",
    "UBER READY": "LISTO PARA UBER",
    "LIMITED AVAILABILITY": "DISPONIBILIDAD LIMITADA",
    "Hybrid - Uber Ready": "Híbrido - Listo para Uber",
    "Hybrid - Uber & Delivery Ready": "Híbrido - Listo para Uber y entregas",
    "Hybrid - Delivery Ready": "Híbrido - Listo para entregas",
    "Luxury Hybrid - Premium Ride": "Híbrido de lujo - Viaje premium",
    "Sedan - Uber & Personal Ready": "Sedán - Uber y uso personal",
    "SUV - Premium Utility Ride": "SUV - Utilitario premium",
    "Insurance Included": "Seguro incluido",
    "Unlimited Miles": "Millas ilimitadas",
    "Great on Gas": "Ahorra gasolina",
    "Fast Approval": "Aprobación rápida",
    "Fuel Efficient": "Eficiente en gasolina",
    "Uber Ready": "Listo para Uber",
    "Extremely Fuel Efficient": "Extremadamente eficiente",
    "Perfect for DoorDash": "Perfecto para DoorDash",
    "Low Gas Cost": "Bajo costo de gasolina",
    "Uber & Lyft Ready": "Listo para Uber y Lyft",
    "Save More On Gas": "Ahorra más gasolina",
    "Luxury Interior": "Interior de lujo",
    "Premium Comfort": "Comodidad premium",
    "Uber Comfort Ready": "Listo para Uber Comfort",
    "Reliable Daily Driving": "Confiable para uso diario",
    "Spacious SUV Interior": "Interior SUV espacioso",
    "Comfortable Daily Driving": "Manejo diario cómodo",
    "Personal Ready": "Listo para uso personal",
    "Comfortable Sedan": "Sedán cómodo",
    "Great For Rideshare": "Ideal para rideshare",
    "Why Pay More?": "¿Por qué pagar más?",
    "Keep more of what you earn.": "Quédate con más de lo que ganas.",
    "Message Us On WhatsApp": "Escríbenos por WhatsApp",
    "Other Rentals": "Otras rentas",
    "per week": "por semana",
    "Lower weekly pricing. More money in your pocket.": "Precio semanal más bajo. Más dinero en tu bolsillo.",
    "What’s Included?": "¿Qué está incluido?",
    "Fast approval. Reliable vehicles. Ready for drivers.": "Aprobación rápida. Vehículos confiables. Listos para conductores.",
    "Maintenance Included": "Mantenimiento incluido",
    "DoorDash Ready": "Listo para DoorDash",
    "Start Earning This Week": "Empieza a ganar esta semana",
    "Most drivers start within": "La mayoría empieza en",
    "Hybrid vehicles can help": "Los híbridos ayudan a",
    "save on gas": "ahorrar gasolina",
    "Weekly rentals from": "Rentas semanales desde",
    "Get approved.": "Apruébate.",
    "Get keys.": "Recibe las llaves.",
    "Get moving.": "Empieza a manejar.",
    "Fast Approval. Fast Keys. Fast Money.": "Aprobación rápida. Llaves rápidas. Dinero rápido.",
    "How It Works": "Cómo funciona",
    "Simple process. Fast approval. Ready to drive.": "Proceso simple. Aprobación rápida. Listo para manejar.",
    "Choose A Car": "Elige un auto",
    "Pick from available weekly rental vehicles ready to drive.": "Elige entre autos semanales disponibles y listos para manejar.",
    "Message Us": "Envíanos mensaje",
    "We check availability and basic requirements quickly.": "Revisamos disponibilidad y requisitos básicos rápido.",
    "Get Approved": "Apruébate",
    "Once approved, get on the road fast.": "Una vez aprobado, sal a manejar rápido.",
    "Start Today": "Empieza hoy",
    "More Vehicles Available": "Más vehículos disponibles",
    "Looking For Something Else?": "¿Buscas otra opción?",
    "Call or Text Us For More Vehicle Options": "Llama o envía texto para más opciones",
    "Call Now": "Llamar ahora",
    "FAQ": "Preguntas",
    "Fast answers for fast drivers.": "Respuestas rápidas para conductores rápidos.",
    "Questions? Contact us anytime.": "¿Preguntas? Contáctanos cuando quieras.",
    "Do I need credit?": "¿Necesito crédito?",
    "No credit check.": "Sin revisión de crédito.",
    "What do I need to get approved?": "¿Qué necesito para aprobarme?",
    "Valid driver license and basic verification.": "Licencia válida y verificación básica.",
    "Are the cars Uber and DoorDash ready?": "¿Los autos están listos para Uber y DoorDash?",
    "Yes. Rideshare and delivery ready.": "Sí. Listos para rideshare y entregas.",
    "Is insurance included?": "¿El seguro está incluido?",
    "Yes, insurance is included on available vehicles. Accident responsibility and deductible details are explained before pickup.": "Sí, el seguro está incluido en vehículos disponibles. Responsabilidad por accidentes y deducible se explican antes de recoger.",
    "How fast is approval?": "¿Qué tan rápida es la aprobación?",
    "Most approvals happen same day.": "La mayoría de aprobaciones son el mismo día.",
    "How much is the deposit?": "¿Cuánto es el depósito?",
    "Refundable deposit starts at $200 depending on the vehicle.": "El depósito reembolsable empieza en $200, dependiendo del vehículo.",
    "Driver Reviews": "Reseñas de conductores",
    "Trusted By": "Confiado por",
    "Real Drivers": "Conductores reales",
    "Ready To Drive?": "¿Listo para manejar?",
    "Your next vehicle is ready. Message us today.": "Tu próximo vehículo está listo. Escríbenos hoy.",
    "Fast Rentals helps connect drivers with available weekly vehicles. Vehicle availability, approval, and terms may vary.": "Fast Rentals ayuda a conectar conductores con vehículos semanales disponibles. Disponibilidad, aprobación y términos pueden variar.",
    "Available In Los Angeles & Major Cities": "Disponible en Los Ángeles y ciudades principales",
    "Los Angeles and Surrounding Areas": "Los Ángeles y áreas cercanas",
    "What brings you here?": "¿Qué estás buscando?",
    "DRIVER RENTALS": "RENTAS PARA CONDUCTORES",
    "I Need A Car Rental": "Necesito rentar un auto",
    "VEHICLE OWNERS": "DUEÑOS DE VEHÍCULOS",
    "I Want To Rent Out My Car": "Quiero rentar mi auto",
    "Southern California & Major Cities": "Sur de California y ciudades principales",
    "← Back": "← Volver",
    "Turn Your Car Into": "Convierte tu auto en",
    "Weekly Income.": "Ingreso semanal.",
    "We help connect qualified drivers with reliable weekly rental vehicles across Los Angeles and surrounding areas.": "Ayudamos a conectar conductores calificados con vehículos confiables de renta semanal en Los Ángeles y áreas cercanas.",
    "We help connect drivers with reliable vehicles across California and surrounding areas.": "Ayudamos a conectar conductores calificados con vehículos confiables de renta semanal en Los Ángeles y áreas cercanas.",
    "Submit Your Vehicle": "Enviar mi vehículo",
    "Qualified Drivers": "Conductores calificados",
    "Weekly Payment Coordination": "Coordinación de pagos semanales",
    "Professional Listings": "Anuncios profesionales",
    "Roadside Support Available": "Asistencia en carretera disponible",
    "The Problem": "El problema",
    "Tired Of Your Car Sitting Unused?": "¿Cansado de tener tu auto parado?",
    "Finding reliable drivers is stressful.": "Encontrar conductores confiables es estresante.",
    "Most owners struggle to find qualified renters consistently.": "Muchos dueños batallan para encontrar rentadores calificados constantemente.",
    "Managing payments takes time.": "Gestionar pagos toma tiempo.",
    "Late payments, reminders, and communication become exhausting.": "Pagos tarde, recordatorios y comunicación se vuelven agotadores.",
    "Your car should be making money.": "Tu auto debería estar generando dinero.",
    "Unused vehicles lose money every week they sit parked.": "Los vehículos parados pierden dinero cada semana.",
    "Hybrid Demand": "Demanda híbrida",
    "Hybrid Vehicles Are In High Demand": "Los vehículos híbridos están en alta demanda",
    "Drivers want lower gas costs, Uber-ready vehicles, and reliable weekly rentals.": "Los conductores quieren gastar menos en gasolina, autos listos para Uber y rentas semanales confiables.",
    "What We Do": "Qué hacemos",
    "Simple Support For Vehicle Owners.": "Soporte simple para dueños de vehículos.",
    "Driver Screening": "Verificación de conductores",
    "Weekly Coordination": "Coordinación semanal",
    "Faster Rentals": "Rentas más rápidas",
    "Less Stress": "Menos estrés",
    "Owner Income Potential": "Potencial de ingreso del dueño",
    "Owners Typically Earn": "Los dueños suelen ganar",
    "$750-$1000 per month": "$750-$1000 al mes",
    "each car depending on vehicle type and demand": "por auto, dependiendo del tipo de vehículo y la demanda",
    "No Upfront Cost": "Sin costo inicial",
    "You Don’t Pay Unless Your Car Gets Rented.": "No pagas hasta que tu auto se rente.",
    "We only make money when you make money.": "Solo ganamos cuando tú ganas.",
    "There are no upfront fees to partner with Fast Rentals. You keep your agreed weekly amount for the vehicle, and our commission is only applied once the vehicle is actively rented.": "No hay costos iniciales para trabajar con Fast Rentals. Mantienes el monto semanal acordado por el vehículo, y nuestra comisión solo aplica cuando el vehículo está rentado.",
    "Vehicles We Accept": "Vehículos que aceptamos",
    "Reliable Vehicles Drivers Actually Want": "Vehículos confiables que los conductores realmente quieren",
    "Hybrid SUVs": "SUVs híbridos",
    "Uber Comfort Vehicles": "Vehículos Uber Comfort",
    "Affordable Vehicles": "Vehículos accesibles",
    "check if your car fits": "verifica si tu auto califica",
    "Turn Your Car Into Weekly Income.": "Convierte tu auto en ingreso semanal.",
    "Your car shouldn’t sit parked losing money.": "Tu auto no debería estar parado perdiendo dinero.",
    "We help owners connect with drivers looking for reliable weekly rental vehicles across Southern California and major cities.": "Ayudamos a dueños a conectar con conductores buscando vehículos semanales confiables en el Sur de California y ciudades principales.",
    "WhatsApp Us Today": "Escríbenos por WhatsApp hoy"
  },
};

function translateText(text, lang) {
  if (lang === "en") return text;
  return translations[lang]?.[text] || text;
}

function translatePage(lang) {
  const root = document.querySelector("main") || document.querySelector("section");
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const raw = node.nodeValue || "";
    const trimmed = raw.trim();
    if (!trimmed) return;

    let englishKey = trimmed;
    Object.entries(translations).forEach(([, dictionary]) => {
      Object.entries(dictionary).forEach(([en, translated]) => {
        if (trimmed === translated) englishKey = en;
      });
    });

    const next = translateText(englishKey, lang);
    node.nodeValue = raw.replace(trimmed, next);
  });
}

const vehicles = [
  {
    name: "2018 Ford Fusion Hybrid",
    meta: "Hybrid - Uber Ready",
    price: "$300",
    period: "/ WEEK",
    tag: "AVAILABLE NOW",
    accent: "from-emerald-400 to-lime-300",
    image: "/cars/fusion-2018.jpg",
    features: [
      "Insurance Included",
      "Unlimited Miles",
      "Great on Gas",
    ],
    cta: "CHECK AVAILABILITY",
  },
  {
    name: "2016 Ford Fusion Hybrid",
    meta: "Hybrid - Uber & Delivery Ready",
    price: "$300",
    period: "/ WEEK",
    tag: "AVAILABLE TODAY",
    accent: "from-lime-300 to-emerald-400",
    image: "/cars/fusion-2016.jpg",
    features: [
      "Fast Approval",
      "Fuel Efficient",
      "Uber Ready",
    ],
    cta: "AVAILABLE TODAY",
  },
  {
    name: "2015 Toyota Prius C",
    meta: "Hybrid - Delivery Ready",
    price: "$270",
    period: "/ WEEK",
    tag: "BEST GAS SAVER",
    accent: "from-green-300 to-emerald-500",
    image: "/cars/prius-c-2015.jpg",
    features: [
      "Extremely Fuel Efficient",
      "Perfect for DoorDash",
      "Low Gas Cost",
    ],
    cta: "START DRIVING",
  },
  {
    name: "2015 Toyota Prius Hybrid",
    meta: "Hybrid - Uber Ready",
    price: "$270",
    period: "/ WEEK",
    tag: "UBER READY",
    accent: "from-emerald-300 to-teal-400",
    image: "/cars/prius-2015.jpg",
    features: [
      "Uber & Lyft Ready",
      "Save More On Gas",
      "Fast Approval",
    ],
    cta: "CHECK AVAILABILITY",
  },
  {
    name: "Lincoln MKZ Hybrid",
    meta: "Luxury Hybrid - Premium Ride",
    price: "$350",
    period: "/ WEEK",
    tag: "LIMITED AVAILABILITY",
    accent: "from-red-500 to-emerald-300",
    image: "/cars/lincoln-mkz.jpg",
    features: [
      "Luxury Interior",
      "Premium Comfort",
      "Uber Comfort Ready",
    ],
    cta: "CHECK AVAILABILITY",
  },
  {
    name: "2018 Toyota Corolla",
    meta: "Sedan - Uber & Personal Ready",
    price: "$380",
    period: "/ WEEK",
    tag: "AVAILABLE TODAY",
    accent: "from-lime-300 to-emerald-400",
    image: "/cars/corolla-2018.jpg",
    features: [
      "Reliable Daily Driving",
      "Fuel Efficient",
      "Uber Ready",
    ],
    cta: "CHECK AVAILABILITY",
  },
  {
    name: "2016 Toyota RAV4",
    meta: "SUV - Premium Utility Ride",
    price: "$350",
    period: "/ WEEK",
    tag: "AVAILABLE NOW",
    accent: "from-lime-300 to-emerald-400",
    image: "/cars/rav4-2016.jpg",
    features: [
      "Spacious SUV Interior",
      "Comfortable Daily Driving",
      "Personal Ready",
    ],
    cta: "CHECK AVAILABILITY",
  },
  {
    name: "2018 Toyota Camry",
    meta: "Sedan - Uber & Personal Ready",
    price: "$380",
    period: "/ WEEK",
    tag: "AVAILABLE TODAY",
    accent: "from-emerald-300 to-lime-300",
    image: "/cars/camry-2018.jpg",
    features: [
      "Comfortable Sedan",
      "Great For Rideshare",
      "Fast Approval",
    ],
    cta: "CHECK AVAILABILITY",
  },
];

const included = [
  { icon: ShieldCheck, label: "Insurance Included" },
  { icon: Gauge, label: "Maintenance Included" },
  { icon: MapPin, label: "Unlimited Miles" },
  { icon: Timer, label: "Fast Approval" },
  { icon: Car, label: "Uber Ready" },
  { icon: Zap, label: "Road Assistance" },
];

const faqs = [
  {
    q: "Do I need credit?",
    a: "No credit check.",
  },
  {
    q: "What do I need to get approved?",
    a: "Valid driver license and basic verification.",
  },
  {
    q: "Are the cars Uber and DoorDash ready?",
    a: "Yes. Rideshare and delivery ready.",
  },
  {
    q: "Is insurance included?",
    a: "Yes, insurance is included on available vehicles. Accident responsibility and deductible details are explained before pickup.",
  },
  {
    q: "How fast is approval?",
    a: "Most approvals happen same day.",
  },
  {
    q: "How much is the deposit?",
    a: "Refundable deposit starts at $200 depending on the vehicle.",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionLabel({ children, tone = "green" }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.22em] backdrop-blur-xl",
        tone === "red"
          ? "border-red-500/35 bg-red-500/10 text-red-300 shadow-[0_0_35px_rgba(239,68,68,0.18)]"
          : "border-lime-300/30 bg-lime-300/10 text-lime-200 shadow-[0_0_35px_rgba(163,230,53,0.18)]"
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          tone === "red" ? "bg-red-400" : "bg-lime-300"
        )}
      />
      {children}
    </div>
  );
}

function CTAButton({ children, href, variant = "primary", className = "" }) {
  const isPrimary = variant === "primary";
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-6 py-4 text-sm font-black uppercase tracking-[0.14em] transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-lime-300/80 focus:ring-offset-2 focus:ring-offset-black",
        isPrimary
          ? "bg-lime-300 text-black shadow-[0_0_35px_rgba(163,230,53,0.38)] hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(163,230,53,0.55)]"
          : "border border-white/15 bg-white/8 text-white backdrop-blur-xl hover:border-lime-300/50 hover:bg-lime-300/10 hover:text-lime-100 hover:shadow-[0_0_40px_rgba(163,230,53,0.22)]",
        className
      )}
    >
      {isPrimary && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  );
}

function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CursorGlow() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (event) => {
      const rect = el.getBoundingClientRect();
      setPos({
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100,
      });
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-10 hidden overflow-hidden md:block"
      style={{
        background: `radial-gradient(650px circle at ${pos.x}% ${pos.y}%, rgba(163,230,53,0.16), transparent 42%)`,
      }}
    />
  );
}

function Nav({ lang, setLang }) {

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-lime-300/35 bg-lime-300/10 shadow-[0_0_30px_rgba(163,230,53,0.25)]">
            <Car className="h-5 w-5 text-lime-300" />
          </div>
          <div>
            <div className="text-base font-black uppercase tracking-[0.18em] text-white">
              Fast Rentals
            </div>
            <div className="hidden text-[10px] font-bold uppercase tracking-[0.22em] text-lime-300/80 sm:block">
              Hybrid Rentals
            </div>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1 sm:flex">
            {[
              ["en", "EN"],
              ["pt", "PT"],
              ["es", "ES"],
            ].map(([code, label]) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={cn(
                  "rounded-lg px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] transition",
                  lang === code ? "bg-lime-300 text-black" : "text-white/55 hover:text-lime-200"
                )}
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href={SMS_URL}
            className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-lime-300/40 hover:text-lime-200 sm:inline-flex"
          >
            Text Message
          </a>
          <a
            href={PHONE_URL}
            className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-lime-300/40 hover:text-lime-200 sm:inline-flex"
          >
            Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex animate-pulse items-center gap-2 rounded-xl bg-lime-300 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-black shadow-[0_0_28px_rgba(163,230,53,0.38)] transition hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ lang }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-black pt-28 text-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/75 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(163,230,53,0.18),transparent_34%),radial-gradient(circle_at_12%_72%,rgba(34,197,94,0.16),transparent_35%)]" />
      </motion.div>

      <CursorGlow />

      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-300/20 blur-[110px]" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[130px]" />

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-4 pb-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-5xl">
            <div className="pl-32 sm:pl-40">
              <SectionLabel tone="red">Available In Los Angeles & Major Cities</SectionLabel>
            </div>
            <h1 className="mt-8 max-w-5xl text-6xl font-black uppercase leading-[0.88] tracking-[-0.08em] text-white sm:text-7xl lg:text-8xl xl:text-9xl">
              {lang === "pt" ? (
                <>
                  <span className="text-lime-300">A liberdade</span> começa com o carro certo.
                </>
              ) : lang === "es" ? (
                <>
                  <span className="text-lime-300">La libertad</span> empieza con el auto correcto.
                </>
              ) : (
                <>
                  <span className="text-lime-300">Freedom</span> Starts With The Right <span className="text-lime-300">Car</span>.
                </>
              )}
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/72 sm:text-xl">
              Fast Rentals helps drivers find affordable weekly cars to start working fast.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-lime-300/20 bg-lime-300/10 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-lime-200 shadow-[0_0_35px_rgba(163,230,53,0.18)] backdrop-blur-xl">
              Get Approved First. Pay At Pickup.
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#cars">View Available Cars Now</CTAButton>
              <CTAButton href={PHONE_URL} variant="secondary">
                <Phone className="h-4 w-4" /> Call Us Now
              </CTAButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function VehicleCard({ vehicle, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <FadeIn delay={index * 0.06}>
      <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.055] shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:border-lime-300/40 hover:shadow-[0_30px_90px_rgba(163,230,53,0.18)]">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-300/20 blur-[85px]" />
        </div>

        <div className="relative h-40 overflow-hidden bg-black">
          {!imageError ? (
            <img
              src={vehicle.image}
              alt={vehicle.name}
              loading="lazy"
              onError={() => setImageError(true)}
              className="h-full w-full bg-black object-contain transition duration-700 group-hover:scale-105 sm:object-cover"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
              <Car className="h-20 w-20 text-lime-300/70" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 rounded-full border border-red-400/35 bg-red-500/15 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-red-200 backdrop-blur-xl">
            {vehicle.tag}
          </div>
        </div>

        <div className="px-4 pt-4">
          <div className="rounded-2xl border border-white/10 bg-black/45 p-3 backdrop-blur-xl">
            <div className="text-lg font-black uppercase tracking-[0.12em] text-white">
              {vehicle.name}
            </div>
            <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-lime-200/80">
              {vehicle.meta}
            </div>
          </div>
        </div>

        <div className="relative p-4">
          <div className="mb-6 flex items-end gap-1">
            <span className="text-4xl font-black tracking-[-0.06em] text-lime-300">
              {vehicle.price}
            </span>
            <span className="pb-2 text-sm font-black uppercase tracking-[0.16em] text-white/50">
              {vehicle.period}
            </span>
          </div>

          <ul className="space-y-3">
            {vehicle.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-white/74">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime-300/12 text-lime-300">
                  <Check className="h-4 w-4" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_45px_rgba(163,230,53,0.42)]"
          >
            {vehicle.cta}
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </article>
    </FadeIn>
  );
}

function AvailableCars() {
  return (
    <section id="cars" className="relative overflow-hidden bg-black py-20 text-white sm:py-24">
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-lime-300/10 blur-[140px]" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <SectionLabel tone="red">Available Now</SectionLabel>
          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl">
            Start Driving This Week
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-white/60">
            Inventory moves fast. Message us today to reserve a hybrid vehicle and get approved quickly.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={`${vehicle.name}-${index}`} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyPayMore() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <SectionLabel>Why Pay More?</SectionLabel>
          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-7xl">
            Keep more of what you earn.
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-white/62">
            Fast Rentals helps drivers find affordable weekly cars to start working fast.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={WHATSAPP_URL}>Message Us On WhatsApp</CTAButton>
            <CTAButton href={SMS_URL} variant="secondary">
              <MessageCircle className="h-4 w-4" /> Text Message
            </CTAButton>
            <CTAButton href={PHONE_URL} variant="secondary">Call {DISPLAY_PHONE}</CTAButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-red-400/20 bg-red-500/10 p-6 backdrop-blur-xl">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-red-300">Other Rentals</div>
              <div className="mt-3 text-6xl font-black tracking-[-0.07em] text-white">$400–$500</div>
              <div className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-white/45">per week</div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-lime-300/30 bg-lime-300/10 p-6 shadow-[0_0_80px_rgba(163,230,53,0.16)] backdrop-blur-xl">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-lime-300/25 blur-[70px]" />
              <div className="relative">
                <div className="text-xs font-black uppercase tracking-[0.22em] text-lime-300">Fast Rentals</div>
                <div className="mt-3 text-6xl font-black tracking-[-0.07em] text-lime-300">$270+</div>
                <div className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-white/55">per week</div>
                <div className="mt-6 rounded-2xl bg-black/40 p-4 text-sm font-semibold leading-6 text-white/70">
                  Lower weekly pricing. More money in your pocket.
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Included() {
  return (
    <section id="included" className="relative overflow-hidden bg-black py-20 text-white sm:py-24">
      <div className="absolute left-1/2 top-0 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-lime-300/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <SectionLabel>What’s Included?</SectionLabel>
          
          <p className="mt-6 text-lg font-medium leading-8 text-white/60">
            Fast approval. Reliable vehicles. Ready for drivers.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.label} delay={index * 0.04}>
                <div className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-lime-300/35 hover:bg-lime-300/10 hover:shadow-[0_0_45px_rgba(163,230,53,0.16)]">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lime-300/12 text-lime-300 transition group-hover:bg-lime-300 group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black uppercase tracking-[-0.02em] text-white">
                      {item.label}
                    </div>
                    {item.label === "Road Assistance" && (
                      <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">
                        fees may apply.
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Earnings() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/55" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-2xl">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime-300/15 blur-[100px]" />
            <div className="relative grid gap-4">
              {[
                [Clock, "Most drivers start within", "24–48 hours"],
                [Fuel, "Hybrid vehicles can help", "save on gas"],
                [Wallet, "Weekly rentals from", "$270/week"],
              ].map(([Icon, top, bottom]) => (
                <div key={top} className="rounded-3xl border border-white/10 bg-black/35 p-5">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-lime-300 text-black">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white/50">{top}</div>
                      <div className="text-2xl font-black uppercase tracking-[-0.03em] text-white">{bottom}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <SectionLabel>Start Earning This Week</SectionLabel>
          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl">
            Get approved.
            <span className="block text-lime-300">Get keys.</span>
            Get moving.
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-white/64">
            Fast Approval. Fast Keys. Fast Money.
          </p>
          <div className="mt-8 rounded-3xl border border-lime-300/20 bg-lime-300/10 p-5 text-base font-bold leading-7 text-lime-50">
            Save More On Gas.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose A Car",
      description:
        "Pick from available weekly rental vehicles ready to drive.",
    },
    {
      number: "02",
      title: "Message Us",
      description:
        "We check availability and basic requirements quickly.",
    },
    {
      number: "03",
      title: "Get Approved",
      description:
        "Once approved, get on the road fast.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-24">
      <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-lime-300/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl">
            How It Works
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-white/60">
            Simple process. Fast approval. Ready to drive.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-lime-300/35 hover:bg-lime-300/10 hover:shadow-[0_0_55px_rgba(163,230,53,0.16)]">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-lime-300/10 blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="text-7xl font-black tracking-[-0.08em] text-lime-300/20">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-3xl font-black uppercase tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-base font-medium leading-7 text-white/62">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-12 text-center">
          <CTAButton href={WHATSAPP_URL}>
            <MessageCircle className="h-4 w-4" /> Start Today
          </CTAButton>
        </FadeIn>
      </div>
    </section>
  );
}

function MoreVehicles() {
  return (
    <section className="bg-black py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel>More Vehicles Available</SectionLabel>
            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl">
              Looking For Something Else?
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 mx-auto max-w-2xl rounded-[1.5rem] border border-lime-300/20 bg-lime-300/10 p-5 text-center shadow-[0_0_40px_rgba(163,230,53,0.12)] backdrop-blur-2xl">
          <div className="text-lg font-black uppercase tracking-[-0.03em] text-white sm:text-2xl">
            Call or Text Us For More Vehicle Options
          </div>

          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href={SMS_URL} className="px-5 py-3 text-xs">
              <MessageCircle className="h-4 w-4" /> Text Message
            </CTAButton>

            <CTAButton href={PHONE_URL} variant="secondary" className="px-5 py-3 text-xs">
              <Phone className="h-4 w-4" /> Call Now
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24">
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-lime-300/10 blur-[130px]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <FadeIn>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl">
            Fast answers for fast drivers.
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-white/60">
            Questions? Contact us anytime.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div key={faq.q} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] backdrop-blur-xl">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-lg font-black uppercase tracking-[-0.02em] text-white">
                      {faq.q}
                    </span>
                    <ChevronDown className={cn("h-5 w-5 text-lime-300 transition", isOpen && "rotate-180")} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-base font-medium leading-7 text-white/62">{faq.a}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Liam Sonoski",
      meta: "2 reviews • 2 years ago",
      text: "Highly recommend for long term rentals. My friend and I rented a car for 2 months at a very reasonable price.",
    },
    
    {
      name: "P Joshi",
      meta: "9 reviews • 6 years ago",
      text: "Very fair, friendly and honest service. Good cars at great prices!",
    },
    {
      name: "sun hao",
      meta: "2 reviews • 1 year ago",
      text: "Great service that provides flexibility at a very reasonable price. Business owner responds quickly.",
    },
    {
      name: "Dhruv Mathur",
      meta: "Local Guide • 22 reviews • 6 years ago",
      text: "Best prices and great service. Highly recommend this place for longer term rentals.",
    },
    {
      name: "Hannah Jiang",
      meta: "1 review • 7 years ago",
      text: "Great communication and great service. Will do it again.",
    },
    {
      name: "Danilo Aranda",
      meta: "13 reviews • 3 photos • 1 year ago",
      text: "Excelente servicio. Ningún problema con el vehículo ni con nada del proceso y devolución del mismo.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-300/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <SectionLabel>Driver Reviews</SectionLabel>
          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl">
            Trusted By
            <span className="block text-lime-300">Real Drivers</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.05}>
              <div className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-lime-300/25 hover:shadow-[0_0_45px_rgba(163,230,53,0.12)]">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-lime-300 text-lg font-black text-black">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-lg font-black text-white">{review.name}</div>
                    <div className="text-sm font-semibold text-white/45">{review.meta}</div>
                  </div>
                </div>

                <div className="mt-5 text-xl tracking-[0.12em] text-yellow-400">★★★★★</div>

                <p className="mt-5 text-base font-medium leading-7 text-white/70">
                  “{review.text}”
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/15 blur-[130px]" />

      <FadeIn className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-lime-300/25 bg-white/[0.065] p-8 text-center shadow-[0_0_100px_rgba(163,230,53,0.14)] backdrop-blur-2xl sm:p-12 lg:p-16">
        <Sparkles className="mx-auto h-10 w-10 text-lime-300" />
        <h2 className="mt-6 text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] sm:text-8xl">
          Ready To Drive?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-white/66">
          Your next vehicle is ready. Message us today.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton href={WHATSAPP_URL}>
            <MessageCircle className="h-4 w-4" /> Message Us On WhatsApp
          </CTAButton>
          <CTAButton href={SMS_URL} variant="secondary">
            <MessageCircle className="h-4 w-4" /> Text Message
          </CTAButton>
          <CTAButton href={PHONE_URL} variant="secondary">
            <Phone className="h-4 w-4" /> Call Now
          </CTAButton>
        </div>
      </FadeIn>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xl font-black uppercase tracking-[0.18em]">Fast Rentals</div>
          <div className="mt-2 text-sm font-semibold text-white/45">Los Angeles</div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={WHATSAPP_URL} className="rounded-xl bg-lime-300 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-black">
            WhatsApp
          </a>
          <a href={SMS_URL} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white">
            Text Message
          </a>
          <a href={PHONE_URL} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white">
            {DISPLAY_PHONE}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center text-xs font-medium leading-6 text-white/35">
        Fast Rentals helps connect drivers with available weekly vehicles. Vehicle availability, approval, and terms may vary.
      </div>
    </footer>
  );
}

// =============================================================
// ADD YOUR REAL VEHICLE PHOTOS HERE:
// public/cars/
//
// Example:
// public/cars/fusion-2018.jpg
// public/cars/prius-2015.jpg
//
// Then the website automatically displays them.
// =============================================================

// =============================================================
// SEO LANDING PAGES STRATEGY
// Create these pages inside your Next.js app later:
//
// /uber-rental-los-angeles
// /lyft-rental-los-angeles
// /prius-rental-los-angeles
// /hybrid-rental-doordash
// /uber-ready-cars-la
// /cheap-hybrid-rental-la
//
// Each page should:
// - target a specific keyword
// - use different headlines
// - feature different vehicles
// - include keyword-focused FAQs
// - keep same luxury design system
// - include local SEO phrases:
//   “Los Angeles”, “LA”, “Hollywood”, “Uber drivers”, etc.
//
// Example SEO Title:
// "Uber Rental Los Angeles | Hybrid Uber Ready Cars | Fast Rentals"
//
// Example Meta Description:
// "Affordable Uber-ready hybrid rentals in Los Angeles. Fast approval, insurance included, unlimited miles, and weekly pricing starting at $270/week."
// =============================================================

const seoPages = [
  {
    slug: "/uber-rental-los-angeles",
    title: "Uber Rental Los Angeles",
    description:
      "Hybrid Uber-ready rentals with fast approval and affordable weekly pricing.",
  },
  {
    slug: "/lyft-rental-los-angeles",
    title: "Lyft Rental LA",
    description:
      "Luxury and hybrid Lyft-ready vehicles available in Los Angeles.",
  },
  {
    slug: "/prius-rental-los-angeles",
    title: "Prius Rental Los Angeles",
    description:
      "Fuel-efficient Toyota Prius rentals perfect for Uber and DoorDash drivers.",
  },
  {
    slug: "/hybrid-rental-doordash",
    title: "Hybrid Rental For DoorDash",
    description:
      "Affordable hybrid rentals designed for delivery drivers and gig workers.",
  },
  {
    slug: "/uber-ready-cars-la",
    title: "Uber Ready Cars LA",
    description:
      "Get approved fast and start driving Uber in Los Angeles this week.",
  },
  {
    slug: "/cheap-hybrid-rental-la",
    title: "Cheap Hybrid Rental LA",
    description:
      "Affordable weekly hybrid rentals with insurance included in Los Angeles.",
  },
];

// SEO landing pages should exist as separate routes/pages in your Next.js app.
// They are intentionally not displayed on the homepage to keep the experience cleaner,
// more premium, and more conversion-focused for visitors.

function GatewayPage({ onSelect, lang, setLang }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.16),transparent_35%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.12),transparent_35%)]" />
      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-[140px]" />

      <div className="absolute top-6 right-6 z-20 flex items-center gap-1 rounded-full border border-white/10 bg-black/70 p-1 backdrop-blur-xl">
        {[["en", "EN"], ["pt", "PT"], ["es", "ES"]].map(([code, label]) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={cn(
              "rounded-full px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] transition",
              lang === code ? "bg-lime-300 text-black" : "text-white/55 hover:text-lime-200"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-lime-300/20 bg-lime-300/10 px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-lime-200 backdrop-blur-xl">
          <Car className="h-4 w-4" />
          Fast Rentals
        </div>

        <h1 className="mt-10 text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-white sm:text-7xl">
          What brings you here?
        </h1>

        <div className="mt-12 flex flex-col gap-5">
          <button
            onClick={() => onSelect("drivers")}
            className="group rounded-[2rem] border border-lime-300/30 bg-lime-300 px-8 py-7 text-left text-black shadow-[0_0_50px_rgba(163,230,53,0.28)] transition duration-300 hover:scale-[1.02]"
          >
            <div className="text-sm font-black uppercase tracking-[0.22em] opacity-70">
              DRIVER RENTALS
            </div>
            <div className="mt-2 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
              I Need A Car Rental
            </div>
          </button>

          <button
            onClick={() => onSelect("owners")}
            className="group rounded-[2rem] border border-white/10 bg-white/[0.06] px-8 py-7 text-left text-white backdrop-blur-2xl transition duration-300 hover:border-lime-300/30 hover:bg-lime-300/10 hover:scale-[1.02]"
          >
            <div className="text-sm font-black uppercase tracking-[0.22em] text-lime-200/70">
              VEHICLE OWNERS
            </div>
            <div className="mt-2 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
              I Want To Rent Out My Car
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

function OwnerPage({ onBack, lang, setLang }) {
  const benefits = [
    "Driver Screening",
    "Weekly Coordination",
    "Faster Rentals",
    "Less Stress",
  ];

  const accepted = [
    "Toyota Prius",
    "Ford Fusion Hybrid",
    "Toyota Camry",
    "Hybrid SUVs",
    "Uber Comfort Vehicles",
    "Affordable Vehicles",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed left-5 top-5 z-[95] flex items-center gap-1 rounded-full border border-white/10 bg-black/80 p-1 backdrop-blur-xl">
        {[["en", "EN"], ["pt", "PT"], ["es", "ES"]].map(([code, label]) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={cn(
              "rounded-full px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] transition",
              lang === code ? "bg-lime-300 text-black" : "text-white/55 hover:text-lime-200"
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <section className="relative overflow-hidden border-b border-white/10 bg-black px-6 pt-36 pb-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-lime-300/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-lime-300/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <button
            onClick={onBack}
            className="mb-8 rounded-xl border border-white/10 bg-black/80 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:border-lime-300/30 hover:text-lime-200"
          
          >
            ← Back
          </button>

          <div className="mt-2">
            <SectionLabel>Southern California & Major Cities</SectionLabel>
          </div>

          

          <h1 className="mt-8 max-w-5xl text-6xl font-black uppercase leading-[0.88] tracking-[-0.08em] sm:text-7xl lg:text-8xl">
            Turn Your Car Into
            <span className="block text-lime-300">Weekly Income.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl font-medium leading-9 text-white/68">
            We help connect qualified drivers with reliable weekly rental vehicles across Los Angeles and surrounding areas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={WHATSAPP_URL}>Submit Your Vehicle</CTAButton>
            <CTAButton href={WHATSAPP_URL} variant="secondary">
              <MessageCircle className="h-4 w-4" /> Message Us On WhatsApp
            </CTAButton>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Qualified Drivers",
              "Weekly Payment Coordination",
              "Professional Listings",
              "Roadside Support Available",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-sm font-black uppercase tracking-[0.14em] text-white/80 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <SectionLabel tone="red">The Problem</SectionLabel>
            <h2 className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl">
              Tired Of Your Car Sitting Unused?
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              ["Finding reliable drivers is stressful.", "Most owners struggle to find qualified renters consistently."],
              ["Managing payments takes time.", "Late payments, reminders, and communication become exhausting."],
              ["Your car should be making money.", "Unused vehicles lose money every week they sit parked."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 backdrop-blur-2xl">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime-300/10 text-lime-300">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-3xl font-black uppercase tracking-[-0.03em]">{title}</h3>
                <p className="mt-4 text-base leading-7 text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto mb-20 max-w-5xl rounded-[3rem] border border-white/10 bg-white/[0.055] p-10 text-center backdrop-blur-2xl sm:p-14">
          <SectionLabel>Hybrid Demand</SectionLabel>
          <h2 className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl">
            Hybrid Vehicles Are In High Demand
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/66">
            Drivers want lower gas costs, Uber-ready vehicles, and reliable weekly rentals.
          </p>
        </div>
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl">
              Simple Support For Vehicle Owners.
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <div key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl transition hover:border-lime-300/30 hover:bg-lime-300/10">
                <BadgeCheck className="h-10 w-10 text-lime-300" />
                <div className="mt-5 text-2xl font-black uppercase tracking-[-0.03em] text-white">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-6 py-24">
        <div className="mx-auto mb-20 max-w-5xl rounded-[3rem] border border-lime-300/20 bg-lime-300/10 p-10 text-center shadow-[0_0_80px_rgba(163,230,53,0.12)] backdrop-blur-2xl sm:p-14">
          <SectionLabel>Owner Income Potential</SectionLabel>
          <h2 className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl">
            Owners Typically Earn
          </h2>
          <div className="mt-6 text-6xl font-black tracking-[-0.08em] text-lime-300 sm:text-8xl">
            $750-$1000 per month
          </div>
          <div className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-white/55">
            each car depending on vehicle type and demand
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl rounded-[3rem] border border-lime-300/20 bg-lime-300/10 p-10 text-center shadow-[0_0_100px_rgba(163,230,53,0.12)] backdrop-blur-2xl sm:p-16">
          <SectionLabel>No Upfront Cost</SectionLabel>
          <h2 className="mt-8 text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl">
            You Don’t Pay Unless Your Car Gets Rented.
          </h2>
          <div className="mt-8 text-3xl font-black uppercase tracking-[-0.04em] text-lime-300 sm:text-5xl">
            We only make money when you make money.
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/68">
            There are no upfront fees to partner with Fast Rentals. You keep your agreed weekly amount for the vehicle, and our commission is only applied once the vehicle is actively rented.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <SectionLabel>Vehicles We Accept</SectionLabel>
          <h2 className="mt-6 text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl">
            Reliable Vehicles Drivers Actually Want
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {accepted.map((car) => (
              <div key={car} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 text-center backdrop-blur-xl">
                <Car className="mx-auto h-10 w-10 text-lime-300" />
                <div className="mt-5 text-xl font-black uppercase tracking-[-0.03em] text-white">
                  {car}
                </div>
                {car === "Affordable Vehicles" && (
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
                    check if your car fits
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 mx-auto max-w-5xl rounded-[3rem] border border-lime-300/20 bg-white/[0.055] p-10 backdrop-blur-2xl sm:p-16">
          <h2 className="text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl">
            Turn Your Car Into Weekly Income.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/66">
            Your car shouldn’t sit parked losing money.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/50">
            We help owners connect with drivers looking for reliable weekly rental vehicles across Southern California and major cities.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton href={WHATSAPP_URL}>Submit Your Vehicle</CTAButton>
            <CTAButton href={WHATSAPP_URL} variant="secondary">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us Today
            </CTAButton>
            <CTAButton href={PHONE_URL} variant="secondary">
              <Phone className="h-4 w-4" /> Call {DISPLAY_PHONE}
            </CTAButton>
          </div>
        </div>
      </section>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[90] flex items-center gap-3 rounded-full bg-lime-300 px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_0_45px_rgba(163,230,53,0.45)] transition hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>

      <a
        href={PHONE_URL}
        className="fixed bottom-24 right-5 z-[90] flex items-center gap-3 rounded-full border border-white/10 bg-black/80 px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl transition hover:border-lime-300/40 hover:text-lime-200"
      >
        <Phone className="h-5 w-5" /> Call Now
      </a>

      <Footer />
    </main>
  );
}

export default function FastRentalsLA() {
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("fast-rentals-page") || "gateway";
    }
    return "gateway";
  });

  const navigatePage = (nextPage) => {
    setPage(nextPage);
    if (typeof window !== "undefined") {
      localStorage.setItem("fast-rentals-page", nextPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => translatePage(lang), 50);
    return () => clearTimeout(timeout);
  }, [lang, page]);

  useEffect(() => {
    // META PIXEL
    if (typeof window !== "undefined" && META_PIXEL_ID !== "YOUR_META_PIXEL_ID") {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = "https://connect.facebook.net/en_US/fbevents.js";
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, "script");

      window.fbq("init", META_PIXEL_ID);
      window.fbq("track", "PageView");
    }

    // GOOGLE ANALYTICS
    if (typeof window !== "undefined" && GOOGLE_ANALYTICS_ID !== "G-XXXXXXXXXX") {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ANALYTICS_ID}');
      `;
      document.head.appendChild(script2);
    }

    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  if (page === "gateway") {
    return <GatewayPage onSelect={navigatePage} lang={lang} setLang={setLang} />;
  }

  if (page === "owners") {
    return <OwnerPage onBack={() => navigatePage("gateway")} lang={lang} setLang={setLang} />;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black font-sans text-white antialiased selection:bg-lime-300 selection:text-black">
      <div className="fixed bottom-5 left-5 z-[95] flex items-center gap-1 rounded-full border border-white/10 bg-black/80 p-1 backdrop-blur-xl sm:hidden">
        {[["en", "EN"],["pt", "PT"],["es", "ES"]].map(([code, label]) => (
          <button key={code} onClick={() => setLang(code)} className={cn("rounded-full px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] transition", lang === code ? "bg-lime-300 text-black" : "text-white/55")}>
            {label}
          </button>
        ))}
      </div>
      <Nav lang={lang} setLang={setLang} />

      <button
        onClick={() => navigatePage("gateway")}
        className="absolute left-5 top-24 z-[95] rounded-xl border border-white/10 bg-black/80 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:border-lime-300/30 hover:text-lime-200"
      >
        ← Back
      </button>
      <Hero lang={lang} />
      <AvailableCars />
      <WhyPayMore />
      <Included />
      <Earnings />
      <HowItWorks />
      <MoreVehicles />
      <FAQ />
      <Reviews />
      <section className="relative overflow-hidden bg-black px-6 py-20 text-white">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-300/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <SectionLabel>Fast Rentals Video</SectionLabel>

          <h2 className="mt-6 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
            See How Fast Rentals Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Watch a quick video about Fast Rentals and how drivers get started.
          </p>

          <a
            href="https://www.youtube.com/watch?v=qX6qYZJiv7w"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 block overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition hover:border-lime-300/30 hover:shadow-[0_0_60px_rgba(163,230,53,0.16)]"
          >
            <div className="relative aspect-video w-full bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
              <img
                src="https://img.youtube.com/vi/qX6qYZJiv7w/hqdefault.jpg"
                alt="Fast Rentals video preview"
                className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-lime-300 text-black shadow-[0_0_50px_rgba(163,230,53,0.45)] transition group-hover:scale-110">
                  <span className="ml-1 text-3xl font-black">▶</span>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-lime-300">
                  Watch Video
                </div>
                <div className="mt-2 text-2xl font-black uppercase tracking-[-0.03em] text-white">
                  Tap To Open On YouTube
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://www.youtube.com/watch?v=qX6qYZJiv7w"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-2xl border border-lime-300/25 bg-lime-300/10 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-lime-200 transition hover:bg-lime-300 hover:text-black"
          >
            Open Video On YouTube
          </a>
        </div>
      </section>

      <FinalCTA />
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-[90] flex items-center gap-3 rounded-full bg-lime-300 px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_0_45px_rgba(163,230,53,0.45)] transition hover:scale-105">
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>

      <a href={PHONE_URL} className="fixed bottom-24 right-5 z-[90] flex items-center gap-3 rounded-full border border-white/10 bg-black/80 px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl transition hover:border-lime-300/40 hover:text-lime-200">
        <Phone className="h-5 w-5" /> Call Now
      </a>

      <Footer />
    </main>
  );
}
