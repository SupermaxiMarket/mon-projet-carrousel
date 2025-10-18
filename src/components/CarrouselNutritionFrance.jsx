import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CarrouselNutritionFrance() {
  const slides = [
    {
      title: "🚨 49% DES FRANÇAIS EN SURPOIDS",
      subtitle: "Les données 2025 qui font réfléchir ⤵️",
      bg: "from-red-600 to-orange-400",
      color: "text-white",
    },
    {
      title: "📊 LES CHIFFRES CHOCS",
      list: ["49% en surpoids", "17,2% obèses", "+53% temps d'écran", "-16% activité physique femmes"],
      bg: "from-yellow-400 to-pink-500",
      color: "text-white",
    },
    {
      title: "🍽️ CE QUE NOUS MANGEONS MAL",
      list: ["❌ 9g de sel/jour (vs 5g)", "❌ 43% graisses saturées", "❌ 41% mangent 5 fruits/légumes", "✅ Le compteur calories change tout"],
      bg: "from-orange-400 to-red-600",
      color: "text-white",
    },
    {
      title: "👶 NOS ENFANTS EN DANGER",
      list: ["17% en surpoids (6-17 ans)", "2/3 produits industriels", "6h17 d'écran/jour", "23% mangent assez de fruits"],
      bg: "from-blue-400 to-indigo-500",
      color: "text-white",
    },
    {
      title: "💔 LES CONSÉQUENCES RÉELLES",
      list: ["31% hypertension", "25% décès cardio", "3,3M diabétiques", "12,2% années de vie perdues"],
      bg: "from-gray-800 to-red-700",
      color: "text-white",
    },
    {
      title: "🎯 LE PROBLÈME N'EST PAS L'INFO",
      list: ["59% connaissent '5 fruits/légumes'", "41,7% l’appliquent seulement", "👉 Il faut des OUTILS, pas des conseils"],
      bg: "from-green-500 to-teal-600",
      color: "text-white",
    },
    {
      title: "📱 COMMENT UN COMPTEUR AIDE",
      list: ["✅ Visualise tes apports", "✅ Détecte sucres cachés", "✅ Suit tes macros", "✅ Scanne les codes-barres", "✅ Graphiques motivants"],
      bg: "from-blue-500 to-sky-400",
      color: "text-white",
    },
    {
      title: "⚡ FONCTIONS INDISPENSABLES 2025",
      list: ["📸 Photo IA", "📊 Suivi macros avancé", "🥤 Rappels hydratation", "⌚ Sync montres", "🇫🇷 Base FR"],
      bg: "from-purple-600 to-indigo-700",
      color: "text-white",
    },
    {
      title: "💪 RÉSULTATS EN 3 MOIS",
      list: ["-4 à 6 kg (déficit sain)", "Cholestérol amélioré", "Glycémie contrôlée", "5 fruits atteints", "-30% de sel"],
      bg: "from-emerald-500 to-lime-400",
      color: "text-white",
    },
    {
      title: "🔥 REPRENDS LE CONTRÔLE !",
      list: ["👉 Télécharge notre app (3€ = un café)", "👉 Commence aujourd’hui", "👉 Transforme ta santé"],
      cta: "https://combien-de-calorie-dans-mon-assiette.netlify.app/",
      bg: "from-orange-500 to-red-600",
      color: "text-white",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 p-10 bg-gray-100">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          className={`w-[1080px] h-[1080px] rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center bg-gradient-to-br ${slide.bg} ${slide.color} p-12 relative`}
        >
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-md">{slide.title}</h1>
          {slide.list && (
            <ul className="text-3xl space-y-4 font-medium">
              {slide.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
          {slide.subtitle && (
            <p className="text-3xl font-medium mt-6">{slide.subtitle}</p>
          )}
          {slide.cta && (
            <a
              href={slide.cta}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-12 bg-white text-black px-8 py-4 rounded-full text-3xl font-bold shadow-lg hover:bg-gray-200 transition flex items-center gap-3"
            >
              Découvrir l’app <ArrowRight size={36} />
            </a>
          )}
          {slide.cta && (
            <p className="absolute bottom-4 text-xl text-white opacity-90">
              {slide.cta}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}