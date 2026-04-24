import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function BookingForm() {
  const handleWhatsAppClick = () => {
    const TARGET_PHONE_NUMBER = '74065 56771';
    // A simple ice-breaker message that triggers the WhatsApp Business auto-reply
    const defaultMessage = 'Hello Food Palaces! I would like to book a table.';
    const whatsappUrl = `https://wa.me/${TARGET_PHONE_NUMBER}?text=${encodeURIComponent(defaultMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white/80 backdrop-blur-md p-10 md:p-16 shadow-2xl rounded-sm text-center flex flex-col items-center justify-center gap-6"
    >
      <div className="mb-4">
        <h2 className="font-serif text-3xl md:text-5xl text-black mb-4">Book Your Experience</h2>
        <div className="h-0.5 w-24 bg-golden-stripe mx-auto mb-6"></div>
        <p className="font-sans text-gray-700 max-w-sm mx-auto leading-relaxed">
          Skip the forms. Continue directly in WhatsApp and our automated assistant will take your reservation details in seconds.
        </p>
      </div>

      <button
        onClick={handleWhatsAppClick}
        className="mt-4 w-full md:w-auto px-10 py-5 text-white uppercase tracking-[0.2em] font-medium text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 rounded-sm"
        style={{ background: 'linear-gradient(90deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)', color: '#1a1a1a' }}
      >
        <MessageCircle size={20} />
        Continue in WhatsApp
      </button>
    </motion.div>
  );
}
