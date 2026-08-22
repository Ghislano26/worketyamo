import { Code2 } from "lucide-react";

function FormationCard({
  // badge = "Présentiel — Yaoundé (Melen)",
  titre,
  description,
  duree,
  tarif,
  onReserver,
}) {
  const formattedTarif = typeof tarif === 'number' 
    ? `${tarif.toLocaleString('fr-FR')} FCFA` 
    : tarif;

  return (
    <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-sm p-6 sm:p-7 flex flex-col justify-between gap-4 md:max-w-xl transition-all hover:shadow-lg hover:border-blue-400">
      
      <div>
        {/* Icône & Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          {/* <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
            <Icon className="text-blue-600" size={24} />
          </div> */}

          {/* Badge */}
          {/* <span className="w-fit text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            {badge}
          </span> */}
        </div>

        {/* Titre */}
        <h3 className="text-xl md:text-2xl font-bold text-font text-gray-900 mb-2">{titre}</h3>

        {/* Description */}
        <p className="text-[.9rem] md:text-sm text-font text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Durée + Tarif */}
      <div>
        <div className="flex justify-between items-end border-t border-gray-100 pt-4 mb-4">
          <div>
            <p className="text-xs text-gray-400 font-medium">Durée</p>
            <p className="text-lg font-bold text-font text-gray-800">{duree}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 font-medium">Tarif</p>
            <p className="text-xl font-black text-orange-500 text-font">{formattedTarif}</p>
          </div>
        </div>

        {/* Bouton */}
        <button
          onClick={onReserver}
          className="w-full bg-orange-500 hover:cursor-pointer hover:bg-orange-600 transition-colors text-white font-semibold py-3 rounded-xl shadow-sm"
        >
          Réserver ma place
        </button>
      </div>

    </div>
  );
}

export default FormationCard;