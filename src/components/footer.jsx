import { Link } from 'react-router';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowRight,
  Globe,
  Share2,
  Code2
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* Top Banner Contact Express */}
      <div className="border-b border-slate-800/80 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Prêt à transformer votre avenir dans la tech ?</h3>
            <p className="text-sm text-slate-400 mt-1">Rejoignez la communauté Worketyamo à Melen (Yaoundé) ou en ligne dès maintenant.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/237697712493?text=Bonjour Worketyamo ! J'aimerais m'inscrire à une formation ou postuler à un stage."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-5 rounded-xl text-sm transition-all shadow-md"
            >
              <MessageCircle size={18} />
              <span>WhatsApp : +237 697 71 24 93</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-5 rounded-xl text-sm transition-all"
            >
              <span>Faire une demande</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 : Marque & Présentation */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-black tracking-tight">
                <span className="text-blue-500">Worket</span>
                <span className="text-orange-500">Yamo</span>
              </h2>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Worketyamo est la start-up et le centre de formation de référence au Cameroun, dédié à l'apprentissage pratique du développement web & mobile, de la Data Science, de l'Intelligence Artificielle et du DevOps.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/237697712493"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://worketyamo.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site Web"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Globe size={18} />
              </a>
              <a
                href="https://wa.me/237697712493"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Code"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-orange-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
              >
                <Code2 size={18} />
              </a>
              <a
                href="https://wa.me/237697712493"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Partage"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 : Formations & Programmes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Formations & Stages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/formations" className="hover:text-orange-400 transition-colors">
                  Développement Web FullStack
                </Link>
              </li>
              <li>
                <Link to="/formations" className="hover:text-orange-400 transition-colors">
                  DevOps, Cloud & Docker
                </Link>
              </li>
              <li>
                <Link to="/formations" className="hover:text-orange-400 transition-colors">
                  Data Science, IA & Python
                </Link>
              </li>
              <li>
                <Link to="/formations" className="hover:text-orange-400 transition-colors">
                  Applications Mobiles Flutter
                </Link>
              </li>
              <li>
                <Link to="/formations" className="hover:text-orange-400 transition-colors">
                  Stages Académiques & Pro
                </Link>
              </li>
              <li>
                <Link to="/formations" className="hover:text-orange-400 transition-colors">
                  Cours en ligne & Udemy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 : Navigation Rapide */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Liens Rapides
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/formations" className="hover:text-blue-400 transition-colors">Catalogue complet</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">À Propos & Équipe</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Nous Contacter</Link>
              </li>
              <li>
                <a href="#localisation" className="hover:text-blue-400 transition-colors">Localisation Melen (CHUY)</a>
              </li>
              <li>
                <a href="#candidature-demande" className="hover:text-blue-400 transition-colors">Demande de formation</a>
              </li>
            </ul>
          </div>

          {/* Col 4 : Coordonnées du centre */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Localisation & Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-orange-400 shrink-0 mt-0.5" />
                <span>Melen, Yaoundé — En face du CHUY, Cameroun</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={18} className="text-emerald-400 shrink-0" />
                <a href="tel:+237697712493" className="hover:underline">+237 697 71 24 93</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <a href="mailto:contact@worketyamo.com" className="hover:underline">contact@worketyamo.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe size={18} className="text-purple-400 shrink-0" />
                <span>www.worketyamo.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Worketyamo Tech Startup & Hub. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span>Melen, Yaoundé (Face CHUY)</span>
            <span>•</span>
            <Link to="/contact" className="hover:underline">Mentions légales & Confidentialité</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
