import React from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Navigation, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  User,
  GraduationCap
} from 'lucide-react';
import { faqList } from '../static/formationsData';
import { useState } from 'react';



function FAQ() {

const [activeFaqIdx, setActiveFaqIdx] = useState(null);

 const toggleFaq = (idx) => {
    setActiveFaqIdx(activeFaqIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-3">
                  <HelpCircle size={16} className="text-orange-500" />
                  <span>Questions Fréquentes</span>
                </div>
    
                <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
                  Tout ce que vous devez savoir
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mt-2">
                  Les réponses aux questions les plus posées par nos candidats, apprenants et stagiaires.
                </p>
              </div>
    
              <div className="space-y-4">
                {faqList.map((item, idx) => {
                  const isOpen = activeFaqIdx === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-gray-50/50"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-blue-600 transition-colors hover:cursor-pointer text-sm sm:text-base"
                      >
                        <span>{item.q}</span>
                        <span className="p-1 rounded-lg bg-gray-100 text-gray-600 shrink-0">
                          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </span>
                      </button>
    
                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
    
            </div>
          </section>
  )
}

export default FAQ
