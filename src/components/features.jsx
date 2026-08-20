import { 
  Code, 
  Users, 
  Rocket, 
  Award, 
  ShieldCheck, 
  Cpu, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router';

function Features() {
  const points = [
    {
      icon: Code,
      titre: "Pédagogie 100% Pratique (Learning by Doing)",
      desc: "Vous écrivez du code réel dès la première semaine. Pas de cours théoriques magistraux, mais des projets applicatifs concrets adaptés au marché tech.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Users,
      titre: "Mentorat d'Experts & Revues de Code",
      desc: "Nos formateurs et mentors sont des ingénieurs seniors en activité. Ils relisent votre code, vous apprennent les bonnes pratiques et débloquent vos erreurs.",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Rocket,
      titre: "Insertion & Stages Garantis pour les Meilleurs",
      desc: "Grâce à notre réseau d'entreprises partenaires au Cameroun et à l'international, nous accompagnons nos apprenants vers des stages et premiers emplois.",
      color: "from-emerald-500 to-teal-700"
    },
    {
      icon: Cpu,
      titre: "Technologies Modernes & Requis du Marché",
      desc: "React 19, Node.js, Python, Docker, Kubernetes, Flutter, IA générative... Nous actualisons constamment nos programmes pour coller aux besoins des recruteurs.",
      color: "from-indigo-500 to-purple-700"
    },
    {
      icon: Award,
      titre: "Certifications Reconnues & Portfolio Solide",
      desc: "À l'issue de votre cursus, vous soutenez votre projet devant un jury et repartez avec une attestation certifiante et un portfolio GitHub déployé en ligne.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: ShieldCheck,
      titre: "Facilités de Paiement & Cadre Idéal à Melen",
      desc: "Paiement en plusieurs tranches sans frais cachés, centre climatisé avec fibre optique et énergie secourue, situé idéalement en face du CHUY.",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50/70 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles size={16} className="text-orange-500" />
            <span>L'ADN Worketyamo</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight">
            Pourquoi apprendre avec <span className="text-orange-500">Worketyamo</span> ?
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4 mb-4 mx-auto"></div>
          <p className="text-gray-600 text-base md:text-lg">
            Nous combinons la rigueur de l'ingénierie logicielle, l'accompagnement humain et des projets industriels pour faire de vous un professionnel autonome.
          </p>
        </div>

        {/* Grille des 6 atouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pt.color} text-white flex items-center justify-center mb-6 shadow-md`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pt.titre}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action en bas */}
        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Découvrir l'histoire, la vision et l'équipe de Worketyamo</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Features;
