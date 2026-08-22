import { useEffect, useRef } from "react";

const goals = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Une formation de qualité, accessible à tous",
    desc: "Nous proposons des formations pratiques et complètes en développement web et DevOps, conçues pour transformer des débutants en développeurs opérationnels, prêts pour le marché.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Booster la tech made in Cameroun",
    desc: "Nous formons les développeurs camerounais de demain pour qu'ils construisent des solutions locales à impact global, et positionnent le Cameroun sur la carte mondiale de la tech.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Créer des opportunités durables",
    desc: "Chaque apprenant qui sort de Worketyamo est une opportunité de plus pour l'écosystème tech africain. Notre objectif : que chaque diplômé trouve sa place dans l'économie numérique.",
  },
];

export default function APropos() {
  const imgRef   = useRef(null);
  const textRef  = useRef(null);
  const goalRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    // Animation image gauche — slide depuis la gauche
    const imgObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "-translate-x-16");
          entry.target.classList.add("opacity-100", "translate-x-0");
        }
      },
      { threshold: 0.3 }
    );
    if (imgRef.current) imgObs.observe(imgRef.current);
    observers.push(imgObs);

    // Animation bloc texte droit — slide depuis la droite
    const textObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-x-16");
          entry.target.classList.add("opacity-100", "translate-x-0");
        }
      },
      { threshold: 0.3 }
    );
    if (textRef.current) textObs.observe(textRef.current);
    observers.push(textObs);

    // Animation goals — apparition en cascade
    goalRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.remove("opacity-0", "translate-y-6");
              el.classList.add("opacity-100", "translate-y-0");
            }, i * 150);
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* ── Bloc supérieur : image gauche + texte droite ── */}
        <div className="flex flex-col lg:flex-row items-center gap-14 mb-20">

          {/* Image gauche */}
          <div
            ref={imgRef}
            className="w-full lg:w-1/2 opacity-0 -translate-x-16 transition-all duration-700 ease-out"
          >
            <div className="relative">
              {/* Écran iMac stylisé */}
              <div className="bg-gray-900 rounded-2xl p-3 shadow-2xl">
                {/* Barre de titre */}
                <div className="flex items-center gap-1.5 mb-2 px-1">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Contenu de l'écran — code simulé */}
                <div className="bg-gray-950 rounded-xl p-5 font-mono text-xs leading-6 overflow-hidden">
                  <p><span className="text-blue-400">import</span> <span className="text-yellow-300">React</span> <span className="text-blue-400">from</span> <span className="text-green-400">'react'</span></p>
                  <p><span className="text-blue-400">import</span> <span className="text-yellow-300">axios</span> <span className="text-blue-400">from</span> <span className="text-green-400">'axios'</span></p>
                  <p className="text-gray-600 mt-1">{"// Composant principal"}</p>
                  <p><span className="text-blue-400">function</span> <span className="text-yellow-300">App</span><span className="text-white">{"() {"}</span></p>
                  <p className="pl-4"><span className="text-blue-400">const</span> <span className="text-white">[data, setData] =</span></p>
                  <p className="pl-6"><span className="text-yellow-300">useState</span><span className="text-white">([]);</span></p>
                  <p className="pl-4 mt-1"><span className="text-yellow-300">useEffect</span><span className="text-white">{"(() => {"}</span></p>
                  <p className="pl-6"><span className="text-blue-400">const</span> <span className="text-white">fetch =</span> <span className="text-blue-400">async</span> <span className="text-white">{"() => {"}</span></p>
                  <p className="pl-8"><span className="text-blue-400">const</span> <span className="text-white">res =</span> <span className="text-blue-400">await</span></p>
                  <p className="pl-10"><span className="text-yellow-300">axios</span><span className="text-white">.get(url);</span></p>
                  <p className="pl-8"><span className="text-yellow-300">setData</span><span className="text-white">(res.data);</span></p>
                  <p className="pl-6"><span className="text-white">{"}"};</span></p>
                  <p className="pl-6"><span className="text-yellow-300">fetch</span><span className="text-white">();</span></p>
                  <p className="pl-4"><span className="text-white">{"}, []);"}</span></p>
                  <p className="mt-1 pl-4"><span className="text-blue-400">return</span> <span className="text-white">{"("}</span></p>
                  <p className="pl-6"><span className="text-orange-400">{"<div"}</span> <span className="text-green-400">className</span><span className="text-white">=</span><span className="text-green-400">"app"</span><span className="text-orange-400">{">"}</span></p>
                  <p className="pl-8"><span className="text-gray-500">{"/* Worketyamo */"}</span></p>
                  <p className="pl-6"><span className="text-orange-400">{"</div>"}</span></p>
                  <p className="pl-4"><span className="text-white">{");"}</span></p>
                  <p><span className="text-white">{"}"}</span></p>
                </div>
              </div>

              {/* Pied de l'iMac */}
              <div className="flex justify-center mt-2">
                <div className="w-24 h-3 bg-gray-300 rounded-b-lg" />
              </div>
              <div className="flex justify-center">
                <div className="w-40 h-2 bg-gray-200 rounded-full" />
              </div>

              {/* Badge flottant */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Worketyamo ✦
              </div>
            </div>
          </div>

          {/* Texte droit */}
          <div
            ref={textRef}
            className="w-full lg:w-1/2 opacity-0 translate-x-16 transition-all duration-700 ease-out"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Worketyamo,{" "}
              <span className="text-blue-600">qui sommes-nous ?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Dans un monde où les compétences technologiques sont devenues indispensables, 
              l'Afrique fait face à un défi majeur : combler le fossé numérique pour permettre à sa jeunesse de saisir les opportunités offertes par l'économie numérique. Worketyamo se positionne comme une réponse innovante à ce défi. 
              Porté par <span className="text-blue-500">IT Engineering Factory</span>, une succursale de l'entreprise française IT Engineering, Worketyamo est une initiative éducative basée à Yaoundé, Cameroun, dédiée à la formation et à l'autonomisation des jeunes Africains.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mt-4">
              Le continent africain est en pleine transformation numérique, mais
            beaucoup de jeunes n'ont pas accès aux formations nécessaires
            pour participer activement à cette révolution. En réponse à cette
            situation, Worketyamo a été créé pour fournir des formations IT de
            haute qualité, destinées à combler ce déficit de compétences et à
            offrir aux jeunes Africains les outils pour réussir dans un monde de
            plus en plus numérique.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              {[
                { val: "200+", label: "Apprenants formés" },
                { val: "3 ans", label: "D'expérience" },
                { val: "100%", label: "Taux de satisfaction" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-blue-600">{s.val}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bloc inférieur : nos objectifs ── */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Nos <span className="text-blue-600">Objectifs</span>
          </h3>

          <div className="flex flex-col gap-6">
            {goals.map((goal, i) => (
              <div
                key={i}
                ref={(el) => (goalRefs.current[i] = el)}
                className="flex items-start gap-5 opacity-0 translate-y-6 transition-all duration-500 ease-out"
              >
                {/* Icône */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center">
                  {goal.icon}
                </div>

                {/* Texte */}
                <div>
                  <p className="font-bold text-gray-900 text-base mb-1">
                    {goal.title}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}