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
    <div className="bg-white animate-float rounded-2xl border-2 border-blue-200 shadow-sm p-6 flex flex-col gap-4 max-w-2xl transition-all hover:cursor-grab">
      
      {/* Icône */}
      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
        <Icon className="text-blue-600" size={22} />
      </div>

      {/* Badge */}
      <span className="w-fit text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
        {badge}
      </span>

      {/* Titre */}
      <h3 className="text-2xl font-bold text-font text-gray-900">{titre}</h3>

      {/* Description */}
      <p className="text-sm text-font text-gray-500 leading-relaxed">{description}</p>

      {/* Durée + Tarif */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs text-gray-400">Durée</p>
          <p className="text-xl font-semibold text-font text-gray-800">{duree}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Tarif</p>
          <p className="text-xl font-extrabold text-orange-500 text-font">{tarif}</p>
        </div>
      </div>

      {/* Bouton */}
      <button
        onClick={onReserver}
        className="w-full bg-orange-500 hover:cursor-pointer hover:bg-orange-600 transition-colors text-white font-semibold py-3 rounded-xl"
      >
        Réserver ma place
      </button>

    </div>
  );
}

export default FormationCard;