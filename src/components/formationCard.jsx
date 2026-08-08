import { Code2 } from "lucide-react";

function FormationCard({
  icon: Icon = Code2,
  badge = "Présentiel — Yaoundé",
  titre,
  description,
  duree,
  tarif,
  onReserver,
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4 max-w-sm">
      
      {/* Icône */}
      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
        <Icon className="text-blue-600" size={22} />
      </div>

      {/* Badge */}
      <span className="w-fit text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
        {badge}
      </span>

      {/* Titre */}
      <h3 className="text-lg font-bold text-gray-900">{titre}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

      {/* Durée + Tarif */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs text-gray-400">Durée</p>
          <p className="text-sm font-semibold text-gray-800">{duree}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Tarif</p>
          <p className="text-lg font-extrabold text-orange-500">{tarif}</p>
        </div>
      </div>

      {/* Bouton */}
      <button
        onClick={onReserver}
        className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-3 rounded-xl"
      >
        Réserver ma place
      </button>

    </div>
  );
}

export default FormationCard;